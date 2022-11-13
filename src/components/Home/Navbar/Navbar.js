import "./Navbar.css";
import { Link } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs"
export const Navbar = () => {
    return(
        <div className="nav">
            <div className="flex-row nev-left">
                <BsHouseFill size={20} className="logo-icon"/>
                <div className="nav-icon">Estatery</div>
                <div className="nav-links">
                    <ul className="nav-links-ul flex-row">
                        <Link to="/"><li className="nav-active">Rent</li></Link>
                        <li>Buy</li>
                        <li>Sell</li>
                        <li>Manage Property</li>
                        <li>Resources</li>
                        <Link to="/favourites"><li>Favourites</li></Link>
                    </ul>
                </div>
            </div>
            <div className="nav-right nav-buttons">
                <button className="button button-secondary">Login</button>
                <button className="button button-primary margin-left-1">SignUp</button>
            </div>
        </div>
    )
}