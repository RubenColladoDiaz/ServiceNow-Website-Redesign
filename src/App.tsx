import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components";
import {
  ProductImageProvider,
  LogoImageProvider,
  IconImageProvider,
} from "./context";
import Clothing from "./pages/Clothing/Clothing";
import Accessories from "./pages/Accessories/Accessories";
import Technology from "./pages/Technology/Technology";
import Home from "./pages/Home/Home";
import { ROUTES } from "./constants";

function App() {
  return (
    <IconImageProvider>
      <LogoImageProvider>
        <ProductImageProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path={ROUTES.HOME} element={<Home />} />
                  <Route path={ROUTES.CLOTHING} element={<Clothing />} />
                  <Route
                    path={ROUTES.CLOTHING_CATEGORY}
                    element={<Clothing />}
                  />
                  <Route
                    path={ROUTES.ACCESSORIES_CATEGORY}
                    element={<Accessories />}
                  />
                  <Route path={ROUTES.ACCESSORIES} element={<Accessories />} />
                  <Route path={ROUTES.TECHNOLOGY} element={<Technology />} />
                  <Route
                    path={ROUTES.TECHNOLOGY_CATEGORY}
                    element={<Technology />}
                  />
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
