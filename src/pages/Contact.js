import React, { useState } from "react";
import emailjs from "emailjs-com";
import { isEmail } from "validator";
import Footer from "../components/Footer";

const Contact = () => {
  const formContact = { userName: "", userEmail: "", subject: "", message: "" };

  const [contact, setContact] = useState(formContact);
  const [messageError, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationForm = isFormValid();

    if (validationForm) {
      emailjs
        .send(
          "service_x0ptjnv",
          "template_hy282n8",
          contact,
          "user_uscaZdUJEnKPLtEuEruZI"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setContact(formContact);
          },
          (err) => {
            console.log(err);
          }
        );
    }
  };

  const isFormValid = () => {
    if (contact.userName.trim().length === 0) {
      setError("Name is required");
      return false;
    } else if (!isEmail(contact.userEmail)) {
      setError("Email is not valid");
      return false;
    } else if (contact.subject.length === 0) {
      setError("Subject is required");
      return false;
    } else if (contact.message.length === 0) {
      setError("Message is required");
      return false;
    }
    setError("");
    setSuccessMessage("Thank you for your message! ");
    return true;
  };

  return (
    <div className="page__container">
      <small className="page__title-small">contact</small>

      <div className="page__info contact__title">
        <h1 className="animate__animated animate__pulse"> Get in touch. </h1>

        <div className=" page__info-container ">
          <div className="contact__contact-box">
            <form onSubmit={handleSubmit}>
              {messageError.length > 0 ? (
                <div className="oaerror danger">
                  <strong>Error</strong> - {messageError}
                </div>
              ) : null}
              {successMessage.length > 0 ? (
                <div className="oaerror success">
                  <strong>Nice</strong> {successMessage}
                </div>
              ) : null}
              <div className="user-box">
                <input
                  type="text"
                  value={contact.userName}
                  name="userName"
                  onChange={(e) => handleChange(e)}
                />
                <label>
                  Your Name<span>*</span>
                </label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  value={contact.userEmail}
                  name="userEmail"
                  onChange={(e) => handleChange(e)}
                />
                <label>
                  Your email<span>*</span>
                </label>
              </div>
              <div className="user-box">
                <input
                  value={contact.subject}
                  type="text"
                  name="subject"
                  onChange={(e) => handleChange(e)}
                />

                <label>
                  Subject<span>*</span>
                </label>
              </div>
              <div className="user-box">
                <textarea
                  value={contact.message}
                  name="message"
                  onChange={(e) => handleChange(e)}
                ></textarea>
                <label>
                  Message<span>*</span>
                </label>
              </div>
              <div>
                <button className="contact__contact-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
