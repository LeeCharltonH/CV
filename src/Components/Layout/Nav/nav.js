import styles from "./navstyles.module.css";
import { HashLink } from "react-router-hash-link";

const Nav = (props) => {

    return (
        <nav className={styles.nav}>
      <ul>
        <li>
          <HashLink smooth to="/#services">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#services">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#services">
            Portfolio
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#services">
            Work History
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#services">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
    )
};

export default Nav;