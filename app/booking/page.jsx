"use client";
import React, { useReducer } from "react";
import "./page.css";

// REDUCER

const FORM_ACTIONS = {
  UPDATE: "FORM_UPDATE",
  SUBMIT: "FORM_SUBMIT",
};

const initial = {
  fname: "",
  lname: "",
  postcode: "",
  address: "",
  phone: "",
  email: "",
  validation: {
    message: "",
  },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTIONS.UPDATE:
      return { ...state, ...action.payload };
    case FORM_ACTIONS.SUBMIT: {
      const hasEmptyField = Object.values(state).some((value) => value === "");
      if (hasEmptyField) {
        return { ...state, validation: action.payload };
      }
      // Success
      console.log(state);
      return initial;
    }
    default:
      return state;
  }
};

// COMPONENT

function Booking() {
  const [state, dispatch] = useReducer(formReducer, initial);

  function handleChange(e) {
    dispatch({
      type: FORM_ACTIONS.UPDATE,
      payload: { [e.target.id]: e.target.value },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: FORM_ACTIONS.SUBMIT,
      payload: {
        message: "Please fill in all fields",
      },
    });
  }
  return (
    <main className="booking__content">
      <section className="booking__banner">Design Booking</section>
      <form
        className="booking__form"
        action="api/booking"
        method="post"
        onSubmit={handleSubmit}
      >
        <ul className="booking__form-list">
          <h2 className="booking__form-heading">
            So we know where our fireplace will be going
          </h2>
          <div className="input__container">
            <input
              id="fname"
              type="text"
              className="booking__form-input"
              placeholder=""
              onBlur={handleChange}
              required
              pattern="^[A-Z][a-z]+(?: [A-Z][a-z]+)*$"
            />
            <label htmlFor="fname" className="booking__form-label">
              First Name
            </label>
          </div>
          <div className="input__container">
            <input
              id="lname"
              type="text"
              className="booking__form-input"
              placeholder=""
              onBlur={handleChange}
              required
              pattern="^[A-Z][a-z]+(?: [A-Z][a-z]+)*$"
            />
            <label htmlFor="lname" className="booking__form-label">
              Last Name
            </label>
          </div>
          <div className="input__container">
            <input
              id="postcode"
              type="text"
              className="booking__form-input"
              placeholder=""
              onBlur={handleChange}
              required
              pattern="^([A-Z][A-HJ-Y]?\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$"
            />
            <label htmlFor="postcode" className="booking__form-label">
              Postcode
            </label>
          </div>
          <div className="input__container">
            <input
              id="address"
              type="text"
              className="booking__form-input"
              placeholder=""
              onBlur={handleChange}
              required
              pattern="(.|\s)*\S(.|\s)*"
            />
            <label htmlFor="address" className="booking__form-label">
              Address
            </label>
          </div>
          <h2 className="booking__form-heading">
            So we know how to contact you
          </h2>
          <div className="input__container">
            <input
              id="phone"
              type="text"
              className="booking__form-input"
              placeholder=""
              onBlur={handleChange}
              required
            />
            <label htmlFor="phone" className="booking__form-label">
              Phone Number
            </label>
          </div>
          <div className="input__container">
            <input
              id="email"
              type="email"
              required
              className="booking__form-input"
              placeholder=""
              onBlur={handleChange}
            />
            <label htmlFor="email" className="booking__form-label">
              Email
            </label>
          </div>
          <button type="submit" className="booking__form-submit">
            Book Consultation
          </button>
        </ul>
        <div className="booking__form-validation">
          {state.validation.message}
        </div>
      </form>
    </main>
  );
}

export default Booking;
