import "./App.css";
import { Home, InCategory } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/in-category/:category_id" element={<InCategory />} />
      </Routes>
    </div>
  );
}

export default App;
