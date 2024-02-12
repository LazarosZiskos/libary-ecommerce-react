import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import books from "./data.js"


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
              <Books id={books.id} title={books.title} originalPrice={books.originalPrice} salePrice={books.salePrice} rating={books.rating} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
