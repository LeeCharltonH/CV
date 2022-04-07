import styles from "./cardstyles.module.scss";

const Card = (props) => {
  return (
    <div className={`${styles.cardContainer} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
