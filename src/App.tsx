import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-page">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
