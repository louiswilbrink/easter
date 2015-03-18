/**
 * Utils 
 *
 */

var Q = require('q');
var _ = require('underscore');
var Firebase = require('firebase');

module.exports = {

    getRsvpCount: function () {

        var count = Q.defer();

        var rsvpsRef = new Firebase('https://highrock-easter-2015.firebaseio.com/rsvps');
        
        rsvpsRef.once('value', function (snapshot) {
            var rsvps = snapshot.val();
            
            // [first, second, third] service.
            var guests = [0, 0, 0];
            var infants = [0, 0];
            var preschoolers = [0, 0];
            var children = [0, 0];

            _.each(rsvps, function (rsvp) {
                guests[rsvp.service - 1] += rsvp.guests;
                if (rsvp.childService !== 0) {
                    infants[rsvp.childService - 1] += rsvp.infants;
                    preschoolers[rsvp.childService - 1] += rsvp.preschoolers;
                    children[rsvp.childService - 1] += rsvp.children;
                }
            });

            var allCount = {
                guests: guests,
                infants: infants,
                preschoolers: preschoolers,
                children: children
            };
            
            count.resolve(allCount);
        });

        return count.promise;
    }
};
