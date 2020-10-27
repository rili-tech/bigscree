$(function () {

    //当期日期
    var myDate = new Date();
    var y = myDate.getFullYear();//2018
    var m = myDate.getMonth();//3
    y -= 1;
    m += 1;
    
    var categories = [];
    for(var i = 0; i < 13; i++)
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
    
    var zhoudata= [{color: "#7cb5ec",y: 85.6},{color: "#7cb5ec",y: 88.4},{color: "#7cb5ec",y: 99.7},{color: "#7cb5ec",y: 90.5},{color: "#7cb5ec",y: 83.5}
    ,{color: "#7cb5ec",y: 95},{color: "#7cb5ec",y: 86.6},{color: "#7cb5ec",y: 88.0},{color: "#7cb5ec",y: 87.9},{color: "#7cb5ec",y: 88.1}
    ,{color: "#7cb5ec",y: 90.6},{color: "#7cb5ec",y: 91.4},{color: "#7cb5ec",y: 90.7},{color: "#7cb5ec",y: 90.9},{color: "#7cb5ec",y: 98.5}
    ,{color: "#7cb5ec",y: 92.1}];

    var errordata= [{color: "#FFA500",y: 0.16},{color: "#FFA500",y: 0.16},{color: "#FFA500",y: 0.11},{color: "#FFA500",y: 0.13},{color: "#FFA500",y: 0.11}
    ,{color: "#FFA500",y: 0.14},{color: "#FFA500",y: 0.1},{color: "#FFA500",y: 0.10},{color: "#FFA500",y: 0.13},{color: "#FFA500",y: 0.16}
    ,{color: "#FFA500",y: 0.14},{color: "#FFA500",y: 0.13},{color: "#FFA500",y: 0.12},{color: "#FFA500",y: 0.10},{color: "#FFA500",y: 0.15}
    ,{color: "#FFA500",y: 0.09}];

    var intTime = 250;
    var time = 0;
    var timeTotal = intTime*4*13;
    var intval = intTime*2;

    // window.setInterval(updatehighcharts, intTime); 
 
    // function updatehighcharts() 
    // {
    //     var chart = $('#turnoverChat').highcharts();
    //     if(time > timeTotal*2 + intval*12 + 5000 || time == 0)
    //     {
    //         time = 0;
    //         for(var i = 0; i <  chart.series.length;i++)
    //         {
    //             for(var j = 0; j < chart.series[i].data.length;j++)
    //             {
    //                chart.series[i].data[j].update(null);
    //             }
    //         }
    //         chart.yAxis[0].removePlotLine('plot-line-1');
    //         chart.yAxis[1].removePlotLine('plot-line-2');
    //         chart.yAxis[1].removePlotLine('plot-line-3');
    //         time = time + intTime;                              
    //         return;
    //     }
    //     else if(time > timeTotal*2 + intval*12 + intTime && time <= timeTotal*2 + intval*12 + 5000)
    //     {
    //         time = time + intTime;
    //         return;
    //     }
    //     if (time < timeTotal)
    //     {
    //         var iNdx = Math.floor((time) / (intval*2));
    //         var data = zhoudata[iNdx];
    //         time % intval ? data.color="#7cb5ec" : data.color="black";
    //         chart.series[0].data[iNdx].update(data);
    //     }
    //     else if (time < timeTotal * 2)
    //     {
    //         var iNdx = Math.floor((time -timeTotal)/ (intval*2));
    //         var data = errordata[iNdx];
    //         time % intval ? data.color="#FFA500" : data.color="black";
    //         chart.series[1].data[iNdx].update(data);
    //     }
    //     else if(time < timeTotal*2 + intval*4)
    //     {
    //         var newData = { // Primary yAxis
    //             labels: {
    //                 format: '{value}%',
    //                 style: {
    //                     color: '#ffffff',
    //                     fontSize: "15px"
    //                 }
    //             },
    //             tickPositions: [0, 20, 40, 60, 80, 100],
    //             title: {
    //                 text: '通用率',
    //                 style: {
    //                     color: '#ffffff',
    //                     fontSize: "18px"
    //                 }
    //             },
    //             plotLines:[{
    //                 id: 'plot-line-1',
    //                 color: time % intval ? "yellow" : "black",
    //                 dashStyle:'longdashdot',     //默认值，这里定义为实线
    //                 value: 85,               //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
    //                 width:2,                //标示线的宽度，2px
    //                 zIndex:1000,
    //                 label:{
    //                     text:"通用率控制线",
    //                     style:{
    //                         color: time % intval ? "yellow" : "black",
    //                     },
    //                     x:425,
    //                     y:-3
    //                 }
    //             }]
    //         }
    //         chart.yAxis[0].update(newData,newData);
    //     }
    //     else if(time < timeTotal*2 + intval*8)
    //     {
    //         var newData =  { // Secondary yAxis
    //             title: {
    //                 text: '错误率',
    //                 style: {
    //                     color: '#FFA500',
    //                     fontSize: "18px"
    //                 }
    //             },
    //             tickPositions: [0.08, 0.1, 0.16, 0.24, 0.32, 0.4, 0.48],
    //             labels: {
    //                 format: '{value}%',
    //                 style: {
    //                     color: '#FFA500',
    //                     fontSize: "15px"
    //                 }
    //             },
    //             plotLines:[{
    //                 id: 'plot-line-2',
    //                 color: time % intval ? "red" : "black",
    //                 dashStyle:'longdashdot',     //默认值，这里定义为实线
    //                 value:0.2,               //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
    //                 width:2,                //标示线的宽度，2px
    //                 zIndex:1000,
    //                 label:{
    //                     text:"错误率控制线",
    //                     style:{
    //                         color: time % intval ? "red" : "black",
    //                     },
    //                     x:425,
    //                     y:3
    //                 }
    //             }],
    //             opposite: true
    //         }
    //         chart.yAxis[1].update(newData,newData);
    //         console.log(chart.yAxis[1]);
    //     }
    //     else if(time < timeTotal*2 + intval*12)
    //     {
    //         var newData =  { // Secondary yAxis
    //             title: {
    //                 text: '错误率',
    //                 style: {
    //                     color: '#FFA500',
    //                     fontSize: "18px"
    //                 }
    //             },
    //             tickPositions: [0.08, 0.1, 0.16, 0.24, 0.32, 0.4, 0.48],
    //             labels: {
    //                 format: '{value}%',
    //                 style: {
    //                     color: '#FFA500',
    //                     fontSize: "15px"
    //                 }
    //             },
    //             plotLines:[
    //                 {
    //                     id: 'plot-line-2',
    //                     color: "red",
    //                     dashStyle:'longdashdot',     //默认值，这里定义为实线
    //                     value:0.2,               //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
    //                     width:2,                //标示线的宽度，2px
    //                     zIndex:1000,
    //                     label:{
    //                         text:"错误率控制线",
    //                         style:{
    //                             color: "red",
    //                         },
    //                         x:425,
    //                         y:3
    //                     }
    //                 },
    //             {
    //                 id: 'plot-line-3',
    //                 color: time % intval ? "#FF1493" : "black",
    //                 dashStyle:'longdashdot',     //默认值，这里定义为实线
    //                 value:0.1,               //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
    //                 width:2,                //标示线的宽度，2px
    //                 zIndex:1000,
    //                 label:{
    //                     text:"错误率目标线",
    //                     style:{
    //                         color: time % intval ? "#FF1493" : "black",
    //                     },
    //                     x:425,
    //                     y:-10
    //                 }
    //             }],
    //             opposite: true
    //         }
    //         chart.yAxis[1].update(newData,newData);
    //     }
    //     else if(time == timeTotal*2 + intval*12 + 300)
    //     {
    //         console.log(1);
    //         for(var j = 0; j <  chart.series[0].data.length;j++)
    //         {
    //             chart.series[0].data[j].update(zhoudata[j]);
    //         }
    //         for(var j = 0; j < chart.series[1].data.length;j++)
    //         {
    //             chart.series[1].data[j].update(errordata[j]);
    //         }
    //         var newData = { // Primary yAxis
    //             labels: {
    //                 format: '{value}%',
    //                 style: {
    //                     color: '#ffffff',
    //                     fontSize: "15px"
    //                 }
    //             },
    //             tickPositions: [0, 20, 40, 60, 80, 100],
    //             title: {
    //                 text: '通用率',
    //                 style: {
    //                     color: '#ffffff',
    //                     fontSize: "18px"
    //                 }
    //             },
    //             plotLines:[{
    //                 id: 'plot-line-1',
    //                 color:'yellow',           //线的颜色，定义为黄色
    //                 dashStyle:'longdashdot',     //默认值，这里定义为实线
    //                 value: 85,               //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
    //                 width:2,                //标示线的宽度，2px
    //                 zIndex:1000,
    //                 label:{
    //                     text:"通用率控制线",
    //                     style:{
    //                         color: "yellow"
    //                     },
    //                     x:425,
    //                     y:3
    //                 }
    //             }]
    //         }
    //         chart.yAxis[0].update(newData,newData);
    //         newData =  { // Secondary yAxis
    //             title: {
    //                 text: '错误率',
    //                 style: {
    //                     color: '#FFA500',
    //                     fontSize: "18px"
    //                 }
    //             },
    //             tickPositions: [0.08, 0.1, 0.16, 0.24, 0.32, 0.4, 0.48],
    //             labels: {
    //                 format: '{value}%',
    //                 style: {
    //                     color: '#FFA500',
    //                     fontSize: "15px"
    //                 }
    //             },
    //             plotLines:[{
    //                 id: 'plot-line-2',
    //                 color:'red',           //线的颜色，定义为红色
    //                 dashStyle:'longdashdot',     //默认值，这里定义为实线
    //                 value:0.2,               //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
    //                 width:2,                //标示线的宽度，2px
    //                 zIndex:1000,
    //                 label:{
    //                     text:"错误率控制线",
    //                     style:{
    //                         color: "red"
    //                     },
    //                     x:425,
    //                     y:3
    //                 }
    //             },
    //             {
    //                 id: 'plot-line-3',
    //                 color:'#FF1493',           //线的颜色，定义为绿色
    //                 dashStyle:'longdashdot',     //默认值，这里定义为实线
    //                 value:0.1,               //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
    //                 width:2,                //标示线的宽度，2px
    //                 zIndex:1000,
    //                 label:{
    //                     text:"错误率目标线",
    //                     style:{
    //                         color: "#FF1493"
    //                     },
    //                     x:425,
    //                     y:-10
    //                 }
    //             }],
    //             opposite: true
    //         }
    //         chart.yAxis[1].update(newData,newData);
    //         console.log(chart.yAxis[1]);
    //     }
    //     time = time + intTime;
    // } 

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
                    [1, 'rgb(4, 4, 133)'],
                    [2, 'rgb(4, 4, 133)']
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
            text: '通用率和错误率',
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
            tickPositions: [0, 20, 40, 60, 80, 100],
            title: {
                text: '通用率',
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
            tickPositions: [0.08, 0.1, 0.16, 0.24, 0.32, 0.4, 0.48],
            labels: {
                format: '{value}%',
                style: {
                    color: '#FFA500',
                    fontSize: "15px"
                }
            },
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
            name: '通用率',
            type: 'column',
            data: [{color: "#7cb5ec",y: 85.6},{color: "#7cb5ec",y: 88.4},{color: "#7cb5ec",y: 99.7},{color: "#7cb5ec",y: 90.5},{color: "#7cb5ec",y: 83.5}
            ,{color: "#7cb5ec",y: 95},{color: "#7cb5ec",y: 86.6},{color: "#7cb5ec",y: 88.0},{color: "#7cb5ec",y: 87.9},{color: "#7cb5ec",y: 88.1}
            ,{color: "#7cb5ec",y: 90.6},{color: "#7cb5ec",y: 91.4},{color: "#7cb5ec",y: 90.7},{color: "#7cb5ec",y: 90.9},{color: "#7cb5ec",y: 98.5}
            ,{color: "#7cb5ec",y: 92.1}],
            tooltip: {
                valueSuffix: '%'
            }
        }, {
            color: "#FFA500",
            name: '错误率',
            type: 'spline',
            yAxis: 1,
            data: [{color: "#FFA500",y: 0.16},{color: "#FFA500",y: 0.16},{color: "#FFA500",y: 0.11},{color: "#FFA500",y: 0.13},{color: "#FFA500",y: 0.11}
            ,{color: "#FFA500",y: 0.14},{color: "#FFA500",y: 0.1},{color: "#FFA500",y: 0.10},{color: "#FFA500",y: 0.13},{color: "#FFA500",y: 0.16}
            ,{color: "#FFA500",y: 0.14},{color: "#FFA500",y: 0.13},{color: "#FFA500",y: 0.12},{color: "#FFA500",y: 0.10},{color: "#FFA500",y: 0.15}
            ,{color: "#FFA500",y: 0.09}],
            tooltip: {
                valueSuffix: '%'
            }
        }]
    });
});
