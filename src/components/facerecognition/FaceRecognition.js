import styles from './FaceRecognition.module.css';

const FaceRecognition = ({img_url}) => {

  return (
    <div className={styles.face_reco_box}>
      <div>
        <img src={img_url} />
      </div>
    </div>
  );
};

export default FaceRecognition;
