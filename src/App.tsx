import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import MyContainer from "./components/MyContainer"
import About from "./components/About"
import './i18n'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header /> 
        <div style={{ padding: "16px" }}> 
          <Routes>
            <Route path="/" element={<MyContainer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
