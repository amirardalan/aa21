import React, { FC } from 'react';
import { css } from '@emotion/react';
import { useRouteStatus } from '@/hooks/useLoadingIndicator';

type LogoProps = {
  animate: boolean;
  size: number;
  color: string;
};

const Logo: FC<LogoProps> = ({ animate, size, color }) => {
  const isLoading = useRouteStatus();

  const animationStyle = css({
    animation: isLoading
      ? 'opacityPulse 2s infinite ease-in-out'
      : 'fadeIn 1s forwards',
    '@keyframes opacityPulse': {
      '0%': { opacity: 1 },
      '50%': { opacity: 0.05 },
      '100%': { opacity: 1 },
    },
    '@keyframes fadeIn': {
      '0%': { opacity: 0.05 },
      '100%': { opacity: 1 },
    },
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 286 286"
      fill={color}
      css={animate ? animationStyle : null}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M211.825 42.6501L220.907 49.9753C245.665 69.9432 252.057 88.6088 240.081 105.972C236.179 111.724 230.662 117.475 223.531 123.227L130.284 198.432L74.4767 153.423L211.825 42.6501ZM93.2473 18.1514C108.116 6.15986 122.412 0.109808 136.137 0.00128681C151.207 -0.107234 167.186 6.64821 184.072 20.2676L193.155 27.5928L55.8071 138.366L0 93.3566L93.2473 18.1514Z" />
      <path d="M92.845 258.487L101.928 265.813C126.686 285.781 149.829 290.935 171.358 281.277C178.49 278.13 185.621 273.68 192.753 267.929L286 192.724L230.193 147.715L92.845 258.487ZM62.469 162.853C47.6006 174.845 40.0991 186.375 39.9645 197.444C39.8299 209.599 48.2061 222.486 65.0928 236.105L74.1753 243.43L211.523 132.657L155.716 87.6481L62.469 162.853Z" />
    </svg>
  );
};

export default React.memo(Logo);
