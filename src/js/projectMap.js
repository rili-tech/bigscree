
var styleJsonHide =
[
  {
            "featureType": "land",
            "elementType": "geometry",
            "stylers": {
                      "color": "#3d85c6ff"
            }
  },
  {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                      "color": "#040485ff"
            }
  },
  {
            "featureType": "road",
            "elementType": "all",
            "stylers": {
                      "visibility": "off"
            }
  },
  {
            "featureType": "boundary",
            "elementType": "geometry",
            "stylers": {
                      "color": "#f6b26bff"
            }
  },
  {
            "featureType": "green",
            "elementType": "all",
            "stylers": {
                      "visibility": "off"
            }
  },
  {
            "featureType": "manmade",
            "elementType": "all",
            "stylers": {
                      "visibility": "off"
            }
  },
  {
            "featureType": "building",
            "elementType": "all",
            "stylers": {
                      "visibility": "off"
            }
  },
  {
            "featureType": "town",
            "elementType": "all",
            "stylers": {
                      "visibility": "off"
            }
  },
  {
            "featureType": "poilabel",
            "elementType": "all",
            "stylers": {
                      "visibility": "off"
            }
  },
  {
    "featureType": "districtlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "districtlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}
];


var styleJson =
[
  {
            "featureType": "land",
            "elementType": "geometry",
            "stylers": {
                      "color": "#3d85c6ff"
            }
  },
  {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                      "color": "#040485ff"
            }
  },
  {
            "featureType": "road",
            "elementType": "all",
            "stylers": {
                      "visibility": "off"
            }
  },
  {
            "featureType": "boundary",
            "elementType": "geometry",
            "stylers": {
                      "color": "#f6b26bff"
            }
  },
  {
            "featureType": "green",
            "elementType": "all",
            "stylers": {
                      "visibility": "off"
            }
  },
  {
            "featureType": "manmade",
            "elementType": "all",
            "stylers": {
                      "visibility": "off"
            }
  },
  {
            "featureType": "building",
            "elementType": "all",
            "stylers": {
                      "visibility": "off"
            }
  },
  {
            "featureType": "town",
            "elementType": "all",
            "stylers": {
                      "visibility": "off"
            }
  },
  {
            "featureType": "poilabel",
            "elementType": "all",
            "stylers": {
                      "visibility": "off"
            }
  }
];

var map = null;

var preZoom = 7;
//初始化地图
function initMap()
{
    map = new BMap.Map('allmap', {minZoom:4, maxZoom:15});
    map.centerAndZoom('广州', preZoom);//改这里，参数1，地图中心点；参数2 地图级别，试试

    map.setMapStyle({
      styleJson:styleJson
    });

    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
}


//增加项目列表
var projectMarker = [];

function addProjects(){
    var myGeo = new BMap.Geocoder();
    $.get('data/projects.json', function (projects) {
      for(var i = 0; i < projects.length; ++i){
          (function(j){
              myGeo.getPoint(projects[j].address, function(point){
                var pointTmp = point;
                  if (point) {
                    ;
                  }
                  else{
                    pointTmp = new BMap.Point(projects[j].lng, projects[j].lat);
                  }
                  var mouseoverTxt = projects[j].project + projects[j].buildings.join(",");
                  var marker = new ComplexCustomOverlay(pointTmp, projects[j].province, projects[j].address, projects[j].project, mouseoverTxt);
                  projectMarker.push(marker);
                  map.addOverlay(marker);
              });
          })(i)
      }
    });
}


var serviceMarker = []
var opts = {
  width : 300,        // 信息窗口宽度
  height: 100,         // 信息窗口高度
  title : "服务网点" , // 信息窗口标题
  enableMessage:true  //设置允许信息窗发送短息
};


//增加服务网点
function addServices(){

  var myIcon = new BMap.Icon("images/service.png", new BMap.Size(48, 48),{    
      anchor: new BMap.Size(24, 45)   
  });

  var myGeo = new BMap.Geocoder();

  $.get('data/services.json', function (services) {

      for(var i = 0; i < services.length; ++i){
        (function(j){
          myGeo.getPoint(services[j].address, function(point){
            var pointTmp = point;
            if (point) {
                    ;
            }
            else{
                pointTmp = new BMap.Point(services[j].lng, services[j].lat);
            }
            var marker = new BMap.Marker(pointTmp, {icon: myIcon});
            serviceMarker.push(marker);  
            map.addOverlay(marker); 
            marker.addEventListener("click", function(e){
              var p = e.target;
              var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
              var infoWindow = new BMap.InfoWindow("地址：" + services[j].address + "<br>" + "联系方式：" + services[j].contact, opts);  // 创建信息窗口对象 
              map.openInfoWindow(infoWindow,point);
            });
          }); 
        })(i)
      }

  });
}


var supplyMarker = [];
var opts3 = {
  width : 300,          // 信息窗口宽度
  height: 100,           // 信息窗口高度
  title : "铝模生产企业" ,     // 信息窗口标题
  enableMessage:true    //  设置允许信息窗发送短息
};

//增加铝模生产供应企业
function addSuppliers(){
  var myIcon = new BMap.Icon("images/supplier.png", new BMap.Size(32, 32));
  var myGeo = new BMap.Geocoder();

  $.get('data/suppliers.json', function (supply) {

      for(var i = 0; i < supply.length; ++i){
        (function(j){
          myGeo.getPoint(supply[j].address, function(point){
            var pointTmp = point;
            if (point) {
                    ;
            }
            else{
                pointTmp = new BMap.Point(supply[j].lng, supply[j].lat);
            }
            var marker = new BMap.Marker(pointTmp, {icon: myIcon});  
            supplyMarker.push(marker);
            map.addOverlay(marker); 
            marker.addEventListener("click", function(e){
              var p = e.target;
              var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
              var infoWindow = new BMap.InfoWindow("名称：" + supply[j].name + "<br>" + "地址：" + supply[j].address, opts3);  // 创建信息窗口对象 
              map.openInfoWindow(infoWindow,point);
            });
          }); 
        })(i)
      } 
  });
}


var parkMarker = [];
var opts4 = {
  width : 300,        // 信息窗口宽度
  height: 100,         // 信息窗口高度
  title : "模架产业园" , // 信息窗口标题
  enableMessage:true  //设置允许信息窗发送短息
};

function addParks(){
  var myIcon = new BMap.Icon("images/park.png", new BMap.Size(48, 48));
  var myGeo = new BMap.Geocoder();

  $.get('data/parks.json', function (industrialPark) {

    for(var i = 0; i < industrialPark.length; ++i){
        (function(j){
          myGeo.getPoint(industrialPark[j].address, function(point){
            var pointTmp = point;
            if (point) {
                    ;
            }
            else{
                pointTmp = new BMap.Point(industrialPark[j].lng, industrialPark[j].lat);
            }
            var marker = new BMap.Marker(pointTmp, {icon: myIcon});
            parkMarker.push(marker);  
            map.addOverlay(marker); 
            marker.addEventListener("click", function(e){
              var p = e.target;
              var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
              var infoWindow = new BMap.InfoWindow("名称：" + industrialPark[j].name + "<br>" + "地址：" + industrialPark[j].address, opts4);  // 创建信息窗口对象 
              map.openInfoWindow(infoWindow,point);
            });
          }); 
        })(i)
    }
  });
}

var cooperatorMarker = [];
var opts5 = {
  width : 300,        // 信息窗口宽度
  height: 100,         // 信息窗口高度
  title : "合作厂家" , // 信息窗口标题
  enableMessage:true  //设置允许信息窗发送短息
};

function addCooperators(){
 var myIcon = new BMap.Icon("images/cooperator.png", new BMap.Size(48, 48));
  var myGeo = new BMap.Geocoder();

  $.get('data/cooperator.json', function (industrialPark) {

    for(var i = 0; i < industrialPark.length; ++i){
        (function(j){
          myGeo.getPoint(industrialPark[j].address, function(point){
            var pointTmp = point;
            if (point) {
                    ;
            }
            else{
                pointTmp = new BMap.Point(industrialPark[j].lng, industrialPark[j].lat);
            }
            var marker = new BMap.Marker(pointTmp, {icon: myIcon});
            cooperatorMarker.push(marker);  
            map.addOverlay(marker); 
            marker.addEventListener("click", function(e){
              var p = e.target;
              var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
              var infoWindow = new BMap.InfoWindow("名称：" + industrialPark[j].name + "<br>" + "地址：" + industrialPark[j].address, opts5);  // 创建信息窗口对象 
              map.openInfoWindow(infoWindow,point);
            });
          }); 
        })(i)
    }
  });
}

var provincesMarker = [];
function addProvinces(){
  $.get('data/provinces.json', function (industrialPark) {
    var bdary = new BMap.Boundary();
    for(var i = 0; i < industrialPark.length; ++i){
      bdary.get(industrialPark[i].provinces, function(rs){       //获取行政区域     
        var count = rs.boundaries.length; //行政区域的点有多少个
        for(var i = 0; i < count; i++){
            var ply = new BMap.Polyline(rs.boundaries[i], {strokeWeight: 2, strokeColor: "black"}); //建立多边形覆盖物
            provincesMarker.push(ply);      
        }                
    }); 
   }
  });
}


var labelMarker = [];
function addLabels(){
  var myGeo = new BMap.Geocoder();
  $.get('data/provinces.json', function (industrialPark) {
    for(var i = 0; i < industrialPark.length; ++i){
      if(industrialPark[i].centercity == '')
      {
          var point = new BMap.Point(industrialPark[i].lng, industrialPark[i].lat);
           //var marker = new BMap.Marker(point);  // 创建标注
          var label = new BMap.Label(industrialPark[i].provinces + " " + industrialPark[i].projects, {position : point, offset:new BMap.Size(-20,-10)});  // 创建文本标注对象
		      label.setStyle({
          border: "none",
          background: "none",
			    color : "#90f4f0",
			    fontSize : "12px",
			    height : "20px",
			    lineHeight : "20px",
          fontFamily:"微软雅黑",
          bolder:"30px",
          });
          // marker.setLabel(label);
          labelMarker.push(label);  
      }
      else
      {
        (function(j){
          myGeo.getPoint(industrialPark[j].centercity, function(point){
            var pointTmp = point;
            if (point) {
                    ;
            }
            else{
                pointTmp = new BMap.Point(industrialPark[j].lng, industrialPark[j].lat);
            }
            var label = new BMap.Label(industrialPark[j].provinces + " " + industrialPark[j].projects, {position : pointTmp, offset:new BMap.Size(-20,-10)});  // 创建文本标注对象
		        label.setStyle({
              border: "none",
              background: "none",
              color : "#90f4f0",
              fontSize : "12px",
              height : "20px",
              lineHeight : "20px",
              fontFamily:"微软雅黑",
              bolder:"30px",
              });
             // marker.setLabel(label);
            labelMarker.push(label);  
        }); 
      })(i)
    }
   }
  });
}

var projectCount = 0;
var servicesCount = 0;
var suppliersCount = 0;
var parksCount = 0;
var cooperatorsCount = 0;
var labelssCount = 0;

//右下图例
function addControl(){
  var _offsetTop = window.innerHeight - 170
	var cr = new BMap.CopyrightControl({
      anchor: BMAP_ANCHOR_TOP_LEFT,
      offset: new BMap.Size(700, _offsetTop)});   //设置版权控件位置
	map.addControl(cr); //添加版权控件
        
	var bs = map.getBounds();   //返回地图可视区域
  cr.addCopyright({id: 1, content: "<div style='font-size:15px;color:#ffffff'>" +
                                    "<div id='service' onclick=toggleServices()><img src='images/service.png' height='36' width='36' style='vertical-align:middle;'><span id='serviceContent'>鈤励云模服务网点" + servicesCount + "个</span></div>"+
                                    "<div id='park' onclick=toggleParks() style='margin-left:5px;'><img src='images/park.png' height='30' width='30' style='vertical-align:middle;'><span id='parkContent'>&nbsp;建筑模架产业园" + parksCount + "个</span></div>"+
                                    "<div id='supply' onclick=toggleSupppliers() style='margin-left:5px;'><img src='images/supplier.png' height='30' width='30' style='vertical-align:middle;'><span id='supplyContent'>&nbsp;铝模生产企业" + suppliersCount + "个</span></div>"+
                                    "<div id='project' onclick=toggleProjects() style='margin-left:5px;'><img src='images/message.png' height='30' width='30' style='vertical-align:middle;'><span id='projectContent'>&nbsp;铝模项目设计实施工程" + projectCount + "个</span></div>"+
                                    "<div id='cooperator' onclick=toggleCooperators() style='margin-left:5px;'><img src='images/cooperator.png' height='30' width='30' style='vertical-align:middle;'><span id='cooperatorContent'>&nbsp;鈤励云模合作厂家" + cooperatorsCount + "个</span></div>"+
                                    "</div>", 
                                    bounds: bs});   
	
}

function showMarkers(markers)
{
  for(var i = 0; i < markers.length; i++)
  {
    map.addOverlay(markers[i]);
  }
}

function hideMarkers(markers)
{
  for(var i = 0; i < markers.length; i++)
  {
    map.removeOverlay(markers[i]);
  }
}

var bShowServices = true;
function toggleServices()
{
  bShowServices = !bShowServices;
  bShowServices ? showMarkers(serviceMarker) : hideMarkers(serviceMarker); 
}

var bShowSuppliers = true;
function toggleSupppliers()
{
  bShowSuppliers = !bShowSuppliers;
  bShowSuppliers ? showMarkers(supplyMarker) : hideMarkers(supplyMarker);
}

var bShowParks = true;
function toggleParks()
{
  bShowParks = !bShowParks;
  bShowParks ? showMarkers(parkMarker) : hideMarkers(parkMarker); 
}

var bShowProjects = true;
function toggleProjects()
{
  bShowProjects = !bShowProjects;
  bShowProjects ? showMarkers(projectMarker) : hideMarkers(projectMarker); 
}

var bShowCooperators = true;
function toggleCooperators()
{
  bShowCooperators = !bShowCooperators;
  bShowCooperators ? showMarkers(cooperatorMarker) : hideMarkers(cooperatorMarker); 
}

function addOnline()
{

  var data = [];

  $.get('data/online.json', function (online) {

    for(var i = 0; i < online.length; ++i){
      data.push({
          geometry: {
                  type: 'Point',
                  coordinates: [online[i].lng, online[i].lat] 
              },
              time: Math.random() * 10
            });
    }//end for

    var dataSet = new mapv.DataSet(data);
      var options = {
          fillStyle: 'rgba(255, 165, 0, 0.6)',
          //shadowColor: 'rgba(255, 250, 50, 0.5)',
          //shadowBlur: 3,
          updateCallback: function (time) {
          },
          size: 12,
          draw: 'simple',
          animation: {
              type: 'time',
              stepsRange: {
                  start: 0,
                  end: 10
              },
              trails: 1,
              duration: 6,
          }
      }
      var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);

  });
}

$(function () {

    initMap();
    //addControl();
    var cr = new BMap.CopyrightControl({
    anchor: BMAP_ANCHOR_TOP_LEFT,
    offset: new BMap.Size(700, 800)});   //设置版权控件位置
	  map.addControl(cr); //添加版权控件
	  var bs = map.getBounds();   //返回地图可视区域
    
    $.get('data/projects.json', function (projects) {
      projectCount = projects.length;
      cr.addCopyright({id: 1, content: "<div style='font-size:15px;color:#ffffff'>" +
                                    "<div id='project' onclick=toggleProjects() style='margin-left:5px;'><img src='images/message.png' height='30' width='30' style='vertical-align:middle;'><span id='projectContent'>&nbsp;铝模项目设计实施工程" + projectCount + "个</span></div>"+
                                    "</div>", 
                                    bounds: bs});  
    });

    $.get('data/services.json', function (projects) {
      servicesCount = projects.length;
      $('#serviceContent').text("鈤励云模服务网点" + servicesCount + "个");
      cr.addCopyright({id: 2, content: "<div style='font-size:15px;color:#ffffff'>" +
                                    "<div id='service' onclick=toggleServices()><img src='images/service.png' height='36' width='36' style='vertical-align:middle;'><span id='serviceContent'>鈤励云模服务网点" + servicesCount + "个</span></div>"+
                                    "</div>", 
                                    bounds: bs});  
    });

    $.get('data/suppliers.json', function (projects) {
      suppliersCount = projects.length;
      cr.addCopyright({id: 3, content: "<div style='font-size:15px;color:#ffffff'>" +
                                    "<div id='supply' onclick=toggleSupppliers() style='margin-left:5px;'><img src='images/supplier.png' height='30' width='30' style='vertical-align:middle;'><span id='supplyContent'>&nbsp;铝模生产企业" + suppliersCount + "个</span></div>"+
                                    "</div>", 
                                    bounds: bs});  
    });

    $.get('data/parks.json', function (projects) {
      parksCount = projects.length;
      cr.addCopyright({id: 4, content: "<div style='font-size:15px;color:#ffffff'>" +
                                    "<div id='park' onclick=toggleParks() style='margin-left:5px;'><img src='images/park.png' height='30' width='30' style='vertical-align:middle;'><span id='parkContent'>&nbsp;建筑模架产业园" + parksCount + "个</span></div>"+
                                    "</div>", 
                                    bounds: bs});  
    });

    $.get('data/cooperator.json', function (projects) {
      cooperatorsCount = projects.length;
      cr.addCopyright({id: 5, content: "<div style='font-size:15px;color:#ffffff'>" +
                                    "<div id='cooperator' onclick=toggleCooperators() style='margin-left:5px;'><img src='images/cooperator.png' height='30' width='30' style='vertical-align:middle;'><span id='cooperatorContent'>&nbsp;鈤励云模合作厂家" + cooperatorsCount + "个</span></div>"+
                                    "</div>", 
                                    bounds: bs});  
    });

   /* $.get('data/provinces.json', function (projects) {
      labelssCount = projects.length;
    });*/
    
    addProjects();
    addServices();
    addSuppliers();
    addParks();
    addCooperators();
    //addProvinces();
    addLabels();
    setInterval(() => {
      $(".anchorTL").children().css('display', 'inline');
    }, 1000);


    $(".date1").each(function(){
      var d = new Date($(this).text());
      var c = new Date();
      if(d < c)
      {
        console.log("A");
        alert($(this).children(":first").text());
      }
    });
    map.addEventListener("zoomend", function(evt){
      var iZoom = map.getZoom();
      if(iZoom < 7 && preZoom < 7)
      {
        preZoom = iZoom;
      }
      else if(iZoom >= 7 && preZoom >=7)
      {
        preZoom = iZoom;
      }
      else if(preZoom < 7 && iZoom >= 7) {
        preZoom = iZoom;
        showMarkers(serviceMarker);
        showMarkers(supplyMarker);
        showMarkers(parkMarker);
        showMarkers(projectMarker);
        showMarkers(cooperatorMarker);
        hideMarkers(provincesMarker);
        hideMarkers(labelMarker);
        map.setMapStyle({
          styleJson:styleJson
      });
      }
      else if(preZoom >= 7 && iZoom < 7){
        preZoom = iZoom;
        hideMarkers(serviceMarker);
        hideMarkers(supplyMarker);
        hideMarkers(parkMarker);
        hideMarkers(projectMarker);
        hideMarkers(cooperatorMarker);
        showMarkers(provincesMarker);
        showMarkers(labelMarker);
        map.setMapStyle({
          styleJson:styleJsonHide
      });
      }
      preZoom = iZoom;
    });
  });
