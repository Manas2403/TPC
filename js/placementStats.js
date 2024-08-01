const xValues3 = [
  "2017-18",
  "2018-19",
  "2019-20",
  "2020-21",
  "2021-22",
  "2022-23",
  "2023-24",
];
const yValues3 = [36, 39, 43, 61.65, 102.5, 82.5, 121];

const sexChart = new Chart("highestPackage", {
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
    responsive: true,
    aspectRatio: 1,
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
          ticks: { min: 0, max: 120 },
          // scaleLabel: {
          //   display: true,
          //   labelString: "Items",
          // },
        },
      ],
    },
  },
});

var ctx = document.getElementById("averagePlacement").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "2017-18",
      "2018-19",
      "2019-20",
      "2020-21",
      "2021-22",
      "2022-23",
      "2023-24",
    ],
    datasets: [
      {
        label: "Post Graduate",
        data: [13.25, 15.5, 14.57, 14.45, 19.57, 19.87, 14],
        backgroundColor: "rgb(65, 212, 146)",
      },
      {
        label: "Under Graduate",
        data: [13.25, 15.5, 20.83, 21.85, 30.68, 32.83, 25.78],
        backgroundColor: "rgba(0,161,231,1)",
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 1,
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
    labels: ["2020-21", "2021-22", "2022-23", "2023-24"],
    datasets: [
      {
        label: "Post Graduate",
        data: [90.81, 100, 78, 66],
        backgroundColor: "rgb(65, 212, 146)",
      },
      {
        label: "Under Graduate",
        data: [92, 100, 97, 93],
        backgroundColor: "rgba(0,161,231,1)",
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 1,
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

var horizontalBarChart = new Chart(horizontalBarChartCanvas, {
  type: "horizontalBar",
  data: {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        data: [98, 120, 120, 180, 220, 280, 150],
        backgroundColor: [
          "#73BFB8",
          "#73BFB8",
          "#73BFB8",
          "#73BFB8",
          "#73BFB8",
          "#73BFB8",
          "#73BFB8",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 1,

    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Companies Visited",
    },
    scales: {
      yAxes: [
        {
          barPercentage: 0.75,
          gridLines: {
            display: true,
            drawTicks: true,
            drawOnChartArea: false,
          },
          ticks: {
            fontColor: "#555759",
            fontFamily: "Lato",
            fontSize: 11,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: true,
            drawTicks: false,
            tickMarkLength: 5,
            drawBorder: false,
          },
          ticks: {
            padding: 5,
            beginAtZero: true,
            fontColor: "#555759",
            fontFamily: "Lato",
            fontSize: 11,
            callback: function (label, index, labels) {
              return label;
            },
          },
          // scaleLabel: {
          //   display: true,
          //   // padding: 10,
          //   fontFamily: "Lato",
          //   fontColor: "#555759",
          //   fontSize: 16,
          //   fontStyle: 700,
          //   labelString: "ited",
          // },
        },
      ],
    },
  },
});
