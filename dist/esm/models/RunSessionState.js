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
};
export function instanceOfRunSessionState(value) {
    for (const key in RunSessionState) {
        if (Object.prototype.hasOwnProperty.call(RunSessionState, key)) {
            if (RunSessionState[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function RunSessionStateFromJSON(json) {
    return RunSessionStateFromJSONTyped(json, false);
}
export function RunSessionStateFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function RunSessionStateToJSON(value) {
    return value;
}
export function RunSessionStateToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
