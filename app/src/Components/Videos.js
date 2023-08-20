import React from 'react'
import './Videos.css'
import VideoCard from "./VideoCard";
function Videos({videos}) {
  return (
    <div className="Videos">
      {
        videos.map((item,index)=>{
          return(
          <VideoCard index={index} key={item.key} image={item.image} name={item.name}/>
          )
      })
      }
    </div>
  )
}

export default Videos
