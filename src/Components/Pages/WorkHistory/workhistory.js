import Section from "../../Layout/Section/section";
import styles from "./workhistorystyles.module.scss";
import Accordion from "../../UI/Accordion/accordion";

const History = (props) => {
  return (
    <Section id="experience" h2="Experience">
        <Accordion
        title="Front End Development"
        body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sint?"
        employer="The Learning People | Udemy (studying)"
        date="Nov 2021 - Present"
      ></Accordion>
      <Accordion
        title="Performance Marketing Manager"
        body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sint?"
        employer="Ocado (Specility Stores Ltd)"
        date="Apr 2018 - Oct 2021"
      ></Accordion>
      <Accordion
        title="Senior Marketing Executive"
        body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sint?"
        employer="Work.Life"
        date="Sept 2017 - Apr 2018"
      ></Accordion>
      <Accordion
        title="Digital Marketing Executive"
        body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sint?"
        employer="A2Dominion (FABRICA)"
        date="Sept 2015 - Sept 2017"
      ></Accordion>
    </Section>
  );
};

export default History;
