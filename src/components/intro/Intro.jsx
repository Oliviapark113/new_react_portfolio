import {useEffect, useRef } from 'react'
import './intro.scss'
import {init} from 'ityped'
import olivia_intro from '../../Portfolio_photos/olivia_intro_2.png'
import down_arrow from '../../Portfolio_photos/down.png'


export default function Intro() {

  const textRef = useRef()

  useEffect(()=>{
  
    init(textRef.current, { showCursor: true, 
      backDelay:1500,
      backSpeed: 60,
      strings: 
      ['Fashion Designer','Content Creator' ] })
    

  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={olivia_intro} alt="olivia_photo"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, my name is </h2>
          <h1>Olivia Park</h1>
          <h3>Full Stack Developer<br/>
            <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src={down_arrow } alt=""/>
        </a>
      </div>
    
    </div>
  )
}
