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
