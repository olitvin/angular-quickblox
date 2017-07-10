'use strict';
var Quickblox = require('quickblox');

angular.module('olitvin.quickblox', [])
    .factory('Quickblox', function () {
        return Quickblox;
    })