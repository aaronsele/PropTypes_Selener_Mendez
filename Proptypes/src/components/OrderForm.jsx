// src/components/OrderForm.jsx
import { useState } from "react";
import PropTypes from "prop-types";

// genera un id numérico para productId (simple y efectivo)
const genId = () => Date.now() + Math.floor(Math.random() * 1000);

export default function OrderForm({ onAddOrder }) {
  const [customer, setCustomer] = useState("");
  const [status, setStatus] = useState("pending");
  const [items, setItems] = useState([
    { productId: genId(), name: "", quantity: 1, price: 0 },
  ]);
  const [errors, setErrors] = useState([]);

  const handleItemChange = (index, field, value) => {
    setItems((prev) => {
      const copy = [...prev];
      if (field === "quantity") copy[index][field] = parseInt(value, 10) || 0;
      else if (field === "price") copy[index][field] = parseFloat(value) || 0;
      else copy[index][field] = value;
      return copy;
    });
  };

  const addItem = () =>
    setItems((prev) => [
      ...prev,
      { productId: genId(), name: "", quantity: 1, price: 0 },
    ]);

  const removeItem = (index) =>
    setItems((prev) => (prev.length === 1 ? prev : prev.filter((_, i) => i !== index)));

  const validate = () => {
    const errs = [];
    if (customer.trim().length < 3) errs.push("El nombre del cliente debe tener al menos 3 caracteres.");
    items.forEach((it, idx) => {
      if (!it.name || it.name.trim() === "") errs.push(`Item ${idx + 1}: falta el nombre.`);
      if (!Number.isFinite(it.quantity) || it.quantity <= 0) errs.push(`Item ${idx + 1}: la cantidad debe ser > 0.`);
      if (!Number.isFinite(it.price) || it.price < 0) errs.push(`Item ${idx + 1}: precio inválido.`);
    });
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (errs.length) {
      setErrors(errs);
      return;
    }

    const order = {
      customer: customer.trim(),
      status,
      date: new Date(),
      // asegurar productId numérico
      items: items.map((it) => ({ ...it, productId: Number(it.productId) })),
    };

    onAddOrder(order);

    // reset
    setCustomer("");
    setStatus("pending");
    setItems([{ productId: genId(), name: "", quantity: 1, price: 0 }]);
    setErrors([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nuevo pedido</h2>

      {errors.length > 0 && (
        <div className="form-errors" style={{ color: "crimson", marginBottom: 8 }}>
          <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
            {errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <label>Cliente</label>
        <input
          type="text"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          placeholder="Nombre del cliente"
        />
      </div>

      <div>
        <label>Estado</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pendiente</option>
          <option value="shipped">Enviado</option>
          <option value="delivered">Entregado</option>
        </select>
      </div>

      <h3>Items</h3>
      {items.map((it, idx) => (
        <div key={it.productId} style={{ border: "1px solid #eee", padding: 8, marginBottom: 8 }}>
          <div>
            <label>Nombre del producto</label>
            <input
              type="text"
              value={it.name}
              onChange={(e) => handleItemChange(idx, "name", e.target.value)}
              placeholder="Ej: Camiseta"
            />
          </div>

          <div>
            <label>Cantidad</label>
            <input
              type="number"
              min="1"
              value={it.quantity}
              onChange={(e) => handleItemChange(idx, "quantity", e.target.value)}
            />
          </div>

          <div>
            <label>Precio</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={it.price}
              onChange={(e) => handleItemChange(idx, "price", e.target.value)}
            />
          </div>

          <div>
            <button type="button" onClick={() => removeItem(idx)} disabled={items.length === 1}>
              Eliminar item
            </button>
          </div>
        </div>
      ))}

      <div>
        <button type="button" onClick={addItem}>
          + Agregar item
        </button>
      </div>

      <div style={{ marginTop: 10 }}>
        <button type="submit">Agregar pedido</button>
      </div>
    </form>
  );
}

OrderForm.propTypes = {
  onAddOrder: PropTypes.func.isRequired,
};
