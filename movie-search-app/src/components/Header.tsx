import "./Header.css";
import Search from "./Search";
import Login from "./Login";
import Toogle from "./Toogle";

const Header = () => {
  return (
    <header className="header">
      <nav className="headerBeginning">
        <span>Movies</span>
        <span>Series</span>
        <span>Animation</span>
      </nav>
      <div>
        <Search />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Toogle />
      </div>
    </header>
  );
};

export default Header;
