import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import contactButton from "../../assets/footer/button.png";
import contact from "../../assets/footer/Contact.jpg";
import contactImage from "../../assets/home/Internet-Providers2.jpg";
import "../../style/style.scss";
import { toast } from "react-toastify";
import axios from "axios";
import { DotLoader } from "react-spinners";
import Buttton from "../../Components/common/Buttton";

const Contact = ({ refs }) => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    emailFrom: "",
    subject: "",
    body: "",
  });

  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!values.name) {
      toast.error("Please enter your name to submit the form.");
    } else if (
      !values.phone ||
      !/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)
    ) {
      toast.error("Please enter your Phone to submit the form.");
    } else if (
      !values.emailFrom ||
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(values.emailFrom)
    ) {
      toast.error("Please enter your email to submit the form.");
    } else if (!values.subject) {
      toast.error(
        "Please enter the subject of your message to submit the form."
      );
    } else if (!values.body) {
      toast.error("Please enter your message to submit the form.");
    } else {
      setLoader(true);

      const payload = {
        to_email: "corp@konnectx.us",
        from_email: values.emailFrom,
        subject: values.subject,
        body: `Name: ${values.body}\nNumber: ${values.phone}`,
        sender_name: values.name,
      };
      axios
        .post("https://everything-backend.herokuapp.com/send_a_email", payload)
        .then((response) => {
          setLoader(false);

          values.body = "";
          values.phone = "";
          values.emailFrom = "";
          values.name = "";
          values.subject = "";
          toast.success("Thank you for your response! :)");
        })
        .catch((err) => {
          setLoader(false);
          console.log({ err });
          toast.error("API Error");
        });
    }
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(true);
  };

  return (
    <>
      <div ref={refs}></div>
      <div
        id="footer-contact"
        className={`container mt-5 ${isFlipped ? "" : "flipped"}`}
      >
        {!isFlipped ? (
          <img src={contactButton.src} alt="Contact Us" onClick={handleFlip} />
        ) : (
          <section className="mb-5 mt-5">
            <h1 className="font-weight-bold text-center mb-4">Contact Us</h1>

            {/* <p className="text-center w-responsive mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p> */}
            <div className="row">
              <div className="col-lg-12 mb-lg-0 pb-lg-3 pb-4">
                <div className="card contact-card">
                  <div className="card-body contact-card-body">
                    <div className="form-header blue accent-1">
                      {/* <h3 className="mt-2">
                        <i className="fas fa-envelope"></i> Contact Us:
                      </h3> */}
                    </div>
                    <div className="md-form d-flex justify-content-between gap-3">
                      <input
                        type="text"
                        id="form-name"
                        placeholder="Your name"
                        className="form-control border-0 border-bottom rounded-0 mb-4 contact-input"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        id="form-Subject"
                        placeholder="Phone Number"
                        className="form-control border-0 border-bottom rounded-0 mb-4 contact-input"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="md-form">
                      <input
                        type="text"
                        id="form-email"
                        placeholder="Your email"
                        className="form-control border-0 border-bottom rounded-0 mb-4 contact-input"
                        name="emailFrom"
                        value={values.emailFrom}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="md-form">
                      <input
                        type="text"
                        id="form-Subject"
                        placeholder="Subject"
                        className="form-control border-0 border-bottom rounded-0 mb-4 contact-input"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="md-form">
                      <textarea
                        id="form-text"
                        className="form-control md-textarea border-0 border-bottom rounded-0 mb-4 contact-input"
                        placeholder="Send Message"
                        rows="3"
                        name="body"
                        value={values.body}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <Buttton
                        // className=""
                        onClick={handleFormSubmit}
                      >
                        {loader ? (
                          <DotLoader color="#fff" size={35} />
                        ) : (
                          "Submit"
                        )}
                      </Buttton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row text-center contact-icon">
                <div className="col-md-6 contact-form-phone-email">
                  <FaPhone size={25} className="phone-icon-footer form-icon" />
                  <a
                    href="tel:+18663454585"
                    className="mt-0 mb-0 text-decoration-none text-white"
                    style={{ fontSize: "1.2rem" }}
                  >
                    &nbsp;&nbsp;(866) 345-4585
                  </a>
                </div>
                <div className="col-md-6 contact-form-phone-email">
                  <FaEnvelope size={30} className="form-icon" />
                  <a
                    href="mailto:corp@konnectx.us"
                    className="mt-0 mb-0  text-decoration-none text-white"
                    style={{ fontSize: "1.2rem" }}
                  >
                    &nbsp;&nbsp;corp@konnectx.us
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Contact;
