'use strict';
//|> EXPRESS ROUTER
const router = require('express').Router();

//|> /sql
const SQL = require('./routeSQL');
router.use('/sql', SQL);

//|> /medics
const Medic = require('./routeMedic');
router.use('/medics', Medic);

//|> /turns
const Turns = require('./routerturns');
router.use('/turns', Turns);
module.exports = router;
