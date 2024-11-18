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
export const MacroAssetKeyTypeEnum = {
    Macro: 'macro'
};
/**
 * Check if a given object implements the MacroAssetKey interface.
 */
export function instanceOfMacroAssetKey(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    return true;
}
export function MacroAssetKeyFromJSON(json) {
    return MacroAssetKeyFromJSONTyped(json, false);
}
export function MacroAssetKeyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}
export function MacroAssetKeyToJSON(json) {
    return MacroAssetKeyToJSONTyped(json, false);
}
export function MacroAssetKeyToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
    };
}
