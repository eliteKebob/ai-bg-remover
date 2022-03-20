import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, About } from "./pages";
import Header from "./components/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
