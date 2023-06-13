import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [isActive, setIsActive] = useState(false); // Example hook state

  const toggelLinks = ()=>{
    console.log("is active toggel", isActive)
    setIsActive(!isActive)
  }
  return (
    <div className="App">
      <header>
            <nav id='nav'>
              <p className='logo'>db</p>

              <i id='bars' className='fas fa-bars'><FontAwesomeIcon onClick={()=>{toggelLinks()}} icon={faBars} /></i>
              <div  className={`nav-links ${isActive ? 'active' :''}`} >
                <ul>
                  <li>
                    <a href='/#about'>About</a>
                  </li>
                  <li>
                    <a href='/#projects'>Projects</a>
                  </li>
                  <li>
                    <a href='/#contact'>Contact</a>
                  </li>
                  <li>
                    <a target='_blank' rel="noreferrer" id='resume' href='https://drive.google.com/file/d/1xZQ1BQYEIas7EzDnpSh574w2g5YPnbKb/view?usp=sharing'>Resume</a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className='text-box'>
              <div className='socials'>
              <a href='https://www.linkedin.com/in/daniel-baruch-75204b204/' style={{color:'black'}}>
              <i>
                <FontAwesomeIcon icon={faLinkedin} />
              </i>
              </a>
              <a href='https://github.com/danieltinker' style={{color:'black'}}>
              <i>
              <FontAwesomeIcon icon={faGithub} />
              </i>
              </a>
              </div>
              <h1>DANIEL BARUCH</h1>
              <p>&lt;h2&gt; software developer &lt;/h2&gt; </p>
            </div>
        </header>
    </div>
  );
}

export default App;
