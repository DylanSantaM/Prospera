document.addEventListener("DOMContentLoaded", function () {
  // Shared Options for All Charts
  const sharedOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white", // Adjust the legend text color for dark themes
        },
      },
    },
  };

  // Bar Chart Configuration
  const barCtx = document.getElementById("barChart").getContext("2d");
  const barConfig = {
    type: "bar",
    data: {
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
    },
    options: {
      ...sharedOptions,
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
  const lineConfig = {
    type: "line",
    data: {
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
    },
    options: {
      ...sharedOptions,
    },
  };
  new Chart(lineCtx, lineConfig);

  // Pie Chart Configuration
  const pieCtx = document.getElementById("pieChart").getContext("2d");
  const pieConfig = {
    type: "pie",
    data: {
      labels: ["Food", "Rent", "Clothing", "Other"],
      datasets: [
        {
          data: [12, 18, 37, 33],
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
    },
    options: {
      ...sharedOptions,
      plugins: {
        ...sharedOptions.plugins,
        legend: {
          position: "right",
          labels: {
            color: "white", // Adjust for better readability
          },
        },
      },
    },
  };
  new Chart(pieCtx, pieConfig);
});
