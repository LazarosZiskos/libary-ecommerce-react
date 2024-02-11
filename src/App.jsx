import Features from "./components/Features";
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
    </div>
  );
}

export default App;
