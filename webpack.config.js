const path = require('path');

module.exports = {
  entry: './app/App.js',
  output: {
     path: path.resolve(__dirname, 'dist'),
     filename: './App.bundle.js'
   },
   target : "node",
};
