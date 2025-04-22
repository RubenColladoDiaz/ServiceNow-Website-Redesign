import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ProductImageProvider } from "./context/ProductImageContext";
import { LogoImageProvider } from "./context/LogoImageContext";
import { IconImageProvider } from "./context/IconImageContext";
import Clothing from "./pages/Clothing/Clothing";
import Accessories from "./pages/Accessories/Accessories";
import Technology from "./pages/Technology/Technology";

function App() {
  return (
    <IconImageProvider>
      <LogoImageProvider>
        <ProductImageProvider>
          <BrowserRouter>
            <div className="min-h-screen">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/clothing" element={<Clothing />} />
                  <Route path="/accessories" element={<Accessories />} />
                  <Route path="/technology" element={<Technology />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </ProductImageProvider>
      </LogoImageProvider>
    </IconImageProvider>
  );
}

export default App;
