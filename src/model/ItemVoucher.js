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
import AccountModel from './AccountModel';
import Due from './Due';
import TaxesModel from './TaxesModel';

/**
 * The ItemVoucher model module.
 * @module model/ItemVoucher
 * @version 0.1.0
 */
class ItemVoucher {
    /**
     * Constructs a new <code>ItemVoucher</code>.
     * @alias module:model/ItemVoucher
     */
    constructor() { 
        
        ItemVoucher.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemVoucher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemVoucher} obj Optional instance to populate.
     * @return {module:model/ItemVoucher} The populated <code>ItemVoucher</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemVoucher();

            if (data.hasOwnProperty('account')) {
                obj['account'] = AccountModel.constructFromObject(data['account']);
            }
            if (data.hasOwnProperty('due')) {
                obj['due'] = Due.constructFromObject(data['due']);
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = TaxesModel.constructFromObject(data['tax']);
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
 * @member {module:model/AccountModel} account
 */
ItemVoucher.prototype['account'] = undefined;

/**
 * @member {module:model/Due} due
 */
ItemVoucher.prototype['due'] = undefined;

/**
 * @member {module:model/TaxesModel} tax
 */
ItemVoucher.prototype['tax'] = undefined;

/**
 * @member {String} description
 */
ItemVoucher.prototype['description'] = undefined;

/**
 * @member {Number} value
 */
ItemVoucher.prototype['value'] = undefined;






export default ItemVoucher;
