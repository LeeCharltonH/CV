import Section from "../../Layout/Section/section";
import styles from "./aboutstyles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";

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
      <h2>Front End Developer</h2>
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
      <div className={styles.introCopy}>
        <p>
          Starting out in the commercial sector of digital marketing I
          discovered a passion for frontend development and decided to
          transition my career into software engineering in 2021. I am skilled
          in enriching the user experience with easy to use web applications
          that are both well designed and functional.
        </p>
        <p>
          Reach out to discuss any new opportunities using the contact form
          below!
        </p>
        <div>
          <HashLink smooth to="/#contact">
            <button type="submit">Contact Me</button>
          </HashLink>
        </div>
      </div>
    </Section>
  );
};

export default About;
