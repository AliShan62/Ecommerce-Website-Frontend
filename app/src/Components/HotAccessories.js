import React from 'react';
import "./HotAccessories.css";
import  Card from  "./Card.js";


function HotAccessories({ music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover }) {
  return (
    <div className="HotAccessories">

      <div>
        <img src={musicCover || smartDeviceCover ||homeCover|| lifestyleCover || mobileAccessoriesCover } alt="CoverImage" />
      </div>

      <div>
        {
          music&&music.map((item,index)=>{
             return (
                
                 <Card key={item.key} name={item.name} price={item.price}image={item.image} index={index}/> 
        
             )
            })    

        }

        {/* second */}

        {
           smartDevice&&smartDevice.map((item,index)=>{
             return (
                
                 <Card key={item.key} name={item.name} price={item.price}image={item.image} index={index}/> 
        
             )
            })    

        }


        {/* third */}

        {
           home&&home.map((item,index)=>{
             return (
                
                 <Card key={item.key} name={item.name} price={item.price}image={item.image} index={index}/> 
        
             )
            })    

        }

{/* four */}

{
           lifestyle && lifestyle.map((item,index)=>{
             return (
                
                 <Card key={item.key} name={item.name} price={item.price}image={item.image} index={index}/> 
        
             )
            })    

        }

        {/* five */}
       
        {
           mobileAccessories && mobileAccessories.map((item,index)=>{
             return (
                
                 <Card key={item.key} name={item.name} price={item.price}image={item.image} index={index}/> 
        
             )
            })    

        }



        <Card image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>
      </div>
      
    </div>
  );
}

export default HotAccessories
