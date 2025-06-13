import React, { useState } from "react";
import { useCartContext } from "../../hooks/useCartContext";

function getSession() {
  return localStorage.getItem("sessionUser");
}

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ open, onClose }) => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCartContext();
  const [error, setError] = useState("");

  if (!open) return null;

  const handleCheckout = () => {
    if (!getSession()) {
      setError("You must be logged in to checkout.");
      return;
    }
    clearCart();
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-10 relative border pointer-events-auto flex flex-col gap-8">
        {/* Close button */}
        <button
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-3xl font-bold focus:outline-none bg-transparent border-none p-0"
          onClick={onClose}
          aria-label="Close cart"
        >
          ×
        </button>
        <h2 className="text-3xl font-bold mb-2 text-center">Shopping Cart</h2>
        {error && (
          <div className="text-center text-red-500 font-semibold mb-2">
            {error}
          </div>
        )}
        {items.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your cart is empty
          </p>
        ) : (
          <div className="flex flex-col gap-8 max-h-[55vh] overflow-y-auto">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.size ?? "no-size"}`}
                className="flex items-center gap-6 border-b pb-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 flex flex-col gap-2">
                  <span className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </span>
                  {item.size && (
                    <span className="text-base text-gray-500">
                      Size: {item.size}
                    </span>
                  )}
                  <span className="text-green-600 font-bold text-2xl">
                    $
                    {(item.discount
                      ? item.price * (1 - item.discount / 100)
                      : item.price
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1, item.size)
                      }
                      className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 text-gray-500 rounded-lg text-xl hover:bg-green-100 hover:text-green-700 transition disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-lg text-gray-700">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1, item.size)
                      }
                      className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 text-gray-500 rounded-lg text-xl hover:bg-green-100 hover:text-green-700 transition"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="mt-1 px-6 py-2 rounded-lg bg-white border border-red-400 text-red-500 font-semibold text-base hover:bg-red-500 hover:text-white transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-2 border-t pt-6">
          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold text-2xl">Total:</span>
            <span className="text-green-600 font-bold text-3xl">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <button
            className="w-full bg-green-600 text-white py-4 rounded-full hover:bg-green-700 transition text-2xl font-bold"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
