/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import books from "../data.js";
import Rating from "../components/ui/Rating.jsx";
import Price from "../components/ui/Price.jsx";
import Book from "../components/ui/Book.jsx"

const BookInfo = ({addToCart}) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  console.log(book);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FaArrowLeft />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt="book image"
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <div className="book__summary--para">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum impedit sed omnis esse nobis enim, eveniet eius
                      possimus temporibus cum accusamus asperiores? Repudiandae
                      doloribus quis, laborum error excepturi est ea?
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum impedit sed omnis esse nobis enim, eveniet eius
                      possimus temporibus cum accusamus asperiores? Repudiandae
                      doloribus quis, laborum error excepturi est ea?
                    </p>
                  </div>
                  <button className="btn" onClick={() => addToCart(book)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
            {
              books.filter(book => book.rating === 5 && +book.id != +id)
              .slice(0,4)
              .map(book => <Book key={book.id}
                id={book.id}
                title={book.title}
                url={book.url}
                salePrice={book.salePrice}
                originalPrice={book.originalPrice}
                rating={book.rating}/>)
            }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
