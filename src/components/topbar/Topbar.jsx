import React from 'react'
import './topbar.scss'
import {Person , Mail} from '@material-ui/icons';
// import MailIcon from '@material-ui/icons/Mail';

export default function Topbar() {
  return (
    <div className="topbar">
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

        </div>
      </div>
    </div>
  )
}
