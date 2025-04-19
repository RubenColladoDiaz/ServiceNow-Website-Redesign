import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ProductImageProvider } from "./context/ProductImageContext";
import { LogoImageProvider } from "./context/LogoImageContext";
import { IconImageProvider } from "./context/IconImageContext";

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
