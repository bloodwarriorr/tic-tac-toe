
import Board from './Board';
import BoardComp from './BoardComp'
import Info from "./Info";
import InfoComp from './InfoComp'  
import "./css/app.css";
import { useState,useEffect } from 'react';
import HeadLine from './HeadLine';
import { useLocation, useParams } from 'react-router-dom';
  
function Game({route,navigate}) {
    const { state } = useLocation();
    // Creating a reset state, which indicates whether 
    // the game should be reset or not
    const [reset, setReset] = useState(false);
    //state score
    const[scoreBoard,setScoreBoard]=useState({player:0,computer:0})
    // Creating a winner state, which indicates
    // the current winner
    const [winner, setWinner] = useState('');
  
    // Sets the reset property to true
    // which starts the chain 
    // reaction of resetting the board
    const resetBoard = () => {
        setReset(true);
    }
 useEffect(() => {
    if (winner==="Computer Wins!"||winner==="Player 2 Wins!") {
        setScoreBoard({player:scoreBoard.player,computer:scoreBoard.computer+1})
    }
    else if(winner==="Player Wins!"||winner==="Player 1 Wins!"){
        setScoreBoard({player:scoreBoard.player+1,computer:scoreBoard.computer})
    }
 }, [winner])
 
    return (
        <div className="Intro">
           <HeadLine score={scoreBoard} type={state}/>
            {/* Shrinks the popup when there is no winner */}
            <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                {/* Display the current winner */}
                <div className='winner-text'>{winner}</div>
                {/* Button used to reset the board */}
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div>
            {/* Custom made board component comprising of 
            the tic-tac-toe board  */}
            
       {state===1&&<>
            <BoardComp reset={reset} setReset={setReset} winner={winner} 
                setWinner={setWinner} />
            <InfoComp /></>}
            {state===2&&<><Board reset={reset} setReset={setReset} winner={winner} 
                setWinner={setWinner} />
            <Info /></>
            }
         
            
                       
        </div>
    );
}
  
export default Game;