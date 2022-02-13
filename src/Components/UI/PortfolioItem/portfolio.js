import styles from "./portfoliostyles.module.scss";

const PortfolioItem = (props) => {
  return (
    <div className={styles.portfolioItem}>
      <a
        href={props.link}
        target="_blank"
      >
        <div className={styles.overlay}>
          <h3>{props.title}</h3>
        </div>
        <img src={props.src} alt={props.alt} />
      </a>
    </div>
  );
};

export default PortfolioItem;
