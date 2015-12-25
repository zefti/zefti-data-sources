var mongo = require('zefti-mongo');
var redis = require('zefti-redis');
var remote = require('zefti-remote');
var dynamo = require('zefti-dynamo');
var sqs = require('zefti-sqs');
var redisIoAdapter = require('zefti-redis-io-adapter');

var originSources = {
    dynamo : dynamo
  , mongo : mongo
  , redis : redis
  , redisIoAdapter : redisIoAdapter
  , remote : remote
  , sqs : sqs
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