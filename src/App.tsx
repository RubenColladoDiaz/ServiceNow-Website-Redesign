import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import { Header, Footer } from "./components";
import {
  ProductImageProvider,
  LogoImageProvider,
  IconImageProvider,
} from "./context";
import { ROUTES } from "./constants";

// Lazy load page components
const Home = lazy(() => import("./pages/Home/Home"));
const Clothing = lazy(() => import("./pages/Clothing/Clothing"));
const Accessories = lazy(() => import("./pages/Accessories/Accessories"));
const Technology = lazy(() => import("./pages/Technology/Technology"));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
  </div>
);

function App() {
  return (
    <IconImageProvider>
      <LogoImageProvider>
        <ProductImageProvider>
          <BrowserRouter>
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
                    <Route path={ROUTES.TECHNOLOGY} element={<Technology />} />
                    <Route
                      path={ROUTES.TECHNOLOGY_CATEGORY}
                      element={<Technology />}
                    />
                  </Routes>
                </Suspense>
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
