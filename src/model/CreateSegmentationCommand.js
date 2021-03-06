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
 * The CreateSegmentationCommand model module.
 * @module model/CreateSegmentationCommand
 * @version V1
 */
class CreateSegmentationCommand {
    /**
     * Constructs a new <code>CreateSegmentationCommand</code>.
     * A command has all the data needed to service a request
     * @alias module:model/CreateSegmentationCommand
     */
    constructor() { 
        
        CreateSegmentationCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateSegmentationCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSegmentationCommand} obj Optional instance to populate.
     * @return {module:model/CreateSegmentationCommand} The populated <code>CreateSegmentationCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSegmentationCommand();

            if (data.hasOwnProperty('alliance_code')) {
                obj['alliance_code'] = ApiClient.convertToType(data['alliance_code'], 'String');
            }
            if (data.hasOwnProperty('companies')) {
                obj['companies'] = ApiClient.convertToType(data['companies'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} alliance_code
 */
CreateSegmentationCommand.prototype['alliance_code'] = undefined;

/**
 * @member {Array.<String>} companies
 */
CreateSegmentationCommand.prototype['companies'] = undefined;






export default CreateSegmentationCommand;

