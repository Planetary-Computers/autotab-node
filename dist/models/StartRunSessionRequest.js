"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Autotab API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfStartRunSessionRequest = instanceOfStartRunSessionRequest;
exports.StartRunSessionRequestFromJSON = StartRunSessionRequestFromJSON;
exports.StartRunSessionRequestFromJSONTyped = StartRunSessionRequestFromJSONTyped;
exports.StartRunSessionRequestToJSON = StartRunSessionRequestToJSON;
exports.StartRunSessionRequestToJSONTyped = StartRunSessionRequestToJSONTyped;
/**
 * Check if a given object implements the StartRunSessionRequest interface.
 */
function instanceOfStartRunSessionRequest(value) {
    if (!('skill' in value) || value['skill'] === undefined)
        return false;
    return true;
}
function StartRunSessionRequestFromJSON(json) {
    return StartRunSessionRequestFromJSONTyped(json, false);
}
function StartRunSessionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'skill': json['skill'],
    };
}
function StartRunSessionRequestToJSON(json) {
    return StartRunSessionRequestToJSONTyped(json, false);
}
function StartRunSessionRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'skill': value['skill'],
    };
}