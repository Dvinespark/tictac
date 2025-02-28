import "./game.css";

import { useReducer, useState, useEffect } from 'react';

const initialState = new Array(9).fill("");

function formReducer (state, type) {
  const boxValue = ['O', 'X'];
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
  console.log('function being called');
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    setPlayer(player === 1 ? 0: 1 );
  },[state])

  return (
    <section className="game">
      <div className="game-header">
        <div className={`game-header-left ${player === 0 ? 'active': ''}`}>
          <p>Subash O </p>
        </div>
        <div className={`game-header-right ${player === 1 ? 'active': ''}`}>
          <p>Anu X </p>
        </div>
      </div>

      <div className="game-box">
        <div className="row row1">
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
    </section>
  );
}
