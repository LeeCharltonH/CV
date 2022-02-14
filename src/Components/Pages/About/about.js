import Section from "../../Layout/Section/section";
import styles from "./aboutstyles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = (props) => {
  return (
    <Section id="about" background="white">
      <div className={styles.socialIcons}>
        <div>
          <a
            href="https://www.instagram.com/leecharltonhassall/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className={styles.icon}
            />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/leehassall/" target="_blank">
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className={styles.icon}
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/LeeCharltonH" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} className={styles.icon} />
          </a>
        </div>
      </div>
      <h1>Lee Charlton-Hassall CV</h1>
      <ul className={styles.contactDetails}>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-location-dot" /> London
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-phone" /> 07837269147
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-envelope" />{" "}
          <a href="mailto:leehassall@hotmail.co.uk">leehassall@hotmail.co.uk</a>
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odio fugit
        aperiam voluptatibus autem sunt similique suscipit, cupiditate veniam
        itaque, eveniet a, reiciendis vero consequuntur. Est, blanditiis odit?
      </p>
    </Section>
  );
};

export default About;
