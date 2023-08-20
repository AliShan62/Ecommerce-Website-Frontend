import React from 'react'
import  "./NavCard.css";

function NavCard({price,image,key,name,index}) {
  return (
    <div className="NavCard">
        <img src={image} alt={`${index} phone`} />
        <p>{name}</p>
        <span>{price}</span>
      
    </div>
  )
}

export default NavCard
