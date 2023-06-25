import React, { useRef, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./Contact.css";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import Modal from "../../components/Cart/Modal";
import { Link } from "react-router-dom";

const Contact = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [nameValid, setNameValid] = useState("neutral");
  const [enteredName, setEnteredName] = useState("");
  const [emailValid, setEmailValid] = useState("neutral");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [remarkValid, setRemarkValid] = useState("neutral");
  const [enteredRemark, setEnteredRemark] = useState("");
  const [subscription, setSubscription] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const remarkRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Evil Oni - Contact Us";
  }, []);

  const nameValidator = () => {
    if (
      nameRef.current.value.trim() !== "" &&
      nameRef.current.value.length > 3
    ) {
      setNameValid("true");
      setEnteredName(nameRef.current.value);
    } else {
      setNameValid("false");
    }
  };
  const emailValidator = () => {
    if (
      emailRef.current.value.trim() !== "" &&
      emailRef.current.value.includes("@")
    ) {
      setEmailValid("true");
      setEnteredEmail(emailRef.current.value);
    } else {
      setEmailValid("false");
    }
  };
  const remarkValidator = () => {
    if (
      remarkRef.current.value.trim() !== "" &&
      remarkRef.current.value.length > 4
    ) {
      setRemarkValid("true");
      setEnteredRemark(remarkRef.current.value);
    } else {
      setRemarkValid("false");
    }
  };

  const subscribedOrNot = () => {
    setSubscription(!subscription);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(nameValid && emailValid && remarkValid);
    if (nameValid && remarkValid && emailValid) {
      setShowModal(true);
      const feedbackToSend = {
        name: enteredName,
        email: enteredEmail,
        remark: enteredRemark,
        subscription: subscription,
      };
      try {
        // eslint-disable-next-line
        const response = await fetch(
          "https://eviloni-backend.onrender.com/feedbacks",
          {
            method: "POST",
            body: JSON.stringify(feedbackToSend),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const triggerModal = () => {
    setShowModal(false);
  };

  const clearInputFields = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    remarkRef.current.value = "";
  };

  return (
    <React.Fragment>
      <div className="contact-us-layout">
        {showModal && (
          <Modal onClose={props.onClose}>
            <div className="close-btn">
              <Link to="/">
                <GrIcons.GrClose
                  style={{ cursor: "pointer" }}
                  onClick={triggerModal}
                />
              </Link>
            </div>
            <div className="tick-mark">
              <FaIcons.FaCheckCircle
                style={{ fontSize: "10rem", margin: "2rem" }}
                id="tick"
              />
              <p>Thank you for your feedback and suggestions!</p>
            </div>
          </Modal>
        )}
        <div className="contt">
          <div className="contacts-email-heading">
            <p>
              <BsIcons.BsTelephoneOutbound
                style={{ width: "2.6rem", marginRight: "0.4rem" }}
              />
              CALL US
            </p>
            <p>
              <HiIcons.HiOutlineMail />
              EMAIL
            </p>
          </div>
          <div className="contact-email">
            <p>8383838383</p>
            <p>connect@eviloni.com</p>
          </div>
        </div>
        <div className="container">
          <div className="feedback">
            <VscIcons.VscFeedback style={{ marginRight: "0.4rem" }} />
            SHOW US SOME LOVE. SEND US A FEEDBACK
          </div>
          <div className="container feedback-form">
            <form className="form" onSubmit={onSubmitHandler}>
              <div
                className={`control ${nameValid === "false" ? "invalid" : ""}`}
              >
                <label htmlFor="name">Your Name</label>
                {nameValid === "false" ? (
                  <p>Name must be more than 4 characters</p>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  id="name"
                  ref={nameRef}
                  onChange={nameValidator}
                />
              </div>
              <div
                className={`control ${emailValid === "false" ? "invalid" : ""}`}
              >
                <label htmlFor="email">E-mail Address</label>
                {emailValid === "false" ? (
                  <p>Email must include '@' followed by valid domain name</p>
                ) : (
                  ""
                )}
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  onChange={emailValidator}
                />
              </div>
              <div
                className={`control ${
                  remarkValid === "false" ? "invalid" : ""
                }`}
              >
                <label htmlFor="remarks">Remarks</label>
                {remarkValid === "false" ? (
                  <p>Remark or feedback must be more than 4 characters long</p>
                ) : (
                  ""
                )}
                <textarea
                  type="text"
                  id="remarks"
                  ref={remarkRef}
                  onChange={remarkValidator}
                />
              </div>
              <div className="checkboxes">
                <p>
                  <Form.Check
                    type="checkbox"
                    id="checkbox"
                    onClick={subscribedOrNot}
                    value={subscription}
                  />
                  <p>Click this to subscribe to the Evil Oni Newsletter!</p>
                </p>
              </div>
              <div className="actions">
                <button
                  type="submit"
                  className="submit"
                  disabled={
                    (nameValid && emailValid && remarkValid === "false") ||
                    (nameValid && emailValid && remarkValid === "neutral")
                      ? true
                      : false
                  }
                >
                  Confirm
                </button>
                <button type="button" onClick={clearInputFields}>
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
