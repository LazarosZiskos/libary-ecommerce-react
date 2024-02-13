import { useState } from "react";
import Book from "../components/ui/Book";
import books from "../data.js"


const Books = () => {
  const [filteredBooks, setFilteredBooks] = useState(books)


  function filterBooks(filter) {
    switch (filter) {
      case "LOW_TO_HIGH":
        return setFilteredBooks(
          filteredBooks
            .slice()
            .sort(
              (a, b) =>
                (a.salePrice || a.originalPrice) -
                (b.salePrice || b.originalPrice)
            )
        );
      case "HIGH_TO_LOW":
        return setFilteredBooks(
          filteredBooks
            .slice()
            .sort(
              (a, b) =>
                (b.salePrice || b.originalPrice) -
                (a.salePrice || a.originalPrice)
            )
        );
      case "RATING":
        return setFilteredBooks(filteredBooks.slice().sort((a, b) => b.rating - a.rating));
      default:
        break;
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select id="filter" defaultValue="DEFAULT" onChange={(e) => filterBooks(e.target.value)}>
                    <option value="DEFAULT" disabled>Sort</option>
                    <option value="LOW_TO_HIGH" >Price, Low to High</option>
                    <option value="HIGH_TO_LOW" >Price, High to Low</option>
                    <option value="RATING" >Rating</option>
                </select>
              </div>
              <div className="books">
                {
                    books.map((book) => 
                        <Book key={book.id}
                        id={book.id}
                        title={book.title}
                        url={book.url}
                        salePrice={book.salePrice}
                        originalPrice={book.originalPrice}
                        rating={book.rating} />
                    )
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
