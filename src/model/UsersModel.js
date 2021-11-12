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
 * The UsersModel model module.
 * @module model/UsersModel
 * @version 0.1.0
 */
class UsersModel {
    /**
     * Constructs a new <code>UsersModel</code>.
     * @alias module:model/UsersModel
     */
    constructor() { 
        
        UsersModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsersModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsersModel} obj Optional instance to populate.
     * @return {module:model/UsersModel} The populated <code>UsersModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsersModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('identification')) {
                obj['identification'] = ApiClient.convertToType(data['identification'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
UsersModel.prototype['id'] = undefined;

/**
 * @member {String} username
 */
UsersModel.prototype['username'] = undefined;

/**
 * @member {String} first_name
 */
UsersModel.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
UsersModel.prototype['last_name'] = undefined;

/**
 * @member {String} email
 */
UsersModel.prototype['email'] = undefined;

/**
 * @member {Boolean} active
 */
UsersModel.prototype['active'] = undefined;

/**
 * @member {String} identification
 */
UsersModel.prototype['identification'] = undefined;






export default UsersModel;
