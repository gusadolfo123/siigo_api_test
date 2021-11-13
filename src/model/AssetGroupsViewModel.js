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
 * The AssetGroupsViewModel model module.
 * @module model/AssetGroupsViewModel
 * @version v1
 */
class AssetGroupsViewModel {
    /**
     * Constructs a new <code>AssetGroupsViewModel</code>.
     * @alias module:model/AssetGroupsViewModel
     */
    constructor() { 
        
        AssetGroupsViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AssetGroupsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetGroupsViewModel} obj Optional instance to populate.
     * @return {module:model/AssetGroupsViewModel} The populated <code>AssetGroupsViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetGroupsViewModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
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
AssetGroupsViewModel.prototype['id'] = undefined;

/**
 * @member {String} name
 */
AssetGroupsViewModel.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
AssetGroupsViewModel.prototype['active'] = undefined;






export default AssetGroupsViewModel;

