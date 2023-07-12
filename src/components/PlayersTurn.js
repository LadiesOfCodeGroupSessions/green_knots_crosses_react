import React, { createContext }  from 'react';

// determines player turn with X or O, Player X starts first
  
export const PlayersTurn = {
    playerSymbol: ["X", "O"],
    players: [{player1Token: "", player2Token: ""}],
    score: ""
}

export const PlayerContext = createContext();




