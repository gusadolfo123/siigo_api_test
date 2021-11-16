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
import CompanyUserViewModel from './CompanyUserViewModel';

/**
 * The CompanyViewModel model module.
 * @module model/CompanyViewModel
 * @version V1
 */
class CompanyViewModel {
    /**
     * Constructs a new <code>CompanyViewModel</code>.
     * @alias module:model/CompanyViewModel
     */
    constructor() { 
        
        CompanyViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyViewModel} obj Optional instance to populate.
     * @return {module:model/CompanyViewModel} The populated <code>CompanyViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyViewModel();

            if (data.hasOwnProperty('nit')) {
                obj['nit'] = ApiClient.convertToType(data['nit'], 'String');
            }
            if (data.hasOwnProperty('company_key')) {
                obj['company_key'] = ApiClient.convertToType(data['company_key'], 'String');
            }
            if (data.hasOwnProperty('user_name')) {
                obj['user_name'] = ApiClient.convertToType(data['user_name'], 'String');
            }
            if (data.hasOwnProperty('user_info')) {
                obj['user_info'] = CompanyUserViewModel.constructFromObject(data['user_info']);
            }
            if (data.hasOwnProperty('esiigo_cloudtenantcode')) {
                obj['esiigo_cloudtenantcode'] = ApiClient.convertToType(data['esiigo_cloudtenantcode'], 'String');
            }
            if (data.hasOwnProperty('alliance_order')) {
                obj['alliance_order'] = ApiClient.convertToType(data['alliance_order'], 'Number');
            }
            if (data.hasOwnProperty('alliance_code')) {
                obj['alliance_code'] = ApiClient.convertToType(data['alliance_code'], 'String');
            }
            if (data.hasOwnProperty('alliance_id')) {
                obj['alliance_id'] = ApiClient.convertToType(data['alliance_id'], 'String');
            }
            if (data.hasOwnProperty('serial')) {
                obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
            }
            if (data.hasOwnProperty('accepted_at')) {
                obj['accepted_at'] = ApiClient.convertToType(data['accepted_at'], 'Date');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('sending_start_date')) {
                obj['sending_start_date'] = ApiClient.convertToType(data['sending_start_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} nit
 */
CompanyViewModel.prototype['nit'] = undefined;

/**
 * @member {String} company_key
 */
CompanyViewModel.prototype['company_key'] = undefined;

/**
 * @member {String} user_name
 */
CompanyViewModel.prototype['user_name'] = undefined;

/**
 * @member {module:model/CompanyUserViewModel} user_info
 */
CompanyViewModel.prototype['user_info'] = undefined;

/**
 * @member {String} esiigo_cloudtenantcode
 */
CompanyViewModel.prototype['esiigo_cloudtenantcode'] = undefined;

/**
 * @member {Number} alliance_order
 */
CompanyViewModel.prototype['alliance_order'] = undefined;

/**
 * @member {String} alliance_code
 */
CompanyViewModel.prototype['alliance_code'] = undefined;

/**
 * @member {String} alliance_id
 */
CompanyViewModel.prototype['alliance_id'] = undefined;

/**
 * @member {String} serial
 */
CompanyViewModel.prototype['serial'] = undefined;

/**
 * @member {Date} accepted_at
 */
CompanyViewModel.prototype['accepted_at'] = undefined;

/**
 * @member {String} version
 */
CompanyViewModel.prototype['version'] = undefined;

/**
 * @member {Date} sending_start_date
 */
CompanyViewModel.prototype['sending_start_date'] = undefined;






export default CompanyViewModel;
