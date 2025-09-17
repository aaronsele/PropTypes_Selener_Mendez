import PropTypes from "prop-types";

function OrderItem({ id, customer, date, status, items }) {
  return (
    <div>
      <h3>Pedido #{id}</h3>
      <p>Cliente: {customer}</p>
      <p>Fecha: {date.toLocaleDateString()}</p>
      <p>Estado: {status}</p>
      <ul>
        {items.map((item) => (
          <li key={item.productId}>
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
