import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      <ChartBar />
      <ChartBar />
      <ChartBar />
      <ChartBar />
      <ChartBar />
    </div>
  );
};

export default Chart;
