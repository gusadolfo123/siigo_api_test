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
 * The ContactViewModel model module.
 * @module model/ContactViewModel
 * @version V1
 */
class ContactViewModel {
    /**
     * Constructs a new <code>ContactViewModel</code>.
     * @alias module:model/ContactViewModel
     */
    constructor() { 
        
        ContactViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactViewModel} obj Optional instance to populate.
     * @return {module:model/ContactViewModel} The populated <code>ContactViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactViewModel();

            if (data.hasOwnProperty('nit')) {
                obj['nit'] = ApiClient.convertToType(data['nit'], 'String');
            }
            if (data.hasOwnProperty('company_name')) {
                obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
            }
            if (data.hasOwnProperty('contact_name')) {
                obj['contact_name'] = ApiClient.convertToType(data['contact_name'], 'String');
            }
            if (data.hasOwnProperty('contact_mobile_phone')) {
                obj['contact_mobile_phone'] = ApiClient.convertToType(data['contact_mobile_phone'], 'String');
            }
            if (data.hasOwnProperty('contact_email')) {
                obj['contact_email'] = ApiClient.convertToType(data['contact_email'], 'String');
            }
            if (data.hasOwnProperty('aceptance_date')) {
                obj['aceptance_date'] = ApiClient.convertToType(data['aceptance_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} nit
 */
ContactViewModel.prototype['nit'] = undefined;

/**
 * @member {String} company_name
 */
ContactViewModel.prototype['company_name'] = undefined;

/**
 * @member {String} contact_name
 */
ContactViewModel.prototype['contact_name'] = undefined;

/**
 * @member {String} contact_mobile_phone
 */
ContactViewModel.prototype['contact_mobile_phone'] = undefined;

/**
 * @member {String} contact_email
 */
ContactViewModel.prototype['contact_email'] = undefined;

/**
 * @member {Date} aceptance_date
 */
ContactViewModel.prototype['aceptance_date'] = undefined;






export default ContactViewModel;

