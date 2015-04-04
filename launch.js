require('enhanced-require')(module, {
  recursive: false,
  module: {
    loaders: [
      {test: /\._coffee$/, loaders: ['streamline']},
      {test: /\.txt$/, loaders: ['null']}
    ]
  }
})('./cli.js');
