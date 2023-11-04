import { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [hospital, setHospital] = useState('');
  const [weekday, setWeekday] = useState(new Date());

  const handleFormToggle = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleHospitalChange = (event) => {
    setHospital(event.target.value);
  };

  const handleWeekdayChange = (date) => {
    setWeekday(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <div className="header-wrapper">
        <header>
          <nav>
            <div className="nav-content">
              <div className="logo">
                <a href="#">TinDr</a>
              </div>
              <ul className="nav-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#appointment">Appointment</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <div className="home-wrapper">
        <section className="home">
          <div className="firstsection">
            <div className="leftsection">
              <h1 className="welcome">Welcome to TinDr!</h1>
              <h5 className="tagline">Aiding AIDS since yo mama's birth</h5>
              <div className="lognsign">
                <button className="login">log in</button>
                <a className="signup" href="#">
                  <u>sign up</u>
                </a>
              </div>
            </div>
            <div className="rightsection">
              monki
              {/* content */}
            </div>
          </div>
        </section>
      </div>
      <div className="text">
        <h2 id="about">About Us</h2>
        <div className="bottom">
          <div>
            <table border="0">
              <tr>
                <td width="700px">
                  <span style={{ color: '#000' }}> Welcome to <mark>TinDr</mark> </span> <br />
                  <br />
                  <span style={{ color: '#000', fontSize: '16px' }}> Best hospital appointments booking site </span> <br />
                  <br />
                  Our platform is designed for seamless healthcare scheduling. Users can easily book appointments with top doctors in various hospitals. With a user-friendly interface, scheduling is convenient and straightforward. Our focus is on prioritizing your well-being and time efficiency. <br />
                  <br />
                  <br />
                  <br />
                </td>
                <td style={{ paddingLeft: '11em' }}> <img src='src\assets\about.jpg' width="400px" alt="about" /></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="text">
        <h2 id="appointment">Book an appointment</h2>
        <p>Booking an appointment has never been easier</p>
        <button onClick={handleFormToggle} className="FAQ__title">
          Book Now <i className={`fal fa-plus ${isFormOpen ? 'fa-rotate-45' : 'fa-2x'}`}></i>
        </button>
        {isFormOpen && (
          <form onSubmit={handleSubmit} className="mini-form">
            <label>Location:</label>
            <select value={location} onChange={handleLocationChange}>
              <option value="Delhi">Delhi</option>
              <option value="Haryana">Haryana</option>
              <option value="UP">UP</option>
            </select>
            <br />
            <label>Hospital Name:</label>
            <select value={hospital} onChange={handleHospitalChange}>
              <option value="Hospital 1">Hospital 1</option>
              <option value="Hospital 2">Hospital 2</option>
              <option value="Hospital 3">Hospital 3</option>
            </select>
            <br />
            <label>Weekday:</label>
            <DatePicker selected={weekday} onChange={handleWeekdayChange} dateFormat="MMMM d, yyyy" />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <div className="text">
        <h2 id="third section">third section</h2>
        <p>Our platform is designed for seamless healthcare scheduling. Users can easily book appointments with top doctors in various hospitals. With a user-friendly interface, scheduling is convenient and straightforward. Our focus is on prioritizing your well-being and time efficiency.</p>
      </div>
      <div className="text">
        <h2 id="fourth section">fourth section</h2>
        <p>Our platform is designed for seamless healthcare scheduling. Users can easily book appointments with top doctors in various hospitals. With a user-friendly interface, scheduling is convenient and straightforward. Our focus is on prioritizing your well-being and time efficiency.</p>
      </div>
    </div>
  );
}

export default App;
