import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
import EncodedImage from "../components/EncodedImage";
import styles from "../styles/Landing.module.css";
import main from "../assets/img/main.png";
import { HiPaperClip, HiFolder, HiExclamation } from "react-icons/hi";
import Spinner from "../components/Spinner.jsx";

const Landing = () => {
  const [uploadImg, setUploadImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const { setUserImage } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShow(false);
    const formData = new FormData();
    formData.append("image_file", uploadImg);
    try {
      const response = await axios({
        method: "post",
        url: "https://api.baseline.is/v1/background-remover/",
        data: formData,
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
          "Content-Type": "multipart/form-data",
        },
      });
      setUserImage(response.data);
      setLoading(false);
      setShow(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShow(false);
    }
  };

  return (
    <>
      <div className={styles.landingBody}>
        <div className={styles.content}>
          <img src={main} alt="mainimage" className={styles.mainImg} />
          <div className={styles.formDiv}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="file">
                <HiFolder />
                {"  "}Görseli Yükle
              </label>
              <br />
              <input
                type="file"
                name="file"
                onChange={(e) => {
                  setUploadImg(e.target.files[0]);
                }}
              />
              <p className={styles.info}>
                <HiExclamation /> Maksimum dosya boyutu 5 MB olmalıdır.
                Desteklenen uzantılar: JPG, JPEG, PNG
              </p>
              <button type="submit" className={styles.formButton}>
                <HiPaperClip />
                {"  "}Arkaplanı Sil
              </button>
            </form>
          </div>
        </div>
      </div>
      {loading ? <Spinner /> : ""}
      {show ? <EncodedImage /> : ""}
    </>
  );
};

export default Landing;
