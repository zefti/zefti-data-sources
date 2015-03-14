var mongo = require('zefti-mongo');
var redis = require('zefti-redis');
var remote = require('zefti-remote');

var originSources = {
    mongo : mongo
  , redis : redis
  , remote : remote
};

var readySources = {};

module.exports = function(dataSources){
  for (var dataSource in dataSources) {
    console.log(dataSource);
    if (!readySources[dataSource]) {
      readySources[dataSource] = originSources[dataSources[dataSource].type](dataSources[dataSource])
    }
  }
  console.log(readySources.config);
  return readySources;
}