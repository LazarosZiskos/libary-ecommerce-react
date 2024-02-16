import books from "../data";
import Book from "./ui/Book";

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <div className="section__title">
            <h2>
              Discounted <span className="purple">Books</span>
            </h2>
          </div>
          <div className="books">
            {books.map(
              (book) =>
                book.salePrice && (
                  <Book
                    key={book.id}
                    rating={book.rating}
                    title={book.title}
                    salePrice={book.salePrice}
                    originalPrice={book.originalPrice}
                    url={book.url}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
