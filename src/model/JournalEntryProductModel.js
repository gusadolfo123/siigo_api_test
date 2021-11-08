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
import JournalEntryWarehouseModel from './JournalEntryWarehouseModel';

/**
 * The JournalEntryProductModel model module.
 * @module model/JournalEntryProductModel
 * @version 0.1.0
 */
class JournalEntryProductModel {
    /**
     * Constructs a new <code>JournalEntryProductModel</code>.
     * @alias module:model/JournalEntryProductModel
     */
    constructor() { 
        
        JournalEntryProductModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JournalEntryProductModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalEntryProductModel} obj Optional instance to populate.
     * @return {module:model/JournalEntryProductModel} The populated <code>JournalEntryProductModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JournalEntryProductModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('warehouse')) {
                obj['warehouse'] = JournalEntryWarehouseModel.constructFromObject(data['warehouse']);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
JournalEntryProductModel.prototype['id'] = undefined;

/**
 * @member {String} code
 */
JournalEntryProductModel.prototype['code'] = undefined;

/**
 * @member {String} name
 */
JournalEntryProductModel.prototype['name'] = undefined;

/**
 * @member {module:model/JournalEntryWarehouseModel} warehouse
 */
JournalEntryProductModel.prototype['warehouse'] = undefined;

/**
 * @member {Number} quantity
 */
JournalEntryProductModel.prototype['quantity'] = undefined;






export default JournalEntryProductModel;

