import styles from "./portfoliostyles.module.scss";

const PortfolioItem = (props) => {
  return (
    <div className={styles.portfolioItem}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className={styles.overlay}></div>
        <img src={props.src} alt={props.alt} />
        <div className={styles.title}>
          <p>{props.title}</p>
        </div>
      </a>
    </div>
  );
};

export default PortfolioItem;
