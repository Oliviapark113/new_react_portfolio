import {useState} from 'react'
import "./contact.scss"
import {LinkedIn, GitHub} from '@material-ui/icons';

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
          <img src="assets/olivia_bio.png" alt="olivia_photo" />
        </div>

        <div className="textContainer">
          <p className="biotext">
            My name is Olivia Park.<br />
            I am a passionate coder and love challenge myself creatively.<br />
            With a 20+ years experience as fashion design in NYC,<br/>
            I have skilled at creative web design using current best practices in web development.
            <br />
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
          {/* <ul className="skill-icons">
            <ul className="skill-icons">
             
              <li><i class="fab fa-css3-alt"></i> </li>
              <li><i class="fab fa-js"></i></li>
              <li><i class="fab fa-node"></i></li>
              <li><i class="fab fa-react"></i></li>
            </ul>
    </ul> */}
        </div> 
       

      </div>

      <div className="right">
     
      <div className="wrapper">

        <h1>Stay Connected !</h1>
        
        <a href="https://www.linkedin.com/in/olivia-park-74858651/" className="linedIn" target="_blank"rel="noreferrer" >Linked In <LinkedIn className="icon"/></a>

        <a href="https://github.com/Oliviapark113/" target="_blank"rel="noreferrer" className="github">GitHub <GitHub className="icon"/></a>
      
        </div>
      </div>
       
      </div>
      
    
  )
}
