import { Link } from "react-router-dom"
import Logo from "../assets/Library.svg"

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <Link to="/">
                    <figure className="footer__logo">
                        <img src={Logo} alt="footer-logo" className="footer__logo--img" />
                    </figure>
                </Link>
                <div className="footer__list">
                    <Link to="/" className="footer__link">Home</Link>
                    <Link to="/" className="footer__link">About</Link>                    
                    <Link to="/books" className="footer__link">Books</Link>
                    <Link to="/cart" className="footer__link">Cart</Link>
                </div>
                <div className="footer__copyright">
                Copyright © 2024 Library
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer