import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div>
        <div className="header-wrapper">
          <header>
            <nav>
              <div className="nav-content">
                <div className="logo">
                  <a href="#">Mike Hawk Hertz.</a>
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
                <button className="login">log in</button>
              </div>
              <div className="rightsection">
                monki
                {/* content */}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Replaced class with className */}
      <div className="text"> {/* Replaced class with className */}
        <h2 id="about">About Us</h2> {/* Removed the paragraph tag surrounding the heading */}
        <p>Our platform is designed for seamless healthcare scheduling. Users can easily book appointments with top doctors in various hospitals. With a user-friendly interface, scheduling is convenient and straightforward. Our focus is on prioritizing your well-being and time efficiency.</p>

      </div>

    </>
  );
}

export default App;
