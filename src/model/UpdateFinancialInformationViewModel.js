/**
 * Siigo.Alliances API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: V1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateFinancialInformationViewModel model module.
 * @module model/UpdateFinancialInformationViewModel
 * @version V1
 */
class UpdateFinancialInformationViewModel {
    /**
     * Constructs a new <code>UpdateFinancialInformationViewModel</code>.
     * @alias module:model/UpdateFinancialInformationViewModel
     */
    constructor() { 
        
        UpdateFinancialInformationViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateFinancialInformationViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateFinancialInformationViewModel} obj Optional instance to populate.
     * @return {module:model/UpdateFinancialInformationViewModel} The populated <code>UpdateFinancialInformationViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateFinancialInformationViewModel();

            if (data.hasOwnProperty('run_id')) {
                obj['run_id'] = ApiClient.convertToType(data['run_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} run_id
 */
UpdateFinancialInformationViewModel.prototype['run_id'] = undefined;






export default UpdateFinancialInformationViewModel;

