import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  let maxTotalValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dtPoint) => {
        return (
          <ChartBar
            key={dtPoint.label}
            value={dtPoint.value}
            maxValue={maxTotalValue}
            label={dtPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
