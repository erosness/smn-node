const path = require('path');

module.exports = {
  mode: 'development'
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
