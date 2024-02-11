/* eslint-disable react/prop-types */

import { RxStarFilled } from "react-icons/rx";
import { TbStarHalfFilled } from "react-icons/tb";

const Book = ({ title, url, salePrice, originalPrice }) => {
  return (
    <div className="book">
      <a href="/">
        <figure className="book__img--wrapper">
          <img src={url} alt="book-image" className="book__img" />
        </figure>
        <div className="book__title">
          <a href="/" className="book__title--link">
            {title}
          </a>
        </div>
        <div className="book__ratings">
          <RxStarFilled />
          <RxStarFilled />
          <RxStarFilled />
          <RxStarFilled />
          <TbStarHalfFilled />
        </div>
        <div className="book__price">
          {salePrice ? (
            <>
              <span className="book__price--normal">{originalPrice.toFixed(2)}</span>
              {salePrice.toFixed(2)}
            </>
          ) : (
            <>{originalPrice.toFixed(2)}</>
          )}
        </div>
      </a>
    </div>
  );
};

export default Book;
