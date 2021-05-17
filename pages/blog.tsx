import React from 'react'
import Link from 'next/link'
import Login from '../components/Login'
import { GetStaticProps } from 'next'
import { useTheme } from '@emotion/react'
import prisma from '../lib/prisma'
import Post, { PostProps } from '../components/Post'

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return { props: { feed } }
}

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {

  const theme : any = useTheme()
  
  return (
    <>
      <div className="page">
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
        <Login />
        <main css={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          {props.feed.map((post) => (
            <div
              key={post.id}
              className="post"
              css={{ cursor: 'pointer' }}>
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </>
  )
}

export default Blog