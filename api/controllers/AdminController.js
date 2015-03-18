/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var util = require('util');
var utils = require('../services/utils');

module.exports = {

    admin: function (req, res) {

        var viewData = {};

        utils.getRsvpCount().done(function (rsvps) {
            viewData.guests = rsvps.guests;
            viewData.infants = rsvps.infants;
            viewData.preschoolers = rsvps.preschoolers;
            viewData.children = rsvps.children;

            res.view('admin', viewData);
        });
    }
};

