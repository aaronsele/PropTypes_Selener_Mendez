import PropTypes from "prop-types";
import OrderItem from "./OrderItem";

function OrderList({ orders }) {
  return (
    <div>
      <h2>Lista de pedidos</h2>
      {orders.map((order) => (
        <OrderItem key={order.id} {...order} />
      ))}
    </div>
  );
}

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default OrderList;
