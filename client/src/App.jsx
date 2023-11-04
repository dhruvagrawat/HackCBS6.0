import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <div className="nav-content"> {/* Replaced class with className */}
          <div className="logo">
            <a href="#">Mike Hawk Hertz.</a>
          </div>
          <ul className="nav-links"> {/* Replaced class with className */}
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <section className="home"></section> {/* Replaced class with className */}
      <div className="text"> {/* Replaced class with className */}
        <h2>Sticky Navigation Bar</h2> {/* Removed the paragraph tag surrounding the heading */}
        <p>Lorem ipsum... {/* Your content here */}</p>
        <p>Lorem ipsum... {/* Your content here */}</p>
      </div>
    </>
  );
}

export default App;
