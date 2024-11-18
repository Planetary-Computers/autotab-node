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
import { ValidationErrorFromJSON, ValidationErrorToJSON, } from './ValidationError';
/**
 * Check if a given object implements the HTTPValidationError interface.
 */
export function instanceOfHTTPValidationError(value) {
    return true;
}
export function HTTPValidationErrorFromJSON(json) {
    return HTTPValidationErrorFromJSONTyped(json, false);
}
export function HTTPValidationErrorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'detail': json['detail'] == null ? undefined : (json['detail'].map(ValidationErrorFromJSON)),
    };
}
export function HTTPValidationErrorToJSON(json) {
    return HTTPValidationErrorToJSONTyped(json, false);
}
export function HTTPValidationErrorToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'detail': value['detail'] == null ? undefined : (value['detail'].map(ValidationErrorToJSON)),
    };
}
