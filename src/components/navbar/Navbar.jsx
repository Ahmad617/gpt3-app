import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu= ()=> (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)


function Navbar() {
  const [toggleMenu, setToggleMenu]= useState(false);
  
  
  return (
    <div className="Navbar">
      <div className='Navbar_links'>
        <div className='Navbar_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='Navbar_container'>
          <Menu />
        </div>
      </div>
      <div className='Navbar_sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="Navbar_menu">
        {toggleMenu
          ? <RiCloseLine size={27} color='#fff' onClick={()=> setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="Navbar-menu_container scale-up-ver-top">
            <div className="Navbar-menu-container_links">
              <Menu />
              <div className='Navbar-menu_sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div> 
        )}
      </div>
    </div>
  )
}

export default Navbar;