import Section from "../../Layout/Section/section";

import Card from "../../UI/Card/card";
import Flex from "../../UI/Flex/flex";

const Skills = (props) => {
  return (
    <Section id="skills" h2="Skills">
      <Flex>
        <Card
          src={require("../../../Assets/Images/html5.png")}
          alt="html5"
          title="HTML 5"
        />
        <Card
          src={require("../../../Assets/Images/css3.png")}
          alt="CSS3"
          title="CSS 3"
        />
        <Card
          src={require("../../../Assets/Images/sass.png")}
          alt="Sass"
          title="Sass"
        />
        <Card
          src={require("../../../Assets/Images/javascript.png")}
          alt="Javascript"
          title="Javascript"
        />
        <Card
          src={require("../../../Assets/Images/react.png")}
          alt="react"
          title="React"
        />
        <Card
          src={require("../../../Assets/Images/git.png")}
          alt="git"
          title="Git"
        />
        <Card
          src={require("../../../Assets/Images/github.png")}
          alt="github"
          title="GitHub"
        />
      </Flex>
    </Section>
  );
};

export default Skills;
