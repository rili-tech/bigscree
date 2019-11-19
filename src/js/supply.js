    // 迁移图

    // 标准板VS非标准板
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
    var optionOK = {
        chart: {
            type: 'pie',
            borderRadius: 10,
            backgroundColor: {
                linearGradient: [0, 0, 0, 500],
                stops: [
                    [0, 'rgb(61, 133, 198)'],
                    [1, 'rgb(4, 4, 133)']
                ]
            },
        },
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        legend: {
            align: 'center',
            verticalAlign: 'top',
            itemStyle: {
                color: '#fff',
                cursor: 'pointer'
            }
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    distance: -30,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                },
                showInLegend: true, // 设置饼图是否在图例中显示
            }
        },
        series: [{
            type: 'pie',
            name: '标准|非标准板占比：',
            data: [{
                    name: '非标准板',
                    y: 22.2,
                    color: '#62bf4f',
                },
                {
                    name: '标准板',
                    y: 77.8,
                    sliced: true,
                    selected: true
                }
            ]
        }]
    }
    Highcharts.chart('isOkChart', optionOK)
    // 新旧板占比
    Highcharts.chart('isNewChart', Object.assign(optionOK, {
        series: [{
            type: 'pie',
            name: '新旧板占比：',
            data: [{
                    y: 60,
                    name: '旧板',
                    color: '#dc8841',
                },
                {
                    name: '新板',
                    y: 40,
                    sliced: true,
                    selected: true
                }
            ]
        }]
    }))
    // 每日模板供应量

    // 生产
    var product_catogery = ['1/19', '1/20', '1/21', '1/22', '1/23', '1/24', '1/25', '1/26', '1/27', '1/28', '1/29',
        '1/30'
    ]
    var data_product = new Array();
    data_product[0] = [
        Math.floor(Math.random() * 10 + 1),
        Math.ceil(Math.random() * 10 + 3),
        Math.floor(Math.random() * 5 + 4),
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 4),
        Math.ceil(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 2),
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 7 + 2),
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 8 + 2),
        Math.floor(Math.random() * 10 + 2)
    ]
    data_product[1] = [
        Math.floor(Math.random() * 10 + 1),
        Math.ceil(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 5 + 1),
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 / 2 + 1),
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 2),
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 3),
        Math.floor(Math.random() * 10 + 1)
    ]
    data_product[2] = [
        Math.floor(Math.random() * 10),
        Math.ceil(Math.random() * 10),
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.ceil(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 7),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 10 / 2)
    ]
    data_product[3] = [
        Math.floor(Math.random() * 10),
        Math.ceil(Math.random() * 10),
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.ceil(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 7),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 3)
    ]
    data_product[4] = [
        Math.floor(Math.random() * 6 + 2),
        Math.ceil(Math.random() * 10 + 6),
        Math.floor(Math.random() * 5 + 6),
        Math.floor(Math.random() * 10 + 8),
        Math.floor(Math.random() * 10 + 4),
        Math.ceil(Math.random() * 10 + 3),
        Math.floor(Math.random() * 10 + 7),
        Math.floor(Math.random() * 10 + 3),
        Math.floor(Math.random() * 7 + 9),
        Math.floor(Math.random() * 10 + 3),
        Math.floor(Math.random() * 8 + 6),
        Math.floor(Math.random() * 10 + 2)
    ]
    data_product[5] = [
        Math.floor(Math.random() * 10 + 8),
        Math.ceil(Math.random() * 10 + 2),
        Math.floor(Math.random() * 5 + 1),
        Math.floor(Math.random() * 10 + 3),
        Math.floor(Math.random() * 10 + 6),
        Math.ceil(Math.random() * 10 + 3),
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 6),
        Math.floor(Math.random() * 7 + 9),
        Math.floor(Math.random() * 10 + 2),
        Math.floor(Math.random() * 8 + 6),
        Math.floor(Math.random() * 10 + 1)
    ]
    data_product[6] = [
        Math.floor(Math.random() * 10 + 8),
        Math.ceil(Math.random() * 10 + 2),
        Math.floor(Math.random() * 5 + 1),
        Math.floor(Math.random() * 10 + 3),
        Math.floor(Math.random() * 10 + 6),
        Math.ceil(Math.random() * 10 + 3),
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 6),
        Math.floor(Math.random() * 7 + 9),
        Math.floor(Math.random() * 10 + 2),
        Math.floor(Math.random() * 8 + 6),
        Math.floor(Math.random() * 10 + 1)
    ]
    data_product[7] = [
        Math.floor(Math.random() * 10 + 3),
        Math.ceil(Math.random() * 6 + 2),
        Math.floor(Math.random() * 5 + 8),
        Math.floor(Math.random() * 10 + 3),
        Math.floor(Math.random() * 10 + 6),
        Math.ceil(Math.random() * 10 + 3),
        Math.floor(Math.random() * 10 + 2),
        Math.floor(Math.random() * 6 + 6),
        Math.floor(Math.random() * 7 + 9),
        Math.floor(Math.random() * 5 + 2),
        Math.floor(Math.random() * 6 + 6),
        Math.floor(Math.random() * 6 + 1)
    ]
    var daySupplyData = {
        chart: {
            type: 'column',
            backgroundColor: {
                linearGradient: [0, 0, 0, 400],
                stops: [
                    [0, 'rgb(61, 133, 198)'],
                    [1, 'rgb(4, 4, 133)']
                ]
            },
            borderRadius: 10,
            spacingRight: 40,
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
            text: '',
        },
        subtitle: {
            text: '数据来源: 鈤励云模数据中心',
            style: {
                color: 'white',

            }
        },
        xAxis: {
            categories: product_catogery,
            crosshair: true,
            labels: {
                style: {
                    color: 'white',
                }
            },
            title: {
                text: '日期',
                align: 'high',
                style: {
                    color: 'white'
                }
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: '（ 数量 ）',
                style: {
                    color: 'white',
                }
            },
            labels: {
                format: '{value} K',
                style: {
                    color: 'white',
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} K块</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                borderWidth: 0
            }
        },
        legend: {
            align: 'center',
            verticalAlign: 'top',
            itemStyle: {
                color: '#fff',
                cursor: 'pointer'
            }
        },
        series: [{
                name: '墙',
                data: data_product[0],

            }, {
                name: '梁',
                data: data_product[1]
            },
            {
                name: '板',
                data: data_product[2]
            },
            {
                name: '背楞',
                data: data_product[3]
            },
        ]
    }
    Highcharts.chart('daySupplyChart', daySupplyData);
    // 累计模板供应量
    var columnData = {
        chart: {
            type: 'column',
            backgroundColor: {
                linearGradient: [0, 0, 0, 400],
                stops: [
                    [0, 'rgb(61, 133, 198)'],
                    [1, 'rgb(4, 4, 133)']
                ]
            },
            borderRadius: 10,
            spacingRight: 40,
        },
        title: {
            text: null,
            style: {
                color: 'white'
            }
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        subtitle: {
            text: '数据来源: 鈤励云模数据中心',
            style: {
                color: 'white'
            }
        },
        xAxis: {
            categories: product_catogery,
            crosshair: true,
            labels: {
                style: {
                    color: 'white',
                }
            },
            title: {
                text: '日期',
                align: 'high',
                style: {
                    color: 'white'
                }
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: '( 数量 )',
                style: {
                    color: 'white'
                }
            },
            labels: {
                format: '{value} K',
                style: {
                    color: 'white',
                }
            }
        },
        tooltip: {
            // head + 每个 point + footer 拼接成完整的 table
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} K块</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        legend: {
            align: 'center',
            verticalAlign: 'top',
            itemStyle: {
                color: '#fff',
                cursor: 'pointer'
            }
        },
        plotOptions: {
            column: {
                borderWidth: 0
            }
        },
        series: [{
                name: '墙',
                data: data_product[4],

            }, {
                name: '梁',
                data: data_product[5]
            },
            {
                name: '板',
                data: data_product[6]
            },
            {
                name: '背楞',
                data: data_product[7]
            },
        ]
    }
    Highcharts.chart('sumSupplyChart', columnData)

    // 模板发货回收详情图
    Highcharts.chart('infoChart', Object.assign(columnData, {
        series: [{
                name: '墙',
                data: data_product[2],

            }, {
                name: '梁',
                data: data_product[1]
            },
            {
                name: '板',
                data: data_product[3]
            },
            {
                name: '背楞',
                data: data_product[0]
            },
        ]
    }))

    // 迁移图
    // 百度地图API功能
    var map = new BMap.Map("map"); // 创建Map实例
    console.log(map);
    map.centerAndZoom(new BMap.Point(108.51, 22.13), 7); // 初始化地图,设置中心点坐标和地图级别
    // //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]
    }));
    map.setCurrentCity("南宁"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    var p1 = new BMap.Point(110.290195, 25.273566);
    var p2 = new BMap.Point(106.62, 23.91);
    var p3 = new BMap.Point(113.2759952545166, 23.117055306224895);
    var p4 = new BMap.Point(108.51, 22.13);

    // 弧线
    var point1 = [p1, p4];
    var point2 = [p2, p4];
    var point3 = [p3, p4];

    var curve1 = new BMapLib.CurveLine(point1, {
        strokeColor: "blue",
        strokeWeight: 3,
        strokeOpacity: 0.5
    }); 
    //创建弧线对象
    map.addOverlay(curve1); //添加到地图中
    curve1.enableEditing(); //开启编辑功能
    var curve2 = new BMapLib.CurveLine(point2, {
        strokeColor: "blue",
        strokeWeight: 3,
        strokeOpacity: 0.5
    }); 
    //创建弧线对象
    map.addOverlay(curve2); //添加到地图中
    curve2.enableEditing(); //开启编辑功能

    curve1.enableEditing(); //开启编辑功能
    var curve3 = new BMapLib.CurveLine(point3, {
        strokeColor: "blue",
        strokeWeight: 3,
        strokeOpacity: 0.5
    }); 
    //创建弧线对象
    map.addOverlay(curve3); //添加到地图中
    curve3.enableEditing(); //开启编辑功能

    // 添加覆盖物
    // //设置marker图标为水滴
    var vectorMarker = new BMap.Marker(p4, {
        // 指定Marker的icon属性为Symbol
    });
    vectorMarker.setZIndex({
        zIndex: 9999
    })
    // 添加文字
    var label = new BMap.Label('终点', {
        offset: new BMap.Size(20, -10)
    });
    vectorMarker.setLabel(label);
    map.addOverlay(vectorMarker);


    // 返回按钮
    $('#second_btn').click(function () {
        window.history.go(-1)
    })