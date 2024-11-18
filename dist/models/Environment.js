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
exports.Environment = void 0;
exports.instanceOfEnvironment = instanceOfEnvironment;
exports.EnvironmentFromJSON = EnvironmentFromJSON;
exports.EnvironmentFromJSONTyped = EnvironmentFromJSONTyped;
exports.EnvironmentToJSON = EnvironmentToJSON;
exports.EnvironmentToJSONTyped = EnvironmentToJSONTyped;
/**
 *
 * @export
 */
exports.Environment = {
    Client: 'client',
    Cloud: 'cloud'
};
function instanceOfEnvironment(value) {
    for (const key in exports.Environment) {
        if (Object.prototype.hasOwnProperty.call(exports.Environment, key)) {
            if (exports.Environment[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function EnvironmentFromJSON(json) {
    return EnvironmentFromJSONTyped(json, false);
}
function EnvironmentFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function EnvironmentToJSON(value) {
    return value;
}
function EnvironmentToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
