import {useState, useEffect} from 'react'
import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import {
  featuredPortfolio, reactPortfolio,fullStackPortfolio,frontEndAPIPortfolio,responsivePortfolio} from '../../data';


export default function Portfolio() {
  const [selected , setSelected] = useState("featured");
  const [data , setData] = useState([]);

 

  const list =[
   {
     id:"featured",
     title: "Featured",
   },

   {
    id:"react",
    title: "React App",
  },

  {
    id:"full-stack",
    title: "Full Stack App",
  },

  {
    id:"javaScript",
    title: "Front-end & API",
  },

  {
    id:"responsive",
    title: "Responsive Design",
  },
  ]
  
  useEffect(()=>{

     switch(selected){
       case "featured":
         setData(featuredPortfolio)
         break;

       case "react":
         setData(reactPortfolio)
         break;

       case "full-stack":
         setData(fullStackPortfolio)
         break;

       case "javaScript":
         setData(frontEndAPIPortfolio)
         break;

       case "responsive":
          setData(responsivePortfolio)
          break;

      default:
            setData(featuredPortfolio);

     }



  },[selected])
  console.log(selected)
  console.log(data)

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
       {list.map(item =>
       <PortfolioList title={item.title} active={selected === item.id}
       setSelected={setSelected} 
       id ={item.id}
       />)
       }
      </ul>
      <div className="container">

        {data.map((d) =>
          (<div className="item">
            <img src={d.img} alt={d.title} />
            <a href={d.viewSite} target="_blank"
              rel="noreferrer" className="sites" >{d.title}</a>
          </div>)
        
        )}
      </div>
    </div>
  )
}
