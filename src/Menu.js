import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Menu() {
    const navigate = useNavigate();
  return (
     <div className="Intro">Choose Your Game:
        <button onClick={()=>navigate('/game',{state:1})}>Single Player</button>
        <button onClick={()=>navigate('/game',{state:2})}>Two Players</button></div>
  )
}
