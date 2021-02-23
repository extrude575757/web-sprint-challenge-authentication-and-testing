// do not make changes to this file
const knex = require('knex')('development');
const knexConfig = require('../knexfile.js');
// const environment = process.env.NODE_ENV || 'development';
const environment = process.env.NODE_ENV || 'development';
module.exports = knex(knexConfig[environment]);
