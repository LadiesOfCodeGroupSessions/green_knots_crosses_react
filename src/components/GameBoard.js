import React, { createContext } from 'react'
import Cell from './Cell';
import cellsgrid from './cellsgrid';
/* import PlayerTurnProvider from './PlayerTurnProvider'; */
import {PlayersTurn, PlayerContext} from "./PlayersTurn"; 

import classes from './Style.module.css'
// import Players from './Players'; // determines player turn with X or O, Player X starts first


// note here need to be able to select the spaces. The css needs setting/connecting for this 

const GameBoard = (props) => {
  // const [gameBoardSpace, setGameBoardSpace] = React.useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  // const [score, setScore] = React.useState("");
  
  const [player, setPlayer] = React.useState("X");

  const [cells, setCells] = React.useState(cellsgrid)
  // const [winningPatterns, setWinningPatterns] = React.useState([
  //   [0, 4, 8],
  //   [0, 1, 2],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [2, 4, 6],
  //   [3, 4, 5],
  //   [6, 7, 8]
  // ]);



function clickCell(e) {
  console.log("Clicked here")
  let cellNumber = e.target.dataset.number
  console.log(cellNumber)
  // cellNumber = 5;
  let displayValue = player

  
  cells[cellNumber-1].value = displayValue
  console.log(cells)
  console.log("This is player")
  console.log(player)

  setCells([...cells])
  setPlayer("O")
 
  }
  
    const cellElements = () => {
      console.log("This is cellElements")
      console.log(cells)
      return cells.map(cell => (
      <Cell
          key={cell.id} 
          id={cell.id}
          clickCell={clickCell}
          value = {cell.value}
      />
    ))
  }
      return (
        <div className={classes.container}>
       
         <PlayerContext.Provider value={player} >
           {cellElements()} 

         </PlayerContext.Provider>
        </div>

      ) 

}
export default GameBoard;