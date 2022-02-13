import styles from "./navstyles.module.css";
import { HashLink } from "react-router-hash-link";

const Nav = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#skills">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#portfolio">
            Portfolio
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#experience">
            Experience
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
