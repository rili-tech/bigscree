$(function () {

    //当期日期
    var myDate = new Date();
    var y = myDate.getFullYear();//2018
    var m = myDate.getMonth();//3
    y -= 2;
    m += 1;
    
    var categories = [];
    for(var i = 0; i < 24; i++)
    {
        var l = y.toString() + '-' + m.toString();
        m++;
        if(m > 12)
        {
            y++;
            m = 1;
        }   
        categories.push(l);
    }    

    $('#turnoverChat').highcharts({
        chart: {
            zoomType: 'xy',
            //borderColor: '#6495ED',
            //borderWidth: 2,
            borderRadius: 20,
            backgroundColor: {
                linearGradient: [0, 0, 0, 500],
                stops: [
                    [0, 'rgb(61, 133, 198)'],
                    [1, 'rgb(4, 4, 133)']
                ]
            },
        },
        credits:{
            enabled:false  
        },
        exporting:{
            enabled:false  
        },
        title: {
            text: '周转率和错误率',
            style: {
                color: '#f4ea2a',
                fontSize: "27px"
            }
        },
        subtitle: {
            text: '数据来源: 鈤励云模数据中心',
            style: {
                color: '#FFFACD',
                fontSize: "20px"
            }
        },
        xAxis: [{
            categories: categories,
            crosshair: true,
            labels: {
                style: {
                    color: '#ffffff',
                    fontSize: "15px"
                }
            }
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}%',
                style: {
                    color: '#ffffff',
                    fontSize: "15px"
                }
            },
            title: {
                text: '周转率',
                style: {
                    color: '#ffffff',
                    fontSize: "18px"
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '错误率',
                style: {
                    color: '#FFA500',
                    fontSize: "18px"
                }
            },
            labels: {
                format: '{value}%',
                style: {
                    color: '#FFA500',
                    fontSize: "15px"
                }
            },
            plotLines:[{
                color:'red',           //线的颜色，定义为红色
                dashStyle:'longdashdot',     //默认值，这里定义为实线
                value:0.3,               //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
                width:2,                //标示线的宽度，2px
                zIndex:1000,
                label:{
                    text:"错误率控制线",
                    style:{
                        color: "red"
                    },
                    x:360,
                    y:20
                }
            }],
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 0,
            verticalAlign: 'top',
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: '周转率',
            type: 'column',
            data: [45.6, 48.4, 49.7, 50.5, 53.5, 55, 56.6, 58.0, 57.9, 58.1, 60.6, 64.4,
                   65.7, 68.9, 68.5, 70.1, 70.6, 73.3, 76.6, 78.5, 80.4, 84.1, 85.6, 88.4],
            tooltip: {
                valueSuffix: '%'
            }
        }, {
            color: "#FFA500",
            name: '错误率',
            type: 'spline',
            yAxis: 1,
            data: [0.51, 0.50, 0.49, 0.48, 0.48, 0.47, 0.46, 0.46, 0.45, 0.43, 0.43, 0.40,
                   0.39, 0.36, 0.38, 0.35, 0.33, 0.30, 0.28, 0.30, 0.25, 0.23, 0.20, 0.16],
            tooltip: {
                valueSuffix: '%'
            }
        }]
    });
});
