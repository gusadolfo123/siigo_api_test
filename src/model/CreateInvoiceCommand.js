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
import AdditionalFieldsCommand from './AdditionalFieldsCommand';
import CurrencyCommand from './CurrencyCommand';
import CustomerCommand from './CustomerCommand';
import DocumentCommand from './DocumentCommand';
import ItemsCommand from './ItemsCommand';
import PaymentsCommand from './PaymentsCommand';
import RetentionsCommand from './RetentionsCommand';
import StampCommand from './StampCommand';

/**
 * The CreateInvoiceCommand model module.
 * @module model/CreateInvoiceCommand
 * @version 0.1.0
 */
class CreateInvoiceCommand {
    /**
     * Constructs a new <code>CreateInvoiceCommand</code>.
     * @alias module:model/CreateInvoiceCommand
     */
    constructor() { 
        
        CreateInvoiceCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateInvoiceCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateInvoiceCommand} obj Optional instance to populate.
     * @return {module:model/CreateInvoiceCommand} The populated <code>CreateInvoiceCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateInvoiceCommand();

            if (data.hasOwnProperty('document')) {
                obj['document'] = DocumentCommand.constructFromObject(data['document']);
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = CustomerCommand.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('cost_center')) {
                obj['cost_center'] = ApiClient.convertToType(data['cost_center'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = CurrencyCommand.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('seller')) {
                obj['seller'] = ApiClient.convertToType(data['seller'], 'Number');
            }
            if (data.hasOwnProperty('retentions')) {
                obj['retentions'] = ApiClient.convertToType(data['retentions'], [RetentionsCommand]);
            }
            if (data.hasOwnProperty('advance_payment')) {
                obj['advance_payment'] = ApiClient.convertToType(data['advance_payment'], 'Number');
            }
            if (data.hasOwnProperty('observations')) {
                obj['observations'] = ApiClient.convertToType(data['observations'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ItemsCommand]);
            }
            if (data.hasOwnProperty('payments')) {
                obj['payments'] = ApiClient.convertToType(data['payments'], [PaymentsCommand]);
            }
            if (data.hasOwnProperty('additional_fields')) {
                obj['additional_fields'] = AdditionalFieldsCommand.constructFromObject(data['additional_fields']);
            }
            if (data.hasOwnProperty('stamp')) {
                obj['stamp'] = StampCommand.constructFromObject(data['stamp']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DocumentCommand} document
 */
CreateInvoiceCommand.prototype['document'] = undefined;

/**
 * @member {Number} number
 */
CreateInvoiceCommand.prototype['number'] = undefined;

/**
 * @member {String} name
 */
CreateInvoiceCommand.prototype['name'] = undefined;

/**
 * @member {String} date
 */
CreateInvoiceCommand.prototype['date'] = undefined;

/**
 * @member {module:model/CustomerCommand} customer
 */
CreateInvoiceCommand.prototype['customer'] = undefined;

/**
 * @member {Number} cost_center
 */
CreateInvoiceCommand.prototype['cost_center'] = undefined;

/**
 * @member {module:model/CurrencyCommand} currency
 */
CreateInvoiceCommand.prototype['currency'] = undefined;

/**
 * @member {Number} seller
 */
CreateInvoiceCommand.prototype['seller'] = undefined;

/**
 * @member {Array.<module:model/RetentionsCommand>} retentions
 */
CreateInvoiceCommand.prototype['retentions'] = undefined;

/**
 * @member {Number} advance_payment
 */
CreateInvoiceCommand.prototype['advance_payment'] = undefined;

/**
 * @member {String} observations
 */
CreateInvoiceCommand.prototype['observations'] = undefined;

/**
 * @member {Array.<module:model/ItemsCommand>} items
 */
CreateInvoiceCommand.prototype['items'] = undefined;

/**
 * @member {Array.<module:model/PaymentsCommand>} payments
 */
CreateInvoiceCommand.prototype['payments'] = undefined;

/**
 * @member {module:model/AdditionalFieldsCommand} additional_fields
 */
CreateInvoiceCommand.prototype['additional_fields'] = undefined;

/**
 * @member {module:model/StampCommand} stamp
 */
CreateInvoiceCommand.prototype['stamp'] = undefined;






export default CreateInvoiceCommand;
