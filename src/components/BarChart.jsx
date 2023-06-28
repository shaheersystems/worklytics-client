import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Remove x-axis grid lines
      },
    },
    y: {
      grid: {
        display: false, // Remove y-axis grid lines
      },
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  " August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels: labels.map((label, index) => label.slice(0, 3)),
  datasets: [
    {
      label: "Applications per month",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      borderColor: "rgb(79 70 229)",
      backgroundColor: "rgb(79 70 229)",
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      pointHoverBackgroundColor: "rgb(79 70 229)",
      //
      tension: 0.4,
      // grid remove
      // showLine: false,
      // fill: false,
    },
  ],
};

export default function BarChart() {
  return <Line options={options} data={data} />;
}
