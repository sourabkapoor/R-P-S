import React from "react"
import "./header.scss"
import Home from "../../assets/home.png"
import { useNavigate, useLocation } from "react-router-dom"

const Header = (props) => {
  let navigate = useNavigate();
  const location = useLocation();

  return <div className="headerMainContr">
    <p>Rock Paper Scissor</p> 

    {/* Show home btn only on play page */}
    {  location.pathname !== "/" &&
      <img 
        src={Home} 
        alt="..." 
        className="homeBtn" 
        onClick={() => navigate("/")}
      />  
    }
    
  </div>
}

export default Header;