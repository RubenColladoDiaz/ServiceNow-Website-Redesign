import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { motion } from "framer-motion";

import { useIconImageContext } from "../../hooks/useIconImageContext";
import { useLogoImageContext } from "../../hooks";
import { useProductImageContext } from "../../hooks/useProductImageContext";
import {
  ClothesImagesInterface,
  AccessoriesImagesInterface,
  TechnologyImagesInterface,
} from "../../types/productImagesRoute";
import { useCartContext } from "../../hooks/useCartContext";
import CartModal from "../Cart/CartModal.tsx";

function SearchToggle() {
  const { iconImages } = useIconImageContext();
  const { clothesImages, accessoriesImages, technologyImages } =
    useProductImageContext();
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const allProducts = useMemo(
    () => [...clothesImages, ...accessoriesImages, ...technologyImages],
    [clothesImages, accessoriesImages, technologyImages],
  );

  const filteredProducts = useMemo(
    () =>
      allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase()),
      ),
    [allProducts, searchText],
  );

  const handleResultClick = useCallback(
    (product: ProductType) => {
      let basePath = "/";
      if (product.category) {
        if (
          ["tshirts", "shirts", "jackets", "pants", "shoes"].includes(
            product.category,
          )
        ) {
          basePath = `/clothing/${product.category}`;
        } else if (
          ["backpacks", "caps", "watches", "rings", "belts"].includes(
            product.category,
          )
        ) {
          basePath = `/accessories/${product.category}`;
        } else if (
          ["laptops", "mice", "keyboards", "headphones"].includes(
            product.category,
          )
        ) {
          basePath = `/technology/${product.category}`;
        }
      }
      window.location.href = basePath;
      setIsSearching(false);
      setShowResults(false);
      setSearchText("");
    },
    [setIsSearching, setShowResults, setSearchText],
  );

  useEffect(() => {
    if (isSearching && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearching]);

  // Función para navegar a la categoría del producto
  type ProductType =
    | ClothesImagesInterface
    | AccessoriesImagesInterface
    | TechnologyImagesInterface;

  return (
    <div className="relative flex items-center h-10">
      {isSearching ? (
        <div className="relative w-60">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products..."
            className="border border-white bg-transparent text-white placeholder-white rounded-full px-4 py-1 w-60 focus:outline-none focus:ring-2 focus:ring-white transition-all"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setShowResults(true);
            }}
            onBlur={() =>
              setTimeout(() => {
                setIsSearching(false);
                setShowResults(false);
              }, 200)
            }
            onFocus={() => setShowResults(true)}
          />
          {showResults && searchText && (
            <ul className="absolute z-50 left-0 w-full bg-white text-black rounded-b-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.slice(0, 8).map((product: ProductType) => (
                  <li
                    key={product.id + product.title}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-200"
                  >
                    <button
                      className="flex items-center gap-2 w-full text-left"
                      onClick={() => handleResultClick(product)}
                    >
                      <img
                        src={product.path}
                        alt={product.title}
                        className="w-8 h-8 rounded object-cover"
                      />
                      <span className="text-sm">{product.title}</span>
                    </button>
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500">No hay resultados</li>
              )}
            </ul>
          )}
        </div>
      ) : (
        <button
          className="p-2 rounded-full hover:bg-white/20 bg-transparent shadow-none border-none"
          onClick={() => setIsSearching(true)}
          aria-label="Buscar productos"
        >
          <img
            className="w-6 h-6 brightness-0 invert"
            src={iconImages[2].path}
            alt={iconImages[2].alt}
          />
        </button>
      )}
    </div>
  );
}

// Componente Modal reutilizable
function Modal({
  isOpen,
  onClose,
  children,
}: {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly children: React.ReactNode;
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl p-10 min-w-[350px] max-w-[90vw] shadow-2xl relative flex flex-col items-center">
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

// Funciones de utilidad para localStorage
function getUsers() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}
function saveUser(user: { username: string; password: string }) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}
function findUser(username: string) {
  const users: { username: string; password: string }[] = getUsers();
  return users.find((u) => u.username === username);
}
function setSession(username: string) {
  localStorage.setItem("sessionUser", username);
}
function getSession() {
  return localStorage.getItem("sessionUser");
}
function clearSession() {
  localStorage.removeItem("sessionUser");
}

const Header: React.FC = () => {
  const { logoImages } = useLogoImageContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sessionUser, setSessionUser] = useState<string | null>(getSession());
  const { totalItems } = useCartContext();
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    setSessionUser(getSession());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = findUser(username);
    if (!user || user.password !== password) {
      setError("Incorrect username or password");
      return;
    }
    setSession(username);
    setSessionUser(username);
    setModalOpen(false);
    setUsername("");
    setPassword("");
    setError("");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (findUser(username)) {
      setError("User already exists");
      return;
    }
    saveUser({ username, password });
    setSession(username);
    setSessionUser(username);
    setModalOpen(false);
    setUsername("");
    setPassword("");
    setError("");
  };

  const handleLogout = () => {
    clearSession();
    setSessionUser(null);
  };

  return (
    <header className="header-background-color w-screen font-poppins">
      <div className="px-4">
        <nav className="py-5">
          <ul className="list-none flex flex-row items-center gap-20">
            <li>
              <NavLink to="/">
                <motion.img
                  className="w-32 h-auto ml-40"
                  src={logoImages[0].path}
                  alt="ServiceNow Icon"
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  loading="lazy"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clothing"
                className="font-normal text-white hover:underline underline-offset-8 transition-all duration-200"
                style={{ color: "white" }}
              >
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Clothing
                </motion.span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/accessories"
                className="font-normal text-white hover:underline underline-offset-8 transition-all duration-200"
                style={{ color: "white" }}
              >
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Accessories
                </motion.span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className="font-normal text-white hover:underline underline-offset-8 transition-all duration-200"
                style={{ color: "white" }}
              >
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Technology
                </motion.span>
              </NavLink>
            </li>
            <li className="ml-auto flex items-center gap-6 mr-40">
              {sessionUser && (
                <span className="text-white font-semibold">
                  Welcome, {sessionUser}
                </span>
              )}
              <SearchToggle />
              {sessionUser ? (
                <button
                  className="cursor-pointer border px-4 py-1 rounded-3xl bg-white text-green-700 hover:bg-gray-200"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <input
                  className="cursor-pointer border px-4 py-1 rounded-3xl"
                  type="button"
                  value="Login"
                  onClick={() => {
                    setModalOpen(true);
                    setIsLogin(true);
                    setError("");
                  }}
                />
              )}
              <button
                className="relative bg-transparent shadow-none border-none"
                aria-label="Ver carrito"
                onClick={() => setCartOpen(true)}
              >
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2 py-0.5 font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form
          onSubmit={isLogin ? handleLogin : handleRegister}
          className="flex flex-col gap-4 w-72"
        >
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 transition-all"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 transition-all"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <span className="text-red-500 text-sm text-center">{error}</span>
          )}
          <button
            className="bg-green-700 text-white rounded-lg px-4 py-2 font-semibold hover:bg-green-800 transition-all mt-2"
            type="submit"
          >
            {isLogin ? "Sign in" : "Register"}
          </button>
        </form>
        <div className="mt-6 text-center">
          {isLogin ? (
            <span className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <button
                className="text-green-700 underline font-semibold"
                onClick={() => {
                  setIsLogin(false);
                  setError("");
                }}
              >
                Sign up
              </button>
            </span>
          ) : (
            <span className="text-gray-600 text-sm">
              Already have an account?{" "}
              <button
                className="text-green-700 underline font-semibold"
                onClick={() => {
                  setIsLogin(true);
                  setError("");
                }}
              >
                Sign in
              </button>
            </span>
          )}
        </div>
      </Modal>
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
};

export default Header;
