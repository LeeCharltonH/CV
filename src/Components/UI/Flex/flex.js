import styles from "./flexstyles.module.scss";

const Flex = (props) => {
  return <div className={styles.flexContainer}>
            {props.children}
        </div>;
};

export default Flex;
