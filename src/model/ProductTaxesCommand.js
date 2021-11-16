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
 * The ProductTaxesCommand model module.
 * @module model/ProductTaxesCommand
 * @version v1
 */
class ProductTaxesCommand {
    /**
     * Constructs a new <code>ProductTaxesCommand</code>.
     * @alias module:model/ProductTaxesCommand
     */
    constructor() { 
        
        ProductTaxesCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductTaxesCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductTaxesCommand} obj Optional instance to populate.
     * @return {module:model/ProductTaxesCommand} The populated <code>ProductTaxesCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductTaxesCommand();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ProductTaxesCommand.prototype['id'] = undefined;






export default ProductTaxesCommand;
