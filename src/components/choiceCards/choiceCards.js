import React from "react";
import "./choiceCards.scss"
import Rock from "../../assets/rock.png"
import Paper from "../../assets/paper.png"
import Scissor from "../../assets/scissor.png"

export const ChoiceCards = (props) => {

  return <div className="choiceCardsContr">
    
    {/* Rock */}
    <div className="cardContr"
      onClick={() => props.choiceMade("Rock")}
    >
      <img alt="..." src={Rock} />
      <h3>Rock</h3>
    </div>

    {/* paper */}
    <div className="cardContr"
      onClick={() => props.choiceMade("Paper")}
    >
      <img src={Paper} alt="..." />
      <h3>Paper</h3>
    </div>

    {/* Scissor */}
    <div className="cardContr"
      onClick={() => props.choiceMade("Scissor")}
    >
      <img src={Scissor} alt="..." />
      <h3>Scissor</h3>
    </div>
  </div>
}