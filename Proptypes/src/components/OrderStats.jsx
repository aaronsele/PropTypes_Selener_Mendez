import PropTypes from "prop-types";

function OrderStats({ total, pending, shipped, delivered }) {
  return (
    <div>
      <h2>Estadísticas</h2>
      <p>Total: {total}</p>
      <p>Pendientes: {pending}</p>
      <p>Enviados: {shipped}</p>
      <p>Entregados: {delivered}</p>
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
