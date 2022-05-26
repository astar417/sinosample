$(function() {
    $("#dash3-chart-1").sparkline([5, 8, 7, 10, 9, 10, 8, 6, 4, 6, 8, 7, 6, 8], {
        type: "bar",
        height: "35",
        barWidth: "3",
        resize: true,
        barSpacing: "3",
        barColor: "#fd22ff"
    });
    $("#dash3-chart-2").sparkline([0, 5, 3, 7, 5, 10, 3, 6, 5, 10], {
        type: "line",
        width: "80",
        height: "40",
        lineWidth: "2",
        lineColor: "#fd3550",
        fillColor: "transparent",
        spotColor: "#fff",
    });
    $("#dash3-chart-3").sparkline([2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 6, 5, 4, 3, 4, 5], {
        type: "discrete",
        width: "75",
        height: "40",
        lineColor: "#0dceec",
        lineHeight: 22
    });
    $("#dash3-chart-4").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
        type: "line",
        width: "100",
        height: "25",
        lineWidth: "2",
        lineColor: "#15ca20",
        fillColor: "transparent"
    });
    var a = document.getElementById("dash3-chart-5").getContext("2d");
    var b = a.createLinearGradient(0, 0, 0, 300);
    b.addColorStop(0, "#17ead9");
    b.addColorStop(1, "#6078ea");
    var g = a.createLinearGradient(0, 0, 0, 300);
    g.addColorStop(0, "#f80759");
    g.addColorStop(1, "#bc4e9c");
    var o = new Chart(a, {
        type: "line",
        data: {
            labels: ["0時", "3時", "6時", "9時", "12時", "15時", "18時", "21時", "24時"],
            datasets: [{
                label: "廢水排放量",
                data: [0, 16, 12, 18, 15, 17, 13,15, 0],
                pointBorderWidth: 2,
                pointBackgroundColor: "transparent",
                pointHoverBackgroundColor: g,
                backgroundColor: g,
                borderColor: g,
                borderWidth: 2
            },{
                label: "耗水量",
                data: [0, 30, 60, 25, 60, 25, 50, 10,0],
                pointBorderWidth: 2,
                pointBackgroundColor: "transparent",
                pointHoverBackgroundColor: b,
                backgroundColor: b,
                borderColor: b,
                borderWidth: 2
            } ]
        },
        options: {
            legend: {
                display: true,
                labels: {
                    fontColor: "#ddd",
                    boxWidth: 40
                }
            },
            tooltips: {
                displayColors: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#ddd"
                    },
                    gridLines: {
                        display: true,
                        color: "rgba(221, 221, 221, 0.08)"
                    },
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#ddd"
                    },
                    gridLines: {
                        display: true,
                        color: "rgba(221, 221, 221, 0.08)"
                    },
                }]
            }
        }
    });
    var a = document.getElementById("dash3-chart-6").getContext("2d");
    var h = a.createLinearGradient(0, 0, 0, 300);
    h.addColorStop(0, "#42e695");
    h.addColorStop(1, "#3bb2b8");
    var i = a.createLinearGradient(0, 0, 0, 300);
    i.addColorStop(0, " #7f00ff");
    i.addColorStop(0.5, "#e100ff");
    var o = new Chart(a, {
        type: "bar",
        data: {
            labels: ["積體電路", "光電", "電腦及周邊", "通訊", "精密機械", "生物科技", "其他"],
            datasets: [{
                label: "有效核准廠商家數",
                data: [4, 3, 6, 5, 6, 2, 5],
                borderColor: h,
                backgroundColor: h,
                hoverBackgroundColor: h,
                pointRadius: 0,
                fill: false,
                borderWidth: 1
            }, {
                label: "已入園登記廠商家數",
                data: [5, 6, 4, 7, 5, 7, 3],
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
                    fontColor: "#ddd",
                    boxWidth: 12
                }
            },
            tooltips: {
                displayColors: false,
            },
            scales: {
                xAxes: [{
                    barPercentage: 0.5,
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#ddd"
                    },
                    gridLines: {
                        display: true,
                        color: "rgba(221, 221, 221, 0.08)"
                    },
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#ddd"
                    },
                    gridLines: {
                        display: true,
                        color: "rgba(221, 221, 221, 0.08)"
                    },
                }]
            }
        }
    });
    var a = document.getElementById("dash3-chart-7").getContext("2d");
    var b = a.createLinearGradient(0, 0, 0, 300);
    b.addColorStop(0, "#ee0979");
    b.addColorStop(1, "#ff6a00");
    var o = new Chart(a, {
        type: "line",
        data: {
            labels: ["0時", "3時", "6時", "9時", "12時", "15時", "18時"],
            datasets: [{
                label: "用電量",
                data: [30, 100, 100, 300, 502, 702, 600],
                pointBorderWidth: 2,
                pointHoverBackgroundColor: b,
                backgroundColor: b,
                borderColor: "#ffffff",
                borderWidth: 2
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
                        beginAtZero: true,
                        fontColor: "#ddd"
                    },
                    gridLines: {
                        display: true,
                        color: "rgba(221, 221, 221, 0.08)"
                    },
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#ddd"
                    },
                    gridLines: {
                        display: true,
                        color: "rgba(221, 221, 221, 0.08)"
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
            latLng: [23, 120],
            name: "Taiwan"
        }],
        hoverOpacity: null,
        normalizeFunction: "linear",
        scaleColors: ["#b6d6ff", "#005ace"],
        selectedColor: "#c9dfaf",
        selectedRegions: [],
        showTooltip: true
    });
    $("#dash3-chart-8").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#dd4b39",
        fillColor: "rgba(221, 75, 57, 0.5)",
        spotColor: "#dd4b39",
    });
    $("#dash3-chart-9").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#3b5998",
        fillColor: "rgba(59, 89, 152, 0.5)",
        spotColor: "#3b5998",
    });
    $("#dash3-chart-10").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#55acee",
        fillColor: "rgba(85, 172, 238, 0.5)",
        spotColor: "#55acee",
    });
    $("#dash3-chart-11").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#0976b4",
        fillColor: "rgba(9, 118, 180, 0.5)",
        spotColor: "#0976b4",
    });
    $("#dash3-chart-12").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#1769ff",
        fillColor: "rgba(23, 105, 255, 0.5)",
        spotColor: "#1769ff",
    });
    $("#dash3-chart-13").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#ea4c89",
        fillColor: "rgba(234, 76, 137, 0.5)",
        spotColor: "#ea4c89",
    });
    $("#dash3-chart-14").sparkline([3, 5, 3, 7, 5, 10, 3, 6, 5, 7], {
        type: "line",
        width: "100",
        height: "20",
        lineWidth: "2",
        lineColor: "#75808a",
        fillColor: "rgba(117, 128, 138, 0.5)",
        spotColor: "#333333",
    });
    $("#dash3-chart-15").sparkline([5, 8, 7, 10, 9, 10, 8, 6, 4, 6, 8, 7, 6, 8, 10, 8, 6, 4], {
        type: "bar",
        height: "45",
        barWidth: "3",
        resize: true,
        barSpacing: "5",
        barColor: "#ff9700"
    });
    var a = document.getElementById("dash3-chart-16").getContext("2d");
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
        type: "doughnut",
        data: {
            labels: ["可出租", "已出租"],
            datasets: [{
                backgroundColor: [j, k],
                hoverBackgroundColor: [j, k],
                data: [50, 25]
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
    var a = document.getElementById("dash3-chart-17").getContext("2d");
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
        type: "doughnut",
        data: {
            labels: ["可出租", "已出租"],
            datasets: [{
                backgroundColor: [m,n],
                hoverBackgroundColor: [m,n],
                data: [220, 500]
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
    
    var a = document.getElementById("dash3-chart-18").getContext("2d");
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
            labels: ["已開發", "開發中", "待開發"],
            datasets: [{
                backgroundColor: [d, e, f],
                hoverBackgroundColor: [d, e, f],
                data: [10, 25, 40]
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
        msg: "This is Dark Color Dashboard"
    })
};