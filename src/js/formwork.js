
var cityCount = 56;
var formworkCount = 567681;
var formworkdatas = [{"datatime":"2018-08", "name1":"周转板数：","count":315456},
                     {"datatime":"2018-09", "name1":"周转板数：","count":334578},
                     {"datatime":"2018-10", "name1":"周转板数：","count":355985},
                     {"datatime":"2018-11", "name1":"周转板数：","count":384531},
                     {"datatime":"2018-12", "name1":"周转板数：","count":300000},
                     {"datatime":"2019-01", "name1":"周转板数：","count":67500},
                     {"datatime":"2019-02", "name1":"计划板数：","count":160000},
                     {"datatime":"2019-03", "name1":"计划板数：","count":410000},
                     {"datatime":"2019-04", "name1":"计划板数：","count":490000}];

 var projectdatas = [{"datatime":"2018-08", "name1":"完成楼栋：","count":39, "name2":"完成面积：","count2":79485},
                     {"datatime":"2018-09", "name1":"完成楼栋：","count":42, "name2":"完成面积：","count2":82687},
                     {"datatime":"2018-10", "name1":"完成楼栋：","count":35, "name2":"完成面积：","count2":69584},
                     {"datatime":"2018-11", "name1":"完成楼栋：","count":45, "name2":"完成面积：","count2":91793},
                     {"datatime":"2018-12", "name1":"完成楼栋：","count":48, "name2":"完成面积：","count2":96000},
                     {"datatime":"2019-01", "name1":"完成楼栋：","count":35, "name2":"完成面积：","count2":70000},
                     {"datatime":"2019-02", "name1":"计划楼栋：","count":20, "name2":"计划面积：","count2":40000},
                     {"datatime":"2019-03", "name1":"计划楼栋：","count":50, "name2":"计划面积：","count2":110000},
                     {"datatime":"2019-04", "name1":"计划楼栋：","count":60, "name2":"计划面积：","count2":120000}];              

$(function () {
    //$('#left-up').append('<marquee>'); 
    $('#left-up').append('<p>周转城市数：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:aqua">'+ cityCount + '</span>&nbsp;个</p>');
    $('#left-up').append('<p>监测模板数：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:aqua">'+ formworkCount + '</span>&nbsp;个</p>');
    for(var i = 0; i < formworkdatas.length; i++)
    {
        var idtmp = 'id' + i;
        $('#left-up').append('<p><span class="date1">'+formworkdatas[i].datatime+'&nbsp;'+ formworkdatas[i].name1 + '&nbsp;</span><span style="color:aqua" id="' + idtmp + '">' + formworkdatas[i].count + '</span>&nbsp;块</p>');
    }
   // $('#left-up').append('</marquee>"'); 

    for(var i = 0; i < projectdatas.length; i++)
    {
        var idtmp = 'id1' + i;
        $('#marquee-up').append(' <p><span class="date2">'+ projectdatas[i].datatime + '</span>&nbsp;' + projectdatas[i].name1+'&nbsp;<span style="color:aqua" id="' + idtmp + '">' + projectdatas[i].count  + '</span>&nbsp;栋</p>');

        idtmp = 'id2' + i;
        $('#marquee-up').append('<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + projectdatas[i].name2 + '&nbsp;<span style="color:aqua' + idtmp + '">' + projectdatas[i].count2 +'</span>&nbsp;m<sup>2</sup></p>');
    }

    window.setInterval(updateformworkdatas, 5000); 
    function updateformworkdatas() 
    {
        var rand1 = (Math.random()*(10) + (-5.0)).toFixed(2);
        var rand2 = (Math.random()*(10) + (-5.0)).toFixed(2);
        var rand3 = (Math.random()*(10) + (-5.0)).toFixed(3);
        var d1 = formworkdatas[3].count + formworkdatas[3].count*rand1/100;
        var d2 = formworkdatas[4].count + formworkdatas[4].count*rand2/100;
        var d3 = formworkdatas[5].count + formworkdatas[5].count*rand3/100;
        $('#id3').text(parseInt(d1));
        $('#id4').text(parseInt(d2));
        $('#id5').text(parseInt(d3));
    }
    /*<marquee>
    <p>周转城市数：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:aqua">56</span>&nbsp;个</p>
    <p>监测模板数：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:aqua">567681</span>&nbsp;块</p>
    <p><span class="date1">2018-08&nbsp;周转板数：&nbsp;</span><span style="color:aqua">315456</span>&nbsp;块</p>
    <p><span class="date1">2018-09&nbsp;周转板数：&nbsp;</span><span style="color:aqua">334578</span>&nbsp;块</p>
    <p><span class="date1">2018-10&nbsp;周转板数：&nbsp;</span><span style="color:aqua">355985</span>&nbsp;块</p>
    <p><span class="date1">2018-11&nbsp;周转板数：&nbsp;</span><span style="color:aqua">384531</span>&nbsp;块</p>
    <p><span class="date1">2018-12&nbsp;计划板数：&nbsp;</span><span style="color:aqua">400000</span>&nbsp;块</p>
    <p><span class="date1">2019-01&nbsp;计划板数：&nbsp;</span><span style="color:aqua">270000</span>&nbsp;块</p>
    <p><span class="date1">2019-02&nbsp;计划板数：&nbsp;</span><span style="color:aqua">160000</span>&nbsp;块</p>
    <p><span class="date1">2019-03&nbsp;计划板数：&nbsp;</span><span style="color:aqua">410000</span>&nbsp;块</p>
    <p><span class="date1">2019-04&nbsp;计划板数：&nbsp;</span><span style="color:aqua">490000</span>&nbsp;块</p>
    </marquee>*/
    /*
     <marquee direction="up">
    <p><span class="date2">2018-08</span>&nbsp;完成楼栋：&nbsp;<span style="color:aqua">39</span>&nbsp;栋</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完成面积：&nbsp;<span style="color:aqua">79485</span>&nbsp;m<sup>2</sup></p>
    <p><span class="date2">2018-09</span>&nbsp;完成楼栋：&nbsp;<span style="color:aqua">42</span>&nbsp;栋</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完成面积：&nbsp;<span style="color:aqua">82687</span>&nbsp;m<sup>2</sup></p>
    <p><span class="date2">2018-10</span>&nbsp;完成楼栋：&nbsp;<span style="color:aqua">35</span>&nbsp;栋</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完成面积：&nbsp;<span style="color:aqua">69584</span>&nbsp;m<sup>2</sup></p>
    <p><span class="date2">2018-11</span>&nbsp;完成楼栋：&nbsp;<span style="color:aqua">45</span>&nbsp;栋</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完成面积：&nbsp;<span style="color:aqua">91793</span>&nbsp;m<sup>2</sup></p>
    <p><span class="date2">2018-12</span>&nbsp;计划楼栋：&nbsp;<span style="color:aqua">48</span>&nbsp;栋</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计划面积：&nbsp;<span style="color:aqua">96000</span>&nbsp;m<sup>2</sup></p>
    <p><span class="date2">2019-01</span>&nbsp;计划楼栋：&nbsp;<span style="color:aqua">35</span>&nbsp;栋</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计划面积：&nbsp;<span style="color:aqua">70000</span>&nbsp;m<sup>2</sup></p>
    <p><span class="date2">2019-02</span>&nbsp;计划楼栋：&nbsp;<span style="color:aqua">20</span>&nbsp;栋</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计划面积：&nbsp;<span style="color:aqua">40000</span>&nbsp;m<sup>2</sup></p>
    <p><span class="date2">2019-03</span>&nbsp;计划楼栋：&nbsp;<span style="color:aqua">50</span>&nbsp;栋</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计划面积：&nbsp;<span style="color:aqua">110000</span>&nbsp;m<sup>2</sup></p>
    <p><span class="date2">2019-04</span>&nbsp;计划楼栋：&nbsp;<span style="color:aqua">60</span>&nbsp;栋</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计划面积：&nbsp;<span style="color:aqua">120000</span>&nbsp;m<sup>2</sup></p>
    </marquee>
    */
})
