function getPopData() {
  let continentPopData = [
    4641055000,
    1340598000,
    747636000,
    653962000,
    368870000,
    42678000,
  ];

  for (let i = 0; i < continentPopData.length; i++) {
    let billions = Math.abs(continentPopData[i] / 1.0e9);
    continentPopData[i] = Number(billions.toFixed(2));
  }

  let obj = {
    type: "horizontalBar",
    data: {
      labels: [
        "Asia",
        "Africa",
        "Europe",
        "Latin America",
        "North America",
        "Oceania",
      ],
      datasets: [
        {
          backgroundColor: "steelblue",
          label: "Population (billions)",
          // backgroundColor: ["#264653", "#2A9D8F", "#E9C46A", "#e6beae", "#E76F51", "#eae2b7"],
          data: continentPopData,
        },
      ],
    },
    options: {
      fillColor: "rgba(0,60,100,1)",
      responsive: true,
      maintainAspectRatio: false,
      display: true,
      title: {
        display: false,
        text: "Population",
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
        mode: "index",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
              // maxTicksLimit: 20
            },
            scaleLabel: {
              display: true,
              labelString: "Billions",
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontSize: 18,
            },
          },
        ],
      },
      hover: {
        animationDuration: 0,
      },
      animation: {
        duration: 1000,
        onComplete: function () {
          var chartInstance = this.chart,
            ctx = chartInstance.ctx;
          ctx.font = Chart.helpers.fontString(
            Chart.defaults.global.defaultFontSize,
            Chart.defaults.global.defaultFontStyle,
            Chart.defaults.global.defaultFontFamily
          );
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
          this.data.datasets.forEach(function (dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function (bar, index) {
              var data = dataset.data[index] + " B";
              ctx.fillText(data, bar._model.x + 20, bar._model.y + 5);
            });
          });
        },
      },
    },
  };

  return obj;
}

function getTop10(continent) {
  let countries = [];

  if (continent === "asia") {
    countries = [
      "China",
      "India",
      "Indonesia",
      "Pakistan",
      "Bangladesh",
      "Japan",
      "The Philippines",
      "Vietnam",
      "Iran",
      "Turkey",
    ];
  }

  let continentPopData = [
    1392730000,
    1352617330,
    267663430,
    212215030,
    161356040,
    126529100,
    106651920,
    95540400,
    81800270,
    82319720,
  ];

  for (let i = 0; i < continentPopData.length; i++) {
    let millions = Math.abs(continentPopData[i] / 1.0e6);
    continentPopData[i] = Number(millions.toFixed(2));
  }

  let obj = {
    type: "horizontalBar",
    data: {
      labels: countries,
      datasets: [
        {
          backgroundColor: "steelblue",
          label: "Population (billions)",
          // backgroundColor: ["#264653", "#2A9D8F", "#E9C46A", "#e6beae", "#E76F51", "#eae2b7"],
          data: continentPopData,
        },
      ],
    },
    options: {
      fillColor: "rgba(0,60,100,1)",
      responsive: true,
      maintainAspectRatio: false,
      display: true,
      title: {
        display: false,
        text: "Population",
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
        mode: "index",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
              // maxTicksLimit: 20
            },
            scaleLabel: {
              display: true,
              labelString: "Millions",
            },
          },
        ],
      },
      hover: {
        animationDuration: 0,
      },
      animation: {
        duration: 1000,
        onComplete: function () {
          var chartInstance = this.chart,
            ctx = chartInstance.ctx;
          ctx.font = Chart.helpers.fontString(
            Chart.defaults.global.defaultFontSize,
            Chart.defaults.global.defaultFontStyle,
            Chart.defaults.global.defaultFontFamily
          );
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
          if (this.chart.width > 500) {
            this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                var data = dataset.data[index] + " M";
                let country = bar._view.label;
                if (country === "China" || country === "India") {
                  ctx.fillStyle = "white";
                  ctx.fillText(data, bar._model.x - 35, bar._model.y + 5);
                } else {
                  ctx.fillStyle = "black";
                  ctx.fillText(data, bar._model.x + 30, bar._model.y + 5);
                }
              });
            });
          }
        },
      },
    },
  };

  return obj;
}
