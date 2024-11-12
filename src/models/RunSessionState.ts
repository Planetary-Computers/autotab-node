/* tslint:disable */
/* eslint-disable */
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


/**
 * 
 * @export
 */
export const RunSessionState = {
    Play: 'play',
    Pause: 'pause',
    Finish: 'finish',
    Reset: 'reset',
    Cancel: 'cancel',
    Timeout: 'timeout',
    Editing: 'editing'
} as const;
export type RunSessionState = typeof RunSessionState[keyof typeof RunSessionState];


export function instanceOfRunSessionState(value: any): boolean {
    for (const key in RunSessionState) {
        if (Object.prototype.hasOwnProperty.call(RunSessionState, key)) {
            if (RunSessionState[key as keyof typeof RunSessionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function RunSessionStateFromJSON(json: any): RunSessionState {
    return RunSessionStateFromJSONTyped(json, false);
}

export function RunSessionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RunSessionState {
    return json as RunSessionState;
}

export function RunSessionStateToJSON(value?: RunSessionState | null): any {
    return value as any;
}

export function RunSessionStateToJSONTyped(value: any, ignoreDiscriminator: boolean): RunSessionState {
    return value as RunSessionState;
}

