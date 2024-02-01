import "./App.scss";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <section className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:movieId" element={<HomePage />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
