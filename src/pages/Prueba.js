import React, {useState} from "react";
import { Link } from "react-router-dom";
import { isEmail } from "validator";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";

const Prueba = () => {
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
          "default_service",
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
      <small className="page__title-small">'page name'</small>
      <div className="page__social-networks page__social-fixed">
        <Link to="/github" target="_blank">
          <i className="fab fa-github icon-github"></i>
        </Link>
        <Link to="/linkedin" target="_blank">
          <i className="fab fa-linkedin icon-linkedin"></i>
        </Link>
      </div>

      <div className="page__info">
        <h1>page title.</h1>
        <div className="page__info-container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora odit
          officia totam molestiae rerum. Quisquam unde eaque praesentium
          sapiente. Minima inventore necessitatibus possimus, tempora debitis
          ullam dolor at vero hic.
        </div>
      </div>
    </div>
  );
};
export default Prueba;
