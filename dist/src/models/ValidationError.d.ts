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
import type { ValidationErrorLocInner } from './ValidationErrorLocInner';
/**
 *
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     *
     * @type {Array<ValidationErrorLocInner>}
     * @memberof ValidationError
     */
    loc: Array<ValidationErrorLocInner>;
    /**
     *
     * @type {string}
     * @memberof ValidationError
     */
    msg: string;
    /**
     *
     * @type {string}
     * @memberof ValidationError
     */
    type: string;
}
/**
 * Check if a given object implements the ValidationError interface.
 */
export declare function instanceOfValidationError(value: object): value is ValidationError;
export declare function ValidationErrorFromJSON(json: any): ValidationError;
export declare function ValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationError;
export declare function ValidationErrorToJSON(json: any): ValidationError;
export declare function ValidationErrorToJSONTyped(value?: ValidationError | null, ignoreDiscriminator?: boolean): any;
