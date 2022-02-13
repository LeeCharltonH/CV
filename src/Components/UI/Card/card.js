import styles from "./cardstyles.module.scss";

const Card = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardItem}>
        <div>
          <img src={props.src} alt={props.alt} />
        </div>
        <div>{props.title}</div>
      </div>
    </div>
  );
};

export default Card;
