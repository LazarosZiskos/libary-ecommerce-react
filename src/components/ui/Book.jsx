/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";


const Book = ({ title, url, salePrice, originalPrice, rating }) => {
  return (
    <div className="book">
      <Link to="/books/1">
        <figure className="book__img--wrapper">
          <img src={url} alt="book-image" className="book__img" />
        </figure>
        <div className="book__title">
          <Link to="/books/1" className="book__title--link">
            {title}
          </Link>
        </div>
        <Rating rating={rating}/>
        <Price salePrice={salePrice} originalPrice={originalPrice}/>
      </Link>
    </div>
  );
};

export default Book;
