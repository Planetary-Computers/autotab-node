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
exports.instanceOfStringInput = instanceOfStringInput;
exports.StringInputFromJSON = StringInputFromJSON;
exports.StringInputFromJSONTyped = StringInputFromJSONTyped;
exports.StringInputToJSON = StringInputToJSON;
exports.StringInputToJSONTyped = StringInputToJSONTyped;
const VariableType_1 = require("./VariableType");
const VariableDataType_1 = require("./VariableDataType");
/**
 * Check if a given object implements the StringInput interface.
 */
function instanceOfStringInput(value) {
    if (!('variableTypes' in value) || value['variableTypes'] === undefined)
        return false;
    return true;
}
function StringInputFromJSON(json) {
    return StringInputFromJSONTyped(json, false);
}
function StringInputFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : (0, VariableDataType_1.VariableDataTypeFromJSON)(json['type']),
        'variableTypes': (json['variableTypes'].map(VariableType_1.VariableTypeFromJSON)),
        'defaultValue': json['defaultValue'] == null ? undefined : json['defaultValue'],
    };
}
function StringInputToJSON(json) {
    return StringInputToJSONTyped(json, false);
}
function StringInputToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': (0, VariableDataType_1.VariableDataTypeToJSON)(value['type']),
        'variableTypes': (value['variableTypes'].map(VariableType_1.VariableTypeToJSON)),
        'defaultValue': value['defaultValue'],
    };
}