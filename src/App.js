//import logo from './logo.svg';
//import './App.css';
import Navbar from "./Navbar";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Blog from "./pages/Blog.js";
import Downloads from "./pages/Downloads.js";
import Pricing from "./pages/Pricing.js";
import { Route, Routes } from "react-router-dom";

function App() {

  /*let component;
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
  }*/
  //This switch statement is  replaced with react-router code 
  return ( // using Routes and Route,replacing { component }. 
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </>
  );
}


export default App;
