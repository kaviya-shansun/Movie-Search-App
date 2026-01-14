import "./Header.css";
import Search from "./Search";
import Login from "./Login";
import Toogle from "./Toogle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="headerBegining">Company Logo</div>
      <div className="headerEnd">
        <div className="searchCard">
          <Search />
        </div>
        <div onClick={() => navigate("/login")} className="loginCard">
          <Login />
        </div>
        <div>
          <Toogle />
        </div>
      </div>
    </header>
  );
};

export default Header;
