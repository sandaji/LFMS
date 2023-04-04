import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import {  FaBell, FaFlushed, FaLanguage, FaList, FaMoneyCheckAlt, FaRegHandRock, FaSearch } from "react-icons/fa";
import "./navbar.scss";

const Navbar = () => {
  // const { dispatch } = useContext(DarkModeContext);
    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;



  return (
    <div className="navbar ">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <FaSearch />
        </div>
      <div bg="light" className="top text-white">
        <Link to="/profile" className="navbar-brand">welcome {"  "}
          <Badge className="logo text-white">{userInfo.name}</Badge>
        </Link>
      </div>
        <div className="items">
          <div className="item">
            <FaLanguage className="icon" />
            English
          </div>
          <div className="item">
            <FaRegHandRock
              className="icon"
              // onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FaFlushed className="icon" />
          </div>
          <div className="item">
            <FaBell className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FaMoneyCheckAlt className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FaList className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
