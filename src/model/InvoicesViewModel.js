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
import InvoiceViewModel from './InvoiceViewModel';
import LinksPagination from './LinksPagination';
import PageListModel from './PageListModel';

/**
 * The InvoicesViewModel model module.
 * @module model/InvoicesViewModel
 * @version v1
 */
class InvoicesViewModel {
    /**
     * Constructs a new <code>InvoicesViewModel</code>.
     * Class that contain the jsons that the client will see after request  a invoice list with pagination that came from msacentryqueries
     * @alias module:model/InvoicesViewModel
     */
    constructor() { 
        
        InvoicesViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoicesViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoicesViewModel} obj Optional instance to populate.
     * @return {module:model/InvoicesViewModel} The populated <code>InvoicesViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoicesViewModel();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = PageListModel.constructFromObject(data['pagination']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [InvoiceViewModel]);
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
InvoicesViewModel.prototype['pagination'] = undefined;

/**
 * Contains the Results, this results will be a list of invoices
 * @member {Array.<module:model/InvoiceViewModel>} results
 */
InvoicesViewModel.prototype['results'] = undefined;

/**
 * @member {module:model/LinksPagination} __links
 */
InvoicesViewModel.prototype['__links'] = undefined;






export default InvoicesViewModel;

