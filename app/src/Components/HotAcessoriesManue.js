import React from 'react'
import './HotAcessoriesManue.css';
import {Link} from "react-router-dom";
function HotAcessoriesManue() {
  return (
    <div className="HotAcessoriesManue">
        <Link className="HotAcessoriesManuelink" to="/music">Music Store </Link>
        <Link className="HotAcessoriesManuelink" to="/smartDevice">Smart Device </Link>
        <Link className="HotAcessoriesManuelink" to="/home">Home </Link>
        <Link className="HotAcessoriesManuelink" to="/lifestyle">Lifestyle</Link>
        <Link className="HotAcessoriesManuelink" to="/mobilAccessories">Mobile Accessories </Link>
        
    </div>
  )
}

export default HotAcessoriesManue
