import styles from "./modal.module.scss";
import ModalBackdrop from "./modalBackdrop";
import ModalCard from "./modalCard";

const Modal = (props) => {
  return (
    <div className={styles.modalContainer}>
      <ModalBackdrop />
      <ModalCard modal={props.modal}/>
    </div>
  );
};

export default Modal;
