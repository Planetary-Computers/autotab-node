"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfSkill = instanceOfSkill;
exports.SkillFromJSON = SkillFromJSON;
exports.SkillFromJSONTyped = SkillFromJSONTyped;
exports.SkillToJSON = SkillToJSON;
exports.SkillToJSONTyped = SkillToJSONTyped;
const runtime_1 = require("../runtime");
const Owner_1 = require("./Owner");
const SkillInputsValue_1 = require("./SkillInputsValue");
/**
 * Check if a given object implements the Skill interface.
 */
function instanceOfSkill(value) {
    if (!('owner' in value) || value['owner'] === undefined)
        return false;
    return true;
}
function SkillFromJSON(json) {
    return SkillFromJSONTyped(json, false);
}
function SkillFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'owner': (0, Owner_1.OwnerFromJSON)(json['owner']),
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'createdBy': json['created_by'] == null ? undefined : json['created_by'],
        'lastModifiedAt': json['last_modified_at'] == null ? undefined : (new Date(json['last_modified_at'])),
        'isPublished': json['is_published'] == null ? undefined : json['is_published'],
        'inputs': json['inputs'] == null ? undefined : ((0, runtime_1.mapValues)(json['inputs'], SkillInputsValue_1.SkillInputsValueFromJSON)),
    };
}
function SkillToJSON(json) {
    return SkillToJSONTyped(json, false);
}
function SkillToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'owner': (0, Owner_1.OwnerToJSON)(value['owner']),
        'created_at': value['createdAt'] == null ? undefined : (value['createdAt'].toISOString()),
        'created_by': value['createdBy'],
        'last_modified_at': value['lastModifiedAt'] == null ? undefined : (value['lastModifiedAt'].toISOString()),
        'is_published': value['isPublished'],
        'inputs': value['inputs'] == null ? undefined : ((0, runtime_1.mapValues)(value['inputs'], SkillInputsValue_1.SkillInputsValueToJSON)),
    };
}