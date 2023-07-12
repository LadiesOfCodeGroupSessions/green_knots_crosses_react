import classes from './Style.module.css'
// click event needs to be added to this
import React, { useContext } from 'react'
import {PlayerContext} from "./PlayersTurn"; 


const Cell = (props) => {
    console.log(props.id)
    // const cellDisplay = {
        
    // }
    const player = useContext(PlayerContext);

    return (
        <div 
            className={classes.cell}
            key = {props.id}
            data-number={props.id}
            onClick={props.clickCell}
        >
            {props.value} == {player}         
            
        </div>
    )
}

export default Cell;