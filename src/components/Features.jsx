import books from "../data";
import Book from "./ui/Book";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2>
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .map((book) => (
                     book.rating === 5 ? 
                    <Book key={book.id}
                    rating={book.rating}
                    title={book.title}
                    salePrice={book.salePrice}
                    originalPrice={book.originalPrice}
                    url={book.url}/> : null 
              )).slice(0,6)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
