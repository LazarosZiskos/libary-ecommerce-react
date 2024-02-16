/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";
import { useEffect, useRef, useState } from "react";

const Book = ({ title, url, salePrice, originalPrice, rating, id }) => {
  const [img, setImg] = useState();

  // When we switch routes dont set image to unmounted component
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      // When the component unmounts 
      mountedRef.current = false;
    };
  }, [url]);

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${id}`}>
            <figure className="book__img--wrapper">
              <img
                src={img.src}
                alt="book-image"
                className="book__img"
              />
            </figure>
            <div className="book__title">
              <Link to={`/books/${id}`} className="book__title--link">
                {title}
              </Link>
            </div>
            <Rating rating={rating} />
            <Price salePrice={salePrice} originalPrice={originalPrice} />
          </Link>
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
