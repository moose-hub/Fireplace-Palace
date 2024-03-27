"use client";
import React, { useCallback, useReducer } from "react";
import "./page.css";

const postForm = (url, body) =>
  new Promise((res, rej) => {
    const t = setTimeout(() => {
      console.table(body);
      res({ message: "Success!" });
      clearTimeout(t);
    }, 1000);
  });

function validate(field, value) {
  console.log("field:", field);
  console.log("value:", value);
  return {
    valid: false,
    message: "Invalid",
  };
}

// REDUCER

const FORM_ACTIONS = {
  UPDATE: "FORM_UPDATE",
  SUBMISSION_VALIDATE: "FORM_SUBMISSION_VALIDATE",
  SUBMITTING: "FORM_SUBMITTING",
  SUBMITTED: "FORM_SUBMITTED",
};

const initial = {
  fields: {
    fname: { value: "", valid: false, validationMessage: "" },
    lname: { value: "", valid: false, validationMessage: "" },
    postcode: { value: "", valid: false, validationMessage: "" },
    address: { value: "", valid: false, validationMessage: "" },
    phone: { value: "", valid: false, validationMessage: "" },
    email: { value: "", valid: false, validationMessage: "" },
  },
  form: { valid: false, isSubmitting: false, hasSubmitted: false },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTIONS.UPDATE: {
      console.log("ACTION.UPDATE");
      const { valid, message } = validate(
        action.payload.field,
        action.payload.value,
      );

      console.log(valid);
      console.log(message);

      return Object.assign(state, {
        [action.payload.field]: {
          value: action.payload.value,
          valid,
          validationMessage: message,
        },
      });
    }
    case FORM_ACTIONS.SUBMISSION_VALIDATE: {
      console.log("ACTION.SUBMISSION_VALIDATE");
      for (const field in state.fields) {
        if (!field.valid) {
          return Object.assign(state, { form: { valid: false } });
        }
      }
      return state;
    }
    case FORM_ACTIONS.SUBMITTING:
      console.log("ACTION.SUBMITTING");
      return Object.assign(state, { form: { isSubmitting: true } });
    case FORM_ACTIONS.SUBMITTED:
      console.log("ACTION.SUBMITTED");
      console.table(state);
      return Object.assign(initial, { form: { hasSubmitted: true } });
    case FORM_ACTIONS.SUBMISSION_ERROR:
      console.log("ACTION.SUBMISSION_ERROR");
      return state;
    default:
      return state;
  }
};

// COMPONENT

function Booking() {
  const [state, dispatch] = useReducer(formReducer, initial);

  const handleChange = useCallback((e) => {
    dispatch({
      type: FORM_ACTIONS.UPDATE,
      payload: { field: e.target.id, value: e.target.value },
    });
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    dispatch({
      type: FORM_ACTIONS.SUBMISSION_VALIDATE,
    });

    if (state.form.valid) {
      dispatch({
        type: FORM_ACTIONS.SUBMITTING,
      });

      postForm("/api/booking", state.fields)
        .then((result) => {
          dispatch({
            type: FORM_ACTIONS.SUBMITTED,
            payload: {
              message: result.message,
            },
          });
        })
        .catch((err) => {
          dispatch({
            type: FORM_ACTIONS.SUBMISSION_ERROR,
            payload: {
              message: err.message,
            },
          });
        });
    }
  });

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
              // required
              // pattern="^[A-Z][a-z]+(?: [A-Z][a-z]+)*$"
              // onInvalid={(e) => {
              //   dispatch({ type: FORM_ACTIONS.VALIDATE, payload: e });
              // }}
            />
            <label htmlFor="fname" className="booking__form-label">
              First Name
            </label>
            <span
              className={`booking__form-error ${
                state.fields.fname.valid ? "hidden" : ""
              }`}
            >
              {state.fields.fname.validationMessage}
            </span>
          </div>
          <div className="input__container">
            <input
              id="lname"
              type="text"
              className="booking__form-input"
              placeholder=""
              onBlur={handleChange}
              // required
              // pattern="^[A-Z][a-z]+(?: [A-Z][a-z]+)*$"
            />
            <label htmlFor="lname" className="booking__form-label">
              Last Name
            </label>
            <span
              className={`booking__form-error ${
                state.fields.lname.valid ? "hidden" : ""
              }`}
            >
              {state.fields.lname.validationMessage}
            </span>
          </div>
          <div className="input__container">
            <input
              id="postcode"
              type="text"
              className="booking__form-input"
              placeholder=""
              onBlur={handleChange}
              // required
              // pattern="^([A-Z][A-HJ-Y]?\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$"
            />
            <label htmlFor="postcode" className="booking__form-label">
              Postcode
            </label>
            <span
              className={`booking__form-error ${
                state.fields.postcode.valid ? "hidden" : ""
              }`}
            >
              {state.fields.postcode.validationMessage}
            </span>
          </div>
          <div className="input__container">
            <input
              id="address"
              type="text"
              className="booking__form-input"
              placeholder=""
              onBlur={handleChange}
              // required
              // pattern="(.|\s)*\S(.|\s)*"
            />
            <label htmlFor="address" className="booking__form-label">
              Address
            </label>
            <span
              className={`booking__form-error ${
                state.fields.address.valid ? "hidden" : ""
              }`}
            >
              {state.fields.address.validationMessage}
            </span>
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
              // required
            />
            <label htmlFor="phone" className="booking__form-label">
              Phone Number
            </label>
            <span
              className={`booking__form-error ${
                state.fields.phone.valid ? "hidden" : ""
              }`}
            >
              {state.fields.phone.validationMessage}
            </span>
          </div>
          <div className="input__container">
            <input
              id="email"
              type="email"
              className="booking__form-input"
              placeholder=""
              onBlur={handleChange}
              // required
            />
            <label htmlFor="email" className="booking__form-label">
              Email
            </label>
            <span
              className={`booking__form-error ${
                state.fields.email.valid ? "hidden" : ""
              }`}
            >
              {state.fields.email.validationMessage}
            </span>
          </div>
          <div className="booking__form-validation">
            {state.form.validationMessage}
          </div>
          <button type="submit" className="booking__form-submit">
            Book Consultation
          </button>
        </ul>
      </form>
    </main>
  );
}

export default Booking;
