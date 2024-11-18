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
exports.instanceOfVariableType = instanceOfVariableType;
exports.VariableTypeFromJSON = VariableTypeFromJSON;
exports.VariableTypeFromJSONTyped = VariableTypeFromJSONTyped;
exports.VariableTypeToJSON = VariableTypeToJSON;
exports.VariableTypeToJSONTyped = VariableTypeToJSONTyped;
const VariableDataType_1 = require("./VariableDataType");
const VariableTypeId_1 = require("./VariableTypeId");
/**
 * Check if a given object implements the VariableType interface.
 */
function instanceOfVariableType(value) {
    if (!('dataType' in value) || value['dataType'] === undefined)
        return false;
    return true;
}
function VariableTypeFromJSON(json) {
    return VariableTypeFromJSONTyped(json, false);
}
function VariableTypeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'jsonKey': json['jsonKey'] == null ? undefined : json['jsonKey'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : (0, VariableTypeId_1.VariableTypeIdFromJSON)(json['id']),
        'dataType': (0, VariableDataType_1.VariableDataTypeFromJSON)(json['dataType']),
        'children': json['children'] == null ? undefined : (json['children'].map(VariableTypeId_1.VariableTypeIdFromJSON)),
        'parent': json['parent'] == null ? undefined : (0, VariableTypeId_1.VariableTypeIdFromJSON)(json['parent']),
    };
}
function VariableTypeToJSON(json) {
    return VariableTypeToJSONTyped(json, false);
}
function VariableTypeToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'jsonKey': value['jsonKey'],
        'description': value['description'],
        'id': (0, VariableTypeId_1.VariableTypeIdToJSON)(value['id']),
        'dataType': (0, VariableDataType_1.VariableDataTypeToJSON)(value['dataType']),
        'children': value['children'] == null ? undefined : (value['children'].map(VariableTypeId_1.VariableTypeIdToJSON)),
        'parent': (0, VariableTypeId_1.VariableTypeIdToJSON)(value['parent']),
    };
}
