import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <div className='navBar'>
            <div className='logo'>Dictionary App</div>

            <div className='left-section'>
              <NavLink to ="/">
                <div className='home'>Home</div>
              </NavLink>

              <NavLink to ="/history">
                <div className='histo'>History</div>
              </NavLink>
            </div>
        </div>
    </>
  )
}

export default NavBar