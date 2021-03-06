import React from 'react'
import './testimonials.scss'
import {LinkedIn} from '@material-ui/icons';
import david_t from '../../Portfolio_photos/david_t.png'
import josh_n from '../../Portfolio_photos/josh_n.png'
import marty_j from '../../Portfolio_photos/marty_j.png'
import right_arrow from '../../Portfolio_photos/right-arrow.png'

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "David Tolliver",
      title: "Executive Managing Director,Castlewood Advisors",
      img:david_t,
        linkedIn:"https://www.linkedin.com/in/david-tolliver-9a0a0821/",
     
      // icon: "assets/twitter.png",
      desc: "I run a boutique mergers & acquisitions advisory firm in New York.  I recently retained Olivia’s services to clean up our firm’s website and to create a website for me personally. I could not have been happier with her speed, creativity and subject matter expertise.  We will use her again for other project work."
    },
    {
      id: 2,
      name: "Josh Naylor",
      title: "Lead Instructor of Northwestern Univerity Boot Camp",
      img:josh_n,
      linkedIn:"https://www.linkedin.com/in/zylocodes/",
      desc:
        "Olivia was a standout student in a class of 30+ students. She clearly has great passion for this new career path. I am very confident that she will be very sucessful and value added to any team that she joins",
      featured: true,
    },
    {
      id: 3,
      name: "Marty Judge",
      title: "CEO of Judge Outdoor",
      img:marty_j,
      linkedIn:"https://www.linkedin.com/in/martyjudge22/",
      desc:
        "I have known Olivia for almost 5 years. I followed her progress through coding boot camp. We were very excited to have her work with our marketing team to help us to create our new brand and enhance our online presence.",
    },
     




  ]






  return (
    <div className="testimonials" id="testimonials">
      <h1>References</h1>
      <div className="container">
        {data.map(d =>

            ( <div className={d.featured ? "card featured" : "card"}>

            <div className="top">
              <img src={right_arrow } className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <a href={d.linkedIn} target="_blank"rel="noreferrer" ><LinkedIn className="right"/></a>
          
            </div>

            <div className="center">
              {d.desc}
            </div>

            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>

            </div>
           )

          
        )}
  
      </div>
    </div>
  )
}
