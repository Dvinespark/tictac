import "./game.css";

import { useReducer, useState, useEffect } from 'react';
import { checkWinner } from "../utils/util";

const initialState = new Array(9).fill("");
const boxValue = ['O', 'X'];

function formReducer (state, type) {

  switch(type.action) {
    case "clicked" :
      return state.map((item, index) =>  item = (index === type.index) ? boxValue[type.value] : item );
    case "reset" :
      return initialState;

    default:
      return initialState;
  }
}


export default function Game() {

  const [player, setPlayer] = useState(Math.round(Math.random(2)));
  const [winner, setWinner] = useState("");
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    setWinner(checkWinner(state));
    setPlayer(player === 1 ? 0 : 1 );
  },[state])

  return (
    <section className="game">
      <div className="game-header">
        <div className={`game-header-left ${player === 0 ? 'active': ''}`}>
          <p>Player {boxValue[player]} </p>
        </div>
        <div className={`game-header-right ${player === 1 ? 'active': ''}`}>
          <p>Player {boxValue[player]} </p>
        </div>
      </div>

        <div className={winner !== "" ? "" : "winner"}  >Winner is <strong>Player {winner}</strong></div>

      <div className= {`game-box ${winner === "" ? "" : " board-disable"}`}>
        <div className="row row1">
          {/* {
            state.map((value,index) => {
                  return <input type="button" disabled={value !== ""} onClick={() => dispatch({action:"clicked",value: player, index:index })} value={value} />
            })
          } */}
          <input type="button" disabled={state[0] !== ""} onClick={() => dispatch({action:"clicked",value: player, index:0 })} value={state[0]} />
          <input type="button" disabled={state[1] !== ""} onClick={() => dispatch({action:"clicked",value: player, index:1 })} value={state[1]} />
          <input type="button" disabled={state[2] !== ""} onClick={() => dispatch({action:"clicked",value: player, index:2 })} value={state[2]} />
        </div>
        <div className="row row2">
          <input type="button" disabled={state[3] !== ""} onClick={() => dispatch({action:"clicked",value: player, index:3 })} value={state[3]} />
          <input type="button" disabled={state[4] !== ""} onClick={() => dispatch({action:"clicked",value: player, index:4 })} value={state[4]} />
          <input type="button" disabled={state[5] !== ""} onClick={() => dispatch({action:"clicked",value: player, index:5 })} value={state[5]} />
        </div>
        <div className="row row3">
          <input type="button" disabled={state[6] !== ""} onClick={() => dispatch({action:"clicked",value: player, index:6 })} value={state[6]} />
          <input type="button" disabled={state[7] !== ""} onClick={() => dispatch({action:"clicked",value: player, index:7 })} value={state[7]} />
          <input type="button" disabled={state[8] !== ""} onClick={() => dispatch({action:"clicked",value: player, index:8 })} value={state[8]} />
        </div>
      </div>

        <div>
          <button onClick={() => {dispatch({action: "reset"}); setWinner("")}}>Reset Board</button>
        </div>
    </section>
  );
}
