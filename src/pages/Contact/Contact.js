import React, { useRef, useEffect, useState } from "react";
import ContactForm from "./ContactForm.jsx";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import Modal from "../../components/Cart/Modal";
import { Link } from "react-router-dom";
import classes from "./Contact.module.css";
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
      <div className={classes["contact-us-layout"]}>
        {showModal && (
          <Modal onClose={props.onClose}>
            <div className={classes["close-btn"]}>
              <Link to="/">
                <GrIcons.GrClose
                  style={{ cursor: "pointer" }}
                  onClick={triggerModal}
                />
              </Link>
            </div>
            <div className={classes["tick-mark"]}>
              <FaIcons.FaCheckCircle
                style={{ fontSize: "10rem", margin: "2rem" }}
                id="tick"
              />
              <p>Thank you for your feedback and suggestions!</p>
            </div>
          </Modal>
        )}
        <div className={classes["contt"]}>
          <div className={classes["contacts-email-heading"]}>
            <div>
              <BsIcons.BsTelephoneOutbound
                style={{ width: "2.6rem", marginRight: "0.7rem" }}
              />
              Call us
            </div>
            <div style={{ fontSize: "2rem", marginLeft: "1rem" }}>
              8383838383
            </div>
          </div>
          <div className={classes["contacts-email-heading"]}>
            <div>
              <HiIcons.HiOutlineMail
                style={{ width: "2.6rem", marginRight: "0.7rem" }}
              />
              Email
            </div>
            <div style={{ fontSize: "2rem", marginLeft: "1rem" }}>
              connect@eviloni.com
            </div>
          </div>
        </div>
        {/* <div className="contt">
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
        </div> */}
        <div className={classes["container"]}>
          <div className={classes["feedback"]}>
            <VscIcons.VscFeedback style={{ marginRight: "0.4rem" }} />
            SHOW US SOME LOVE. SEND US A FEEDBACK
          </div>
          <div id={classes["feedbackform"]}>
            <ContactForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
