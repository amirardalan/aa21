import Link from 'next/link'
import { useTheme, css } from '@emotion/react'

export default function LatestPost(props: any) {

  // Latest Post Styles
  const theme : any = useTheme()
  const styleLatestPost = css({
    paddingLeft: '1.2rem',
    borderLeft: '7px solid' + theme.colors.accent,
    fontWeight: 'normal',
    lineHeight: '1.8rem',
    h3: {
      color: theme.colors.grayscale,
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: '1.3rem',
    },
    'p, a': {
      fontFamily: theme.fonts.tertiary,
    },
    'h4 a': {
      fontSize: 18,
      fontWeight: 'normal',
      textDecoration: 'underline',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'none',
      },
      '@media(max-width: 480px)': {
        fontSize: 16,
      }
    },
    p: {
      color: theme.colors.grayscale,
      fontSize: 15,
    },
  })
  
  // Latest Post UI
  const latestPost = (!props.latestPost) ? {} : props.latestPost[0]
  const showLatestPost = (props.latestPost) ? true : false
  const ShowLatestPost = () => (
    <div css={styleLatestPost}>
      <h3 aria-label="Latest Post">
        Latest Post:
      </h3>
      <h4>
        <Link href={`/blog/${encodeURIComponent(latestPost.slug)}`}>
          <a aria-label={latestPost.title} tabIndex={0}>
            {latestPost.title} →
          </a>
        </Link>
      </h4>
      <p>
        {latestPost.teaser}
      </p>
    </div>
  )

  return (
    <>
      { showLatestPost ? <ShowLatestPost /> : null }
    </>
  )
}