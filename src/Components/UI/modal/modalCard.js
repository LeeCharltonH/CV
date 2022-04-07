import styles from "./modalCard.module.scss";
import Contact from "../../Pages/Contact/contact";

const ModalCard = (props) => {
  return (
    <div className={styles.modalCard}>
        <button onClick={props.modal} className={styles.modalButton}>Close</button>
        <h2>Contact</h2>
        <Contact onClick={props.modal} />
    </div>
  );
};

export default ModalCard;
