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
 * The PursacheOrderModel model module.
 * @module model/PursacheOrderModel
 * @version 0.1.0
 */
class PursacheOrderModel {
    /**
     * Constructs a new <code>PursacheOrderModel</code>.
     * @alias module:model/PursacheOrderModel
     */
    constructor() { 
        
        PursacheOrderModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PursacheOrderModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PursacheOrderModel} obj Optional instance to populate.
     * @return {module:model/PursacheOrderModel} The populated <code>PursacheOrderModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PursacheOrderModel();

            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} prefix
 */
PursacheOrderModel.prototype['prefix'] = undefined;

/**
 * @member {String} number
 */
PursacheOrderModel.prototype['number'] = undefined;






export default PursacheOrderModel;

