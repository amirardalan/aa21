import Link from 'next/link'

import { css } from '@emotion/react'
import Container from '@/components/Container'
import { errorContent } from '@/data/content'

import { GetStaticProps } from 'next'
export const getStaticProps: GetStaticProps = async () => {
  return { props: { error: errorContent } }
}


const style404Wrapper = css({
  overflow: 'hidden',
  padding: '4rem 1.5rem',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'var(--page-bg)',
})

const style404Container = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '1.5rem',
  '.errorCode': {
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      marginTop: '.7rem'
    }
  },
  '& > div': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  h1: {
    alignSelf: 'center',
    fontSize: 70,
    fontWeight: 800
  },
  h2: {
    alignSelf: 'center',
    color: 'var(--color-gray)',
    fontFamily: 'var(--font-primary)',
    fontSize: 20,
    fontWeight: 'normal',
  },
})

const styleErrorContent = css({
  display: 'flex',
  justifyContent: 'center',
  '.quoteContainer': {
    maxWidth: 400,
    paddingTop: '2rem',
    marginBottom: '3rem',
    borderTop: '1px solid var(--color-accent-gray)',
    textAlign: 'center',
  },
  '.quote': {
    fontSize: 16,
    lineHeight: '1.3rem',
    fontFamily: 'var(--font-tertiary)',
    fontStyle: 'italic',
    color: 'var(--color-gray)',
  },
  '.author': {
    marginTop: '.5rem',
    fontFamily: 'var(--font-tertiary)',
    '&::before': {
      content: '"— "'
    }
  }
})

const styleHomeButton = css({
  display: 'flex',
  justifyContent: 'center',
})

export default function Custom404({ error }) {

  return(
    <Container title={error.meta.title} robots="noindex">
      <main css={style404Wrapper}>
        <div css={style404Container}>
          <div className="errorCode">
            <h1 aria-label={error.title}>
              {error.title}
            </h1>
          </div>
          <div>
            <h2 aria-label={error.text}>
              {error.text}
            </h2>
          </div>
        </div>
        <div css={styleErrorContent}>
          <div className="quoteContainer">
            <p className="quote">
              {error.quote}
            </p>
            <p className="author">
              {error.author}
            </p>
          </div>
        </div>
        <div css={styleHomeButton}>
          <Link href={error.link.path} aria-label={error.link.title} passHref>
            <button className="ctaButton">{error.link.title}</button>
          </Link>
        </div>
      </main>
    </Container>
  )
}