browserify src/main.js --s jpmap -o dist/jpmap.js
browserify src/main.js --s jpmap | uglifyjs -c > dist/jpmap.min.js

