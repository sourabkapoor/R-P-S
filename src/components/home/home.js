import React from "react"
import Button from '@mui/material/Button';
import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  let navigate = useNavigate();

  return <div className="homeContr">
    {/* Play button */}
    <Button 
      className="playButton"
      onClick={() =>  navigate('/play')}
    >
      Let's Play
    </Button>

    <div className="rulesContr">
      <div>Rules:</div>
      <ul>
        <li>Rock beats Scissors</li>
        <li>Paper beats Rock</li>
        <li>Scissors beats Paper</li>
      </ul>
    </div>
  </div>
}

export default Home;