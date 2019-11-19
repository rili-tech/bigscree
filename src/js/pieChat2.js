$(function () {
    $('#pieChat2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            borderRadius: 20,
            backgroundColor: {
                linearGradient: [0, 0, 0, 500],
                stops: [
                    [0, 'rgb(61, 133, 198)'],
                    [1, 'rgb(4, 4, 133)']
                ]
            },
        },
        title: {
            text: '各模块问题占比',
            y: 30,
            style: {
                color: '#f4ea2a',
                fontSize: "18px"
            }
        },
        subtitle: {
            //text: '数据来源: 鈤励云模数据中心',
            //y: 80,
            //style: {
            //    color: '#FFFACD',
            //    fontSize: "12px"
            //}
        },        
        credits:{
            enabled:false  
        },
        exporting:{
            enabled:false  
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
                    distance: -10,
                    format: '{point.name}<br>{point.percentage:.1f}%',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#ffffff',
                        fontSize: "10px"
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '各区域项目面积占比',
            data: [
                {
                    name: '墙板',
                    y: 22,
                    sliced: true,
                    selected: true,
                    color: "#3d85c6ff"
                },
                {
                    name: '吊模',
                    y: 22,
                    sliced: true,
                    selected: true,
                    color: "#7B68EE"
                },
                {
                    name: '铁配件',
                    y: 2,
                    color:"#8FBC8F"
                },
               
                {
                    name: '梁板',
                    y: 16,
                    color: "#FB08EE"
                },
                {
                    name: "背楞",
                    y: 12,
                    color: "#006400"
                },
                {
                    name: "楼板",
                    y: 6,
                    color: "#906470"
                },
                {
                    name: "楼梯",
                    y: 20,
                    color: "#90f4f0"
                },
            ]
        }]
    });
});
