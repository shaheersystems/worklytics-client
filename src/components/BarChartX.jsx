import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Chart.js Bar Chart",
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
  "Jan",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const getMonth = (index) => {
  const date = new Date();
  date.setMonth(index);
  return date.toLocaleString("default", { month: "short" });
};
export const data = {
  labels: labels.map((_, index) => getMonth(index)),
  datasets: [
    {
      label: "Applications",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(79 70 229)",
      pointStyle: "hidden",
    },
  ],
};

export default function BarChartX() {
  return <Bar options={options} data={data} />;
}
