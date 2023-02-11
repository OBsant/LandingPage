import "./styles/main.sass";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Destinations />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
