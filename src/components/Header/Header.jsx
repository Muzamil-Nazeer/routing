
 import { NavLink } from "react-router-dom";

function Header (){
  return(
    <div className="nav_container">
      <ul className="nav_item">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contect">Contect</NavLink></li>
        <li><NavLink to="/github">Github</NavLink></li>
        </ul>
        </div>
  )
}
export default Header;
