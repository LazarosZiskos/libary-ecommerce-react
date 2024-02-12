import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
    <Navbar />
    <Landing />
    <Highlights />
    <Features />
    <Discounted />
    <Explore />
    <Footer />
    </div>
  );
}

export default App;
