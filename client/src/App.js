import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainRoutes from "./Routes/MainRoutes";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/header/Header";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/*"
          element={
            <div className="App">
              <Header />
              <MainRoutes />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
