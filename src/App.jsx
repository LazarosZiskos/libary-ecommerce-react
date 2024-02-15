import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import books from "./data.js";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/books"
            element={
              <Books
                id={books.id}
                title={books.title}
                originalPrice={books.originalPrice}
                salePrice={books.salePrice}
                rating={books.rating}
                url={books.url}
              />
            }
          />
          <Route
            path="/books/:id"
            element={
              <BookInfo
                id={books.id}
                title={books.title}
                originalPrice={books.originalPrice}
                salePrice={books.salePrice}
                rating={books.rating}
                url={books.url}
              />
            }
          />
          <Route path="/cart" element={<Cart id={books.id}
                title={books.title}
                originalPrice={books.originalPrice}
                salePrice={books.salePrice}
                rating={books.rating}
                url={books.url} />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
