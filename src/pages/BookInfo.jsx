/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import books from "../data.js";
import Rating from "../components/ui/Rating.jsx";
import Price from "../components/ui/Price.jsx";

const BookInfo = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FaArrowLeft />
              </Link>
              <Link to="/boos" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={books[0].url}
                  alt="book image"
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{books[0].title}</h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={30} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <div className="book__summary--para">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eum impedit sed omnis esse nobis enim, eveniet eius possimus
                    temporibus cum accusamus asperiores? Repudiandae doloribus
                    quis, laborum error excepturi est ea?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eum impedit sed omnis esse nobis enim, eveniet eius possimus
                    temporibus cum accusamus asperiores? Repudiandae doloribus
                    quis, laborum error excepturi est ea?</p>
                  </div>
                  <button className="btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book__container">
            <div className="row">
                <div className="book__selected--top">
                    <h2 className="book__selected--title--top">
                        Recommended Books
                    </h2>
                    
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
