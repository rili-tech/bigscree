    // 创建渐变色
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });
    // 构建图表
    var option = {
        chart: {
            type: 'pie',
            borderRadius: 10,
            backgroundColor: null,
        },
        title: {
            text: '切割',
            y: 30,
            style: {
                color: 'white'
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    distance: -20,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white'
                    },
                    connectorColor: 'silver',
                    connectorPadding: 5
                }
            }
        },
        series: [{
            type: 'pie',
            name: '切割',
            data: [
                ['梁板', 5.0],
                ['墙板', 21.8],
                {
                    name: '模板',
                    y: 27.8,
                    sliced: true,
                    selected: true
                },
                ['背楞', 45.4],
            ]
        }]
    }

    // 切割
    Highcharts.chart('qieGeChart', option);

    // 冲孔
    Highcharts.chart('chongKongChart', Object.assign(option, {
        title: {
            text: '冲孔',
            y: 30,
            style: {
                color: 'white'
            }
        }
    }, {
        series: [{
            type: 'pie',
            name: '冲孔',
            data: [
                ['梁板', 10.0],
                ['墙板', 11.8],
                {
                    name: '模板',
                    y: 27.8,
                    sliced: true,
                    selected: true
                },
                ['背楞', 50.4],
            ]
        }]
    }));

    // 焊接
    Highcharts.chart('hanJieChart', Object.assign(option, {
        title: {
            text: '焊接',
            y: 30,
            style: {
                color: 'white'
            }
        }
    }, {
        series: [{
            type: 'pie',
            name: '焊接',
            data: [
                ['梁板', 10.0],
                ['墙板', 11.8],
                {
                    name: '模板',
                    y: 17.8,
                    sliced: true,
                    selected: true
                },
                ['背楞', 60.4],
            ]
        }]
    }));

    // 分料
    Highcharts.chart('fenLiaoChart', Object.assign(option, {
        title: {
            text: '分料',
            y: 30,
            style: {
                color: 'white'
            }
        }
    }, {
        series: [{
            type: 'pie',
            name: '分料',
            data: [
                ['梁板', 20.0],
                ['墙板', 31.8],
                {
                    name: '模板',
                    y: 27.8,
                    sliced: true,
                    selected: true
                },
                ['背楞', 30.4],
            ]
        }]
    }));


    // 折线图
    var optionLine = {
        chart: {
            type: 'line',
            borderRadius: 10,
            backgroundColor: {
                linearGradient: [0, 0, 0, 300],
                stops: [
                    [0, 'rgb(61, 133, 198)'],
                    [1, 'rgb(4, 4, 133)']
                ]
            },
            spacingRight: 40,
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        subtitle: {
            text: '数据来源：鈤励云模数据中心',
            style: {
                color: 'white'
            }
        },
        xAxis: {
            // tickInterval: 7 * 24 * 3600 * 1000, // 坐标轴刻度间隔为一星期
            categories: ['1/19','1/20','1/21','1/22','1/23','1/24','1/25','1/26','1/27','1/28','1/29','1/30'],
            labels: {
                overflow: 'justify',
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: [{
            title: {
                text: '( 数量 )',
                style: {
                    color: 'white'
                }
            },
            labels: {
                overflow: 'justify',
                style: {
                    color: 'white'
                }
            }
        }, {
            // 第二个坐标轴，放置在右边
            title: {
                text: '( 数量 )',
                x: 30,
                style: {
                    color: 'white'
                }
            },
            linkedTo: 0,
            gridLineWidth: 0,
            opposite: true, // 通过此参数设置坐标轴显示在对立面
            labels: {
                align: 'right',
                x: 30,
                y: 2,
                format: '{value:.,0f}',
                style: {
                    color: 'white'
                }
            },
            showFirstLabel: false
        }],
        legend: {
            align: 'center',
            verticalAlign: 'top',
            itemStyle: {
                color: '#fff',
                cursor: 'pointer'
            }
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                // pointStart: 2006
            }
        },
        series: [{
            name: '切割',
            data: [507, 296, 205, 255, 369, 423, 320, 256, 103, 90, 46, 12]
        }, {
            name: '冲孔',
            data: [78, 66, 107, 246, 401, 469, 457, 350, 304, 123, 31, 11]
        }, {
            name: '焊接',
            data: [37, 72, 203, 301, 327, 397, 496, 350, 461, 506, 17, 9]
        }, {
            name: '分料',
            data: [19, 86, 178, 230, 258, 304, 399, 350, 461, 523, 604, 350]
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    }
    Highcharts.chart('dayChart', optionLine)

    // 错误率

    var optionPer = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            spacing: [10, 0, 10, 10],
            backgroundColor: {
                linearGradient: [0, 0, 0, 500],
                stops: [
                    [0, 'rgb(61, 133, 198)'],
                    [1, 'rgb(4, 4, 133)']
                ]
            },
            borderRadius: 10,
            spacingTop: 50,
            spacingLeft: 40,
        },
        exporting: {
            enabled: false
        },
        title: {
            floating: true,
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white'
                    },
                    connectorPadding: -30
                },
                point: {
                    events: {
                        mouseOver: function (e) {
                            chart2.setTitle({
                                text: e.target.name + '\t' + e.target.y + ' %'
                            });
                        }
                    }
                },
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            innerSize: '80%',
            name: '所占份额',
            data: [
                ['错误比', 2.9],
                ['标准板', 97.1]
            ]
        }]
    }

    var chart2 = Highcharts.chart('errorChart', optionPer, function (c) { // 图表初始化完毕后的会掉函数
        // 环形图圆心
        var centerY = c.series[0].center[1],
            titleHeight = parseInt(c.title.styles.fontSize);
        // 动态设置标题位置
        c.setTitle({
            y: centerY + titleHeight / 2
        });
    });

    // 进度条数据
    // $('.percent_QG').text($('.percent_QG').width())




    // 返回按钮
    $('#second_btn').click(function () {
        window.history.go(-1)
    })