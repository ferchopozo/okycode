'use strict';
const AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

const handler = require('./populateData');

handler.data();
