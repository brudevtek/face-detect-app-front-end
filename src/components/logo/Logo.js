import React from 'react';
import styles from './Logo.module.css';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <div className={styles.tilt}>
      <Tilt>
        <div
          style={{
            height: '100px',
            backgroundColor: 'transparent',
          }}
        >
          <img src="./image/logo.png"></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
