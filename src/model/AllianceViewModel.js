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
 * The AllianceViewModel model module.
 * @module model/AllianceViewModel
 * @version V1
 */
class AllianceViewModel {
    /**
     * Constructs a new <code>AllianceViewModel</code>.
     * @alias module:model/AllianceViewModel
     */
    constructor() { 
        
        AllianceViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AllianceViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllianceViewModel} obj Optional instance to populate.
     * @return {module:model/AllianceViewModel} The populated <code>AllianceViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllianceViewModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('basic_information')) {
                obj['basic_information'] = ApiClient.convertToType(data['basic_information'], 'String');
            }
            if (data.hasOwnProperty('detail_information')) {
                obj['detail_information'] = ApiClient.convertToType(data['detail_information'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('class')) {
                obj['class'] = ApiClient.convertToType(data['class'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('category_name')) {
                obj['category_name'] = ApiClient.convertToType(data['category_name'], 'String');
            }
            if (data.hasOwnProperty('request_contact_data')) {
                obj['request_contact_data'] = ApiClient.convertToType(data['request_contact_data'], 'Boolean');
            }
            if (data.hasOwnProperty('financial_information')) {
                obj['financial_information'] = ApiClient.convertToType(data['financial_information'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
AllianceViewModel.prototype['id'] = undefined;

/**
 * @member {Boolean} active
 */
AllianceViewModel.prototype['active'] = undefined;

/**
 * @member {String} code
 */
AllianceViewModel.prototype['code'] = undefined;

/**
 * @member {String} name
 */
AllianceViewModel.prototype['name'] = undefined;

/**
 * @member {String} basic_information
 */
AllianceViewModel.prototype['basic_information'] = undefined;

/**
 * @member {String} detail_information
 */
AllianceViewModel.prototype['detail_information'] = undefined;

/**
 * @member {String} image
 */
AllianceViewModel.prototype['image'] = undefined;

/**
 * @member {String} logo
 */
AllianceViewModel.prototype['logo'] = undefined;

/**
 * @member {String} url
 */
AllianceViewModel.prototype['url'] = undefined;

/**
 * @member {String} status
 */
AllianceViewModel.prototype['status'] = undefined;

/**
 * @member {String} class
 */
AllianceViewModel.prototype['class'] = undefined;

/**
 * @member {String} type
 */
AllianceViewModel.prototype['type'] = undefined;

/**
 * @member {String} category
 */
AllianceViewModel.prototype['category'] = undefined;

/**
 * @member {String} category_name
 */
AllianceViewModel.prototype['category_name'] = undefined;

/**
 * @member {Boolean} request_contact_data
 */
AllianceViewModel.prototype['request_contact_data'] = undefined;

/**
 * @member {Array.<Object>} financial_information
 */
AllianceViewModel.prototype['financial_information'] = undefined;






export default AllianceViewModel;
