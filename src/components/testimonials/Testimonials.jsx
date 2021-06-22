import React from 'react'
import './testimonials.scss'
import {LinkedIn} from '@material-ui/icons';

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "David Tolliver",
      title: "Executive Managing Director, Castlewood Advisors",
      img:
        "assets/david_t.png",
        linkedIn:"https://www.linkedin.com/in/david-tolliver-9a0a0821/",
     
      // icon: "assets/twitter.png",
      desc: "I run a boutique mergers & acquisitions advisory firm in New York.  I recently retained Olivia’s services to clean up our firm’s website and to create website for me personally. I could not have been happier with her speed, creativity and subject matter expertise.  We will use her again for other project work."
    },
    {
      id: 2,
      name: "Josh Naylor",
      title: "Lead Instructor of Northwestern Univerity Boot Camp",
      img:
        "assets/josh_n.png",
      linkedIn:"https://www.linkedin.com/in/zylocodes/",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Marty Judge",
      title: "CEO of Judge Outdoor",
      img:
        "assets/marty_j.png",
      linkedIn:"https://www.linkedin.com/in/martyjudge22/",
      desc:
        "I have known Olivia for almost 5 years. I followed her progress through coding boot camp. We were very excited to have her work with our marketing team to create to help us to create a new brand and image for our online presence.",
    },
     




  ]






  return (
    <div className="testimonials" id="testimonials">
      <h1>References</h1>
      <div className="container">
        {data.map(d =>

            ( <div className={d.featured ? "card featured" : "card"}>

            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
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
