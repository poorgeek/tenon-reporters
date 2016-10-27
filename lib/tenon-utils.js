'use strict';

// Convert a string value to a boolean
var toBool = function(val) {
    return val !== '0';
};

/**
 * Update values in the Tenon JSON object to have boolean instead of string values.
 *
 * @param {Object} tenonJson
 * @return {Object}
 */
module.exports.updateBooleanValues = function(tenonJson) {
    if (typeof tenonJson.request.fragment !== 'boolean') {
        tenonJson.request.fragment = toBool(tenonJson.request.fragment);
    }

    if (typeof tenonJson.request.store !== 'boolean') {
        tenonJson.request.store = toBool(tenonJson.request.store);
    }
    return tenonJson;
};

/**
 * Convert bytes to an appropriate size
 * @param {Integer} size in bytes
 * @return {String}
 */
module.exports.bytesToSize = function(bytes) {
    if (typeof bytes === 'number') {
        if (bytes === 0) {
            return '0 Byte';
        }
        var k = 1000;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    }
    return bytes;
};
