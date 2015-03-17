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
            var guests = [0, 0, 0]

            _.each(rsvps, function (rsvp) {
                guests[rsvp.service - 1] += rsvp.guests;
            });
            
            count.resolve(guests);
        });

        return count.promise;
    }
};
