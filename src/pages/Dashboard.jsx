import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import ProductSell from "../components/Productsell/Productsell";

const carObj = {
  icon: "ri-git-repository-private-line",
  title: "Earning",
  totalNumber: "$198 k",
};

const tripObj = {
  icon: "ri-steering-2-line",
  title: "Orders",
  totalNumber: "$2.4k",
};

const clientObj = {
  icon: "ri-user-line",
  title: "Balance",
  totalNumber: "$2.4k",
};

const distanceObj = {
  icon: "ri-timer-flash-line",
  title: "Total Sales",
  totalNumber: "$86 ",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Overview</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Customers</h3>
            <h4> Customers That by Product</h4>
            <CarStatsChart />
          </div>
        </div>

        <div className="recommend__cars-wrapper">
           
           
        </div>
      </div>
      <ProductSell/>
    </div>
  );
};

export default Dashboard;
