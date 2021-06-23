import {useState} from 'react'
import "./contact.scss"
import {LinkedIn, GitHub,Mail,PhoneInTalk } from '@material-ui/icons';
import olivia_bio from '../../Portfolio_photos/olivia_bio.png'

export default function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = e=>{
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
     
        <div className="imgContainer">
          <img src={olivia_bio} alt="olivia_photo" />
        </div>

        <div className="textContainer">
          <p className="biotext">
            I am a passionate coder and love to challenge myself creatively.
            As an experience fashion designer, I have bring element of style into technology.
            I am skilled at creative web design using current best practices in web development.
            I am an innovative and collaborative full-stack web developer
            with problem solving skill and seeking for new opportunities in software engineer career.
          </p>

           
          <ul className="technicalSkills">
            <li className="skill-header">----Technical Skills-----</li>
            <li>HTML5 </li>
            <li>CSS</li>
            <li>JavaScript/JQuery</li>
            <li>API</li>
            <li>NODE.JS</li>
            <li>EXPRESS.JS</li>
            <li>MySQL, SEQUELIZE ORM</li>
            <li>MONGODB, MONGOOSE ODM</li>
            <li>REACT, MERN</li>
            <li>Adobe Illustrator & Photoshop</li>
          </ul>
        </div> 
       

      </div>

      <div className="right">
     
      <div className="wrapper">

        <h1>Stay Connected !</h1>
        
        <a href="https://www.linkedin.com/in/olivia-park-74858651/" className="linedIn" target="_blank"rel="noreferrer" >Linked In <LinkedIn className="icon"/></a>

        <a href="https://github.com/Oliviapark113/" target="_blank"rel="noreferrer" className="github">GitHub <GitHub className="icon"/></a>

             <a href="mailto:oliviaypark113@gmail.com" title="oliviaypark113@gmail.com" className="email">
        <Mail className="icon"/>oliviaypark113@gmail.com</a>
     
       < p className="phone">  <PhoneInTalk className="icon"/> 347 852 1517</p>
     
     
           
      
        </div>
      </div>
       
      </div>
      
    
  )
}
