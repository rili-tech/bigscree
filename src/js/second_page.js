// 项目状态 No.2屏幕
var option2 = {
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
    },
    exporting:{
        enabled:false
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
            ['新板数', 24.8],
            ['旧板数', 73.1],
            ['错板数', 2.1]
        ]
    }]
}

var chart2 = Highcharts.chart('framInfoChart', option2, function (c) { // 图表初始化完毕后的会掉函数
    // 环形图圆心
    var centerY = c.series[0].center[1],
        titleHeight = parseInt(c.title.styles.fontSize);
    // 动态设置标题位置
    c.setTitle({
        y: centerY + titleHeight / 2
    });
});


// 设计 No.3屏幕
var categoriesD = ["总进度", "终版底图", "设计部<br>签收底图"];
var categories_prj = ["设计下<br>单签收", "现场拼装", "收款进度"];
var categories_design = ["总进度", "墙", "梁", "楼板", "楼梯", "背楞", "吊模", "施工<br>编号"];
var Data5 = [{
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 0
    },
    {
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 1
    },
    {
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 2
    },
]
var DataG = [{
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 0
    },
    {
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 1
    },
    {
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 2
    }
]
var Data_design = [{
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 0
    },
    {
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 1
    },
    {
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 2
    },
    {
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 3
    },
    {
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 4
    }, {
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 5
    }, {
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 6
    }, {
        color: "#33ccff",
        partialFill: 1,
        x: 1515128800000,
        x2: 1515715200000,
        y: 7
    },
]
var option3 = {
    chart: {
        type: 'xrange',
        borderRadius: 10,
        backgroundColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
                [0, 'rgb(61, 133, 198)'],
                [1, 'rgb(4, 4, 133)']
            ]
        },
    },
    exporting:{
        enabled:false
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 0,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    title: {
        text: '底图',
        style: {
            color:'white'
        }
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            week: '%Y/%m/%d'
        },
        labels: {
            style: {
                color: 'white'
            },
            enabled:false
        },
    },
    yAxis: {
        title: {
            text: '',
        },
        labels: {
            style: {
                color: 'white'
            }
        },
        categories: categoriesD,
        reversed: true
    },
    tooltip: {
        dateTimeLabelFormats: {
            day: '%Y/%m/%d'
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
        name: '底图',
        borderColor: 'gray',
        pointWidth: 20,
        data: Data5,
        dataLabels: {
            enabled: true
        }
    }]
}
// 底图
Highcharts.chart('DTChart', option3);
// 工程
Highcharts.chart('GCChart', Object.assign(option3, {
    title: {
        text: '工程',
        style: {
            color:'white'
        }
    }
}, {
    yAxis: {
        title: {
            text: '',
            
        style: {
            color:'white'
        }
        },
        labels: {
            style: {
                color: 'white'
            }
        },
        categories: categories_prj
    }
}, {
    series: [{
        name: '工程',
        borderColor: 'gray',
        pointWidth: 20,
        data: DataG,
        dataLabels: {
            enabled: true
        }
    }]
}));

// 设计
Highcharts.chart('design_chart', Object.assign(option3, {
    title: {
        text: '设计',
        
        style: {
            color:'white'
        }
    }
}, {
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            style: {
                color: 'white'
            }
        },
        categories: categories_design
    }
}, {
    series: [{
        name: '设计',
        borderColor: 'gray',
        pointWidth: 20,
        data: Data_design,
        dataLabels: {
            enabled: true
        }
    }]
}));


// 生产
var product_catogery = ['1/19','1/20','1/21','1/22','1/23','1/24','1/25','1/26','1/27','1/28','1/29','1/30']
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
var option4 = {
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
    },
    exporting:{
        enabled:false
    },
    credits:{
        enabled:false
    },
    title: {
        text: '',
        style: {
            color: 'white',
        }
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
        labels:{
            style: {
                color: 'white',
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '生产',
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
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 50,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    series: [{
        name: '切',
        data: data_product[0],

    },{
        name: '冲',
        data: data_product[1]
    },
    {
        name: '焊',
        data: data_product[2]
    },
    {
        name: '分',
        data: data_product[3]
    },]
}
Highcharts.chart('chart4', option4);

// 供应 No.5 屏幕
var options5 = {
    chart: {
        type: 'bar',
        borderRadius: 10,
        backgroundColor: {
            linearGradient: [0, 0, 0, 400],
            stops: [
                [0, 'rgb(61, 133, 198)'],
                [1, 'rgb(4, 4, 133)']
            ]
        },
    },
    exporting:{
        enabled:false
    },
    title: {
        text: ''
    },
    subtitle: {
        text: '数据来源: 鈤励云模数据中心',
        style: {
            color: 'white',

        }
    },
    xAxis: {
        categories: ['JS_NC_1<br/>仓储中心', 'JS_NC_2<br/>仓储中心', 'JS_NC_3<br/>仓储中心'],
        title: {
            text: null
        },
        labels: {
            style: {
                color: 'white'
            }
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: '模板总数 (个)',
            align: 'high',
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
        valueSuffix: ' K个'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 50,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '容量',
        data: [16, 31, 11]
    }, {
        name: '缺板',
        data: [2, 6, 12]
    }, {
        name: '旧板出货量',
        data: [8, 10, 13]
    }]
}
// 图表初始化函数
var chart5 = Highcharts.chart('chart5', options5);

//物流

// 拿到路径参数

(function ($) {
     $.extend({
      Request: function (m) {
       var sValue = location.search.match(new RegExp("[\?\&]" + m + "=([^\&]*)(\&?)", "i"));
       return sValue ? decodeURI(sValue[1]) : decodeURI(sValue);
      }
     });
    })(jQuery);
    var starPath = $.Request('province')
console.log(starPath)
// 百度地图API功能
var map = new BMap.Map("allmap"); // 创建Map实例
console.log(map);
map.centerAndZoom(new BMap.Point(113.1284581943, 23.0276248742), 11); // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
    mapTypes: [
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
    ]
}));
map.setCurrentCity("佛山"); // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

var driving = new BMap.DrivingRoute(map, {
    renderOptions: {
        map: map,
        panel: "r-result",
        autoViewport: true
    }
});
driving.search('佛山',starPath);


// 返回按钮
$('#second_btn').click(function(){
    window.history.go(-1)
})
// 项目状态完成%
// var product_per1 = Math.ceil(Math.random()*100)
// var product_per2 = Math.ceil(Math.random()*100)
// var product_per3 = Math.ceil(Math.random()*100)
// var product_per4 = Math.ceil(Math.random()*100)
// $('.design_span').text(  product_per1 + '%')
// $('.product_span').text(  product_per2 + '%')
// $('.pinZhuang_span').text(  product_per3 + '%')
// $('.wuLiu_span').text(  product_per4 + '%')