/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var utils = require('../services/utils');

module.exports = {

    index: function (req, res) {

        var viewData = {}; 

        utils.getRsvpCount().done(function (rsvps) {

            viewData.services = {
                first: { isFull: false },
                second: { isFull: false },
                third: { isFull: false }
            };

            if (rsvps[0] >= 400) {
                viewData.services.first.isFull = true;
            }
            if (rsvps[1] >= 400) {
                viewData.services.second.isFull = true;
            }
            if (rsvps[2] >= 400) {
                viewData.services.third.isFull = true;
            }
            
            res.view('index', viewData);
        });
    }
};

