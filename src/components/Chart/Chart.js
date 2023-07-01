import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // затраты в месяце
  const totalMaimum = Math.max(...dataPointValues); // месяц с макс затратами

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaimum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
