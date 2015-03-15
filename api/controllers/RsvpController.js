/**
 * RsvpController
 *
 * @description :: Server-side logic for managing rsvps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var util = require('util');
var Firebase = require('firebase');

module.exports = {
	
    rsvp: function (req, res) {
        var service, childService;

        var rsvps = new Firebase('https://highrock-easter-2015.firebaseio.com/rsvps');

        var params = req.params.all();

        if (params.firstService) {
            service = 1;
        }
        else if (params.secondService) {
            service = 2;
        }
        else if (params.thirdService) {
            service = 3;
        }

        if (params.firstChildrenService) {
            childService = 1;
        }
        else if (params.secondChildrenService) {
            childService = 2;
        }

        if (!childService) {
            params.infants = 0;
            params.preschoolers = 0;
            params.children = 0;
            childService = 0;
        }

        var rsvp = {
            name: params.name,
            email: params.email,
            guests: parseInt(params.guests),
            service: service,
            childService: childService,
            infants: parseInt(params.infants),
            preschoolers: parseInt(params.preschoolers),
            children: parseInt(params.children)
        };

        rsvps.push(rsvp);

        return res.redirect('thank-you');
    }
};

