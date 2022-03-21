import styles from "./accordionstyles.module.scss";

const AccordionList = (props) => {

  const achievements = props.achievemnt1;

  if(achievements.length < 1){
    return(<div></div>)
  }

  return (
    <div>
      <p>{props.ListTitle}</p>
      <ul className={styles.ul}>
          <li>{props.achievemnt1}</li>
          <li>{props.achievemnt2}</li>
          <li>{props.achievemnt3}</li>
        </ul>
    </div>
  );
};

export default AccordionList;
