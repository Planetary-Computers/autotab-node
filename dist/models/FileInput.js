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
exports.instanceOfFileInput = instanceOfFileInput;
exports.FileInputFromJSON = FileInputFromJSON;
exports.FileInputFromJSONTyped = FileInputFromJSONTyped;
exports.FileInputToJSON = FileInputToJSON;
exports.FileInputToJSONTyped = FileInputToJSONTyped;
const VariableType_1 = require("./VariableType");
const VariableDataType_1 = require("./VariableDataType");
/**
 * Check if a given object implements the FileInput interface.
 */
function instanceOfFileInput(value) {
    if (!('variableTypes' in value) || value['variableTypes'] === undefined)
        return false;
    return true;
}
function FileInputFromJSON(json) {
    return FileInputFromJSONTyped(json, false);
}
function FileInputFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : (0, VariableDataType_1.VariableDataTypeFromJSON)(json['type']),
        'variableTypes': (json['variableTypes'].map(VariableType_1.VariableTypeFromJSON)),
    };
}
function FileInputToJSON(json) {
    return FileInputToJSONTyped(json, false);
}
function FileInputToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': (0, VariableDataType_1.VariableDataTypeToJSON)(value['type']),
        'variableTypes': (value['variableTypes'].map(VariableType_1.VariableTypeToJSON)),
    };
}
