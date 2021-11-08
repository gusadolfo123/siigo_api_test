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
 * The PricesListProducts model module.
 * @module model/PricesListProducts
 * @version 0.1.0
 */
class PricesListProducts {
    /**
     * Constructs a new <code>PricesListProducts</code>.
     * @alias module:model/PricesListProducts
     */
    constructor() { 
        
        PricesListProducts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PricesListProducts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PricesListProducts} obj Optional instance to populate.
     * @return {module:model/PricesListProducts} The populated <code>PricesListProducts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PricesListProducts();

            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} position
 */
PricesListProducts.prototype['position'] = undefined;

/**
 * @member {Number} value
 */
PricesListProducts.prototype['value'] = undefined;






export default PricesListProducts;

