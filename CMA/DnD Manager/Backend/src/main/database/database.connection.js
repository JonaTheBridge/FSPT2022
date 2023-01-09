import Mongoose from 'mongoose';
import mysql from 'mysql';
import * as DB from './database.config.js'

let MongoDB_connections = [];
let MySQL_connections = [];

/**
 * Function to establish a MongoDB connection.
 * @param { Object } database - Database configuration object
 * @return { Object } connection
 * @throws { error }
 */

function connectMongoDB(database) {
  const connection = Mongoose.connect(
    DB.MongoDB[`${database}`].uri,
    DB.MongoDB[`${database}`].config
  );
  connection
    .then(res => MongoDB_connections.push({id:database, connection:res}))
    .then(console.log(`Connected to MongoDB/${database}.`))
    .catch(err => {
      throw new Error(`Connection to MongoDB/${database} returned an error: ${err.message}`)
    })
}

function connectMySQL(database) {
  const connection = mysql.createConnection(DB.MySQL[`${database}`]);
  connection.connect(function(err) {
    if (err) {
      throw new Error(`Connection to MySQL/${database} returned an error: ${err.message}`);
    }
    MySQL_connections.push({id:database, connection:connection})
    console.log(`Connected to MySQL/${database}.`);
  });
}

function disconnectMongoDB(database) {
  const connectionObj = MongoDB_connections.find(item => item.id === database);
  const index = MongoDB_connections.findIndex(item => item.id === database);
  const connection = connectionObj.connection;
  try {
    connection.disconnect();
    MongoDB_connections.slice(index, 1);
  } catch (err) {
    throw new Error(`Disconnecting from MongoDB/${database} returned an error: ${err.message}`)
  }
  return console.log(`Disconnected from MongoDB/${database}.`)
}

function disconnectMySQL(database) {
  const connectionObj = MySQL_connections.find(item => item.id === database);
  const index = MySQL_connections.findIndex(item => item.id === database);
  const connection = connectionObj.connection;
  connection.end(function(err) {
    if (err) {
      throw new Error(`Disconnecting from MySQL/${database} returned an error: ${err.message}`);
    }
    MySQL_connections.slice(index, 1);
    return console.log(`Disconnected from MySQL/${database}.`);
  });
}

function getConnectionMySQL(database) {
  const MySQL = MySQL_connections.find(item => item.id === database);
  const connection = MySQL.connection;
  return connection;
}

function getConnectionMongoDB(database) {
  const MongoDB = MongoDB_connections.find(item => item.id === database);
  const connection = MongoDB.connection;
  return connection;
}

export {
  connectMongoDB, 
  connectMySQL, 
  disconnectMongoDB, 
  disconnectMySQL,
  getConnectionMySQL,
  getConnectionMongoDB,
};
