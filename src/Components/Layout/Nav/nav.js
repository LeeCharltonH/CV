import styles from "./navstyles.module.css";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import classNames from "classnames";

const Nav = (props) => {

    const [navIconState, setNavIcon] = useState(false);

    const navClick = () => {
        setNavIcon(!navIconState);
        console.log(navIconState);
    };

  return (
    <nav className={styles.nav}>
      <ul className={classNames(!navIconState && styles.hide)}>
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
      
        <div className={classNames(
            styles.navIcon1,
            navIconState && styles.open)
            } onClick={navClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      
    </nav>
  );
};

export default Nav;
