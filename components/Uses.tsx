import { FC } from 'react';
import Markdown from '@/components/Markdown';
import { UsesTypes } from '@/types/uses';

const styleUsesMarkdown: any = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '4rem',
  gridAutoRows: 'minmax(100px, auto)',
  lineHeight: '1.8rem',
  hr: {
    margin: '2rem 0',
    borderColor: 'var(--color-accent-lighter)',
  },
  'ul li': {
    fontFamily: 'var(--font-secondary)',
    fontSize: 14,
  },
  'ul li, a': {
    color: 'var(--color-gray)',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  'h3, h4, h5, h6': {
    fontFamily: 'var(--font-secondary)',
    margin: '1rem 0 .2rem',
  },
  h3: {
    a: {
      pointerEvents: 'none',
      cursor: 'default',
      fontSize: 20,
      fontWeight: 400,
      fontFamily: 'var(--font-secondary)',
      letterSpacing: 4,
      textDecoration: 'none',
      textTransform: 'uppercase',
    },
    paddingBottom: '1rem',
    marginBottom: '2rem',
    letterSpacing: 4,
    borderBottom: '3px solid var(--color-primary)',
  },
  h4: {
    color: 'var(--color-heading)',
    width: 'fit-content',
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: '.5rem',
  },
  h5: {
    fontSize: 12,
    color: 'var(--color-gray)',
    '&:before': {
      content: '"↪"',
      marginRight: '.25rem',
    },
  },
  '@media(max-width: 1024px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
    h3: {
      fontSize: 22,
    },
    'ul li, a': {
      fontSize: 14,
      lineHeight: '1.8rem',
    },
  },
  '@media(max-width: 480px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '2rem',
  },
};

interface UsesProps {
  content: UsesTypes;
}

const Uses: FC<UsesProps> = ({ content }) => {
  return (
    <>
      <h1 className="pageHeading">{content.heading}</h1>
      <div css={styleUsesMarkdown}>
        <Markdown markdown={content.devices} />
        <Markdown markdown={content.stack} />
        <Markdown markdown={content.tools} />
        <Markdown markdown={content.software} />
      </div>
    </>
  );
};

export default Uses;
