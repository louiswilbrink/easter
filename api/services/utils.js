/**
 * Utils 
 *
 */

var Q = require('q');
var Firebase = require('firebase');

module.exports = {

    getRsvpCount: function () {

        var rsvps = Q.defer();

        var rsvpsRef = new Firebase('https://highrock-easter-2015.firebaseio.com/rsvps');
        
        rsvpsRef.once('value', function (snapshot) {
            rsvps.resolve('louis');
        });

        return rsvps.promise;
    }
};
