import { css } from '@emotion/react'
import Container from '@/components/Container'
import ErrorIcon from '@/components/ErrorIcon'
import Link from 'next/link'
import { error } from '@/data/content'


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
  justifyContent: 'center',
  animation: 'slideUp .5s forwards',

  h1: {
    margin: '0 1rem 0 .5rem',
    paddingRight: '1rem',
    alignSelf: 'center',
    fontSize: '40px',
  },
  h2: {
    alignSelf: 'center',
    fontFamily: 'var(--font-primary)',
    fontSize: '12px',
    fontWeight: 'normal',
  },
})

const styleErrorContent = css({
  display: 'flex',
  justifyContent: 'center',
  '.quoteContainer': {
    maxWidth: 600,
    paddingTop: '2rem',
    marginBottom: '3rem',
    borderTop: '1px solid var(--color-neutral)',
    textAlign: 'left',
  },
  '.quote': {
    fontSize: 25,
    fontFamily: 'var(--font-tertiary)',
    fontStyle: 'italic',
    color: 'var(--color-neutral)'
  },
  '.author': {
    marginTop: '.5rem',
    fontFamily: 'var(--font-tertiary)',
    '&::before': {
      content: '"— "'
    }
  }
})

const styleAnimationWrapper = css({
  marginTop: '1.5rem',
  textAlign: 'center',
  animation: 'slideUp 1s forwards',
})

const styleHomeButton = css({
  display: 'flex',
  justifyContent: 'center',
})

const randomize = Math.floor(Math.random()*error.randomQuote.length)

export default function Custom404() {

  return(
    <Container title={error.meta.title} robots="noindex">
      <div css={style404Wrapper}>
        <div css={style404Container}>
          <ErrorIcon />
          <h1 aria-label={error.title}>
            {error.title}
          </h1>
          <h2 aria-label={error.text}>
            {error.text}
          </h2>
        </div>
        <div css={styleAnimationWrapper}>
          <div css={styleErrorContent}>
            <div className="quoteContainer">
              <p className="quote" suppressHydrationWarning>
                {error.randomQuote[randomize].quote}
              </p>
              <p className="author" suppressHydrationWarning>
                {error.randomQuote[randomize].author}
              </p>
            </div>
          </div>
          <div css={styleHomeButton}>
            <Link href={error.link.path} aria-label={error.link.title} passHref>
              <button className="ctaButton">{error.link.title}</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}