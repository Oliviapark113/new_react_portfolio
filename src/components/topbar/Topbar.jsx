import React from 'react'

import './topbar.scss'
import {Person , Mail} from '@material-ui/icons';


export default function Topbar({menuOpen, setMenuOpen}) {


  return (
    <div className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Olivia.</a>
           <div className="itemContainer">
             <Person className="icon" />
             <span>+01 347 852 1517</span>
           </div>
           <div className="itemContainer">
             <Mail className="icon"/>
             <span>oliviaypark113@gmail.com</span>
           </div>
        </div>

        <div className="right">
            <div className="hamburger">
           <span className="line1"></span>
           <span className="line2"></span>
           <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  )
}
