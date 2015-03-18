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

            // Test.
            //rsvps = [405, 300, 500];

            viewData.services = {
                first: { isFull: false },
                second: { isFull: false },
                third: { isFull: false }
            };

            viewData.childServices = {
                first: {
                    isInfantFull: false,
                    isPreschoolerFull: false,
                    isChildrenFull: false
                },
                second: {
                    isInfantFull: false,
                    isPreschoolerFull: false,
                    isChildrenFull: false
                }
            };

            // Test.
            //viewData.childServices.first.isInfantFull = false;
            //viewData.childServices.second.isInfantFull = true;
            //viewData.childServices.first.isPreschoolerFull = false;
            //viewData.childServices.second.isPreschoolerFull = true;
            //viewData.childServices.first.isChildrenFull = false;
            //viewData.childServices.second.isChildrenFull = true;

            // Check service capacity.
            if (rsvps.guests[0] >= 400) {
                viewData.services.first.isFull = true;
            }
            if (rsvps.guests[1] >= 400) {
                viewData.services.second.isFull = true;
            }
            if (rsvps.guests[2] >= 400) {
                viewData.services.third.isFull = true;
            }

            // Test.
            //rsvps.infants = [5, 245];
            //rsvps.preschoolers = [5, 5];
            //rsvps.children = [50, 5];

            // Check children's program capacity.
            if (rsvps.infants[0] >= 35) {
                viewData.childServices.first.isInfantFull = true;
            }
            if (rsvps.infants[1] >= 35) {
                viewData.childServices.second.isInfantFull = true;
            }
            if (rsvps.preschoolers[0] >= 30) {
                viewData.childServices.first.isPreschoolerFull = true;
            }
            if (rsvps.preschoolers[1] >= 30) {
                viewData.childServices.second.isPreschoolerFull = true;
            }
            if (rsvps.children[0] >= 110) {
                viewData.childServices.first.isChildrenFull = true;
            }
            if (rsvps.children[1] >= 110) {
                viewData.childServices.second.isChildrenFull = true;
            }
            
            res.view('index', viewData);
        });
    }
};

