"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Autotab API
 * AI that does your repetitive work end to end, with superhuman reliability.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfRunSessionWithData = instanceOfRunSessionWithData;
exports.RunSessionWithDataFromJSON = RunSessionWithDataFromJSON;
exports.RunSessionWithDataFromJSONTyped = RunSessionWithDataFromJSONTyped;
exports.RunSessionWithDataToJSON = RunSessionWithDataToJSON;
exports.RunSessionWithDataToJSONTyped = RunSessionWithDataToJSONTyped;
var Environment_1 = require("./Environment");
var RunSessionState_1 = require("./RunSessionState");
/**
 * Check if a given object implements the RunSessionWithData interface.
 */
function instanceOfRunSessionWithData(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('skillId' in value) || value['skillId'] === undefined)
        return false;
    if (!('owner' in value) || value['owner'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('environment' in value) || value['environment'] === undefined)
        return false;
    if (!('startTime' in value) || value['startTime'] === undefined)
        return false;
    return true;
}
function RunSessionWithDataFromJSON(json) {
    return RunSessionWithDataFromJSONTyped(json, false);
}
function RunSessionWithDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'skillId': json['skill_id'],
        'owner': json['owner'],
        'createdAt': (new Date(json['created_at'])),
        'environment': (0, Environment_1.EnvironmentFromJSON)(json['environment']),
        'startTime': (new Date(json['start_time'])),
        'endTime': json['end_time'] == null ? undefined : (new Date(json['end_time'])),
        'state': json['state'] == null ? undefined : (0, RunSessionState_1.RunSessionStateFromJSON)(json['state']),
        'inputs': json['inputs'] == null ? undefined : json['inputs'],
        'data': json['data'] == null ? undefined : json['data'],
    };
}
function RunSessionWithDataToJSON(json) {
    return RunSessionWithDataToJSONTyped(json, false);
}
function RunSessionWithDataToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'skill_id': value['skillId'],
        'owner': value['owner'],
        'created_at': ((value['createdAt']).toISOString()),
        'environment': (0, Environment_1.EnvironmentToJSON)(value['environment']),
        'start_time': ((value['startTime']).toISOString()),
        'end_time': value['endTime'] == null ? undefined : (value['endTime'].toISOString()),
        'state': (0, RunSessionState_1.RunSessionStateToJSON)(value['state']),
        'inputs': value['inputs'],
        'data': value['data'],
    };
}
