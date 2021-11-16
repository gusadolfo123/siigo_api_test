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

/**
 * The TermsModel model module.
 * @module model/TermsModel
 * @version V1
 */
class TermsModel {
    /**
     * Constructs a new <code>TermsModel</code>.
     * @alias module:model/TermsModel
     */
    constructor() { 
        
        TermsModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TermsModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TermsModel} obj Optional instance to populate.
     * @return {module:model/TermsModel} The populated <code>TermsModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TermsModel();

            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} text
 */
TermsModel.prototype['text'] = undefined;

/**
 * @member {String} version
 */
TermsModel.prototype['version'] = undefined;






export default TermsModel;

