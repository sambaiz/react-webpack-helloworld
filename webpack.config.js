module.exports = {
    entry: {
        helloWorld: [
           './js/main'
        ]
    },
    output: {
        filename: 'public/[name].js'
    },
    module: {
      loaders: [{
        test: /.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:
          {
            presets:['react', 'es2015']
          }
      }]
    }
};
