const path = require('path')
const glob = require('glob')

function createEntryObjecy() {
  const entires = glob.sync('./src-client/**/*.main.*')

  function makeName(entryPath) {
    const splitted = entryPath.split('/')
    return splitted[splitted.length - 1].split('.')[0]
  }

  return entires.reduce((acc, entryPath) => {
    const name = makeName(entryPath)
    acc[name] = entryPath
    return acc
  }, {})
}

module.exports = {
  entry: createEntryObjecy(),
  mode: 'development', // TODO
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: './[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader?configFileName=./tsconfig.client.json' },
    ],
  },
}
