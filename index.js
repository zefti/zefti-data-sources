var mongo = require('zefti-mongo');
var redis = require('zefti-redis');

var originSources = {
    mongo : mongo
  , redis : redis
};

var readySources = {};

module.exports = function(dataSources){
  for (var dataSource in dataSources) {
    if (!readySources[dataSource]) {
      readySources[dataSource] = originSources[dataSources[dataSource].type](dataSources[dataSource])
    }
  }
  return readySources;
}