import React from 'react'

export default function HeadLine(props) {
    let {player,computer}=props.score
    

  return (
    <div className="info">
        <p className="headLine">{props.type===1?`Player Score: ${player}`:`Player1 Score: ${player}`}</p>
        <p className="headLine">{props.type===1?`Comp Score: ${computer}`:`Player 2 Score: ${computer}`}</p>
    </div>
  )
}
