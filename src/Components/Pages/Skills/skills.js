import Section from "../../Layout/Section/section";
import Bubble from "../../UI/Bubble/bubble";

import Card from "../../UI/Card/card";
import Flex from "../../UI/Flex/flex";

const Skills = (props) => {
  return (
    <Section id="skills" h2="Skills">
      <Flex>
        <Bubble
          src={require("../../../Assets/Images/html5.png")}
          alt="html5"
          title="HTML 5"
        />
        <Bubble
          src={require("../../../Assets/Images/css3.png")}
          alt="CSS3"
          title="CSS 3"
        />
        <Bubble
          src={require("../../../Assets/Images/sass.png")}
          alt="Sass"
          title="Sass"
        />
        <Bubble
          src={require("../../../Assets/Images/javascript.png")}
          alt="Javascript"
          title="Javascript"
        />
        <Bubble
          src={require("../../../Assets/Images/react.png")}
          alt="react"
          title="React"
        />
        <Bubble
          src={require("../../../Assets/Images/git.png")}
          alt="git"
          title="Git"
        />
        <Bubble
          src={require("../../../Assets/Images/github.png")}
          alt="github"
          title="GitHub"
        />
      </Flex>
    </Section>
  );
};

export default Skills;
