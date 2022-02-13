import Section from "../../Layout/Section/section";
import styles from "./contactstyles.module.scss";

const Contact = (props) => {
  return (
    <Section id="contact" h2="Contact" background="white">
      <p>Contact Copy</p>
      <form
        action="https://formspree.io/f/mvodevrl"
        method="post"
        encType="multipart/form-data"
      >
        <div className={styles.form2col}>
          <div>
            <label htmlFor="fname">First name *</label>
            <input type="text" name="fname" id="fname" required />
          </div>
          <div>
            <label htmlFor="lname">Last name *</label>
            <input type="text" name="lname" id="lname" required />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
