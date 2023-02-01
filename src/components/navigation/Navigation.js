import React from 'react';
import styles from './Navigation.module.css';

const Navigation = ({ onRouteChange }) => {
  return (
    <div className={styles.nav_bar}>
      <nav>
        <p
          onClick={() => onRouteChange('signin')}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign out
        </p>
      </nav>
    </div>
  );
};

export default Navigation;
