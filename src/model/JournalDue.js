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
 * The JournalDue model module.
 * @module model/JournalDue
 * @version 0.1.0
 */
class JournalDue {
    /**
     * Constructs a new <code>JournalDue</code>.
     * @alias module:model/JournalDue
     */
    constructor() { 
        
        JournalDue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JournalDue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalDue} obj Optional instance to populate.
     * @return {module:model/JournalDue} The populated <code>JournalDue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JournalDue();

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
JournalDue.prototype['prefix'] = undefined;

/**
 * @member {Number} consecutive
 */
JournalDue.prototype['consecutive'] = undefined;

/**
 * @member {Number} quote
 */
JournalDue.prototype['quote'] = undefined;

/**
 * @member {String} date
 */
JournalDue.prototype['date'] = undefined;






export default JournalDue;

