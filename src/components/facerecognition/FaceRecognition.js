import styles from './FaceRecognition.module.css';

const FaceRecognition = ({ img_url, box }) => {
  return (
    <div className={styles.face_reco_box_page}>
      <div className={styles.face_reco_box}>
        <div>
          <img id="inputimage" src={img_url} />
          <div
            className={styles.bounding_box}
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
