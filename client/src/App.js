import "./App.scss";

import HomePage from "./pages/HomePage/HomePage";
import Video from "./components/Video/Video";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
