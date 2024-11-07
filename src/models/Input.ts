/* tslint:disable */
/* eslint-disable */
/**
 * Autotab API
 * AI that does your repetitive work end to end, with superhuman reliability.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { VariableDataType } from './VariableDataType';
import {
    VariableDataTypeFromJSON,
    VariableDataTypeFromJSONTyped,
    VariableDataTypeToJSON,
    VariableDataTypeToJSONTyped,
} from './VariableDataType';

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
export function instanceOfInput(value: object): value is Input {
    if (!('jsonKey' in value) || value['jsonKey'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('dataType' in value) || value['dataType'] === undefined) return false;
    return true;
}

export function InputFromJSON(json: any): Input {
    return InputFromJSONTyped(json, false);
}

export function InputFromJSONTyped(json: any, ignoreDiscriminator: boolean): Input {
    if (json == null) {
        return json;
    }
    return {
        
        'jsonKey': json['json_key'],
        'id': json['id'],
        'dataType': VariableDataTypeFromJSON(json['data_type']),
    };
}

  export function InputToJSON(json: any): Input {
      return InputToJSONTyped(json, false);
  }

  export function InputToJSONTyped(value?: Input | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'json_key': value['jsonKey'],
        'id': value['id'],
        'data_type': VariableDataTypeToJSON(value['dataType']),
    };
}
