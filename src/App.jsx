import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IntroPage from "./components/Intro";
import ResumePage from "./components/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/mySelf" element={<ResumePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
