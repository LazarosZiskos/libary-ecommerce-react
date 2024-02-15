/* eslint-disable react/prop-types */
import { FaAlignJustify } from "react-icons/fa";
import logo from "../assets/Library.svg"
import { FaShoppingCart } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = ({numberOfItems}) => {
  return (
    <nav>
        <div className="nav__container">
            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
        <ul className="nav__list">
            <li><Link className="nav__link" to="/">Home</Link></li>
            <li><Link className="nav__link" to="/books">Books</Link></li>
            <button className="btn__menu" onClick={() => document.body.classList += (" menu--open")}>
                <FaAlignJustify />
            </button>
            <li className="nav__icon">
                <Link to="/cart" className="nav__link">
                    <FaShoppingCart />
                </Link>
                {
                    numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>
                }
                
            </li>
        </ul>
        <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={() => document.body.classList -= ("menu--open")}>
                <FaWindowClose />
            </button>
            <ul className="menu__links">
                <li className="menu__list">
                    <Link to="/" className="menu__link">Home</Link>
                </li>
                <li className="menu__list">
                    <Link to="/books" className="menu__link">Books</Link>
                </li>
                <li className="menu__list">
                    <Link to="/cart" className="menu__link">Cart</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar