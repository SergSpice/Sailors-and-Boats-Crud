/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // BOATS
  'POST /boats': 'BoatsController.create',
  'GET /boats': 'BoatsController.find',
  'PATCH /boats/:id': 'BoatsController.update',
  'DELETE /boats/:id': 'BoatsController.destroy',
  // Buscar sailor por color
  'GET /boats/color/:p_color': 'BoatsController.findByColor',

  // RESERVES
  'POST /reserves': 'ReservesController.create',
  'GET /reserves': 'ReservesController.find',
  'PATCH /reserves/:id': 'ReservesController.update',
  'DELETE /reserves/:id': 'ReservesController.destroy',
  // Busca los sailors que han arrendado todos lo botes
  'GET /reserves/sailors-leased-all-boats': 'ReservesController.sailorWhoLeasedAllBoats',
  // Master-Detail
  'GET /reserves/sailor/:id' : 'ReservesController.findBySailor',

  // SAILORS
  'POST /sailors': 'SailorsController.create',
  'GET /sailors': 'SailorsController.find',
  'PATCH /sailors/:id': 'SailorsController.update',
  'DELETE /sailors/:id': 'SailorsController.destroy',
  // Lista los sailors con rating mayor a el parametro p_rating
  'GET /sailors/rating/:p_rating': 'SailorsController.getRaitingGraterThan'
};
