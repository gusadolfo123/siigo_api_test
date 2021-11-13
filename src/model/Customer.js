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
 * The Customer model module.
 * @module model/Customer
 * @version v1
 */
class Customer {
    /**
     * Constructs a new <code>Customer</code>.
     * @alias module:model/Customer
     */
    constructor() { 
        
        Customer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Customer} obj Optional instance to populate.
     * @return {module:model/Customer} The populated <code>Customer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Customer();

            if (data.hasOwnProperty('identification')) {
                obj['identification'] = ApiClient.convertToType(data['identification'], 'String');
            }
            if (data.hasOwnProperty('branch_office')) {
                obj['branch_office'] = ApiClient.convertToType(data['branch_office'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} identification
 */
Customer.prototype['identification'] = undefined;

/**
 * @member {Number} branch_office
 */
Customer.prototype['branch_office'] = undefined;






export default Customer;

