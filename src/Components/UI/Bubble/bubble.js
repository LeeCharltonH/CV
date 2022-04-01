import Flex from "../Flex/flex";
import styles from "./bubblestyles.module.scss";

const Bubble = (props) => {
  return (
    <div className={styles.bubbleContainer}>
      <div className={styles.bubbleItem}></div>
      <div className={styles.bubbleContent}>
        <img src={props.src} alt={props.alt} />
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Bubble;
