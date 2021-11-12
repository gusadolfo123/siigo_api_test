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
 * The Due model module.
 * @module model/Due
 * @version 0.1.0
 */
class Due {
    /**
     * Constructs a new <code>Due</code>.
     * @alias module:model/Due
     */
    constructor() { 
        
        Due.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Due</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Due} obj Optional instance to populate.
     * @return {module:model/Due} The populated <code>Due</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Due();

            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('consecutive')) {
                obj['consecutive'] = ApiClient.convertToType(data['consecutive'], 'Number');
            }
            if (data.hasOwnProperty('quote')) {
                obj['quote'] = ApiClient.convertToType(data['quote'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} prefix
 */
Due.prototype['prefix'] = undefined;

/**
 * @member {Number} consecutive
 */
Due.prototype['consecutive'] = undefined;

/**
 * @member {Number} quote
 */
Due.prototype['quote'] = undefined;

/**
 * @member {String} date
 */
Due.prototype['date'] = undefined;






export default Due;
