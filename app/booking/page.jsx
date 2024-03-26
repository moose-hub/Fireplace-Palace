import "./page.css";

function Booking() {
  return (
    <form class="booking__form" action="/booking" method="post">
      <h2 className="booking__form-heading">Personal Information:</h2>
      <ul className="booking__form-section">
        <label htmlFor="name" className="booking__form-label">
          Full Name
        </label>
        <input id="name" type="text" className="booking__form-input" />
        <label htmlFor="postcode" className="booking__form-label">
          Postcode
        </label>
        <input id="postcode" type="text" className="booking__form-input" />
        <label htmlFor="address" className="booking__form-label">
          House/Flat number and Street Name
        </label>
        <input id="address" type="text" className="booking__form-input" />
        <label htmlFor="city" className="booking__form-label">
          City
        </label>
        <input id="city" type="text" className="booking__form-input" />
      </ul>
      <h2 className="booking__form-heading">Contact Information:</h2>
      <ul className="booking__form-section">
        <label htmlFor="phone" className="booking__form-label">
          Phone Number
        </label>
        <input id="phone" type="text" className="booking__form-input" />
        <label htmlFor="email" className="booking__form-label">
          Email
        </label>
        <input id="email" type="text" className="booking__form-input" />
      </ul>
      <div className="booking__form-validation"></div>
      <button type="button" className="booking__form-submit">
        Request Design Consultation
      </button>
    </form>
  );
}

export default Booking;
