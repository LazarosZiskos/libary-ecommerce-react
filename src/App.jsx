import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import books from "./data.js";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map((item) =>    {   
      return item.id === book.id ? {
        ...item,
        quantity: +quantity
      } : item
  }))
  }

  useEffect(() => {
    console.log(cart);
  },[cart])


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
                addToCart={addToCart}
                cart={cart}
              />
            }
          />
          <Route path="/cart" element={<Cart id={books.id}
                title={books.title}
                originalPrice={books.originalPrice}
                salePrice={books.salePrice}
                rating={books.rating}
                url={books.url}
                cart={cart}
                changeQuantity={changeQuantity}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
