import "./App.css";
import { Home, InCategory, Rules, QuizPage, Result } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/in-category/:category_id" element={<InCategory />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/quizPage" element={<QuizPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
