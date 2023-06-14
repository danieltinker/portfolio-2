import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faMugHot} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isActive, setIsActive] = useState(false); // Example hook state

  const toggelLinks = ()=>{
    console.log("is active toggel", isActive)
    setIsActive(!isActive)
  }
  return (
    <div className="App">
      <header>
            <nav id='nav'  style={{ backgroundColor: isActive && windowWidth<555 ? 'rgba(200, 200, 200, 1)':null, paddingBottom: 28} }>
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
              <a href='https://www.linkedin.com/in/daniel-baruch-75204b204/' target='_blank' rel="noreferrer" style={{color:'black'}}>
              <i>
                <FontAwesomeIcon icon={faLinkedin} />
              </i>
              </a>
              <a href='https://github.com/danieltinker' target='_blank' rel="noreferrer" style={{color:'black'}}>
              <i>
              <FontAwesomeIcon icon={faGithub} id='git'/>
              </i>
              </a>
              </div>
              <h1>DANIEL BARUCH</h1>
              <p>&lt;h2&gt; software developer &lt;/h2&gt; </p>
            </div>
        </header>





       
        <footer>
            <span className='credits'>
              Site made with &hearts; and    &nbsp;   <FontAwesomeIcon icon={faMugHot} bounce style={{fontSize:14}} />  &nbsp; by daniel baruch
              </span> 
          </footer>
    </div>
  );
}

export default App;
