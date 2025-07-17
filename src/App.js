import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Peace from "./pages/Peace";
import Karamchand from "./pages/Karamchand";
import Indoor from "./pages/Indoor";
import Outdoor from "./pages/Outdoor";
import Royal from "./pages/Royal";
import Aarambhe from "./pages/Aarambhe"
import ScrollToTop from "./components/Scroll/Scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peace" element={<Peace />} />
          <Route path="/aarambhe" element={<Aarambhe/>}/>

          <Route path="/karam" element={<Karamchand />}>
            <Route index element={<Indoor />} />
            <Route path="indoor" element={<Indoor />} />
            <Route path="outdoor" element={<Outdoor />} />
          </Route>
          <Route path="/royal" element={<Royal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
