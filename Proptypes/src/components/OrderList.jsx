import PropTypes from "prop-types";
import OrderItem from "./OrderItem";
import "./OrderList.css";

function OrderList({ orders }) {
  return (
    <div className="order-list">
      <h2>Lista de pedidos</h2>
      <div className="order-list-grid">
        {orders.map((order) => (
          <OrderItem key={order.id} {...order} />
        ))}
      </div>
    </div>
  );
}

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default OrderList;
