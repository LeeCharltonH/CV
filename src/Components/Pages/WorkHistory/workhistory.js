import Section from "../../Layout/Section/section";
import styles from "./workhistorystyles.module.scss";
import Accordion from "../../UI/Accordion/accordion";

const History = (props) => {
  return (
    <Section id="experience" h2="Experience">
      <Accordion
        title="Front End Development"
        employer="The Learning People | Udemy (studying)"
        date="Nov 2021 - Present"
        body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sint?"
      ></Accordion>
      <Accordion
        title="Performance Marketing Manager"
        employer="Ocado (Specility Stores Ltd)"
        date="Apr 2018 - Oct 2021"
        body="At Fetch I look after the strategy and management of campaigns across; Google (search/display/shopping networks), Affiliates and Paid social (Facebook/Instagram) to drive new customer growth.

        After 1 year at Ocado I was promoted from PPC Specialist to Performance Marketing Manager, taking full ownership of all paid channels. Day to day I manage a variety of campaigns targeted at each stage of the marketing funnel and regularly provide actionable insights to improve performance.
        Key Achievements:
         Improved efficiency of Fetch’s search account by moving to a data driven bidding
        strategy, lowering the accounts overall CPA.
         By utilising an assisted attribution model increased sales through our Google
        accounts by targeting customers at the consideration phase of their customer
        journey.
         Increased overall new user traffic and acquisitions by shifting the marketing budget
        towards upper funnel activity within channels such as Paid Social and Display."
      ></Accordion>
      <Accordion
        title="Senior Marketing Executive"
        employer="Work.Life"
        date="Sept 2017 - Apr 2018"
        body="Managed the planning and execution of Work.Life’s content marketing and performance marketing channels; including paid social (Facebook, Twitter, Instagram and Linkedin), Google Search and Display.
        At Work.Life I was responsible for all aspects of planning and executing throughout social media; including organic posts and paid social campaigns. I am skilled in managing organic social content and developing all PPC activity including social ads, google search and GDN campaigns.
        During my time at Work.Life I successfully managed the development of a new company website, which included reviewing and signing off designs, developing an SEO strategy and liaising with external agencies to ensure a timely management of the project."
      ></Accordion>
      <Accordion
        title="Digital Marketing Executive"
        employer="A2Dominion (FABRICA)"
        date="Sept 2015 - Sept 2017"
        body="At FABRICA I was responsible for developing and executing all digital marketing campaigns across PPC and email as well as managing website content. I worked closely with developers to manage the design and creation of new web pages and make constant improvements to the websites performance.
        I was responsible for delivering monthly reports which tracked the performance and ROI of all digital activity. I was also heavily involved in the development of numerous strategies including content marketing and website improvements.
        Key achievements:
         Developed a mobile responsive template for mobile, improving the customer
        engagement of FABRICAs email campaigns.
         Successfully developed and executed numerous PPC campaigns and optimised their
        performance to achieve a greater ROI.
         Contributed to the set up and management of a new blog.
         Developed a monthly digital report which accurately tracked the performance and
        ROI of all digital marketing campaigns.
        "
      ></Accordion>
    </Section>
  );
};

export default History;
