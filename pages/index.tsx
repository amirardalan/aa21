import { css, useTheme } from '@emotion/react'
import { home } from '@/data/content'
import LatestPost from '@/components/LatestPost'
import Head from 'next/head'
import Link from 'next/link'

import dynamic from 'next/dynamic'
import LoadingTriangle from '@/components/LoadingTriangle'
const TypingAnimation  = dynamic(() => import('@/components/TypingAnimation'), {
  loading: () => <span className="typingAnimation">_</span>,
  ssr: false
})
const CanvasLoader = dynamic(() => import('@/components/CanvasLoader'), {
  loading: () => <LoadingTriangle />,
  ssr: false
})

import { GetStaticProps } from 'next'
import prisma from '@/lib/prisma'

// Get Latest Post title, teaser, and slug
export const getStaticProps: GetStaticProps = async () => {
  try {
    const latestPost = await prisma.post.findMany({
      where: { published: true },
      orderBy: {
        publishedAt: 'desc',
      },
      take: 1,
      select: {
        title: true,
        teaser: true,
        slug: true,
      },
    })
    return { props: { latestPost, data: home } }
  }
  catch {
    return { props: { data: home } }
  }
}


export default function Home({ data, latestPost }) {
  const theme: any = useTheme()

  // Styles
  const styleMain = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '@media (max-width: 890px)': {
      flexDirection: 'column',
    }
  })
  const styleAnimationWrapper = css ({
    width: '100%',
    overflow: 'hidden',
    alignSelf: 'flex-end',
  })
  const styleMainLeft = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    animation: 'slideUp .8s forwards',
    '@media (max-width: 890px)': {
      height: 'auto',
      flexDirection: 'column-reverse',
      justifyContent: 'start',
      alignSelf: 'flex-start',
    }
  })
  const styleMainLeftContent = css({
    margin: 0,
    lineHeight: 1.3,
    minHeight: '0vw',
    fontWeight: 'bolder',
    h2: {
      fontFamily: 'var(--font-secondary)',
      fontSize: 'calc(2.9vw + 2.9vh)',
      WebkitMarqueeIncrement: '0vw',
      margin: '0 0 1rem',
      fontWeight: 'bolder',
      '@media (max-width: 890px)': {
        fontSize: 'calc(3.4vw + 3.4vh)',
        WebkitMarqueeIncrement: '0vw',
      }
    },
    '.typedText': {
      marginBottom: '3rem',
      fontSize: 'calc(.9vw + .9vh)',
      WebkitMarqueeIncrement: '0vw',
      fontWeight: 'normal',
      color: 'var(--color-gray)',
      '@media (max-width: 890px)': {
        fontSize: 'calc(1.2vw + 1.2vh)',
        WebkitMarqueeIncrement: '0vw',
      } 
    },
    '.highlightText': {
      width: 'max-content',
      padding: '0 .5rem',
      background: 'var(--color-text)',
      color: 'var(--color-bg)',
    },
    '@media (min-width: 480px) and (max-width: 890px)': {
      fontSize: 'calc(2.5vw + 2.5vh)',
      WebkitMarqueeIncrement: '0vw',
      minHeight: '0vw',
    }
  })
  const styleButtonContainer = css({
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'row',
  })
  const styleMainRight = css({
    background: 'var(--canvas-bg)',
    height: '72vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'crosshair',
    animation: 'fadeIn .5s forwards',
    '&:hover': {
      '.canvasInfo': {
        animation: 'fadeIn .2s forwards'
      }
    },
    '@media (max-width: 1024px)': {
      marginTop: 0,
    },
    '@media (max-width: 890px)': {
      height: '45vh',
      marginTop: '2rem',
      alignSelf: 'flex-start',
    }
  })

  return (
    <div className="container">
      <Head>
        <title>{data.meta.title}</title>
        <meta
          name="description"
          content={data.meta.description}
        />
      </Head>
      <main css={styleMain}>
        <div css={styleAnimationWrapper}>
          <div css={styleMainLeft}>
            <div css={styleMainLeftContent}>
              <h2>
                {theme.intro}
                <div className="highlightText">
                  {data.title}
                </div>
              </h2>
              <div className="typedText" aria-hidden="true" >
                {data.typed.heading}
                <div>
                  <TypingAnimation data={data.typed} />
                </div>
              </div>
              <div css={styleButtonContainer}>
                <Link href={data.cta.blog.path} aria-label={data.cta.blog.title}>
                  <button className="ctaButton">
                    {data.cta.blog.title}
                  </button>
                </Link>
                <Link href={data.cta.about.path} aria-label={data.cta.about.title}>
                  <button className="ctaButton">
                    {data.cta.about.title}
                  </button>
                </Link>
              </div>
              <LatestPost data={data} latestPost={latestPost} />
            </div>
          </div>
        </div>
        <div css={styleAnimationWrapper}>
          <div css={styleMainRight} id="leva">
            <CanvasLoader />
          </div>
        </div>
      </main>
    </div>
  )
}