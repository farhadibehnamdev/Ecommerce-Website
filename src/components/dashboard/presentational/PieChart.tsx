"use client";
import { VictoryPie } from "victory";
const PieChartUI = function () {
  return (
    <VictoryPie
      data={[
        { x: "Nike", y: 35 },
        { x: "Puma", y: 40 },
        { x: "Zara", y: 55 },
      ]}
    />
  );
};

export default PieChartUI;
