import React from 'react';
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub } from 'react-icons/bs'


import './styles.css'
export function Menu() {
  return (

    <div className='menu'>
      <a className='social' href="https://github.com/frantecbh/mylink" target="_blank"><BsGithub size={24} color='#fff' /> </a>
      <a className='social' href="https://www.linkedin.com/in/francisco-menezes-875a0a36/" target="_blank"><BsLinkedin size={24} color='#fff' /> </a>
      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>

  )
}
