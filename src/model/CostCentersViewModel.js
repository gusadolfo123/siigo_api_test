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
 * The CostCentersViewModel model module.
 * @module model/CostCentersViewModel
 * @version v1
 */
class CostCentersViewModel {
    /**
     * Constructs a new <code>CostCentersViewModel</code>.
     * @alias module:model/CostCentersViewModel
     */
    constructor() { 
        
        CostCentersViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CostCentersViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CostCentersViewModel} obj Optional instance to populate.
     * @return {module:model/CostCentersViewModel} The populated <code>CostCentersViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CostCentersViewModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
CostCentersViewModel.prototype['id'] = undefined;

/**
 * @member {String} code
 */
CostCentersViewModel.prototype['code'] = undefined;

/**
 * @member {String} name
 */
CostCentersViewModel.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
CostCentersViewModel.prototype['active'] = undefined;






export default CostCentersViewModel;

