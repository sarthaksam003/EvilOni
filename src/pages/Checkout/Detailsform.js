import React, { useState, useRef, useEffect } from "react";
import classes from "./Detailsform.module.css";

const Detailsform = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [enteredName, setEnteredName] = useState("");
  const [enteredContact, setEnteredContact] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredStreet, setEnteredStreet] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredPostal, setEnteredPostal] = useState("");
  const [nameValid, setNameValid] = useState("");
  const [contactValid, setContactValid] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [streetValid, setStreetValid] = useState("");
  const [cityValid, setCityValid] = useState("");
  const [postalValid, setPostalValid] = useState("");

  let regexForContact = new RegExp(/^$|^\d{10}$/);
  let regexForPostal = new RegExp(/^$|^\d{6}$/);

  const nameRef = useRef();
  const contactRef = useRef();
  const emailRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const postalRef = useRef();
  const nameInputChangeHandler = () => {
    setEnteredName(nameRef.current.value);
  };
  const contactInputChangeHandler = () => {
    setEnteredContact(contactRef.current.value);
  };
  const emailInputChangeHandler = () => {
    setEnteredEmail(emailRef.current.value);
  };
  const streetInputChangeHandler = () => {
    setEnteredStreet(streetRef.current.value);
  };
  const cityInputChangeHandler = () => {
    setEnteredCity(cityRef.current.value);
  };
  const postalInputChangeHandler = () => {
    setEnteredPostal(postalRef.current.value);
  };

  const checkValidityOfDetails = () => {
    if (enteredName.trim() === "" || enteredName.length < 3) {
      setNameValid("false");
      return;
    } else {
      setNameValid("true");
    }
    if (!regexForContact.test(enteredContact)) {
      setContactValid("false");
      return;
    } else {
      setContactValid("true");
    }
    if (enteredEmail.trim() === "" || !enteredEmail.includes("@")) {
      setEmailValid("false");
      return;
    } else {
      setEmailValid("true");
    }
    if (enteredStreet.trim() === "" || enteredStreet.length < 4) {
      setStreetValid("false");
      return;
    } else {
      setStreetValid("true");
    }
    if (enteredCity.trim() === "" || enteredCity.length < 3) {
      setCityValid("false");
      return;
    } else {
      setCityValid("true");
    }
    if (
      enteredPostal.trim() === "" ||
      enteredPostal.length < 6 ||
      !regexForPostal.test(enteredPostal)
    ) {
      setPostalValid("false");
      return;
    } else {
      setPostalValid("true");
    }
    if (
      nameValid &&
      contactValid &&
      emailValid &&
      postalValid &&
      cityValid &&
      streetValid
    ) {
      setIsValid(true);
      props.isValid(isValid);
      props.getDetails({
        name: enteredName,
        contact: enteredContact,
        email: enteredEmail,
        street: enteredStreet,
        city: enteredCity,
        postal: enteredPostal,
      });
    } else {
      setIsValid(false);
      props.isValid(isValid);
    }
  };

  useEffect(() => {
    checkValidityOfDetails();
    // eslint-disable-next-line
  }, [
    enteredPostal,
    enteredName,
    enteredCity,
    enteredStreet,
    enteredContact,
    enteredEmail,
    isValid,
  ]);

  return (
    <React.Fragment>
      <div className={classes.container}>
        <form className={classes.form}>
          <div
            className={`${
              nameValid === "" || nameValid === "true"
                ? `${classes.control}`
                : `${classes.invalid}`
            }`}
          >
            <div>
              <label htmlFor="name">
                <p>Your Name</p>
                {nameValid === "false" ? (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "Mukta",
                      fontWeight: "bold",
                    }}
                  >
                    3-20 characters required
                  </p>
                ) : (
                  ""
                )}
              </label>
            </div>
            <input
              type="text"
              id="name"
              ref={nameRef}
              onChange={nameInputChangeHandler}
            />
          </div>
          <div
            className={`${
              contactValid === "" || contactValid === "true"
                ? `${classes.control}`
                : `${classes.invalid}`
            }`}
          >
            <div>
              <label htmlFor="phone">
                Contact No.
                {contactValid === "false" ? (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "Mukta",
                      fontWeight: "bold",
                    }}
                  >
                    Contact no. must be exactly 10 digits
                  </p>
                ) : (
                  ""
                )}
              </label>
            </div>
            <input
              type="tel"
              id="contact"
              ref={contactRef}
              onChange={contactInputChangeHandler}
            />
          </div>
          <div
            className={`${
              emailValid === "" || emailValid === "true"
                ? `${classes.control}`
                : `${classes.invalid}`
            }`}
          >
            <div>
              <label htmlFor="email">
                E-mail Address
                {emailValid === "false" ? (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "Mukta",
                      fontWeight: "bold",
                    }}
                  >
                    Email-address must have '@' followed by valid domain name
                  </p>
                ) : (
                  ""
                )}
              </label>
            </div>
            <input
              type="text"
              id="email"
              ref={emailRef}
              onChange={emailInputChangeHandler}
            />
          </div>
          <div
            className={`${
              streetValid === "" || streetValid === "true"
                ? `${classes.control}`
                : `${classes.invalid}`
            }`}
          >
            <div>
              <label htmlFor="street">
                Street
                {streetValid === "false" ? (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "Mukta",
                      fontWeight: "bold",
                    }}
                  >
                    4-20 characters required
                  </p>
                ) : (
                  ""
                )}
              </label>
            </div>
            <input
              type="text"
              id="street"
              ref={streetRef}
              onChange={streetInputChangeHandler}
            />
          </div>

          <div
            className={`${
              cityValid === "" || cityValid === "true"
                ? `${classes.control}`
                : `${classes.invalid}`
            }`}
          >
            <div>
              <label htmlFor="city">
                City
                {cityValid === "false" ? (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "Mukta",
                      fontWeight: "bold",
                    }}
                  >
                    4-20 characters required
                  </p>
                ) : (
                  ""
                )}
              </label>
            </div>
            <input
              type="text"
              id="city"
              ref={cityRef}
              onChange={cityInputChangeHandler}
            />
          </div>
          <div
            className={`${
              postalValid === "" || postalValid === "true"
                ? `${classes.control}`
                : `${classes.invalid}`
            }`}
          >
            <div>
              <label htmlFor="postal">
                Postal Code
                {postalValid === "false" ? (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "Mukta",
                      fontWeight: "bold",
                    }}
                  >
                    Postal Code must be 6 digits long
                  </p>
                ) : (
                  ""
                )}
              </label>
            </div>
            <input
              type="text"
              id="postal"
              ref={postalRef}
              onChange={postalInputChangeHandler}
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Detailsform;
