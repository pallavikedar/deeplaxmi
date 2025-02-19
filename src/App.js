import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Peace from "./pages/Peace";
import Karamchand from "./pages/Karamchand";
import Indoor from "./pages/Indoor";
import Outdoor from "./pages/Outdoor";
import Royal from "./pages/Royal";
import ScrollToTop from "./components/Scroll/Scroll";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peace" element={<Peace />} />
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
