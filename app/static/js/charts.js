document.addEventListener("DOMContentLoaded", function () {
  // Bar Chart Configuration
  const barCtx = document.getElementById("barChart").getContext("2d");
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Income",
        data: [0, 15, 15, 25, 30, 35, 94],
        backgroundColor: "rgba(0, 225, 255, 0.2)",
        borderColor: "rgba(0, 225, 255, 1)",
        borderWidth: 2,
      },
    ],
  };
  const barConfig = {
    type: "bar",
    data: barData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1000,
        easing: "easeOutQuart",
      },
      plugins: {
        legend: { display: true },
      },
      scales: {
        x: {
          grid: { display: false },
        },
        y: {
          grid: { color: "rgba(200, 200, 200, 0.2)" },
          beginAtZero: true,
        },
      },
    },
  };
  new Chart(barCtx, barConfig);

  // Line Chart Configuration
  const lineCtx = document.getElementById("lineChart").getContext("2d");
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue Flow",
        data: [10, 20, 15, 25, 30, 35, 100],
        borderColor: "rgba(0, 225, 255, 1)",
        backgroundColor: "rgba(0, 225, 255, 0.2)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };
  const lineConfig = {
    type: "line",
    data: lineData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1000,
        easing: "easeOutQuart",
      },
      plugins: {
        legend: { display: true },
      },
    },
  };
  new Chart(lineCtx, lineConfig);

  // Pie Chart Configuration
  const pieCtx = document.getElementById("pieChart").getContext("2d");
  const pieData = {
    labels: ["Food", "Rent", "Clothing", "Other"],
    datasets: [
      {
        data: [25, 25, 25, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  const pieConfig = {
    type: "pie",
    data: pieData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right", // Legend on the side
          labels: {
            color: "white",
          },
        },
      },
    },
  };
  new Chart(pieCtx, pieConfig);
});
