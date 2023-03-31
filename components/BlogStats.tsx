import { FC } from 'react';
import { css } from '@emotion/react';
import useTotalLikes from '@/hooks/useTotalLikes';
import formatLikeCount from '@/utils/formatLikeCount';
import { BlogStatsTypes } from '@/types/blog';

type BlogStatsProps = {
  feed: BlogStatsTypes[];
  filteredPosts: BlogStatsTypes[];
};

const BlogStats: FC<BlogStatsProps> = ({ feed, filteredPosts }) => {
  const filterActive = filteredPosts.length < feed.length;
  const postCount = filterActive ? filteredPosts.length : feed.length;
  const postsText = postCount === 1 ? 'post' : 'posts';
  const filteredLikesCount = filteredPosts.reduce(
    (acc, post) => acc + (post.likes || 0),
    0
  );
  const { totalLikesCount, error } = useTotalLikes();
  const likesText =
    (filteredLikesCount | totalLikesCount) === 1 ? 'like' : 'likes';

  const styleBlogStatsWrapper = css({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    ul: {
      display: 'flex',
      alignItems: 'flex-end',
      marginBottom: '.2rem',
    },
    '.divider': {
      color: 'var(--color-accent-gray)',
    },
    li: {
      lineHeight: '1rem',
      display: 'inline',
      marginLeft: '1rem',
      span: {
        marginLeft: '.25rem',
      },
      '@media(max-width: 1024px)': {
        marginBottom: '.25rem',
      },
      '&:first-of-type': {
        marginLeft: 0,
      },
      '.number': {
        marginRight: '.3rem',
        fontSize: 18,
      },
      '.text': {
        fontSize: 12,
        color: 'var(--color-gray)',
      },
    },
  });

  return (
    <div css={styleBlogStatsWrapper}>
      <h1 className="blogHeading">Blog</h1>
      <ul>
        <li className="postsCount">
          {postCount}
          <span className="text">{postsText}</span>
        </li>
        <li className="divider">/</li>
        {error || totalLikesCount === undefined || totalLikesCount === 0 ? (
          <li className="likesCount">
            {formatLikeCount(filteredLikesCount)}
            <span className="text">{likesText}</span>
          </li>
        ) : (
          <li className="likesCount">
            {formatLikeCount(
              filterActive ? filteredLikesCount : totalLikesCount
            )}
            <span className="text">{likesText}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BlogStats;
