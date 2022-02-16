import styles from "./accordionstyles.module.scss";
import { useState } from "react";
import classNames from "classnames";
import AccordionList from "./accordionlist";

const Accordion = (props) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const expandAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  

  
  return (
    <article className={styles.accordionContainer}>
      <div
        className={classNames(
          styles.accordionHeader,
          accordionOpen && styles.active
        )}
        id="accordionbtn"
        onClick={expandAccordion}
      >
        <div className={styles.accordionHeaderItems}>
          <h3>{props.title}</h3>
          <p>{props.company}</p>
          <p>{props.date}</p>
        </div>
      </div>
      {accordionOpen && (
        <div className={styles.accordionBody}>
          <p>{props.p1}</p>
          <p>{props.p2}</p>
          <AccordionList 
          ListTitle={"Key Achievements"}
          achievemnt1={props.achievemnt1}
          achievemnt2={props.achievemnt2}
          achievemnt3={props.achievemnt3}/>
          
        </div>
        
      )}
      <hr />
    </article>
  );
};

export default Accordion;
