import TicTac from '../assets/images/tictac.png';
import './header.css';

function Header() {
    return (
      <header className="header">
        <img className='header-img' src={TicTac} alt="tictac image" />
        <h1>Tic Tac Toe</h1>
      </header>

    )
};

export default Header;