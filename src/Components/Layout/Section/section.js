import styles from "./sectionstyles.module.scss";
import { useState } from "react";
import { useEffect } from "react";

const Section = (props) => {
  const [sectionTop, setSectionTop] = useState(false);

  useEffect(() => {if (props.background === "white") {
    setSectionTop(true)}
  }, []);

  return (
    <section id={props.id} className={styles.section}>
      {sectionTop && (
        <div>
          <div className={styles.sectionTop}>
            <p>{props.body}</p>
          </div>
          <div className={styles.sectionTop}>
            <p>{props.body}</p>
          </div>
        </div>
      )}
      <div className={styles.sectionItem}>
        <h2>{props.h2}</h2>
        {props.children}
      </div>
    </section>
  );
};

export default Section;
