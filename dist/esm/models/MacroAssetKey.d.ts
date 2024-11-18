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
 * @interface MacroAssetKey
 */
export interface MacroAssetKey {
    /**
     *
     * @type {string}
     * @memberof MacroAssetKey
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof MacroAssetKey
     */
    type?: MacroAssetKeyTypeEnum;
}
/**
 * @export
 */
export declare const MacroAssetKeyTypeEnum: {
    readonly Macro: "macro";
};
export type MacroAssetKeyTypeEnum = typeof MacroAssetKeyTypeEnum[keyof typeof MacroAssetKeyTypeEnum];
/**
 * Check if a given object implements the MacroAssetKey interface.
 */
export declare function instanceOfMacroAssetKey(value: object): value is MacroAssetKey;
export declare function MacroAssetKeyFromJSON(json: any): MacroAssetKey;
export declare function MacroAssetKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): MacroAssetKey;
export declare function MacroAssetKeyToJSON(json: any): MacroAssetKey;
export declare function MacroAssetKeyToJSONTyped(value?: MacroAssetKey | null, ignoreDiscriminator?: boolean): any;