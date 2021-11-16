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
 * The JournalEntryTaxModel model module.
 * @module model/JournalEntryTaxModel
 * @version v1
 */
class JournalEntryTaxModel {
    /**
     * Constructs a new <code>JournalEntryTaxModel</code>.
     * @alias module:model/JournalEntryTaxModel
     */
    constructor() { 
        
        JournalEntryTaxModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JournalEntryTaxModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalEntryTaxModel} obj Optional instance to populate.
     * @return {module:model/JournalEntryTaxModel} The populated <code>JournalEntryTaxModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JournalEntryTaxModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('base_value')) {
                obj['base_value'] = ApiClient.convertToType(data['base_value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
JournalEntryTaxModel.prototype['id'] = undefined;

/**
 * @member {String} name
 */
JournalEntryTaxModel.prototype['name'] = undefined;

/**
 * @member {String} type
 */
JournalEntryTaxModel.prototype['type'] = undefined;

/**
 * @member {Number} percentage
 */
JournalEntryTaxModel.prototype['percentage'] = undefined;

/**
 * @member {Number} value
 */
JournalEntryTaxModel.prototype['value'] = undefined;

/**
 * @member {Number} base_value
 */
JournalEntryTaxModel.prototype['base_value'] = undefined;






export default JournalEntryTaxModel;
