var xValues = ["IT", "ECE", "IT-BI"];
var yValues = [272, 128, 45];
var barColors = ["#00aba9", "#2b5797", "#1e7145"];

new Chart("demographicsUG", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [
            {
                backgroundColor: barColors,
                data: yValues,
                borderColor: ["#FFB411", "#FFB411", "#FFB411"],
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

// const labels = Utils.months({ count: 7 });
const data = {
    // labels: [
    // "Information Technology",
    // "Electronics and Communication Engineering",
    // "Bio Informatics",

    // "Data Science and Analytics",
    // ],
    datasets: [
        // {
        //   labels: [
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //   ],

        //   backgroundColor: [
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //   ],
        //   data: [
        //     14, 2, 15, 1, 5, 0, 14, 2, 12, 0, 12, 4, 11, 0, 11, 4, 6, 3, 9, 4, 9, 3,
        //   ],
        // },
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
                "red",
                "blue",
                "green",
                "yellow",
                "pink",
                "orange",
                "purple",
                "brown",
                "grey",
                "black",
                "magenta",
            ],
            borderColor: [
                "#FFB411",
                "#FFB411",
                "#FFB411",
                "#FFB411",
                "#FFB411",
                "#FFB411",
                "#FFB411",
                "#FFB411",
                "#FFB411",
                "#FFB411",
                "#FFB411",
                "#FFB411",
            ],
            data: [16, 16, 5, 16, 12, 16, 11, 15, 9, 13, 12],
            // cutout: "5%",
        },
        // {
        //   labels: [
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //     "Male",
        //     "Female",
        //   ],

        //   backgroundColor: [
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //     "blue",
        //     "pink",
        //   ],
        //   data: [83, 9, 17, 7, 9, 4, 9, 3],
        // },

        {
            labels: [
                "Information Technology",
                "Electronics and Communication Engineering",
                "Bio Informatics",

                "Data Science and Analytics",
            ],
            backgroundColor: ["#57167E", "#F7B7A3", "#EA5F89", "#9B3192"],
            borderColor: ["#57167E33", "#F7B7A333", "#EA5F8933", "#9B319233"],
            borderWidth: 5,
            // cutout: "5%",

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
            backgroundColor: "blue",
            borderColor: "#FFB411",

            borderWidth: 2,
        },
        {
            label: "Female",
            data: [9, 7, 4, 3],
            backgroundColor: "pink",
            borderColor: "#FFB411",
            borderWidth: 1,
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
    labels: ["IT", "ECE", "BI", "DSA"],
    datasets: [
        {
            label: "Male",
            data: [83, 17, 9, 9],
            backgroundColor: "blue",
            borderColor: "#FFB411",

            borderWidth: 2,
        },
        {
            label: "Female",
            data: [9, 7, 4, 3],
            backgroundColor: "pink",
            borderColor: "#FFB411",
            borderWidth: 1,
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
