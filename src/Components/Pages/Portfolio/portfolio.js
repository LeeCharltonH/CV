import Section from "../../Layout/Section/section";
import Flex from "../../UI/Flex/flex";
import { useEffect, useState } from "react";
import styles from "./portfoliostyles.module.scss";
import Button from "../../UI/button/button";

const Portfolio = (props) => {
  useEffect(() => {
    fetch(
      "https://cv---experience-data-default-rtdb.europe-west1.firebasedatabase.app/portfolio.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const portfolioItems = Object.keys(data).map((item) => {
          return data[item];
        });

        setPortfolio(portfolioItems);
      });
  }, []);
  const [portfolio, setPortfolio] = useState([]);

  const portfolioContainer = portfolio.map((item) => {
    return (
      <div className={styles.portfolioContainer} key={item.id}>
        <div className={styles.portfolioItem}>
          <a href={item.project_url} target="_blank" rel="noreferrer">
            {" "}
            <img
              width={"100%"}
              src={require(`../../../Assets/Images/${item.img}`)}
              alt={item.title}
            />
          </a>
        </div>
        <div className={styles.portfolioItem}>
          <h2>{item.title}</h2>
          <ul>
            {item.skills.map((skill) => {
              return <li key={Math.random()}>{skill}</li>;
            })}
          </ul>
          <p>{item.description}</p>
          <a href={item.project_url} target="_blank" rel="noreferrer">
            <Button>View Project</Button>
          </a>
        </div>
      </div>
    );
  });

  return (
    <Section id="portfolio" h2="Portfolio" background="white">
      <Flex>{portfolioContainer}</Flex>
    </Section>
  );
};

export default Portfolio;
