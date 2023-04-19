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
    responsive: true,
    aspectRatio: 1,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Post Graduates",
    },
  },
});
