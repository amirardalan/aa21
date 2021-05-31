import React, { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@emotion/react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'
import LoadingSpinner from './LoadingSpinner'

const BlogAdmin: React.FC =  React.memo(()=> {

    const router = useRouter()
    const isActive: (pathname: string) => boolean = (pathname) =>
      router.pathname === pathname
  
    const [session] = useSession()
    const theme : any = useTheme()
  
    let left = null
    let right = null


    // Deploy New Build
    const [isDeploying, setIsDeploying] = useState(false)
    const showDeployLoader: Function = () => {
      setIsDeploying(true)
      setTimeout(() => {
        setIsDeploying(false)
      }, 84000)
    }

    async function deployNewBuild(): Promise<any> {
      // Initiate new production build
      await fetch(`/api/deploy?secret=${process.env.NEXT_PUBLIC_DEPLOY_TOKEN}`)
      .then(showDeployLoader())
      // Exit Preview mode
      await fetch(`/api/preview/exit-preview?secret=${process.env.NEXT_PUBLIC_PREVIEW_TOKEN}`)
      // Redirect to the blog
      router.push('/blog')

    }
  
    if (session && session.user.email == process.env.NEXT_PUBLIC_USER_EMAIL) {

      left = (
        <div
          className="left loginUser"
          css={{
            display: 'flex'
          }}>
          <span css={{
            display: 'flex',
            fontSize: '11px',
            alignSelf: 'center',
            color: theme.colors.textLight,
            fontFamily: theme.fonts.primary,
            'a': {
              marginLeft: '.5rem',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline'
              }
            },
            '@media(max-width: 890px)': {
              marginBottom: '.5rem'
            }
          }}>
            {session.user.name} ({session.user.email}) •
            <a
              onClick={() => signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/blog` })}
              aria-label="Sign Out"
              tabIndex={0}
              css={{ textDecoration: 'none' }}>
              Sign Out
            </a>
          </span>
        </div>
      )
      right = (
        <div className="right" css={{
          display: 'flex',
          justifyContent: 'right',
          flexDirection: 'row',
  
        }}>
          <div css={{
            display: 'flex',
            flexAlign: 'row',
          }}>
  
            { isDeploying ? <LoadingSpinner /> : null }
  
            <button
              onClick={ !isDeploying ? deployNewBuild : null }
              className={ isDeploying ? 'buttonCompact deploy disabled' : 'buttonCompact deploy' }
              aria-label="Deploy"
            >
              Deploy
            </button>
          </div>
          <Link href="/blog/create">
            <button className="buttonCompact createBtn" aria-label="New Post">
              Create
            </button>
          </Link>
          <Link href="/blog/drafts" aria-label="Drafts">
            <button className="buttonCompact draftsBtn" data-active={isActive('/drafts')}>
              Drafts
            </button>
          </Link>
        </div>
      )
    }
  
    return (
      <nav css={{
        margin: '1.5rem 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '@media (max-width: 500px)': {
          flexDirection: 'column'
        }
      }}>
        {left}
        {right}
      </nav>
    )
  })

export default BlogAdmin