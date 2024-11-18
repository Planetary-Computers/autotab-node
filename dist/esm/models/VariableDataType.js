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
/**
 *
 * @export
 */
export const VariableDataType = {
    String: 'string',
    Number: 'number',
    Boolean: 'boolean',
    Array: 'array',
    Object: 'object',
    File: 'file',
    Tab: 'tab'
};
export function instanceOfVariableDataType(value) {
    for (const key in VariableDataType) {
        if (Object.prototype.hasOwnProperty.call(VariableDataType, key)) {
            if (VariableDataType[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function VariableDataTypeFromJSON(json) {
    return VariableDataTypeFromJSONTyped(json, false);
}
export function VariableDataTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function VariableDataTypeToJSON(value) {
    return value;
}
export function VariableDataTypeToJSONTyped(value, ignoreDiscriminator) {
    return value;
}