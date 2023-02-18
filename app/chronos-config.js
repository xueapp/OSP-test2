const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, './.env')});

module.exports = {
  // General configuration
  microservice: 'my-app',
  interval: 5000,

  // Mode Specific
  mode: 'microservices',
  dockerized: true,

  database: {
    connection: 'REST',
    // type: process.env.CHRONOS_DB,
    type: 'MongoDB',
    // URI: process.env.CHRONOS_URI,
    URI: "mongodb+srv://snow:12345@cluster0.xppiw7c.mongodb.net/?retryWrites=true&w=majority",
  },

  notifications: [],
}