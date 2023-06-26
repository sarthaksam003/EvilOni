import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Evil Oni - Contact Us";
  }, []);

  const callbackToGrabFeedback = async (feedback) => {
    const feedbackToSend = {
      name: feedback.name,
      email: feedback.email,
      remark: feedback.remark,
      subscription: true,
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
    setShowModal(true);
  };

  const triggerModal = () => {
    setShowModal(false);
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
                id={classes["tick"]}
              />
              <p classes={classes["modal-text-anim"]}>Thank you for your feedback and suggestions!</p>
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
        <div className={classes["container"]}>
          <div className={classes["feedback"]}>
            <VscIcons.VscFeedback style={{ marginRight: "0.4rem" }} />
            SHOW US SOME LOVE. SEND US A FEEDBACK
          </div>
          <div id={classes["feedbackform"]}>
            <ContactForm callbackToGrabFeedback={callbackToGrabFeedback} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
