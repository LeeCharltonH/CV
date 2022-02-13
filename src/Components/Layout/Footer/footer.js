import styles from "./footerstyles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>

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
          <ul>
            <li>
              <a href="#" target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  className={styles.icon}
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className={styles.icon}
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className={styles.icon}
                />
              </a>
            </li>
          </ul>

        </div>
        <p className={styles.copyright}>&#169; Lee Charlton-Hassall</p>
      </div>
    </footer>
  );
};

export default Footer;
