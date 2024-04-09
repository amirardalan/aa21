import { type FC, useState } from 'react';
import { generateSlug } from '@/utils/generateSlug';
import { css } from '@emotion/react';

type TableOfContentsProps = {
  markdown: string;
};

const TableOfContents: FC<TableOfContentsProps> = ({ markdown }) => {
  const headings = markdown.match(/###\s.*\n/g);

  const [showTOC, setShowTOC] = useState(false);
  const handleShowTOC = () => setShowTOC(!showTOC);

  const styleTOC = css({
    paddingTop: '1rem',
    summary: {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-primary)',
      textTransform: 'uppercase',
      fontSize: 14,
      color: 'var(--color-text)',
      lineHeight: '1rem',
      '.icon': {
        paddingTop: '.25rem',
        marginRight: '1.1rem',
        marginLeft: '-.1rem',
      },
    },
    button: {
      'svg, .tocTitle': {
        color: 'var(--color-gray)',
        fill: 'var(--color-gray)',
      },
      '&:hover': {
        '.tocTitle': {
          color: 'var(--color-primary)',
        },
        svg: {
          fill: 'var(--color-primary)',
        },
      },
    },
    '.tocTitle': {
      fontSize: 14,
      fontWeight: 400,
      marginTop: '.1rem',
    },
    'ol.tableOfContents': {
      margin: '.5rem 0 1rem 0',
      a: {
        margin: 0,
        padding: 0,
      },
      li: {
        a: {
          textDecoration: 'none !important',
        },
        margin: '.4rem 0 .4rem 2rem',
        lineHeight: 'normal',
        '&::before': {
          border: '1px solid var(--color-accent-lighter)',
          color: 'var(--color-accent-lighter)',
          top: '.2rem',
        },
      },
      '@media (max-width: 768px)': {
        margin: '.5rem 0 .5rem 0',
        li: {
          margin: '.3rem 0 .5rem 2rem',
        },
      },
    },
  });

  return (
    <>
      {headings ? (
        <div css={styleTOC}>
          <div className="note contents">
            <button onClick={handleShowTOC} aria-label="Table of Contents">
              <summary>
                <span className="icon">
                  <svg
                    height={24}
                    width={24}
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7 17.75c0-.414.336-.75.75-.75h13.5c.414 0 .75.336.75.75s-.336.75-.75.75h-13.5c-.414 0-.75-.336-.75-.75zm-5-4c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm9-4c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-7-4c0-.414.336-.75.75-.75h16.5c.414 0 .75.336.75.75s-.336.75-.75.75h-16.5c-.414 0-.75-.336-.75-.75z"
                      fillRule="nonzero"
                    />
                  </svg>
                </span>{' '}
                <h4 className="tocTitle">Table of Contents:</h4>
              </summary>
            </button>
            {showTOC ? (
              <ol className="tableOfContents">
                {headings?.map((heading) => {
                  const headingText = heading.replace('### ', '');
                  const headingID = generateSlug(headingText);
                  return (
                    <li key={headingID}>
                      <a className="tocLink" href={`#${headingID}`}>
                        {headingText}
                      </a>
                    </li>
                  );
                })}
              </ol>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TableOfContents;
