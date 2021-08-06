import React from "react";
import ChartBart from "./ChartBart";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.charDataPoints.map(dataPonint => dataPonint.value);
    const totalMaximum = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.charDataPoints.map((dataPonint) => (
        <ChartBart
        key={dataPonint.label}
          value={dataPonint.value}
          maxValue={totalMaximum}
          label={dataPonint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
