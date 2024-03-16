"use client";
import { faker } from "@faker-js/faker";
import { VictoryChart, VictoryTheme, VictoryLine } from "victory";

const ChartUI = function () {
  return (
    <VictoryChart width={750} height={350} theme={VictoryTheme.material}>
      <VictoryLine
        interpolation="cardinal"
        style={{
          data: { stroke: "#545353" },
          parent: { border: "1px solid #ccc" },
        }}
        data={[
          { x: "Jan", y: 10 },
          { x: "Feb", y: 15 },
          { x: "Mar", y: 20 },
          { x: "Apr", y: 25 },
          { x: "May", y: 30 },
          { x: "June", y: 35 },
          { x: "July", y: 40 },
          { x: "Aug", y: 45 },
          { x: "Sep", y: 50 },
          { x: "Oct", y: 55 },
          { x: "Dec", y: 60 },
        ]}
      />
    </VictoryChart>
  );
};

export default ChartUI;
