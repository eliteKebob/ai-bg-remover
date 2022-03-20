import { useContext } from "react";
import AppContext from "../context/AppContext";
import styles from "../styles/Encoded.module.css";

const EncodedImage = () => {
  const { userImage } = useContext(AppContext);
  return (
    <>
      <div className={styles.encodedPage}>
        <h1>Arkaplan başarıyla silindi</h1>
        <img
          src={`data:image/png;base64,${userImage.content}`}
          alt="bgRemovedImg"
          className={styles.encodedImg}
        />
      </div>
    </>
  );
};

export default EncodedImage;
