import spinner from "../assets/img/spinner.gif";
import styles from "../styles/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;
