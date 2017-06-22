module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./app/app.js",

  // The plain compiled Javascript will be output into this file
  output: {
    filename: "public/bundle.js"
  },

  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react-dom': 'react-dom',
    'react-datepicker': 'react-datepicker',
    'react/addons': 'react/addons',
    'classnames': 'classnames',
    'jquery': 'jquery',
    'bootstrap': 'bootstrap'
  },
  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel",
        query: {
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
    resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css', '.scss']
    },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
