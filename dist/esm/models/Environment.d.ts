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
export declare const Environment: {
    readonly Client: "client";
    readonly Cloud: "cloud";
};
export type Environment = typeof Environment[keyof typeof Environment];
export declare function instanceOfEnvironment(value: any): boolean;
export declare function EnvironmentFromJSON(json: any): Environment;
export declare function EnvironmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Environment;
export declare function EnvironmentToJSON(value?: Environment | null): any;
export declare function EnvironmentToJSONTyped(value: any, ignoreDiscriminator: boolean): Environment;