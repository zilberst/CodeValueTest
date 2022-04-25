const { Router } = require('express');
const crawl = require('../controller/crawler')
const links = require('../controller/links')

const route = Router();

route.post('/crawl', crawl);
route.get('/links', links);

module.exports = route;