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
 * The WarehouseViewModel model module.
 * @module model/WarehouseViewModel
 * @version v1
 */
class WarehouseViewModel {
    /**
     * Constructs a new <code>WarehouseViewModel</code>.
     * @alias module:model/WarehouseViewModel
     */
    constructor() { 
        
        WarehouseViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WarehouseViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WarehouseViewModel} obj Optional instance to populate.
     * @return {module:model/WarehouseViewModel} The populated <code>WarehouseViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WarehouseViewModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('has_movements')) {
                obj['has_movements'] = ApiClient.convertToType(data['has_movements'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Represents the id of the warehouse, the value of this field must be an integer  number that represents the unique id of the warehouse. For example '1270'.
 * @member {Number} id
 */
WarehouseViewModel.prototype['id'] = undefined;

/**
 * Represents the warehouse name. This value can be an alphanumeric name  like 'Main Warehouse' or 'Warehouse 1'.
 * @member {String} name
 */
WarehouseViewModel.prototype['name'] = undefined;

/**
 * Represents if warehouse status is activated or disabled,   the value of this status will be 'true' (for activated) or 'false' (disabled).  By default, this field will be 'true'.
 * @member {Boolean} active
 */
WarehouseViewModel.prototype['active'] = undefined;

/**
 * Indicates if the winery has associated movements. This field could be 'true' or 'false'   depending on the associated movements.
 * @member {Boolean} has_movements
 */
WarehouseViewModel.prototype['has_movements'] = undefined;






export default WarehouseViewModel;

