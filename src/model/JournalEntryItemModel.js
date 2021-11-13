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
import FixedAssetModel from './FixedAssetModel';
import JournalDue from './JournalDue';
import JournalEntryAccountModel from './JournalEntryAccountModel';
import JournalEntryCustomerModel from './JournalEntryCustomerModel';
import JournalEntryProductModel from './JournalEntryProductModel';
import JournalEntryTaxModel from './JournalEntryTaxModel';

/**
 * The JournalEntryItemModel model module.
 * @module model/JournalEntryItemModel
 * @version v1
 */
class JournalEntryItemModel {
    /**
     * Constructs a new <code>JournalEntryItemModel</code>.
     * @alias module:model/JournalEntryItemModel
     */
    constructor() { 
        
        JournalEntryItemModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JournalEntryItemModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalEntryItemModel} obj Optional instance to populate.
     * @return {module:model/JournalEntryItemModel} The populated <code>JournalEntryItemModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JournalEntryItemModel();

            if (data.hasOwnProperty('account')) {
                obj['account'] = JournalEntryAccountModel.constructFromObject(data['account']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = JournalEntryCustomerModel.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('cost_center')) {
                obj['cost_center'] = ApiClient.convertToType(data['cost_center'], 'Number');
            }
            if (data.hasOwnProperty('due')) {
                obj['due'] = JournalDue.constructFromObject(data['due']);
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = JournalEntryTaxModel.constructFromObject(data['tax']);
            }
            if (data.hasOwnProperty('fixed_asset')) {
                obj['fixed_asset'] = FixedAssetModel.constructFromObject(data['fixed_asset']);
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = JournalEntryProductModel.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/JournalEntryAccountModel} account
 */
JournalEntryItemModel.prototype['account'] = undefined;

/**
 * @member {module:model/JournalEntryCustomerModel} customer
 */
JournalEntryItemModel.prototype['customer'] = undefined;

/**
 * @member {Number} cost_center
 */
JournalEntryItemModel.prototype['cost_center'] = undefined;

/**
 * @member {module:model/JournalDue} due
 */
JournalEntryItemModel.prototype['due'] = undefined;

/**
 * @member {module:model/JournalEntryTaxModel} tax
 */
JournalEntryItemModel.prototype['tax'] = undefined;

/**
 * @member {module:model/FixedAssetModel} fixed_asset
 */
JournalEntryItemModel.prototype['fixed_asset'] = undefined;

/**
 * @member {module:model/JournalEntryProductModel} product
 */
JournalEntryItemModel.prototype['product'] = undefined;

/**
 * @member {String} description
 */
JournalEntryItemModel.prototype['description'] = undefined;

/**
 * @member {Number} value
 */
JournalEntryItemModel.prototype['value'] = undefined;






export default JournalEntryItemModel;

