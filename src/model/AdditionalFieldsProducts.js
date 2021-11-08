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
 * The AdditionalFieldsProducts model module.
 * @module model/AdditionalFieldsProducts
 * @version 0.1.0
 */
class AdditionalFieldsProducts {
    /**
     * Constructs a new <code>AdditionalFieldsProducts</code>.
     * @alias module:model/AdditionalFieldsProducts
     */
    constructor() { 
        
        AdditionalFieldsProducts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdditionalFieldsProducts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdditionalFieldsProducts} obj Optional instance to populate.
     * @return {module:model/AdditionalFieldsProducts} The populated <code>AdditionalFieldsProducts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdditionalFieldsProducts();

            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('tariff')) {
                obj['tariff'] = ApiClient.convertToType(data['tariff'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} barcode
 */
AdditionalFieldsProducts.prototype['barcode'] = undefined;

/**
 * @member {String} brand
 */
AdditionalFieldsProducts.prototype['brand'] = undefined;

/**
 * @member {String} tariff
 */
AdditionalFieldsProducts.prototype['tariff'] = undefined;

/**
 * @member {String} model
 */
AdditionalFieldsProducts.prototype['model'] = undefined;






export default AdditionalFieldsProducts;

