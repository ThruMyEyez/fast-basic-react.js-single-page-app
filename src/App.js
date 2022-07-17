//import logo from './logo.svg';
//import './App.css';
import Navbar from "./Navbar";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Blog from "./pages/Blog.js";
import Downloads from "./pages/Downloads.js";
import Pricing from "./pages/Pricing.js";

function App() {
  //It is important to use a Capitalized letter for the Var.
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/blog":
      component = <Blog />;
      break;
    case "/downloads":
      component = <Downloads />;
      break;
    case "/pricing":
      component = <Pricing />;
      break;
    default:
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
    </>
  );
}


export default App;
