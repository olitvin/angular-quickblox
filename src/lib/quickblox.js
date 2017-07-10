'use strict';
var Quickblox = require('quickblox').QuickBlox;

angular.module('olitvin.quickblox', [])
    .factory('QB', function () {
        return Quickblox;
    })