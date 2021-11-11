/**
 * Siigo API
 * Siigo Api v1
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AccountGroup model module.
 * @module model/AccountGroup
 * @version 0.0.0
 */
class AccountGroup {
    /**
     * Constructs a new <code>AccountGroup</code>.
     * @alias module:model/AccountGroup
     */
    constructor() { 
        
        AccountGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountGroup} obj Optional instance to populate.
     * @return {module:model/AccountGroup} The populated <code>AccountGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountGroup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the id of inventory classification.
 * @member {Number} id
 */
AccountGroup.prototype['id'] = undefined;

/**
 * Represents the name of inventory classification.
 * @member {String} name
 */
AccountGroup.prototype['name'] = undefined;






export default AccountGroup;

