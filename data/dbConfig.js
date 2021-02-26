// // do not make changes to this file
// const knex = require('knex')('development');
// const knexConfig = require('../knexfile.js');
// // const environment = process.env.NODE_ENV || 'development';
// const environment = process.env.NOPORT || 'development';
// module.exports = knex(knexConfig[environment]);


const knex = require('knex')
const knexfile = require('../knexfile.js')

module.exports = knex(knexfile)