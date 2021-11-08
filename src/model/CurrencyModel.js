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
 * The CurrencyModel model module.
 * @module model/CurrencyModel
 * @version 0.1.0
 */
class CurrencyModel {
    /**
     * Constructs a new <code>CurrencyModel</code>.
     * @alias module:model/CurrencyModel
     */
    constructor() { 
        
        CurrencyModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CurrencyModel} obj Optional instance to populate.
     * @return {module:model/CurrencyModel} The populated <code>CurrencyModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyModel();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('exchange_rate')) {
                obj['exchange_rate'] = ApiClient.convertToType(data['exchange_rate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the Id code of currency
 * @member {String} code
 */
CurrencyModel.prototype['code'] = undefined;

/**
 * Represents the exchange rate of currency
 * @member {Number} exchange_rate
 */
CurrencyModel.prototype['exchange_rate'] = undefined;






export default CurrencyModel;

