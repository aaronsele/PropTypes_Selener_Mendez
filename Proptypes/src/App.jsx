import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import OrderForm from "./components/OrderForm";
import Navbar from "./components/Navbar";

const initialOrders = [
  {
    id: 1,
    customer: "Manuel Mendez",
    date: new Date(),
    status: "pending",
    items: [
      { productId: 101, name: "Camiseta de Sanlorenzo ", quantity: 2, price: 99000 },
      { productId: 102, name: "Gorra del ciclón", quantity: 1, price: 800 },
    ],
  },
  {
    id: 2,
    customer: "Peta Frankenthal",
    date: new Date(),
    status: "shipped",
    items: [{ productId: 201, name: "Fiat Cronos", quantity: 1, price: 700000 }],
  },
];

function App() {
  const [orders, setOrders] = useState(initialOrders);

  const addOrder = (newOrder) => {
    setOrders([...orders, { ...newOrder, id: orders.length + 1 }]);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard orders={orders} />} />
        <Route path="/add" element={<OrderForm onAddOrder={addOrder} />} />
      </Routes>
    </div>
  );
}

export default App;
