/**
 * Siigo.Alliances API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: V1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RequestContactDataFieldsModelStructure model module.
 * @module model/RequestContactDataFieldsModelStructure
 * @version V1
 */
class RequestContactDataFieldsModelStructure {
    /**
     * Constructs a new <code>RequestContactDataFieldsModelStructure</code>.
     * @alias module:model/RequestContactDataFieldsModelStructure
     */
    constructor() { 
        
        RequestContactDataFieldsModelStructure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestContactDataFieldsModelStructure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestContactDataFieldsModelStructure} obj Optional instance to populate.
     * @return {module:model/RequestContactDataFieldsModelStructure} The populated <code>RequestContactDataFieldsModelStructure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestContactDataFieldsModelStructure();

            if (data.hasOwnProperty('pattern')) {
                obj['pattern'] = ApiClient.convertToType(data['pattern'], 'String');
            }
            if (data.hasOwnProperty('error_message')) {
                obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
            }
            if (data.hasOwnProperty('required_message')) {
                obj['required_message'] = ApiClient.convertToType(data['required_message'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('max_length')) {
                obj['max_length'] = ApiClient.convertToType(data['max_length'], 'Number');
            }
            if (data.hasOwnProperty('hint')) {
                obj['hint'] = ApiClient.convertToType(data['hint'], 'String');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} pattern
 */
RequestContactDataFieldsModelStructure.prototype['pattern'] = undefined;

/**
 * @member {String} error_message
 */
RequestContactDataFieldsModelStructure.prototype['error_message'] = undefined;

/**
 * @member {String} required_message
 */
RequestContactDataFieldsModelStructure.prototype['required_message'] = undefined;

/**
 * @member {String} label
 */
RequestContactDataFieldsModelStructure.prototype['label'] = undefined;

/**
 * @member {String} type
 */
RequestContactDataFieldsModelStructure.prototype['type'] = undefined;

/**
 * @member {Number} max_length
 */
RequestContactDataFieldsModelStructure.prototype['max_length'] = undefined;

/**
 * @member {String} hint
 */
RequestContactDataFieldsModelStructure.prototype['hint'] = undefined;

/**
 * @member {Boolean} required
 */
RequestContactDataFieldsModelStructure.prototype['required'] = undefined;

/**
 * @member {String} name
 */
RequestContactDataFieldsModelStructure.prototype['name'] = undefined;






export default RequestContactDataFieldsModelStructure;

