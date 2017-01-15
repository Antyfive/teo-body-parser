/**
 * Teo.JS body-parser middleware
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @license MIT
 */

'use strict';

const bodyParser = require('body-parser');

function extractConfig(confItem) {
  return typeof confItem === 'object' ? confItem : {};
}

module.exports = {
  extension(app, config = {}) {
  	const parsers = [];
    
  	if (config.json) {
  		parsers.push(bodyParser.json(extractConfig(config.json)));
  	}
    if (config.raw) {
     parsers.push(bodyParser.raw(extractConfig(config.raw))); 
    }
    if (config.text) {
     parsers.push(bodyParser.text(extractConfig(config.text)));  
    }
  	if (config.urlencoded) {
  		parsers.push(bodyParser.urlencoded(extractConfig(config.urlencoded)));
  	}

  	parsers.forEach((parser) => {
  		app.middleware(function* (next) {
  			yield function(next) {
  				parser(this.req, this.res, next);
  			}.bind(this);
  			yield next;
    	});
  	})
  }
};