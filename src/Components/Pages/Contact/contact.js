import Section from "../../Layout/Section/section";
import styles from "./contactstyles.module.scss";
import { useRef } from "react";

const Contact = (props) => {
  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const formSubmit = (event) => {
    event.preventDefault();

    const fNameValue = fNameRef.current.value;
    const lNameValue = lNameRef.current.value;
    const emailValue = emailRef.current.value;
    const messageValue = messageRef.current.value;

    const formData = {
      fName: fNameValue,
      lName: lNameValue,
      email: emailValue,
      message: messageValue
    }

    sendFormData(formData);
  };

  const sendFormData = (formData) => {
    fetch(
      "https://lee-charlton-hassall-cv-default-rtdb.europe-west1.firebasedatabase.app/enquiries.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then(() => {
      fNameRef.current.value = '';
      lNameRef.current.value = '';
      emailRef.current.value = '';
      messageRef.current.value = '';
    });
  };

  return (
    <Section id="contact" h2="Contact" background="white">
      <form
        action="https://formspree.io/f/mvodevrl"
        method="post"
        encType="multipart/form-data"
        onSubmit={formSubmit}
      >
        <div className={styles.form2col}>
          <div>
            <label htmlFor="fname">First name *</label>
            <input type="text" name="fname" id="fname" ref={fNameRef} required />
          </div>
          <div>
            <label htmlFor="lname">Last name *</label>
            <input type="text" name="lname" id="lname" ref={lNameRef} required />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <input type="email" name="email" id="email" ref={emailRef} required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            ref={messageRef}
          ></textarea>
        </div>
        <div>
          <button type="submit" class="form-submit-btn">Submit</button>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
