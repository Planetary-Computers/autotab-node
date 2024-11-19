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
import type { VariableDataType } from './VariableDataType';
/**
 *
 * @export
 * @interface Input
 */
export interface Input {
    /**
     *
     * @type {string}
     * @memberof Input
     */
    jsonKey: string;
    /**
     *
     * @type {string}
     * @memberof Input
     */
    id: string;
    /**
     *
     * @type {VariableDataType}
     * @memberof Input
     */
    dataType: VariableDataType;
}
/**
 * Check if a given object implements the Input interface.
 */
export declare function instanceOfInput(value: object): value is Input;
export declare function InputFromJSON(json: any): Input;
export declare function InputFromJSONTyped(json: any, ignoreDiscriminator: boolean): Input;
export declare function InputToJSON(json: any): Input;
export declare function InputToJSONTyped(value?: Input | null, ignoreDiscriminator?: boolean): any;
