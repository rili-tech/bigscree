
$(function () {

    var start = 0;
    var length = 8;

    var categories = [];
    var data = [];
    //var url = '/design_institute/public/home/bigscreen';
    var url = 'data/gant-projects.json';
    
     $.get(url, function (projects) {

        for(var i = 0; i < projects.length; ++i){

            categories.push(projects[i].name);
            
            var current = (new Date()).getTime();
            var st_time = (new Date(projects[i].stime)).getTime();
            var ed_time = (new Date(projects[i].etime)).getTime();

            data.push({
                color:"#32CD32",
                x:  st_time + 8 * 3600 * 1000,
                x2: ed_time + 8 * 3600 * 1000,
                partialFill: parseFloat(projects[i].rate),
                dataLabels: {
                    formatter : function(){
                        return parseInt(this.point.partialFill * 100) + "%";
                    }
                }
            });
        }

        var p_categories = categories.slice(start, start + length);
        var p_data = data.slice(start, start + length);
        for(var i = 0;i < p_data.length; ++i) 
            p_data[i].y = i;

        start += length;
        if(start >= categories.length)
            start = 0;

        $('#gantChat').highcharts({
                chart: {
                    type: 'xrange',
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
                legend:{
                    enabled:false
                },
                title: {
                    text: '在线设计项目时间图',
                    y: 40,
                    margin: 50,
                    style: {
                        color: '#f4ea2a',
                        fontSize: "22px"
                    }
                },
                subtitle: {
                    text: '数据来源: 鈤励云模数据中心',
                    y: 80,
                    style: {
                        color: '#FFFACD',
                        fontSize: "17px"
                    }
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        hour: '%m/%d',
                        day: '%m/%d',
                        month: '%m/%d',
                        week: '%m/%d'
                    },
                    labels: {
                        style: {
                            color: '#ffffff'
                        }
                    }
                },
                yAxis: {
                    title: {
                        enabled: false
                    },
                    categories: p_categories,
                    reversed: true,
                    labels: {
                        style: {
                            color: '#ffffff',
                        }
                    }
                },
                tooltip: {
                    dateTimeLabelFormats: {
                        hour: '%Y/%m/%d',
                        day: '%Y/%m/%d',
                        month: "%Y/%m",
                        week:'%Y/%m/%d'
                    }
                },
                series: [{
                    name: '项目',
                    borderColor: 'gray',
                    pointWidth: 20,
                    data: p_data,
                    dataLabels: {
                        enabled: true
                    }
                }]
            });

    });

    setInterval(() => {

        var c = categories.slice(start, start + length);
        var d = data.slice(start, start + length);

        for(var i = 0;i < d.length; ++i) 
            d[i].y = i;

        start += length;
        if(start >= categories.length)
            start = 0;
        
 	console.log(c);
       	console.log(d);
        $('#gantChat').highcharts().yAxis[0].setCategories(c);
        $('#gantChat').highcharts().series[0].setData(d);
        $('#gantChat').highcharts().redraw();


    }, 5000);


    
})
