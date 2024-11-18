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
import { VariableDataTypeFromJSON, VariableDataTypeToJSON, } from './VariableDataType';
import { VariableTypeIdFromJSON, VariableTypeIdToJSON, } from './VariableTypeId';
/**
 * Check if a given object implements the VariableType interface.
 */
export function instanceOfVariableType(value) {
    if (!('dataType' in value) || value['dataType'] === undefined)
        return false;
    return true;
}
export function VariableTypeFromJSON(json) {
    return VariableTypeFromJSONTyped(json, false);
}
export function VariableTypeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'jsonKey': json['jsonKey'] == null ? undefined : json['jsonKey'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : VariableTypeIdFromJSON(json['id']),
        'dataType': VariableDataTypeFromJSON(json['dataType']),
        'children': json['children'] == null ? undefined : (json['children'].map(VariableTypeIdFromJSON)),
        'parent': json['parent'] == null ? undefined : VariableTypeIdFromJSON(json['parent']),
    };
}
export function VariableTypeToJSON(json) {
    return VariableTypeToJSONTyped(json, false);
}
export function VariableTypeToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'jsonKey': value['jsonKey'],
        'description': value['description'],
        'id': VariableTypeIdToJSON(value['id']),
        'dataType': VariableDataTypeToJSON(value['dataType']),
        'children': value['children'] == null ? undefined : (value['children'].map(VariableTypeIdToJSON)),
        'parent': VariableTypeIdToJSON(value['parent']),
    };
}
