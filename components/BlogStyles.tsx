import { css } from '@emotion/react'


const blogStyles = css({
  '.blog': {
    maxWidth: 768,
    margin: '0 auto',
    '.category': {
      marginBottom: '.5rem',
      fontFamily: 'var(--font-primary)',
      fontSize: 12,
      textTransform: 'uppercase',
      color: 'var(--color-primary)',
      textDecoration: 'none',
      '&.active': {
        borderBottom: '2px solid var(--color-primary)'
      },
      '&:before': {
        content: '"#"'
      },
      '&.all:before': {
        content: '""'
      }
    },
    'h1, h2, h3, h4': {
      lineHeight: '2.5rem',
    },
    '.blogListHeading': {
      marginBottom: '.5rem',
      fontFamily: 'var(--font-secondary)',
      fontSize: 30,
      fontWeight: 900,
      lineHeight: '2.2rem',
      a: {
        color: 'var(--color-text)',
        textDecoration: 'none',
      },
      '@media(max-width: 1024px)': {
        fontSize: 24,
        lineHeight: '1.8rem',
      }
    },
    '.blogHeading': {
      fontFamily: 'var(--font-secondary)',
      fontSize: 40,
      fontWeight: 900,
      textDecoration: 'none',
      '@media(max-width: 1024px)': {
        fontSize: 30,
      }
    },
    'h1, h2': {
      display: 'inline-block',
      fontSize: 40,
    },
    h2: {
      margin: 0,
      lineHeight: '2.5rem',
      cursor: 'pointer',
      textDecoration: 'underline',
      '&:hover': { textDecoration: 'none' }
    },
    p: {
      marginBottom: '2rem',
      fontFamily: 'var(--font-tertiary)',
      fontSize: 18,
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
    },
    '&.postTeaser': {
      p: {
        marginTop: '.5rem',
        lineHeight: '1.4rem',
      },
      '@media(max-width: 480px)': {
        marginBottom: '2.5rem'
      }
    },
    '&.admin': {
      maxWidth: '100%',
      '.breadcrumbs': {
        marginTop: '1rem',
      },
      '.drafts': {
        marginTop: '1rem',
      },
      form: {
        marginTop: '1rem'
      },
      '.dropdownLabel': {
        color: 'var(--color-neutral)'
      }
    }
  },
  '.post': {
    marginTop: '2rem',
    '.publishedPosts' : {
      display: 'block',
      marginBottom: '2.5rem',
    }
  },
  '.postDetails': {
    display: 'flex',
    flexDirection: 'row',
    color: 'var(--color-neutral)',
    fontSize: 13,
    lineHeight: '1.2rem',
    '.author, .authorLink': {
      display: 'flex',
      alignItems: 'center',
      span: {
        textTransform: 'uppercase',
        marginLeft: '.5rem',
      }
    },
    '.avatar': {
      display: 'flex',
      marginRight: '.4rem',
      alignSelf: 'center',
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
    },
    '.postDate': {
      display: 'flex',
      alignItems: 'center',
      '@media (min-width: 1025px)': {
        '&::before': {
          margin: '0 .5rem 0 .5rem',
          content: '" •"'
        }
      },
    },
  },
  '.postTeaser': {
    position: 'relative',
    h2: {
      marginBottom: '.4rem',
      fontSize: 32,
      lineHeight: '2.2rem',
      textDecoration: 'none',
      a: {
        color: 'var(--color-text)',
        textDecoration: 'none',
        border: 'none'
      },
      '@media (max-width: 768px)': {
        fontSize: 28,
      }
    },
    '&:hover': {
      '&::before': {
        content: '"|"',
        position: 'absolute',
        fontFamily: 'var(--font-secondary)',
        fontWeight: 900,
        fontSize: 32,
        lineHeight: '2.2rem',
        left: -20,
        color: 'var(--color-primary)',
        '@media (max-width: 768px)': {
          fontSize: 28,
        }
      }
    }
  },
  li: {
    '&::marker': {
      color: 'var(--color-primary)',
    },
  },
  table: {
    width: '100%',
    thead: {
      fontFamily: 'var(--font-secondary)',
      tr: {
        th: {
          border: '1px solid var(--color-accent-neutral)',
          backgroundColor: 'var(--color-accent)',
          padding: '.5rem',
        }
      }
    },
    tbody: {
      tr: {
        td: {
          border: '1px solid var(--color-accent-neutral)',
          padding: '.5rem',
        }
      }
    }
  },
})

type Props = {
  children: React.ReactNode
}

const BlogLayout = (props: Props) => {

  return (
    <div css={blogStyles}>
      {props.children}
    </div>
  )
}

export default BlogLayout
