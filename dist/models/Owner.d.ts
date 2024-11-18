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
 * @interface Owner
 */
export interface Owner {
    /**
     *
     * @type {string}
     * @memberof Owner
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof Owner
     */
    type?: OwnerTypeEnum;
}
/**
 * @export
 */
export declare const OwnerTypeEnum: {
    readonly User: "user";
    readonly Organization: "organization";
    readonly Team: "team";
};
export type OwnerTypeEnum = typeof OwnerTypeEnum[keyof typeof OwnerTypeEnum];
/**
 * Check if a given object implements the Owner interface.
 */
export declare function instanceOfOwner(value: object): value is Owner;
export declare function OwnerFromJSON(json: any): Owner;
export declare function OwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Owner;
export declare function OwnerToJSON(json: any): Owner;
export declare function OwnerToJSONTyped(value?: Owner | null, ignoreDiscriminator?: boolean): any;
