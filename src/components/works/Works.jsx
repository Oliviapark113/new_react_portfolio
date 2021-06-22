import {useState} from 'react'
import './works.scss'
import project3_demo from "../../demo/project3_demo.gif"
import booksearch_demo from "../../demo/booksearch_demo.gif"
import doodle_demo from "../../demo/doodlestarter.gif"
import arrow from "../../Portfolio_photos/arrow.png"

export default function Works(){
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleClick =(way)=>{
    way === 'left'
    ?setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
    :setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)
  }
  

  const data=[

    {
      id: 1,
      title: "Mornig Cup of JavaScript",
      img: project3_demo,
      description:"Built a web app to cater users to latest tech news, coding challenges and a project inspiration generator.",
      viewSite: "https://secure-wave-92624.herokuapp.com/",
      viewCode: "https://github.com/Oliviapark113/morning_cup_of_javascript"

    },

    {
      id: 2,
      title: "Google Book Search",
      img: booksearch_demo,
      description:"Shopping app to allow users to simulate e-commerce shopping experience where users can select, edit and delete in their choices.",
      viewSite: "https://polar-lowlands-42713.herokuapp.com/",
      viewCode: "https://github.com/Oliviapark113/google_books_search_21",

    },

    {
      id: 3,
      title: "Dailey Doodles",
      img: doodle_demo,
      description:"Drawing App to simulate drawing pads where users can draw with brush tools , pick the color and save, delete and edit drawings and memo.",
      viewSite: "https://desolate-harbor-56312.herokuapp.com/",
      viewCode: "https://github.com/Oliviapark113/my_daily_doodle_starter",

    },

  ]
  return (
    <div className="works" id="works">
        <h1>Featured Works</h1>
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
   
      {
        data.map(d=>
          ( <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                {/* <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div> */}
                <h2>{d.title}</h2>
                <p>{d.description}</p>
                <a href={d.viewSite} target="_blank"rel="noreferrer" className="project">Project</a>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt=""/>
            </div>
          </div>
        </div>)
          )
      }
      </div>
      <img src={arrow} className="arrow left" alt="" onClick={()=>handleClick("left")} />
      <img src={arrow} className="arrow right" alt="" onClick={()=>handleClick("right")} />
    </div>
  )
}
