import React from 'react'
import './portfolioList.scss'
import '../portfolio/Portfolio'

export default function PortfolioList({ id, title, active, setSelected}) {

  return (
    <li className={ active? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}
