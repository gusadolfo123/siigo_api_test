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
 * The CreditNotePdfViewModel model module.
 * @module model/CreditNotePdfViewModel
 * @version v1
 */
class CreditNotePdfViewModel {
    /**
     * Constructs a new <code>CreditNotePdfViewModel</code>.
     * @alias module:model/CreditNotePdfViewModel
     */
    constructor() { 
        
        CreditNotePdfViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreditNotePdfViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditNotePdfViewModel} obj Optional instance to populate.
     * @return {module:model/CreditNotePdfViewModel} The populated <code>CreditNotePdfViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditNotePdfViewModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('cude')) {
                obj['cude'] = ApiClient.convertToType(data['cude'], 'String');
            }
            if (data.hasOwnProperty('base64')) {
                obj['base64'] = ApiClient.convertToType(data['base64'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.
 * @member {String} id
 */
CreditNotePdfViewModel.prototype['id'] = undefined;

/**
 * Represents the CUDE of credit note.
 * @member {String} cude
 */
CreditNotePdfViewModel.prototype['cude'] = undefined;

/**
 * Represents the data of the credit note on base 64 to convert it to PDF.
 * @member {String} base64
 */
CreditNotePdfViewModel.prototype['base64'] = undefined;






export default CreditNotePdfViewModel;

