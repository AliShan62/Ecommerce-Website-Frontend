import React from 'react'
import './Card.css'
function Card({name,price,image,index}) {
  return (
    <div className="Card">
      <img src={image} alt={`${index} product`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default Card
