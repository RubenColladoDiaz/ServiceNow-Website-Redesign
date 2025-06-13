import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ProductImageProvider,
  IconImageProvider,
  LogoImageProvider,
} from "./context";
import { CartProvider } from "./context/CartContextDefinition";
import { Header, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";

// Lazy load page components
const Home = React.lazy(() => import("./pages/Home/Home"));
const Clothing = React.lazy(() => import("./pages/Clothing/Clothing"));
const Accessories = React.lazy(() => import("./pages/Accessories/Accessories"));
const Technology = React.lazy(() => import("./pages/Technology/Technology"));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <LogoImageProvider>
      <Router>
        <ProductImageProvider>
          <IconImageProvider>
            <CartProvider>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <Suspense fallback={<LoadingFallback />}>
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
                      <Route
                        path={ROUTES.ACCESSORIES}
                        element={<Accessories />}
                      />
                      <Route
                        path={ROUTES.TECHNOLOGY}
                        element={<Technology />}
                      />
                      <Route
                        path={ROUTES.TECHNOLOGY_CATEGORY}
                        element={<Technology />}
                      />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </CartProvider>
          </IconImageProvider>
        </ProductImageProvider>
      </Router>
    </LogoImageProvider>
  );
};

export default App;
