const xValues3 = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];
const yValues3 = [27, 39, 36, 39, 43, 61.65, 102.5];

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
        labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [
            {
                label: "Post Graduate",
                data: [11.2, 12.5, 13.25, 15.5, 14.57, 14.45, 19.57],
                backgroundColor: "rgb(65, 212, 146)",
            },
            {
                label: "Under Graduate",
                data: [11.2, 12.5, 13.25, 15.5, 20.83, 21.85, 30.68],
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
        labels: ["2019-2020", "2020-2021", "2021-2022"],
        datasets: [
            {
                label: "Post Graduate",
                data: [83.75, 90.81, 100],
                backgroundColor: "rgb(65, 212, 146)",
            },
            {
                label: "Under Graduate",
                data: [96, 92, 100],
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
        labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [
            {
                data: [103, 98, 120, 120, 180, 220, 280],
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
            display: true,
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
