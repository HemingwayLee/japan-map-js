/*!
 * Japan Map
 *
 * Released under the MIT license
 *
 */

var core = require('./core.js');

exports.japanMap = function(ele, options) {
  for (var option in options) {
    if (options.hasOwnProperty(option) && options[option] == null) options[option] = undefined;
  }

  var extend = function(a, b){
    for (var key in b) {
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  options = extend({
    areas               : null,
    width               : null,           // Canvas will be scaled to larger one of "width" and "height".
    height              : null,
    color               : "#a0a0a0",      // Default color, which used if no color is set in "areas" object.
    hoverColor          : null,           // If null, "color" will be 20% brightened when hovered.
    backgroundColor     : "transparent",  // Background color of the element, like "canvas".
    borderLineColor     : "#ffffff",      // Border Line of Prefectures.
    borderLineWidth     : 0.25,
    lineColor           : "#a0a0a0",      // Border Line of the element and the partition line when "movesIsland" is true.
    lineWidth           : 1,
    drawsBoxLine        : true,
    showsPrefectureName : false,
    lang                : "ja",
    prefectures         : core.DefinitionOfPrefectures,
    movesIslands        : false,          //  Moves Nansei Islands (Okinawa and part of Kagishima) to the left-top space.
    font                : "Arial",
    fontSize            : null,
    fontColor           : "#000000",
    onSelect            : function(){},
    onHover             : function(){},
    onHoverOut          : function(){}
  }, options);

  var map = new MapCanvas(options);
  ele.appendChild(map.element);
  map.render();   // IE and Safari doesn't render properly when rendered before appending to the parent.
  map.addEvent(); // iPad 1st + iOS5 doesn't work if this sentence is put before "target.append".
}
