'use strict';
const AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

const handlerCompany = require('./database/companyTable');
const handlerCategory = require('./database/categoryTable');
const handlerService = require('./database/serviceTable');
const handlerCustomer= require('./database/customerTable');
const handlerPayment = require('./database/paymentTable');

handlerCompany.createTable();
handlerCategory.createTable();
handlerService.createTable();
handlerCustomer.createTable();
handlerPayment.createTable();

