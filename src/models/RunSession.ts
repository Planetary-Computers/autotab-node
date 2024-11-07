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
import type { Environment } from './Environment';
import {
    EnvironmentFromJSON,
    EnvironmentFromJSONTyped,
    EnvironmentToJSON,
    EnvironmentToJSONTyped,
} from './Environment';
import type { RunSessionState } from './RunSessionState';
import {
    RunSessionStateFromJSON,
    RunSessionStateFromJSONTyped,
    RunSessionStateToJSON,
    RunSessionStateToJSONTyped,
} from './RunSessionState';

/**
 * 
 * @export
 * @interface RunSession
 */
export interface RunSession {
    /**
     * 
     * @type {string}
     * @memberof RunSession
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof RunSession
     */
    skillId: string;
    /**
     * 
     * @type {string}
     * @memberof RunSession
     */
    owner: string;
    /**
     * 
     * @type {Date}
     * @memberof RunSession
     */
    createdAt: Date;
    /**
     * 
     * @type {Environment}
     * @memberof RunSession
     */
    environment: Environment | null;
    /**
     * 
     * @type {Date}
     * @memberof RunSession
     */
    startTime: Date;
    /**
     * 
     * @type {Date}
     * @memberof RunSession
     */
    endTime?: Date | null;
    /**
     * 
     * @type {RunSessionState}
     * @memberof RunSession
     */
    state?: RunSessionState | null;
}



/**
 * Check if a given object implements the RunSession interface.
 */
export function instanceOfRunSession(value: object): value is RunSession {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('skillId' in value) || value['skillId'] === undefined) return false;
    if (!('owner' in value) || value['owner'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('startTime' in value) || value['startTime'] === undefined) return false;
    return true;
}

export function RunSessionFromJSON(json: any): RunSession {
    return RunSessionFromJSONTyped(json, false);
}

export function RunSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RunSession {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'skillId': json['skill_id'],
        'owner': json['owner'],
        'createdAt': (new Date(json['created_at'])),
        'environment': EnvironmentFromJSON(json['environment']),
        'startTime': (new Date(json['start_time'])),
        'endTime': json['end_time'] == null ? undefined : (new Date(json['end_time'])),
        'state': json['state'] == null ? undefined : RunSessionStateFromJSON(json['state']),
    };
}

  export function RunSessionToJSON(json: any): RunSession {
      return RunSessionToJSONTyped(json, false);
  }

  export function RunSessionToJSONTyped(value?: RunSession | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'skill_id': value['skillId'],
        'owner': value['owner'],
        'created_at': ((value['createdAt']).toISOString()),
        'environment': EnvironmentToJSON(value['environment']),
        'start_time': ((value['startTime']).toISOString()),
        'end_time': value['endTime'] == null ? undefined : ((value['endTime'] as any).toISOString()),
        'state': RunSessionStateToJSON(value['state']),
    };
}

