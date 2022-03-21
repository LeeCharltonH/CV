import styles from "./headerstyles.module.scss";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        src={require("../../../Assets/Images/profilepic.jpg")}
        alt="Lee Charlton-Hassall CV"
        id="profile-pic"
      />
    </header>
  );
};

export default Header;
