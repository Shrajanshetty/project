// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import ChartJS from "chart.js/auto";
// import data from "./data.json"; // Importing data directly
// import { Title, Tooltip, Legend } from "chart.js";
// import {
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
// } from "chart.js";

// import { NavbarComp } from "./NavbarComp";

// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement
// );

// const defaultChartData = {
//   labels: ["2002", "2003", "2004", "2005", "2006", "2007"], // Default labels
//   datasets: [
//     {
//       label: "Axis Pension Fund",
//       data: [10, 11, 14, 9, 12, 6], // Default data values
//       borderColor: "blue",
//       tension: 0.3,
//     },
//   ],
// };

// const ChartPage = () => {
//   const [chartData, setChartData] = useState(defaultChartData);

//   const fetchData = () => {
//     const chartDataFormatted = {
//       labels: data.map((item) => item.nav_date),
//       datasets: [
//         {
//           label: "Axis pension fund",
//           data: data.map((item) => parseFloat(item.nav_value)),
//           borderColor: "blue",
//           tension: 0.3,
//         },
//       ],
//     };
//     setChartData(chartDataFormatted);
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: false,
//     },
//     scales: {
//       y: {
//         min: 5,
//         max: 15,
//       },
//     },
//   };

//   return (
    // <NavbarComp/>
//     <div className="container ">
//       <div style={{ padding: "15px", width: "800px", height: "600px" }}>
//         <Line data={chartData} options={options} />
//         <button type="button" onClick={fetchData}>Fetch Data</button>
//       </div>
//     </div>
//   );
// };

// export default ChartPage;
