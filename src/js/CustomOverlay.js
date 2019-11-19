  // 复杂的自定义覆盖物
  function ComplexCustomOverlay(point, province, address, text, mouseoverText){
    this._point = point;
    this._province = province;
    this._address = address;
    this._text = text;
    this._overText = mouseoverText;
  }

  ComplexCustomOverlay.prototype = new BMap.Overlay();

  ComplexCustomOverlay.prototype.initialize = function(map){
    this._map = map;
    var div = this._div = document.createElement("div");
    div.style.position = "absolute";
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    //div.style.backgroundColor = "#ff8080";
    div.style.backgroundColor = "#C4C4C4";
    //"#EE5D5B";
    div.style.border = "1px solid #C4C4C4";
    div.style.color = "#388E8E";
    div.style.height = "10px";
    div.style.padding = "0px";
    div.style.lineHeight = "10px";
    div.style.whiteSpace = "nowrap";
    div.style.MozUserSelect = "none";
    div.style.fontSize = "2px";
    var span = this._span = document.createElement("span");
    div.appendChild(span);
    span.appendChild(document.createTextNode(this._text));      
    var that = this;

    
    var arrow = this._arrow = document.createElement("div");
    arrow.style.background = "url(images/label.png) no-repeat";
    arrow.style.position = "absolute";
    arrow.style.width = "11px";
    arrow.style.height = "10px";
    arrow.style.top = "11px";
    arrow.style.left = "10px";
    arrow.style.overflow = "hidden";
    div.appendChild(arrow);
    
   
    div.onmouseover = function(){
      this.style.backgroundColor = "#C4C4C4";
      this.style.borderColor = "#C4C4C4";
      this.style.cursor = "pointer";
      this.getElementsByTagName("span")[0].innerHTML = that._overText;
      arrow.style.backgroundPosition = "0px -20px";
    }

    div.onmouseout = function(){
      this.style.backgroundColor = "#C4C4C4";
      //"#EE5D5B";
      this.style.borderColor = "#C4C4C4";
      this.getElementsByTagName("span")[0].innerHTML = that._text;
      arrow.style.backgroundPosition = "0px 0px";
    }
  
    div.ondblclick = function(){
      window.location.href = "./second.html?province="+ that._province +"&address=" + that._address + "&project=" + that._text;
      //window.location.href = "http://120.25.74.178/controlPlatform_2/#/screen_2?province="+ that._province +"&address=" + that._address + "&project=" + that._text;
      //
    }

    map.getPanes().labelPane.appendChild(div);
    
    return div;
  }

  ComplexCustomOverlay.prototype.draw = function(){
    var map = this._map;
    var pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
    this._div.style.top  = pixel.y - 30 + "px";
  }