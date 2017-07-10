'use strict';
var Quickblox = require('quickblox');

angular.module('olitvin.quickblox', [])
    .factory('QB', function () {
        return Quickblox;
    })