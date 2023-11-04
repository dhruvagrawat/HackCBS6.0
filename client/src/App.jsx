import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

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
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
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
                <a className="signup" href='#'><u>sign up</u></a>
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
                  <span style={{ color: '#000' }}> Welcome to <mark>TinDr</mark> </span> <br /><br />
                  <span style={{ color: '#000', fontSize: '16px' }}> Best hopsital appointments booking site </span> <br /><br />
                  Our platform is designed for seamless healthcare scheduling. Users can easily book appointments with top doctors in various hospitals. With a user-friendly interface, scheduling is convenient and straightforward. Our focus is on prioritizing your well-being and time efficiency. <br /><br />
                   <br /><br />
                  <br />
                </td>
                <td style={{ paddingLeft: '11em' }}> <img src='src\assets\about.jpg' width="400px" alt="about" /></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="text">
        <h2 id="second section">second section</h2>
        <p>Our platform is designed for seamless healthcare scheduling. Users can easily book appointments with top doctors in various hospitals. With a user-friendly interface, scheduling is convenient and straightforward. Our focus is on prioritizing your well-being and time efficiency.</p>
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
