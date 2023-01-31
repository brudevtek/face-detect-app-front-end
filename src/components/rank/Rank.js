import styles from './Rank.module.css';

const Rank = () => {
  return (
    <div className={styles.rank_layout}>
      <div>
        <p>Andrei, your current rank is ....</p>
      </div>
      <div className={styles.rank_number}>
        <p>#5</p>
      </div>
    </div>
  );
};

export default Rank;
