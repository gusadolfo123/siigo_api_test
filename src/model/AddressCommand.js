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
import CityCommand from './CityCommand';

/**
 * The AddressCommand model module.
 * @module model/AddressCommand
 * @version v1
 */
class AddressCommand {
    /**
     * Constructs a new <code>AddressCommand</code>.
     * @alias module:model/AddressCommand
     */
    constructor() { 
        
        AddressCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddressCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressCommand} obj Optional instance to populate.
     * @return {module:model/AddressCommand} The populated <code>AddressCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressCommand();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = CityCommand.constructFromObject(data['city']);
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the address of customer.
 * @member {String} address
 */
AddressCommand.prototype['address'] = undefined;

/**
 * @member {module:model/CityCommand} city
 */
AddressCommand.prototype['city'] = undefined;

/**
 * Represent the Postal Code of customer.  For example, the code '110911'
 * @member {String} postal_code
 */
AddressCommand.prototype['postal_code'] = undefined;






export default AddressCommand;

