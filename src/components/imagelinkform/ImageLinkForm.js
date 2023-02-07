import React from 'react';
import styles from './ImageLinkForm.module.css';
const ImageLinkForm = ({ onInputChange, onBtnSubmit }) => {
  return (
    <>
      <div className={styles.page_lay_out}>
        <div className={styles.main_text}>
          <p className="f3">
            {'This App will detect face in the uploaded image. Give it a try'}
          </p>
        </div>
        <div className={styles.input_submit_box}>
          <div className={styles.input_element}>
            <input
              type="text"
              className="f4 pa2 w-500 center"
              onChange={onInputChange}
            ></input>
          </div>
          <div className={styles.button_element}>
            <button
              className="w-100 grow f7 link  dib white bg-light-purple"
              onClick={onBtnSubmit}
            >
              Detect!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageLinkForm;
