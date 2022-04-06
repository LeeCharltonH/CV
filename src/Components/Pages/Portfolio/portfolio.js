import Section from "../../Layout/Section/section";
import PortfolioItem from "../../UI/PortfolioItem/portfolio";
import Flex from "../../UI/Flex/flex";

const Portfolio = (props) => {
  return (
    <Section id="portfolio" h2="Portfolio" background="white">
      <Flex>
      <PortfolioItem
          title="Spotify Search API"
          src={require("../../../Assets/Images/portfolio-spotify-search.png")}
          alt="Spotify Search API"
          link="https://spotify-search-2d1d9.web.app/"
        />
      <PortfolioItem
          title="Problems Afoot Podiatry"
          src={require("../../../Assets/Images/portfolio-problems-afoot.png")}
          alt="Problems Afoot Podiatry"
          link="https://problems-afoot-58652.web.app/"
        />
        <PortfolioItem
          title="Pairs Game"
          src={require("../../../Assets/Images/portfolio-pairs.png")}
          alt="Project 1 - Pairs Game"
          link="https://leecharltonh.github.io/pairs-game/"
        />
        <PortfolioItem
          title="Bear Ambition Personal Training"
          src={require("../../../Assets/Images/portfolio-bear-ambition.png")}
          alt="Project 2 - Bear Ambition"
          link="https://www.bearambition.com/"
        />
        <PortfolioItem
          title="Expenses Form"
          src={require("../../../Assets/Images/portfolio-expense-form.jpg")}
          alt="Project 4 - Expense Form"
          link="https://leecharltonh.github.io/expenses-form/"
        />
        <PortfolioItem
          title="Personal Portfolio V1"
          src={require("../../../Assets/Images/portfolio-personal-portfolio.png")}
          alt="Project 3 - Personal Portfolio v1"
          link="https://leecharltonh.github.io/personal-portfolio/"
        />
      </Flex>
    </Section>
  );
};

export default Portfolio;
