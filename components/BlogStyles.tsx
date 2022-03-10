import { css } from '@emotion/react'


const blogStyles = css({
  '.breadcrumbs': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'var(--color-gray)',
    fontSize: 13,
    a: {
      textDecoration: 'none',
      '&::after': {
        content: '"/"',
        margin: '0 .5rem',
        color: 'var(--color-gray)',
      }
    },
    '@media (max-width: 480px)': {
      span: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }
    }
  },
  '.blog': {
    maxWidth: 768,
    margin: '0 auto',
    '.category': {
      marginBottom: '.5rem',
      fontFamily: 'var(--font-primary)',
      fontSize: 12,
      textTransform: 'uppercase',
      color: 'var(--color-accent-color)',
      textDecoration: 'none',
      '&.active': {
        borderBottom: '2px solid var(--color-accent-color)'
      },
      '&:before': {
        content: '"#"'
      },
      '&.all:before': {
        content: '""'
      }
    },
    'h1, h2, h3, h4': {
      fontFamily: 'var(font-secondary)',
      lineHeight: '2.5rem',
    },
    '.blogHeading': {
      display: 'inline',
      color: 'var(--color-gray)',
      fontFamily: 'var(--font-primary)',
      fontSize: 13,
      fontWeight: 'normal',
      textDecoration: 'none',
    },
    'h1, h2': {
      display: 'inline-block',
      fontSize: 38,
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
      marginBottom: '3.2rem',
      p: {
        marginTop: '.5rem',
        lineHeight: '1.4rem',
      },
      '@media(max-width: 480px)': {
        marginBottom: '2.5rem'
      }
    },
    '&.admin': {
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
        color: 'var(--color-gray)'
      }
    }
  },
  '.post': {
    marginTop: '2rem',
  },
  '.postDetails': {
    display: 'flex',
    flexDirection: 'row',
    color: 'var(--color-gray)',
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
        color: 'var(--color-accent-color)',
        '@media (max-width: 768px)': {
          fontSize: 28,
        }
      }
    }
  },
  '.postDraft': {
    margin: '1rem 0 .5rem',
    padding: '1.8rem',
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid var(--color-accent)',
    '.draftInfo': {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'right',
      '.label': {
        marginBottom: '.2rem',
        alignSelf: 'right',
        color: 'var(--color-gray)',
        fontSize: 12,
        fontStyle: 'italic',
      },
    },
    p: {
      marginBottom: 0,
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
      'h2 a': {
        fontSize: 22,
      }
    },
    '.postTeaser': {
      margin: '0 .5rem',
    }
  },
  'input[type="text"], textarea': {
    width: '100%',
    margin: '0.5rem 0',
    padding: '0.5rem',
    webkitAppearance: 'none',
    appearance: 'none',
    backgroundColor: 'var(--color-accent)',
    border: '2px solid var(--color-accent)',
    borderRadius: '0.25rem',
    WebkitTextFillColor: 'var(--color-gray)',
    fontSize: 16,
    '&:disabled': {
      backgroundColor: 'var(--color-input-disabled)',
      WebkitTextFillColor: 'var(--color-accent-gray)',
    },
    '@media (max-width: 890px)': {
      width: '100%'
    }
  },
  li: {
    '&::marker': {
      color: 'var(--color-accent-color)',
    },
  },
  table: {
    width: '100%',
    thead: {
      fontFamily: 'var(--font-secondary)',
      tr: {
        th: {
          border: '1px solid var(--color-accent-gray)',
          backgroundColor: 'var(--color-accent)',
          padding: '.5rem',
        }
      }
    },
    tbody: {
      tr: {
        td: {
          border: '1px solid var(--color-accent-gray)',
          padding: '.5rem',
        }
      }
    }
  },
  '.formSubmit': {
    marginTop: '2rem',
  },
  '.controlsConfirm': {
    margin: '1rem 0 0 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'lighter',
    textTransform: 'uppercase',
    '.confirmLink': {
      marginRight: '.5rem',
      color: 'var(--color-text)',
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      cursor: 'pointer',
      '&.delete': {
        color: 'var(--color-warning)',
      },
      '&.close': {
        marginLeft: '.5rem',
      },
      '&.delete:hover, &.close:hover': {
        textDecoration: 'underline',
      }
    }
  },
  '.noDrafts': {
    marginTop: '6rem',
  }
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
