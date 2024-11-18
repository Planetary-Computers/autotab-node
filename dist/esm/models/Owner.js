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
 * @export
 */
export const OwnerTypeEnum = {
    User: 'user',
    Organization: 'organization',
    Team: 'team'
};
/**
 * Check if a given object implements the Owner interface.
 */
export function instanceOfOwner(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    return true;
}
export function OwnerFromJSON(json) {
    return OwnerFromJSONTyped(json, false);
}
export function OwnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}
export function OwnerToJSON(json) {
    return OwnerToJSONTyped(json, false);
}
export function OwnerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
    };
}