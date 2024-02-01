import "./App.scss";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Video from "./components/Video/Video";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/movies" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
