import Section from "../../Layout/Section/section";
import styles from "./aboutstyles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = (props) => {
  return (
    <Section id="about" background="white">
      <h1>Lee Charlton-Hassall CV</h1>
      <ul className={styles.contactDetails}>
        <li>
        <FontAwesomeIcon icon="fa-solid fa-location-dot" /> London
        </li>
        <li><FontAwesomeIcon icon="fa-solid fa-phone" /> 07837269147</li>
        <li>
        <FontAwesomeIcon icon="fa-solid fa-envelope" /> <a href="mailto:leehassall@hotmail.co.uk">leehassall@hotmail.co.uk</a>
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
