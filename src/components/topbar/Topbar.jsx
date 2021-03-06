import React from 'react'

import './topbar.scss'
import {PhoneInTalk, Mail} from '@material-ui/icons';


export default function Topbar({menuOpen, setMenuOpen}) {
  
   
  return (

    <div className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Olivia.</a>
           <div className="itemContainer">
             <PhoneInTalk className="icon" />
             <span>347 852 1517</span>
           </div>
           <div className="itemContainer">
             <Mail className="icon"/>
             <a href="mailto:oliviaypark113@gmail.com" title="oliviaypark113@gmail.com" className="email">oliviaypark113@gmail.com</a>
           </div>
        </div>

        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
           <span className="line1"></span>
           <span className="line2"></span>
           <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  )
}
