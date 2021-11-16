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
import FinancialInformationModelStructure from './FinancialInformationModelStructure';

/**
 * The FinancialInformationModel model module.
 * @module model/FinancialInformationModel
 * @version V1
 */
class FinancialInformationModel {
    /**
     * Constructs a new <code>FinancialInformationModel</code>.
     * @alias module:model/FinancialInformationModel
     */
    constructor() { 
        
        FinancialInformationModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FinancialInformationModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FinancialInformationModel} obj Optional instance to populate.
     * @return {module:model/FinancialInformationModel} The populated <code>FinancialInformationModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FinancialInformationModel();

            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = FinancialInformationModelStructure.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} period
 */
FinancialInformationModel.prototype['period'] = undefined;

/**
 * @member {module:model/FinancialInformationModelStructure} data
 */
FinancialInformationModel.prototype['data'] = undefined;






export default FinancialInformationModel;
