import React, { type FC, useEffect } from 'react';
import Typed from 'typed.js';

type TypingAnimationProps = {
  data: any;
};

const TypingAnimation: FC<TypingAnimationProps> = ({ data }) => {
  useEffect(() => {
    const options: any = {
      strings: [...data],
      cursorChar: '▌',
      startDelay: 500,
      typeSpeed: 90,
      backSpeed: 20,
      backDelay: 5000,
      loop: true,
    };
    const typed = new Typed('.typingAnimation', options);

    return () => {
      typed.destroy();
    };
  }, [data]);

  return <span className="typingAnimation" />;
};

export default React.memo(TypingAnimation);
