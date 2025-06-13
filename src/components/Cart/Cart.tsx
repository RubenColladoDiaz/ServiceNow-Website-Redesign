import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartContext } from "../../hooks/useCartContext";

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } =
    useCartContext();

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={`${item.id}-${item.size ?? "no-size"}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                {item.size && (
                  <p className="text-sm text-gray-600">Talla: {item.size}</p>
                )}
                <p className="text-green-600 font-bold">
                  $
                  {(item.discount
                    ? item.price * (1 - item.discount / 100)
                    : item.price
                  ).toFixed(2)}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1, item.size)
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1, item.size)
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="ml-2 text-red-500"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      {items.length > 0 ? (
        <div className="mt-4">
          <div className="text-xl font-bold mb-4">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition">
            Proceder al Pago
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">El carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;
