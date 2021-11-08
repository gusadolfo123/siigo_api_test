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
 * The IdTypeModel model module.
 * @module model/IdTypeModel
 * @version 0.1.0
 */
class IdTypeModel {
    /**
     * Constructs a new <code>IdTypeModel</code>.
     * @alias module:model/IdTypeModel
     */
    constructor() { 
        
        IdTypeModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdTypeModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdTypeModel} obj Optional instance to populate.
     * @return {module:model/IdTypeModel} The populated <code>IdTypeModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdTypeModel();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the code of type id
 * @member {String} code
 */
IdTypeModel.prototype['code'] = undefined;

/**
 * Represents the name of type id
 * @member {String} name
 */
IdTypeModel.prototype['name'] = undefined;






export default IdTypeModel;

