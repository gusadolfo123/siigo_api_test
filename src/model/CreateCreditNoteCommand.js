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
import CurrencyCommand from './CurrencyCommand';
import DianReason from './DianReason';
import DocumentCommand from './DocumentCommand';
import ItemsCommand from './ItemsCommand';
import PaymentsCommand from './PaymentsCommand';
import RetentionsCommand from './RetentionsCommand';

/**
 * The CreateCreditNoteCommand model module.
 * @module model/CreateCreditNoteCommand
 * @version 0.0.0
 */
class CreateCreditNoteCommand {
    /**
     * Constructs a new <code>CreateCreditNoteCommand</code>.
     * @alias module:model/CreateCreditNoteCommand
     */
    constructor() { 
        
        CreateCreditNoteCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateCreditNoteCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCreditNoteCommand} obj Optional instance to populate.
     * @return {module:model/CreateCreditNoteCommand} The populated <code>CreateCreditNoteCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCreditNoteCommand();

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
            if (data.hasOwnProperty('invoice')) {
                obj['invoice'] = ApiClient.convertToType(data['invoice'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = DianReason.constructFromObject(data['reason']);
            }
            if (data.hasOwnProperty('seller')) {
                obj['seller'] = ApiClient.convertToType(data['seller'], 'Number');
            }
            if (data.hasOwnProperty('cost_center')) {
                obj['cost_center'] = ApiClient.convertToType(data['cost_center'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = CurrencyCommand.constructFromObject(data['currency']);
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
        }
        return obj;
    }


}

/**
 * @member {module:model/DocumentCommand} document
 */
CreateCreditNoteCommand.prototype['document'] = undefined;

/**
 * Represents the sequential number of the document,   this number is required depending of document type.
 * @member {Number} number
 */
CreateCreditNoteCommand.prototype['number'] = undefined;

/**
 * Represents information about document type,   document type Id, and the sequential number of the document.  For example 'NC-2-22' indicates that its document type is a 'Credit note',  its document type id is '2' and its sequential number is '22'.
 * @member {String} name
 */
CreateCreditNoteCommand.prototype['name'] = undefined;

/**
 * Represents the date of the document. This format must be 'yyyy-MM-dd'  for example, '2021-10-31' to indicate the date 'October 31st, 2021'.
 * @member {String} date
 */
CreateCreditNoteCommand.prototype['date'] = undefined;

/**
 * Represents the GUID of invoice to which the credit note was applied.
 * @member {String} invoice
 */
CreateCreditNoteCommand.prototype['invoice'] = undefined;

/**
 * @member {module:model/DianReason} reason
 */
CreateCreditNoteCommand.prototype['reason'] = undefined;

/**
 * Represents the Id of the seller associated with the invoice,   for example, the id '629' can represent a seller called 'Micke'.
 * @member {Number} seller
 */
CreateCreditNoteCommand.prototype['seller'] = undefined;

/**
 * Represents the id of the cost center, the value of this field must be an integer  number that represents the unique id of the cost center.
 * @member {Number} cost_center
 */
CreateCreditNoteCommand.prototype['cost_center'] = undefined;

/**
 * @member {module:model/CurrencyCommand} currency
 */
CreateCreditNoteCommand.prototype['currency'] = undefined;

/**
 * Contains a list of information about every Retention associated to the invoice.
 * @member {Array.<module:model/RetentionsCommand>} retentions
 */
CreateCreditNoteCommand.prototype['retentions'] = undefined;

/**
 * Represent the Advance Payment. For example, an advance payment of 33.3 dollars  for a product of 40 dollars.
 * @member {Number} advance_payment
 */
CreateCreditNoteCommand.prototype['advance_payment'] = undefined;

/**
 * Represent additional comments in document.
 * @member {String} observations
 */
CreateCreditNoteCommand.prototype['observations'] = undefined;

/**
 * Contains a list with items associated to invoice.
 * @member {Array.<module:model/ItemsCommand>} items
 */
CreateCreditNoteCommand.prototype['items'] = undefined;

/**
 * Contains a list with payments types associated to invoice.
 * @member {Array.<module:model/PaymentsCommand>} payments
 */
CreateCreditNoteCommand.prototype['payments'] = undefined;






export default CreateCreditNoteCommand;

