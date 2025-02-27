import "./game.css";

export default function Game() {
  return (
    <section className="game">
      <div className="game-header">
        <div className="game-header-left">
          <p>Subash O </p>
        </div>
        <div className="game-header-right">
          <p>Anu X </p>
        </div>
      </div>

      <div className="game-box">
        <div className="row row1">
          <input type="button" value="X" />
          <input type="button" />
          <input type="button" />
        </div>
        <div className="row row2">
          <input type="button" placeholder="" />
          <input type="button" />
          <input type="button" />
        </div>
        <div className="row row3">
          <input type="button" placeholder="" />
          <input type="button" />
          <input type="button" />
        </div>
      </div>
    </section>
  );
}
