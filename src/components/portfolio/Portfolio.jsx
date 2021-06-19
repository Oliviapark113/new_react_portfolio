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
    id:"javascript",
    title: "Front-end & API",
  },

  {
    id:"responsive",
    title: "Responsive Design",
  },
  ]
  
  useEffect(()=>{

     switch(selected){
       case "Featured":
         setData(featuredPortfolio)
         break;

       case "React App":
         setData(reactPortfolio)
         break;

       case "Full Stack App":
         setData(fullStackPortfolio)
         break;

       case "Front-End & API":
         setData(frontEndAPIPortfolio)
         break;

       case "Responsive Design":
          setData(responsivePortfolio)
          break;

      default:
            setData(featuredPortfolio);

     }



  },[selected])

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

              
          {/* <div className="item">
            <img src="../assets/demo 2.gif" alt="" />
          
            <a href="https://evening-castle-79713.herokuapp.com/" target="_blank"
         rel="noreferrer" className="sites">Eat Da Burger</a>
    
          </div> */}
     
        
        {data.map((d) =>
        (<div className="item">
            <img src={d.img} alt={d.title} />
            <h3 className="sites">{d.title}</h3>
          </div>)
        
        )}
      </div>
    </div>
  )
}
