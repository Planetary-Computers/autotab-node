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
import * as runtime from '../runtime';
import type { Skill } from '../models/index';
export interface Retrieve0Request {
    id: string;
}
/**
 *
 */
export declare class SkillApi extends runtime.BaseAPI {
    /**
     * List
     */
    listRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Skill>>>;
    /**
     * List
     */
    list(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Skill>>;
    /**
     * Retrieve
     */
    retrieveRaw(requestParameters: Retrieve0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Skill>>;
    /**
     * Retrieve
     */
    retrieve(requestParameters: Retrieve0Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Skill>;
}
