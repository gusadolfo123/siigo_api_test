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
 * The CreateRevokeCommand model module.
 * @module model/CreateRevokeCommand
 * @version V1
 */
class CreateRevokeCommand {
    /**
     * Constructs a new <code>CreateRevokeCommand</code>.
     * A command has all the data needed to service a request
     * @alias module:model/CreateRevokeCommand
     */
    constructor() { 
        
        CreateRevokeCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateRevokeCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRevokeCommand} obj Optional instance to populate.
     * @return {module:model/CreateRevokeCommand} The populated <code>CreateRevokeCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRevokeCommand();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
CreateRevokeCommand.prototype['id'] = undefined;






export default CreateRevokeCommand;

