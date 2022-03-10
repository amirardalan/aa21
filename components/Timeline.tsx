import { css } from '@emotion/react'
import { timeline } from '@/data/content'
import Link from 'next/link'
import TimelineEntry from '@/components/TimelineEntry'
import { useInView } from 'react-intersection-observer'
import { Key } from 'react'


export default function Timeline() {

  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: '0% 0% -33% 0%',
    triggerOnce: true
  })

  const styleTimelineHeading = css({
    marginTop: '4rem',
  })
  const styleTimelineWrapper = css({
    paddingTop: '2rem',
    position: 'relative',
    '.readMoreLink': {
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'var(--font-secondary)',
      opacity: 0,
      '&.active': {
        animation: 'slideUp 1s',
        opacity: 1,
      }
    }
  })
  const styleTimeline = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    overflow: 'hidden',
    paddingTop: 7.2,
    fontFamily: 'var(--font-tertiary)',
    '.timeline': {
      '&:nth-of-type(even), &:nth-of-type(odd)': {
        '.event': {
          maxWidth: 400,
          boxShadow: '-2px 2px 0 var(--color-accent-gray)',
          h4: {
            marginBottom: '.5rem',
            fontFamily: 'var(--font-secondary)',
            fontSize: 16,
            lineHeight: '1.2rem',
          },
          '@media(max-width: 480px)': {
            boxShadow: 'none',
          },
        },
        '.date': {
          marginTop: -7,
          lineHeight: '1.2rem',
          color: 'var(--color-text)',
          '@media(max-width: 768px)': {
            marginTop: -2,
          }
        },
      },
      '&:nth-of-type(odd)': {
        padding: '0 2rem 0 0',
        zIndex: 2,
        position: 'relative',
        justifySelf: 'flex-end',
        borderRight: '4px solid var(--color-accent-gray)',
        '.scrollHighlight': {
          position: 'absolute',
          top: 0,
          right: -4.1,
          width: 4,
          animation: 'growUp .5s',
          background: 'var(--color-accent-color)',
        },
        '&.active': {
          '.scrollHighlight': {
            height: '100%',
            background: 'var(--color-accent-color)',
            animation: 'growDown .5s',
          },
          '&:after': {
            color: 'var(--color-accent-color)'
          }
        },
        '&:after': {
          position: 'absolute',
          top: -55,
          right: -19,
          content: '"•"',
          fontSize: 80,
          color: 'var(--color-accent-color)',
          '@media(max-width: 768px)': {
            top: -50,
          }
        },
        '.event': {
          '&:before': {
            right: -22,
            borderLeft: '12px solid transparent',
            borderRight: '20px solid var(--color-accent)',
            transform: 'rotateY(0deg) rotate(270deg)',
            '@media(max-width: 480px)': {
              border: 'none',
            },
          },
          '@media(max-width: 480px)': {
            paddingLeft: 0,
            textAlign: 'right'
          },
        },
        '@media(max-width: 480px)': {
          padding: '0',
          '.date': {
            marginRight: '1rem',
          },
        },
      },
      '&:nth-of-type(even)': {
        padding: '0 0 0 2rem',
        zIndex: 1,
        justifySelf: 'flex-start',
        '.event': {
          position: 'relative',
          '&:before': {
            zIndex: 3,
            left: -22,
            borderLeft: '20px solid var(--color-accent)',
            borderRight: '12px solid transparent',
            transform: 'rotateY(0deg) rotate(90deg)',
            '@media(max-width: 480px)': {
              border: 'none',
            },
          },
          '&:after': {
            zIndex: 2,
            position: 'absolute',
            top: 12,
            left: -23,
            content: '""',
            borderLeft: '20px solid var(--color-accent-gray)',
            borderRight: '12px solid transparent',
            borderBottom: '12px solid transparent',
            transform: 'rotateY(0deg) rotate(90deg)',
            '@media(max-width: 480px)': {
              border: 'none',
            },
          },
          '@media(max-width: 480px)': {
            paddingRight: 0,
          },
        },
        '@media(max-width: 480px)': {
          padding: 0,
          '.date': {
            marginLeft: '1rem',
          },
        },
      },
      '.date': {
        fontFamily: 'var(--font-secondary)',
        fontSize: 30,
        '@media(max-width: 768px)': {
          fontSize: 22,
        }
      },
      '.event': {
        position: 'relative',
        marginBottom: '4rem',
        padding: '2rem',
        background: 'var(--color-accent)',
        fontSize: 15,
        span: {
          color: 'var(--color-gray)',
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 10,
          width: 0,
          height: 0,
          borderBottom: '12px solid transparent',
        },
        '@media(max-width: 480px)': {
          marginTop: 0,
          marginBottom: '4rem',
          padding: '0 1rem',
          background: 'none',
          fontSize: 14,
        }
      }
    },
    '@media(max-width: 768px)': {
      paddingTop: 2.2,
    },
  })


  const generateTimeline = (items: any[]) => {
    return items.map(({ cName, title, content }: any, i: Key) => (
      <TimelineEntry key={i} cName={cName} title={title} content={content} />
    ))
  }

  return (
    <>
      <h2 css={styleTimelineHeading} className='pageHeading center' id='timeline'>
        {timeline.meta.title}
      </h2>
      <div css={styleTimelineWrapper}>
        <div css={styleTimeline}>
          {generateTimeline(timeline.items)}
        </div>
        <div ref={ref} className={inView ? 'readMoreLink active' : 'readMoreLink'}>
          <Link href='/blog/2021-a-dev-odyssey'>
            Read the Full Story
          </Link>
        </div>
      </div>
    </>
  )
}
