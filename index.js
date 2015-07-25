var mongo = require('zefti-mongo');
var redis = require('zefti-redis');
var remote = require('zefti-remote');
var dynamo = require('zefti-dynamo');

var originSources = {
    dynamo : dynamo
  , mongo : mongo
  , redis : redis
  , remote : remote
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