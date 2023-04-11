const xValues3 = ["2022", "2021", "2020", "2019", "2018", "2017", "2016"];
const yValues3 = [102.5, 61.65, 43, 39, 36, 39, 27];

new Chart("highestPackage", {
  type: "line",
  data: {
    labels: xValues3,
    datasets: [
      {
        fill: true,
        lineTension: 0,
        backgroundColor: "#00a7e15f",
        borderColor: "#00a7e1",
        data: yValues3,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Highest Package (Lakhs)",
    },
    legend: { display: false },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: { min: 0, max: 103 },
        },
      ],
    },
  },
});

var xValues = ["IT", "ECE", "IT-BI"];
var yValues = [240, 115, 39];
var barColors = ["#00aba9", "#2b5797", "#1e7145"];

new Chart("demographicsUG", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Under Graduates",
    },
  },
});
var xValues1 = [
  "Information Technology",
  "Electronics and Communication Engineering",
  "Bio Informatics",
  "Machine Learning and Intelligent Systems",
  "Software Engineering",
  "Cyberlawand Information Security",
  "Data Engineering",
  "Human Computation Engineering",
  "Robotics",
  "Wireless Communication",
];
var yValues1 = [15, 40, 17, 15, 15, 15, 15, 15, 5, 14];
var barColors1 = [
  "#00aba9",
  "#2b5797",
  "#1e7145",
  "#b2bef4",
  "#2800f4",
  "#a18bdd",
  "#b14875",
  "#faa12d",
  "#dc5624",
  "#b81bdb",
];

new Chart("demographicsPG", {
  type: "pie",
  data: {
    labels: xValues1,
    datasets: [
      {
        backgroundColor: barColors1,
        data: yValues1,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Post Graduates",
    },
  },
});

var ctx = document.getElementById("averagePlacement").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2022", "2021", "2020", "2019", "2018", "2017", "2016"],
    datasets: [
      {
        label: "Under Graduate",
        data: [30.68, 21.85, 20.83, 15.5, 13.25, 12.5, 11.2],
        backgroundColor: "rgba(0,161,231,1)",
      },
      {
        label: "Post Graduate",
        data: [19.57, 14.45, 14.57, 15.5, 13.25, 12.5, 11.2],
        backgroundColor: "rgb(65, 212, 146)",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Average CTC (LPA)",
    },

    legend: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: { min: 0, max: 32 },
        },
      ],
    },
  },
});

var placementPercent = document
  .getElementById("placementPercentage")
  .getContext("2d");

var myChart2 = new Chart(placementPercent, {
  type: "bar",
  data: {
    labels: ["2021-2022", "2020-2021", "2019-2020"],
    datasets: [
      {
        label: "Post Graduate",
        data: [100, 90.81, 83.75],
        backgroundColor: "rgb(65, 212, 146)",
      },
      {
        label: "Under Graduate",
        data: [100, 92, 96],
        backgroundColor: "rgba(0,161,231,1)",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Placement (%)",
    },

    legend: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: { min: 0, max: 100 },
        },
      ],
    },
  },
});
