import { useState } from "react";
import OrderList from "./OrderList";
import OrderFilter from "./OrderFilter";
import OrderStats from "./OrderStats";
import PropTypes from "prop-types";
import './Dashboard.css';

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
    <div className="dashboard-page">
      <div className="dashboard-header">
        <OrderFilter filter={filter} setFilter={setFilter} />
      </div>
      <div className="dashboard-main">
        <div className="dashboard-stats">
          <OrderStats {...stats} />
        </div>
        <div className="dashboard-list">
          <OrderList orders={filteredOrders} />
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default Dashboard;
