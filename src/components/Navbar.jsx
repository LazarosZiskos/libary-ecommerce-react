import { FaAlignJustify } from "react-icons/fa";
import logo from "../assets/Library.svg"
import { FaShoppingCart } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
        <div className="nav__container">
            <a href="/">
                <img className="logo" src={logo} alt="logo" />
            </a>
        <ul className="nav__list">
            <li><a className="nav__link" href="/home">Home</a></li>
            <li><a className="nav__link" href="/home">Books</a></li>
            <button className="btn__menu">
                <FaAlignJustify />
            </button>
            <li className="nav__icon">
                <a href="/cart" className="nav__link">
                    <FaShoppingCart />
                </a>
                <span className="cart__length">2</span>
            </li>
        </ul>
        <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close">
                <FaWindowClose />
            </button>
            <ul className="menu__links">
                <li className="menu__list">
                    <a href="/" className="menu__link">Home</a>
                </li>
                <li className="menu__list">
                    <a href="/books" className="menu__link">Books</a>
                </li>
                <li className="menu__list">
                    <a href="/cart" className="menu__link">Cart</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar