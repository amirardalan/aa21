import React from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Login from '../components/Login'
import Post, { PostProps } from '../components/Post'
import { useSession, getSession } from 'next-auth/client'
import prisma from '../lib/prisma'
import { useTheme } from '@emotion/react'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })
  if (!session) {
    res.statusCode = 403
    return { props: { drafts: [] } }
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return {
    props: { drafts },
  }
}

type Props = {
  drafts: PostProps[]
}

const Drafts: React.FC<Props> = (props) => {
  const [session] = useSession()

  if (!session) {
    return (
      <>
        <Login />
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </>
    )
  }

  const theme : any = useTheme()

  return (
    <>
      <Login />
      <nav css={{
        display: 'flex',
        flexDirection: 'row',
        color: theme.colors.footer,
        fontSize: '12px'
      }}>
        <Link href="/">Home</Link>
        <span css={{ margin: '0 10px 0 10px' }}>/</span>
        <p>Blog</p>
      </nav>
      <div className="page">
        <h1>My Drafts</h1>
        <main>
          {props.drafts.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </>
  )
}

export default Drafts