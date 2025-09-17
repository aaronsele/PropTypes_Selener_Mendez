import PropTypes from "prop-types";
import './OrderStats.css';

function OrderStats({ total, pending, shipped, delivered }) {
  return (
    <div className="order-stats-container">
      <h2 className="order-stats-title">Estadísticas</h2>
      <p className="order-stats-item">Total: {total}</p>
      <p className="order-stats-item">Pendientes: {pending}</p>
      <p className="order-stats-item">Enviados: {shipped}</p>
      <p className="order-stats-item">Entregados: {delivered}</p>
    </div>
  );
}

OrderStats.propTypes = {
  total: PropTypes.number.isRequired,
  pending: PropTypes.number.isRequired,
  shipped: PropTypes.number.isRequired,
  delivered: PropTypes.number.isRequired,
};

export default OrderStats;
