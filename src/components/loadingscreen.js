
/**
 * @author Panagiotis Tsellos w20024460
 */
import React from 'react';
import { useSpring, animated } from 'react-spring';

function LoadingScreen() {
  const barProps = useSpring({
    from: { width: '0%' },
    to: { width: '100%' },
    config: { duration: 2000 },
    reset: true,
    loop: true
  });

  return (
    <div className="loading-screen">
      <div className="loading-screen__content">
        <animated.div className="loading-screen__bar" style={barProps} />
        <p>Loading...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
