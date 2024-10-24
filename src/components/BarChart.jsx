import React from "react";
import { Bar } from "react-chartjs-2";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const chartData = {
    labels: data.map((item) => item.country),
    datasets: [
      {
        label: "Hot Dog",
        data: data.map((item) => item["hot dog"]),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Burger",
        data: data.map((item) => item.burger),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Kebab",
        data: data.map((item) => item.kebab),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Donut",
        data: data.map((item) => item.donut),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: colors.grey[100],
        },
        grid: {
          color: colors.grey[300],
        },
        title: {
          display: !isDashboard,
          text: "Country",
          color: colors.grey[100],
        },
      },
      y: {
        ticks: {
          color: colors.grey[100],
        },
        grid: {
          color: colors.grey[300],
        },
        title: {
          display: !isDashboard,
          text: "Food",
          color: colors.grey[100],
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: colors.grey[100],
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ": " + tooltipItem.raw;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
