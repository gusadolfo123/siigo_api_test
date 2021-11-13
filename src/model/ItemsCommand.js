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
import TaxesCommand from './TaxesCommand';

/**
 * The ItemsCommand model module.
 * @module model/ItemsCommand
 * @version v1
 */
class ItemsCommand {
    /**
     * Constructs a new <code>ItemsCommand</code>.
     * @alias module:model/ItemsCommand
     */
    constructor() { 
        
        ItemsCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemsCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemsCommand} obj Optional instance to populate.
     * @return {module:model/ItemsCommand} The populated <code>ItemsCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemsCommand();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('warehouse')) {
                obj['warehouse'] = ApiClient.convertToType(data['warehouse'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('taxed_price')) {
                obj['taxed_price'] = ApiClient.convertToType(data['taxed_price'], 'Number');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
            }
            if (data.hasOwnProperty('seller')) {
                obj['seller'] = ApiClient.convertToType(data['seller'], 'Number');
            }
            if (data.hasOwnProperty('vat_excluded')) {
                obj['vat_excluded'] = ApiClient.convertToType(data['vat_excluded'], 'Boolean');
            }
            if (data.hasOwnProperty('taxes')) {
                obj['taxes'] = ApiClient.convertToType(data['taxes'], [TaxesCommand]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
ItemsCommand.prototype['code'] = undefined;

/**
 * @member {String} description
 */
ItemsCommand.prototype['description'] = undefined;

/**
 * @member {Number} warehouse
 */
ItemsCommand.prototype['warehouse'] = undefined;

/**
 * @member {Number} quantity
 */
ItemsCommand.prototype['quantity'] = undefined;

/**
 * @member {Number} price
 */
ItemsCommand.prototype['price'] = undefined;

/**
 * @member {Number} taxed_price
 */
ItemsCommand.prototype['taxed_price'] = undefined;

/**
 * @member {Number} discount
 */
ItemsCommand.prototype['discount'] = undefined;

/**
 * @member {Number} seller
 */
ItemsCommand.prototype['seller'] = undefined;

/**
 * @member {Boolean} vat_excluded
 */
ItemsCommand.prototype['vat_excluded'] = undefined;

/**
 * @member {Array.<module:model/TaxesCommand>} taxes
 */
ItemsCommand.prototype['taxes'] = undefined;






export default ItemsCommand;

