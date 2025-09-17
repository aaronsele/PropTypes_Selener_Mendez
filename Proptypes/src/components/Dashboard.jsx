import { useState } from "react";
import OrderList from "./OrderList";
import OrderFilter from "./OrderFilter";
import OrderStats from "./OrderStats";
import PropTypes from "prop-types";

function Dashboard({ orders }) {
  const [filter, setFilter] = useState("all");

  const filteredOrders =
    filter === "all" ? orders : orders.filter((o) => o.status === filter);

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    shipped: orders.filter((o) => o.status === "shipped").length,
    delivered: orders.filter((o) => o.status === "delivered").length,
  };

  return (
    <div>
      <OrderFilter filter={filter} setFilter={setFilter} />
      <OrderStats {...stats} />
      <OrderList orders={filteredOrders} />
    </div>
  );
}

Dashboard.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default Dashboard;
