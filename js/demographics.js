var xValues = ["IT", "ECE", "IT-BI"];
var yValues = [272, 128, 45];
var barColors = ["#4472C4", "#FFC000", "#49A646"];

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
    responsive: true,
    aspectRatio: 1,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Under Graduates",
    },
  },
});

const data = {
  datasets: [
    {
      labels: [
        "Machine Learning and Intelligent Systems (MLIS)",
        "Human Computer Interaction (HCI)",
        "Robotics and Machine Intelligence (RMI)",
        "Software Engineering (SE)",
        "Data Engineering (DE)",
        "Cyber Laws and Information Security (CLIS)",
        "Wireless Communication and Computing (WCC)",
        "Microelectronics (MI)",
        "Communication Engineering (CE)",
        "Bioinformatics (BI)",
        "Data Science and Analytics (DSA)",
      ],

      backgroundColor: [
        "#5780ca",
        "#698ed0",
        "#7c9cd6",
        "#8faadc",
        "#a2b9e2",
        "#b4c7e7",
        "#c7d5ed",
        "#ffd34d",
        "#ffe080",
        "#6db86b",
        "#e04749",
      ],
      data: [16, 16, 5, 16, 12, 16, 11, 15, 9, 13, 12],
    },
    {
      labels: [
        "Information Technology",
        "Electronics and Communication Engineering",
        "Bio Informatics",
        "Data Science and Analytics",
      ],
      backgroundColor: ["#4472c4", "#ffc000", "#49a646", "#D8191B"],
      data: [92, 24, 13, 12],
    },
  ],
};

const config = {
  type: "pie",
  data: data,

  options: {
    // cutout: 0,
    responsive: true,
    aspectRatio: 1,

    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var index = tooltipItem.index;
          return dataset.labels[index] + ": " + dataset.data[index];
        },
      },
    },
    title: {
      display: true,
      text: "Post Graduates",
    },
  },
};

new Chart("demographicsPG", config);

const dataBar = {
  labels: ["IT", "ECE", "BI", "DSA"],
  datasets: [
    {
      label: "Male",
      data: [83, 17, 9, 9],
      backgroundColor: "#27ABE9",
    },
    {
      label: "Female",
      data: [9, 7, 4, 3],
      backgroundColor: "#F43382",
    },
  ],
};
const configBar = {
  type: "bar",
  data: dataBar,
  options: {
    responsive: true,
    aspectRatio: 1,

    title: {
      display: true,
      text: "Mtech Gender Based Demographics",
    },
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  },
};

new Chart("MtechGender", configBar);

const dataBar2 = {
  labels: ["IT", "ECE", "BI"],
  datasets: [
    {
      label: "Male",
      data: [219, 102, 39],
      backgroundColor: "#27ABE9",
    },
    {
      label: "Female",
      data: [53, 26, 6],
      backgroundColor: "#F43382",
    },
  ],
};
const configBar2 = {
  type: "bar",
  data: dataBar2,
  options: {
    responsive: true,
    aspectRatio: 1,

    title: {
      display: true,
      text: "Btech Gender Based Demographics",
    },
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  },
};

new Chart("BtechGender", configBar2);
