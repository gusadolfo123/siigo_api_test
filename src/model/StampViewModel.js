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
 * The StampViewModel model module.
 * @module model/StampViewModel
 * @version v1
 */
class StampViewModel {
    /**
     * Constructs a new <code>StampViewModel</code>.
     * @alias module:model/StampViewModel
     */
    constructor() { 
        
        StampViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StampViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StampViewModel} obj Optional instance to populate.
     * @return {module:model/StampViewModel} The populated <code>StampViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StampViewModel();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('cufe')) {
                obj['cufe'] = ApiClient.convertToType(data['cufe'], 'String');
            }
            if (data.hasOwnProperty('cude')) {
                obj['cude'] = ApiClient.convertToType(data['cude'], 'String');
            }
            if (data.hasOwnProperty('observations')) {
                obj['observations'] = ApiClient.convertToType(data['observations'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the status of an electronic document, this state could be:  \"Draft\": The document was saved correctly in SiigoCloud but this document.  was not sent to the tax collector entity.  \"Accepted\": The document was sent and accepted correctly.  \"Rejected\": The document was sent with errors therefore it was rejected.
 * @member {String} status
 */
StampViewModel.prototype['status'] = undefined;

/**
 * Represents Unique electronic billing code.
 * @member {String} cufe
 */
StampViewModel.prototype['cufe'] = undefined;

/**
 * Represents Unique Code of electronic document.
 * @member {String} cude
 */
StampViewModel.prototype['cude'] = undefined;

/**
 * Represents observations associated to an electronic document.
 * @member {String} observations
 */
StampViewModel.prototype['observations'] = undefined;

/**
 * Represents the document errors.
 * @member {String} errors
 */
StampViewModel.prototype['errors'] = undefined;






export default StampViewModel;

