"use client";
import React, { useState } from "react";
import "./page.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  const [validationMessage, setValidationMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const isEmptyField = Object.values(formData).some((value) => value === "");
    if (isEmptyField) {
      setValidationMessage("Please fill in all fields");
    } else {
      setValidationMessage("");

      console.log(`Form data: ${JSON.stringify(formData)}`);
    }
  }
  return (
    <form
      className="booking__form"
      action="api/booking"
      method="post"
      onSubmit={handleSubmit}
    >
      <h2 className="booking__form-heading">Personal Information:</h2>
      <ul className="booking__form-section">
        <label htmlFor="name" className="booking__form-label">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          className="booking__form-input"
          onBlur={handleChange}
          required
          pattern="^[A-Z][a-z]+(?: [A-Z][a-z]+)*$"
        />
        <label htmlFor="postcode" className="booking__form-label">
          Postcode
        </label>
        <input
          id="postcode"
          type="text"
          className="booking__form-input"
          onBlur={handleChange}
          required
          pattern="^([A-Z][A-HJ-Y]?\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$"
        />
        <label htmlFor="address" className="booking__form-label">
          House/Flat number and Street Name
        </label>
        <input
          id="address"
          type="text"
          className="booking__form-input"
          onBlur={handleChange}
          required
          pattern="(.|\s)*\S(.|\s)*"
        />
        <label htmlFor="city" className="booking__form-label">
          City
        </label>
        <input
          id="city"
          type="text"
          className="booking__form-input"
          onBlur={handleChange}
        />
      </ul>
      <h2 className="booking__form-heading">Contact Information:</h2>
      <ul className="booking__form-section">
        <label htmlFor="phone" className="booking__form-label">
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          className="booking__form-input"
          onBlur={handleChange}
          required
        />
        <label htmlFor="email" className="booking__form-label">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="booking__form-input"
          onBlur={handleChange}
        />
      </ul>
      <div className="booking__form-validation">{validationMessage}</div>
      <button type="submit" className="booking__form-submit">
        Request Design Consultation
      </button>
    </form>
  );
}

export default Booking;
