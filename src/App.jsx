import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeItem from "./components/Fragments/AnimeItem";
import Homepage from "./components/Fragments/Homepages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
