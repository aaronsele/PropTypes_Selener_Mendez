import PropTypes from "prop-types";
import './OrderFilter.css';

function OrderFilter({ filter, setFilter }) {
  return (
    <div className="order-filter">
      <label className="order-filter-label">Filtrar por estado: </label>
      <select
        className="order-filter-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
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
