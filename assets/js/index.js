$(function() {
    $("#dash-chart-1").sparkline([5, 8, 7, 10, 9, 10, 8, 6, 4, 6, 8, 7, 6, 8], {
        type: "bar",
        height: "35",
        barWidth: "3",
        resize: true,
        barSpacing: "3",
        barColor: "#fff"
    });
    $("#dash-chart-2").sparkline([0, 5, 3, 7, 5, 10, 3, 6, 5, 10], {
        type: "line",
        width: "80",
        height: "40",
        lineWidth: "2",
        lineColor: "#fff",
        fillColor: "transparent",
        spotColor: "#fff",
    });
    $("#dash-chart-3").sparkline([2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 6, 5, 4, 3, 4, 5], {
        type: "discrete",
        width: "75",
        height: "40",
        lineColor: "#fff",
        lineHeight: 22
    });
    $("#dash-chart-4").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
        type: "line",
        width: "100",
        height: "25",
        lineWidth: "2",
        lineColor: "#ffffff",
        fillColor: "transparent"
    });
    var a = document.getElementById("dash-chart-5").getContext("2d");
    var b = a.createLinearGradient(0, 0, 0, 300);
    b.addColorStop(0, "#17ead9");
    b.addColorStop(1, "#6078ea");
    var g = a.createLinearGradient(0, 0, 0, 300);
    g.addColorStop(0, "#f80759");
    g.addColorStop(1, "#bc4e9c");
    var o = new Chart(a, {
        type: "line",
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            datasets: [{
                label: "Apple",
                data: [0, 30, 60, 25, 60, 25, 50, 0],
                pointBorderWidth: 2,
                pointBackgroundColor: "transparent",
                pointHoverBackgroundColor: b,
                backgroundColor: b,
                borderColor: b,
                borderWidth: 2
            }, {
                label: "Samsung",
                data: [0, 60, 25, 80, 35, 75, 30, 0],
                pointBorderWidth: 2,
                pointBackgroundColor: "transparent",
                pointHoverBackgroundColor: g,
                backgroundColor: g,
                borderColor: g,
                borderWidth: 2
            }]
        },
        options: {
            legend: {
                display: true,
                labels: {
                    boxWidth: 40
                }
            },
            tooltips: {
                displayColors: false
            }
        }
    });
    var a = document.getElementById("dash-chart-6").getContext("2d");
    var h = a.createLinearGradient(0, 0, 0, 300);
    h.addColorStop(0, "#42e695");
    h.addColorStop(1, "#3bb2b8");
    var i = a.createLinearGradient(0, 0, 0, 300);
    i.addColorStop(0, " #7f00ff");
    i.addColorStop(0.5, "#e100ff");
    var o = new Chart(a, {
        type: "bar",
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            datasets: [{
                label: "Laptops",
                data: [40, 30, 60, 35, 60, 25, 50, 40],
                borderColor: h,
                backgroundColor: h,
                hoverBackgroundColor: h,
                pointRadius: 0,
                fill: false,
                borderWidth: 1
            }, {
                label: "Mobiles",
                data: [50, 60, 40, 70, 35, 75, 30, 20],
                borderColor: i,
                backgroundColor: i,
                hoverBackgroundColor: i,
                pointRadius: 0,
                fill: false,
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                position: "bottom",
                display: true,
                labels: {
                    boxWidth: 12
                }
            },
            tooltips: {
                displayColors: false,
            },
            scales: {
                xAxes: [{
                    barPercentage: 0.5
                }]
            }
        }
    });
    var a = document.getElementById("dash-chart-7").getContext("2d");
    var b = a.createLinearGradient(0, 0, 0, 300);
    b.addColorStop(0, "#ee0979");
    b.addColorStop(1, "#ff6a00");
    var o = new Chart(a, {
        type: "line",
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7],
            datasets: [{
                label: "Views",
                data: [3, 30, 10, 10, 22, 12, 5],
                pointBorderWidth: 2,
                pointHoverBackgroundColor: b,
                backgroundColor: b,
                borderColor: "transparent",
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                position: "bottom",
                display: false
            },
            tooltips: {
                displayColors: false,
                mode: "nearest",
                intersect: false,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        display: true
                    },
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        display: true
                    },
                }]
            }
        }
    });
    jQuery("#dashboard-map").vectorMap({
        map: "world_mill_en",
        backgroundColor: "transparent",
        borderColor: "#818181",
        borderOpacity: 0.25,
        borderWidth: 1,
        zoomOnScroll: false,
        color: "#009efb",
        regionStyle: {
            initial: {
                fill: "#15ca20"
            }
        },
        markerStyle: {
            initial: {
                r: 9,
                fill: "#fff",
                "fill-opacity": 1,
                stroke: "#000",
                "stroke-width": 5,
                "stroke-opacity": 0.4
            },
        },
        enableZoom: true,
        hoverColor: "#009efb",
        markers: [{
            latLng: [21, 78],
            name: "I Love My India"
        }],
        hoverOpacity: null,
        normalizeFunction: "linear",
        scaleColors: ["#b6d6ff", "#005ace"],
        selectedColor: "#c9dfaf",
        selectedRegions: [],
        showTooltip: true
    });
    $("#dash-chart-8").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#dd4b39",
        fillColor: "rgba(221, 75, 57, 0.5)",
        spotColor: "#dd4b39",
    });
    $("#dash-chart-9").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#3b5998",
        fillColor: "rgba(59, 89, 152, 0.5)",
        spotColor: "#3b5998",
    });
    $("#dash-chart-10").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#55acee",
        fillColor: "rgba(85, 172, 238, 0.5)",
        spotColor: "#55acee",
    });
    $("#dash-chart-11").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#0976b4",
        fillColor: "rgba(9, 118, 180, 0.5)",
        spotColor: "#0976b4",
    });
    $("#dash-chart-12").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#1769ff",
        fillColor: "rgba(23, 105, 255, 0.5)",
        spotColor: "#1769ff",
    });
    $("#dash-chart-13").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#ea4c89",
        fillColor: "rgba(234, 76, 137, 0.5)",

        spotColor: "#ea4c89",
    });
    $("#dash-chart-14").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#333333",
        fillColor: "rgba(51, 51, 51, 0.5)",
        spotColor: "#333333",
    });
    $("#dash-chart-15").sparkline([5, 8, 7, 10, 9, 10, 8, 6, 4, 6, 8, 7, 6, 8, 10, 8, 6, 4], {
        type: "bar",
        height: "45",
        barWidth: "3",
        resize: true,
        barSpacing: "5",
        barColor: "#fff"
    });
    var a = document.getElementById("dash-chart-16").getContext("2d");
    var j = a.createLinearGradient(0, 0, 0, 300);
    j.addColorStop(0, "#7f00ff");
    j.addColorStop(1, "#e100ff");
    var k = a.createLinearGradient(0, 0, 0, 300);
    k.addColorStop(0, "#fc4a1a");
    k.addColorStop(1, "#f7b733");
    var l = a.createLinearGradient(0, 0, 0, 300);
    l.addColorStop(0, "#283c86");
    l.addColorStop(1, "#45a247");
    var o = new Chart(a, {
        type: "pie",
        data: {
            labels: ["Samsung", "Apple", "Nokia"],
            datasets: [{
                backgroundColor: [j, k, l],
                hoverBackgroundColor: [j, k, l],
                data: [50, 50, 50]
            }]
        },
        options: {
            legend: {
                display: false
            },
            tooltips: {
                displayColors: false
            }
        }
    });
    var a = document.getElementById("dash-chart-17").getContext("2d");
    var m = a.createLinearGradient(0, 0, 0, 300);
    m.addColorStop(0, "#42e695");
    m.addColorStop(1, "#3bb2b8");
    var n = a.createLinearGradient(0, 0, 0, 300);
    n.addColorStop(0, "#4776e6");
    n.addColorStop(1, "#8e54e9");
    var c = a.createLinearGradient(0, 0, 0, 300);
    c.addColorStop(0, "#ee0979");
    c.addColorStop(1, "#ff6a00");
    var o = new Chart(a, {
        type: "polarArea",
        data: {
            labels: ["Gross Profit", "Revenue", "Expense"],
            datasets: [{
                backgroundColor: [m, n, c],
                hoverBackgroundColor: [m, n, c],
                data: [5, 8, 7]
            }]
        },
        options: {
            legend: {
                display: false
            },
            tooltips: {
                displayColors: false
            }
        }
    });
    var a = document.getElementById("dash-chart-18").getContext("2d");
    var d = a.createLinearGradient(0, 0, 0, 300);
    d.addColorStop(0, "#ba8b02");
    d.addColorStop(1, "#181818");
    var e = a.createLinearGradient(0, 0, 0, 300);
    e.addColorStop(0, "#2c3e50");
    e.addColorStop(1, "#fd746c");
    var f = a.createLinearGradient(0, 0, 0, 300);
    f.addColorStop(0, "#ff0099");
    f.addColorStop(1, "#493240");
    var o = new Chart(a, {
        type: "doughnut",
        data: {
            labels: ["Jeans", "T-Shirts", "Shoes"],
            datasets: [{
                backgroundColor: [d, e, f],
                hoverBackgroundColor: [d, e, f],
                data: [25, 25, 25]
            }]
        },
        options: {
            legend: {
                display: false
            },
            tooltips: {
                displayColors: false
            }
        }
    })
});

function info_noti() {
    Lobibox.notify("info", {
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        size: "mini",
        position: "top right",
        icon: "fa fa-info-circle",
        msg: "This is Gradient Color Dashboard"
    })
};