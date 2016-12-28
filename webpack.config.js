module.exports = {  
  entry: {
    a : './src/menu.ts',
    b : './src/consommateur.ts',
  }, 
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}