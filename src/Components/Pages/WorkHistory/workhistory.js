import Section from "../../Layout/Section/section";
import Accordion from "../../UI/Accordion/accordion";
import { useState } from "react";
import { useEffect } from "react";

const History = (props) => {
  const [isLoading, isLoadingState] = useState(true);
  const [formData, formDataInput] = useState([]);

  useEffect(() => {
    fetch(
      "https://cv---experience-data-default-rtdb.europe-west1.firebasedatabase.app/experience.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const experiences = [];

        for (const key in data) {
          const experience = {
            id: key,
            ...data[key],
          };

          experiences.push(experience);
        }

        isLoadingState(false);
        formDataInput(experiences);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  

  return (
    <Section id="experience" h2="Experience">
      
      {formData.map((experienceItem) => 
        <Accordion
          key={experienceItem.id}
          title={experienceItem.title}
          company={experienceItem.company}
          date={experienceItem.date}
          p1={experienceItem.p1}
          p2={experienceItem.p2}
          achievemnt1={experienceItem.achievemnt1}
          achievemnt2={experienceItem.achievemnt2}
          achievemnt3={experienceItem.achievemnt3}
        />
      )}
    </Section>
  );
};

export default History;
