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
exports.VariableDataType = void 0;
exports.instanceOfVariableDataType = instanceOfVariableDataType;
exports.VariableDataTypeFromJSON = VariableDataTypeFromJSON;
exports.VariableDataTypeFromJSONTyped = VariableDataTypeFromJSONTyped;
exports.VariableDataTypeToJSON = VariableDataTypeToJSON;
exports.VariableDataTypeToJSONTyped = VariableDataTypeToJSONTyped;
/**
 *
 * @export
 */
exports.VariableDataType = {
    String: 'string',
    Number: 'number',
    Boolean: 'boolean',
    Array: 'array',
    Object: 'object',
    File: 'file',
    Tab: 'tab'
};
function instanceOfVariableDataType(value) {
    for (var key in exports.VariableDataType) {
        if (Object.prototype.hasOwnProperty.call(exports.VariableDataType, key)) {
            if (exports.VariableDataType[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function VariableDataTypeFromJSON(json) {
    return VariableDataTypeFromJSONTyped(json, false);
}
function VariableDataTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function VariableDataTypeToJSON(value) {
    return value;
}
function VariableDataTypeToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
