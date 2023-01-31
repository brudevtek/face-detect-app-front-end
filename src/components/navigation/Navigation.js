import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.nav_bar}>
      <nav>
        <p className="f3 link dim black underline pa3 pointer">Sign out</p>
      </nav>
    </div>
  );
};

export default Navigation;
