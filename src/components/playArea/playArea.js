import React from "react"
import { ChoiceCards } from "../choiceCards/choiceCards";
import "./playArea.scss"
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const PlayArea = () => {
  let navigate = useNavigate();

  const [compuerScore, setComputerScore] = React.useState(0);
  const [userScore, setUserScore] = React.useState(0)

  React.useEffect(() => {
    if(userScore == 5){
      alert("you won!!")
      navigate('/')
    }
    else if(compuerScore == 5) {
      alert("computer won!!")
      navigate('/')
    }

  }, [compuerScore == 5 || userScore == 5])

  const newMove = (userChoice) => {
    const cOptions = ["Rock", "Paper", "Scissor"];
    const computerChose = cOptions[Math.floor(Math.random() * 3)]

    if(computerChose == "Rock" && userChoice == "Paper") {
      setUserScore(userScore + 1)
    }
    else if(computerChose == "Paper" && userChoice == "Rock") {
      setComputerScore(compuerScore + 1)
    }
    else if(computerChose == "Scissor" && userChoice == "Rock") {
      setUserScore(userScore + 1)
    }
    else if(computerChose == "Rock" && userChoice == "Scissor") {
      setComputerScore(compuerScore + 1)
    }
    else if(computerChose == "Scissor" && userChoice == "Paper") {
      setComputerScore(compuerScore + 1)
    }
    else if(computerChose == "Paper" && userChoice == "Scissor") {
      setUserScore(userScore + 1)
    }
  }

  return <div className="playAreaContr">

    {/* Scores container */}
    <div className="scoresContr">
      <h4>Scores</h4>
      <div className="scoretable">
        <Table sx={{ maxWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Computer</TableCell>
              <TableCell align="center">You</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{compuerScore}</TableCell>
              <TableCell align="center">{userScore}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>

    {/* Cards Container */}
    <ChoiceCards 
      choiceMade={(choice) => newMove(choice)}
    />
  </div>
}

export default PlayArea;