const path = require('path');

module.exports = {
  entry: './app/App.mjs',
  output: {
     path: path.resolve(__dirname, 'dist'),
     filename: './App.bundle.js'
   },
   target : "node",
   resolve: {
     modules: [
       "node_modules",
       path.resolve(__dirname, "app")
     ],
     extensions: [".js", ".mjs"]
   }
};
