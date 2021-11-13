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
import ProductDetail from './ProductDetail';

/**
 * The ProductDetailsViewModel model module.
 * @module model/ProductDetailsViewModel
 * @version v1
 */
class ProductDetailsViewModel {
    /**
     * Constructs a new <code>ProductDetailsViewModel</code>.
     * Viewmodel Specifically made for the clients, based on the data returned by the queries.
     * @alias module:model/ProductDetailsViewModel
     */
    constructor() { 
        
        ProductDetailsViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductDetailsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductDetailsViewModel} obj Optional instance to populate.
     * @return {module:model/ProductDetailsViewModel} The populated <code>ProductDetailsViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductDetailsViewModel();

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('product_name')) {
                obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
            }
            if (data.hasOwnProperty('product_description')) {
                obj['product_description'] = ApiClient.convertToType(data['product_description'], 'String');
            }
            if (data.hasOwnProperty('product_price')) {
                obj['product_price'] = ApiClient.convertToType(data['product_price'], 'Number');
            }
            if (data.hasOwnProperty('product_details')) {
                obj['product_details'] = ApiClient.convertToType(data['product_details'], [ProductDetail]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} product_id
 */
ProductDetailsViewModel.prototype['product_id'] = undefined;

/**
 * @member {String} product_name
 */
ProductDetailsViewModel.prototype['product_name'] = undefined;

/**
 * @member {String} product_description
 */
ProductDetailsViewModel.prototype['product_description'] = undefined;

/**
 * @member {Number} product_price
 */
ProductDetailsViewModel.prototype['product_price'] = undefined;

/**
 * @member {Array.<module:model/ProductDetail>} product_details
 */
ProductDetailsViewModel.prototype['product_details'] = undefined;






export default ProductDetailsViewModel;

