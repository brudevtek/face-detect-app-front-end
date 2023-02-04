import styles from './Rank.module.css';

const Rank = ({name, entries}) => {
  return (
    <div className={styles.rank_layout}>
      <div>
        <p>{name}, your current rank is ....</p>
      </div>
      <div className={styles.rank_number}>
        <p>#{entries}</p>
      </div>
    </div>
  );
};

export default Rank;
