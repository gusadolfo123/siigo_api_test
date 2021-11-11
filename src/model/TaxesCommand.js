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
 * The TaxesCommand model module.
 * @module model/TaxesCommand
 * @version 0.0.0
 */
class TaxesCommand {
    /**
     * Constructs a new <code>TaxesCommand</code>.
     * @alias module:model/TaxesCommand
     */
    constructor() { 
        
        TaxesCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxesCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaxesCommand} obj Optional instance to populate.
     * @return {module:model/TaxesCommand} The populated <code>TaxesCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxesCommand();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the id of the tax, the value of this field must be an integer  number that represents the unique id of the tax.
 * @member {Number} id
 */
TaxesCommand.prototype['id'] = undefined;






export default TaxesCommand;

