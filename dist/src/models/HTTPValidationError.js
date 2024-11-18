"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Autotab API
 * AI that does your repetitive work end to end, with superhuman reliability.
 *
 * The version of the OpenAPI document: 0.0.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfHTTPValidationError = instanceOfHTTPValidationError;
exports.HTTPValidationErrorFromJSON = HTTPValidationErrorFromJSON;
exports.HTTPValidationErrorFromJSONTyped = HTTPValidationErrorFromJSONTyped;
exports.HTTPValidationErrorToJSON = HTTPValidationErrorToJSON;
exports.HTTPValidationErrorToJSONTyped = HTTPValidationErrorToJSONTyped;
var ValidationError_1 = require("./ValidationError");
/**
 * Check if a given object implements the HTTPValidationError interface.
 */
function instanceOfHTTPValidationError(value) {
    return true;
}
function HTTPValidationErrorFromJSON(json) {
    return HTTPValidationErrorFromJSONTyped(json, false);
}
function HTTPValidationErrorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'detail': json['detail'] == null ? undefined : (json['detail'].map(ValidationError_1.ValidationErrorFromJSON)),
    };
}
function HTTPValidationErrorToJSON(json) {
    return HTTPValidationErrorToJSONTyped(json, false);
}
function HTTPValidationErrorToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'detail': value['detail'] == null ? undefined : (value['detail'].map(ValidationError_1.ValidationErrorToJSON)),
    };
}