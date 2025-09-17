import PropTypes from "prop-types";

function OrderFilter({ filter, setFilter }) {
  return (
    <div>
      <label>Filtrar por estado: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Todos</option>
        <option value="pending">Pendiente</option>
        <option value="shipped">Enviado</option>
        <option value="delivered">Entregado</option>
      </select>
    </div>
  );
}

OrderFilter.propTypes = {
  filter: PropTypes.oneOf(["all", "pending", "shipped", "delivered"]),
  setFilter: PropTypes.func.isRequired,
};

export default OrderFilter;
