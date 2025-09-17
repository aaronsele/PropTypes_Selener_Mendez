import PropTypes from "prop-types";
import './OrderItem.css';

function OrderItem({ id, customer, date, status, items }) {
  return (
    <div className="order-item-container">
      <h3 className="order-item-title">Pedido #{id}</h3>
      <p className="order-item-customer">Cliente: {customer}</p>
      <p className="order-item-date">Fecha: {date.toLocaleDateString()}</p>
      <p className={`order-item-status status-${status}`}>Estado: {status}</p>
      <ul className="order-item-list">
        {items.map((item) => (
          <li key={item.productId} className="order-item-list-item">
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

OrderItem.propTypes = {
  id: PropTypes.number.isRequired,
  customer: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  status: PropTypes.oneOf(["pending", "shipped", "delivered"]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: (props, propName, componentName) => {
        if (props[propName] <= 0) {
          return new Error(
            `Invalid prop ${propName} in ${componentName}: quantity must be > 0`
          );
        }
      },
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

OrderItem.defaultProps = {
  status: "pending",
  date: new Date(),
};

export default OrderItem;
