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
import PricesListProducts from './PricesListProducts';

/**
 * The PricesProducts model module.
 * @module model/PricesProducts
 * @version 0.1.0
 */
class PricesProducts {
    /**
     * Constructs a new <code>PricesProducts</code>.
     * @alias module:model/PricesProducts
     */
    constructor() { 
        
        PricesProducts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PricesProducts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PricesProducts} obj Optional instance to populate.
     * @return {module:model/PricesProducts} The populated <code>PricesProducts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PricesProducts();

            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('price_list')) {
                obj['price_list'] = ApiClient.convertToType(data['price_list'], [PricesListProducts]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} currency_code
 */
PricesProducts.prototype['currency_code'] = undefined;

/**
 * @member {Array.<module:model/PricesListProducts>} price_list
 */
PricesProducts.prototype['price_list'] = undefined;






export default PricesProducts;

