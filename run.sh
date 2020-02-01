browserify src/main.js --s jpmap -o jpmap.js
browserify src/main.js --s jpmap | uglifyjs -c > jpmap.min.js

