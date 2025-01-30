import './App.css';
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Gallery from "./gallery";
import Contact from "./Contact";
import { Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"
import Footer from './Footer';
import Datav from './datav';
import WebDesignAndDev from './sites';
import MotionGraphics from './motion';
import LayoutDesign from './editorial';
import LogoDesign from './logodesign';
import UiuxDesign from './uiux';
import Shop from './shop';
import ThreeD from "./threeD";
import IconsBook from "./Icons";
import Rose from './rose';

function App() {
  return (
      <div className="App">
        <nav>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/gallery" className="nav-item">Gallery</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </nav>
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
        <Footer>

        </Footer>
      </div>
  );
}

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/datav" element={<Datav />}></Route>
      <Route path="/webdesignanddev" element={<WebDesignAndDev />}></Route>
      <Route path="/motion" element={<MotionGraphics />}></Route>
      <Route path="/threeD" element={<ThreeD />}></Route>
      <Route path="/editorial" element={<LayoutDesign />}></Route>
      <Route path="/logodesign" element={<LogoDesign />}></Route>
      <Route path="/uiux" element={<UiuxDesign />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/icons" element={<IconsBook/>}></Route>
      <Route path="/rose" element={<Rose/>}></Route>
    </Routes>
  );
}

export default App;
