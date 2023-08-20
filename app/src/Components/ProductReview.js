import React from 'react'
import "./ProductReview.css"
import ProductReviewCard from "./ProductReviewCard";
function ProductReview({productReviews}) {
  return (
    <div className="ProductReview">
      
      {
        productReviews.map((item,index)=>{
          return(
            <ProductReviewCard key={item.key} name={item.name} price={item.price} review={item.review} index={index} image={item.image} />
          )
        })
      }
    </div>
  )
}

export default ProductReview
