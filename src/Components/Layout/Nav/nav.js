import styles from "./navstyles.module.scss";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = (props) => {
  const modalHandler = props.modal;

  const [navIconState, setNavIcon] = useState(false);

  const navClick = () => {
    setNavIcon(!navIconState);
    console.log(navIconState);
  };

  const navLiClick = (navIconState) => {
    setNavIcon(!navIconState);
  };

  useEffect(() => {
    let navListItems = document.querySelectorAll("#navList li");

    for (let x = 0; x < navListItems.length; x++) {
      navListItems[x].addEventListener("click", navLiClick);
    }
  }, []);

  return (
    <nav className={styles.nav}>
      <ul id="navList" className={classNames(!navIconState && styles.hide)}>
        <li>
          <HashLink smooth to="/CV/#about">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/CV/#skills">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/CV/#portfolio">
            Portfolio
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/CV/#experience">
            Experience
          </HashLink>
        </li>
        <li onClick={modalHandler} className={styles.contact}>
          Contact
        </li>
        <div className={styles.navSocial}>
          <p>Socials</p>
          <div className={styles.navSocialIcons}>
            <div>
              <a
                href="https://www.instagram.com/leecharltonhassall/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  className={styles.icon}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/leehassall/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className={styles.icon}
                />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/LeeCharltonH"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
        </div>
      </ul>

      <div
        className={classNames(styles.navIcon1, navIconState && styles.open)}
        onClick={navClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
