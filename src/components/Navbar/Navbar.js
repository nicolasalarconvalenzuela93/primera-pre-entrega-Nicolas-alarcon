import React from 'react';
import "../Navbar/Navbar.css";
import CartWidget from '../CartWidget';


export const Navbar = () => {
  return(
    <div className='container'>
      <nav className='nav'>
        <div className='nav-brands'>    
          <a href="/">Primera-Preentrega-NICOLAS-ALARCON</a>
        </div>
        <ul className='nav-list'>
          <li>
            <a href="/">     *Home</a>
          </li>
          <li>
            <a href="/">     *Somos</a>
          </li>
          <li>
            <a href="/">     *Galeria</a>
          </li>
          <li>
            <a href="/">     *Contactanos</a>
          </li>
          <li>
            <a href="/"><CartWidget/></a>
          </li>
                    
    
        </ul>
      </nav> 
    </div>
    );
  };

  export default Navbar;