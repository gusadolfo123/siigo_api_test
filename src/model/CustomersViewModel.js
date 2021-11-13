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
import CustomerViewModel from './CustomerViewModel';
import LinksPagination from './LinksPagination';
import PageListModel from './PageListModel';

/**
 * The CustomersViewModel model module.
 * @module model/CustomersViewModel
 * @version v1
 */
class CustomersViewModel {
    /**
     * Constructs a new <code>CustomersViewModel</code>.
     * Class that contain the jsons that the client will see after request  a user list with pagination that came from msThirdParty
     * @alias module:model/CustomersViewModel
     */
    constructor() { 
        
        CustomersViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomersViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomersViewModel} obj Optional instance to populate.
     * @return {module:model/CustomersViewModel} The populated <code>CustomersViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomersViewModel();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = PageListModel.constructFromObject(data['pagination']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [CustomerViewModel]);
            }
            if (data.hasOwnProperty('__links')) {
                obj['__links'] = LinksPagination.constructFromObject(data['__links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PageListModel} pagination
 */
CustomersViewModel.prototype['pagination'] = undefined;

/**
 * Contains the Results, this results will be a list of Customers
 * @member {Array.<module:model/CustomerViewModel>} results
 */
CustomersViewModel.prototype['results'] = undefined;

/**
 * @member {module:model/LinksPagination} __links
 */
CustomersViewModel.prototype['__links'] = undefined;






export default CustomersViewModel;

