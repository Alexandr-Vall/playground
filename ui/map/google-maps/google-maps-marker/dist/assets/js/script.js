!function e(n,t,r){function o(a,u){if(!t[a]){if(!n[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=t[a]={exports:{}};n[a][0].call(c.exports,function(e){var t=n[a][1][e];return o(t?t:e)},c,c.exports,e,n,t,r)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=function(){function e(n,t){r(this,e),this.element=n,this.init(t),this.onResize=this.onResize.bind(this),this.addEventListeners()}return o(e,[{key:"init",value:function(e){this.map=new google.maps.Map(document.querySelector(this.element),e)}},{key:"renderMap",value:function(e){this.map.setCenter({lat:e.lat,lng:e.lng})}},{key:"renderMarkers",value:function(e){var n=this.map;this.markers=e.forEach(function(e){var t=new google.maps.Marker({icon:e.icon,map:n,position:{lat:e.lat,lng:e.lng},title:e.title});return e.infoWindow&&!function(){var r=new google.maps.InfoWindow({content:e.infoWindow.content});google.maps.event.addListener(t,"click",function(){r.open(n,t)})}(),t})}},{key:"renderMarkerClusterer",value:function(){new MarkerClusterer(this.map,this.markers,{imagePath:"content/images/m"})}},{key:"onResize",value:function(){var e=this.map,n=e.getCenter();google.maps.event.trigger(e,"resize"),e.setCenter(n)}},{key:"addEventListeners",value:function(){window.addEventListener("resize",this.onResize)}}]),e}();t.default=i},{}],2:[function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=e("./google-maps"),i=r(o),a=new i.default(".js-google-maps",{center:{lat:49.718364,lng:12.687261},zoom:5});navigator.geolocation.getCurrentPosition(function(e){a.renderMap({lat:e.coords.latitude,lng:e.coords.longitude})},function(e){throw new Error(e)},{enableHighAccuracy:!0,maximumAge:0}),fetch("data/locations.json").then(function(e){return e.json()}).then(function(e){a.renderMarkers(e),a.renderMarkerClusterer()})},{"./google-maps":1}]},{},[2]);
//# sourceMappingURL=script.js.map
