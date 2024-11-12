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


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  RunSession,
  RunSessionState,
  RunSkillRequest,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    RunSessionFromJSON,
    RunSessionToJSON,
    RunSessionStateFromJSON,
    RunSessionStateToJSON,
    RunSkillRequestFromJSON,
    RunSkillRequestToJSON,
} from '../models/index';

export interface CancelRequest {
    id: string;
}

export interface ListRequest {
    skillId?: string | null;
    stateFilter?: Array<RunSessionState> | null;
}

export interface RetrieveRequest {
    id: string;
}

export interface StartRequest {
    runSkillRequest: RunSkillRequest;
}

/**
 * 
 */
export class RunApi extends runtime.BaseAPI {

    /**
     * Cancel
     */
    async cancelRaw(requestParameters: CancelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling cancel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${await this.configuration.apiKey("")}`;
        }
        const response = await this.request({
            path: `/run/{id}/cancel`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Cancel
     */
    async cancel(requestParameters: CancelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.cancelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List
     */
    async listRaw(requestParameters: ListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RunSession>>> {
        const queryParameters: any = {};

        if (requestParameters['skillId'] != null) {
            queryParameters['skill_id'] = requestParameters['skillId'];
        }

        if (requestParameters['stateFilter'] != null) {
            queryParameters['state_filter'] = requestParameters['stateFilter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${await this.configuration.apiKey("")}`;
        }
        const response = await this.request({
            path: `/run/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RunSessionFromJSON));
    }

    /**
     * List
     */
    async list(requestParameters: ListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RunSession>> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve
     */
    async retrieveRaw(requestParameters: RetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RunSession>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling retrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${await this.configuration.apiKey("")}`;
        }
        const response = await this.request({
            path: `/run/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RunSessionFromJSON(jsonValue));
    }

    /**
     * Retrieve
     */
    async retrieve(requestParameters: RetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RunSession> {
        const response = await this.retrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Start
     */
    async startRaw(requestParameters: StartRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RunSession>> {
        if (requestParameters['runSkillRequest'] == null) {
            throw new runtime.RequiredError(
                'runSkillRequest',
                'Required parameter "runSkillRequest" was null or undefined when calling start().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${await this.configuration.apiKey("")}`;
        }
        const response = await this.request({
            path: `/run/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RunSkillRequestToJSON(requestParameters['runSkillRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RunSessionFromJSON(jsonValue));
    }

    /**
     * Start
     */
    async start(requestParameters: StartRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RunSession> {
        const response = await this.startRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
