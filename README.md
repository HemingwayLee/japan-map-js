# japan-map-js
Clickable map of prefectures of Japan. It is from [japan-map](http://takemaru-hirai.github.io/japan-map/). The dependency of jQuery is removed from this project.

# Setup

Include the library

```html
<script type="text/javascript" src="dist/jpmap.min.js"></script>
```

## CDN - UNPKG
To access `japan-map-js` directly from the UNPKG CDN servers, include the following line at the start of your project, instead of the localy hosted versions:

```html
<script type="text/javascript" src="https://unpkg.com/japan-map-js@1.0.1/dist/jpmap.min.js"></script>
```

Create an element to hold the map

```html
<div id="my-map"></div>
```

Turn the element into a Japan Map with some simple javascript

```javascript
var d = new jpmap.japanMap(document.getElementById("my-map"), {
    onSelect: function(data){
      alert(data.name);
  }
});
```

# Usage

## Example 1
Alert prefecture name when clicking, please check `example1.html` file in `examples` folder for more details.  

```javascript
var d = new jpmap.japanMap(document.getElementById("my-map"), {
  showsPrefectureName: true,
  width: 1000,
  movesIslands: true,
  lang: 'en',
  onSelect: function(data){
    alert(data.name);
  }
});
```

![ex1](https://user-images.githubusercontent.com/8428372/74094337-e4557b00-4b22-11ea-9fc8-dd2ef509a6fd.png)

`Hokkaido` will be shown on dialog when you click Hokkaido Island.

## Example 2
Change the color of prefectures, please check `example2.html` file in `examples` folder for more details.  

```javascript
var d = new jpmap.japanMap(document.getElementById("my-map"), {
  areas: [
    { "code":1, "color":"#AA0000" }, 
    { "code":2, "color":"#00AA00" }
  ],
  borderLineColor: "#000000", 
  onSelect: function(data){
    alert(data.name);
  }
});
```

![ex2](https://user-images.githubusercontent.com/8428372/74094335-e28bb780-4b22-11ea-8448-aa2c7dadfe95.png)

