const data = {
  labels: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ],
  datasets: [
    {
      label: "2020",
      data: [
        4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945,
      ],
      backgroundColor: ["#D0F0C0"],
      borderColor: ["rgba(0, 0, 0)"],
    },
    {
      label: "2021",
      data: [
        2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689,
      ],
      backgroundColor: ["#043927"],
      borderColor: ["rgba(0, 0, 0)"],
    },
  ],
};

// config
const config = {
  type: "bar",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);
