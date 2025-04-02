import React from 'react'
import './Header.css'
import Logo from '../../assets/audit-report-survey-icon.png'
function Header() {
  return (
    <div className='header'>
        <img className='logo-img' src={Logo} alt="task clipboard icon" />
        <h1>TODO TASKS APP</h1>
        <span className='dot'></span>
    </div>
  )
}

export default Header