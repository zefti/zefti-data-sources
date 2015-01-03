zefti-data-sources
==================

Zefti Data Sources

Usage
=====
var dataSources = require('zefti-data-sources')(
  {
    mongoUser:{
        type : 'mongo'
      , replicaSet: [localhost:27017]
      , username : 'bob'
      , password : 'pass1234'
      , collection : 'user'
    },
    redisSession : {
        type : 'redis'
      , url : 'localhost'
      , port : 6379
    }
  }
);

Mongo Variables
===============
type: Set to 'mongo' to trigger a mongo connection
replicaSet: Input the replicaSet array here (or a single connection).  Must take the form url:port
username: The username of the db (can omit)
password: The password of the user (can omit)

Redis Variables
===============
type: Set to 'redis' to trigger a redis connection

