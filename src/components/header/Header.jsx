import "./header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav-bar">
      <Link to={"/"}>
        <img
          className="nav-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="nav-search">
        <input className="nav-search-input" />
        <SearchIcon className="nav-search-icon" />
      </div>
      <div className="nav-links">
        <Link className="nav-link" to={"/login"}>
          <div className="nav-option">
            <span className="nav-optionLineOne">Hello</span>
            <span className="nav-optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link className="nav-link" to={"/"}>
          <div className="nav-option">
            <span className="nav-optionLineOne">Return</span>
            <span className="nav-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link className="nav-link" to={"/"}>
          <div className="nav-option">
            <span className="nav-optionLineOne">Your</span>
            <span className="nav-optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link className="nav-link" to={"/checkout"}>
          <div className="nav-optionBasket">
            <ShoppingBasketIcon />
            <span className="nav-optionLineTwo nav-basketCount">5</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
