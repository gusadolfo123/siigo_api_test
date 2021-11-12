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
 * The TaxesModel model module.
 * @module model/TaxesModel
 * @version 0.1.0
 */
class TaxesModel {
    /**
     * Constructs a new <code>TaxesModel</code>.
     * @alias module:model/TaxesModel
     */
    constructor() { 
        
        TaxesModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxesModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaxesModel} obj Optional instance to populate.
     * @return {module:model/TaxesModel} The populated <code>TaxesModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxesModel();

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
TaxesModel.prototype['id'] = undefined;

/**
 * @member {String} name
 */
TaxesModel.prototype['name'] = undefined;

/**
 * @member {String} type
 */
TaxesModel.prototype['type'] = undefined;

/**
 * @member {Number} percentage
 */
TaxesModel.prototype['percentage'] = undefined;

/**
 * @member {Number} value
 */
TaxesModel.prototype['value'] = undefined;

/**
 * @member {Number} base_value
 */
TaxesModel.prototype['base_value'] = undefined;






export default TaxesModel;
