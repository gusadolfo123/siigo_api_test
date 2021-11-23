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
 * The FiscalResponsibilitiesCommand model module.
 * @module model/FiscalResponsibilitiesCommand
 * @version v1
 */
class FiscalResponsibilitiesCommand {
    /**
     * Constructs a new <code>FiscalResponsibilitiesCommand</code>.
     * @alias module:model/FiscalResponsibilitiesCommand
     */
    constructor() { 
        
        FiscalResponsibilitiesCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FiscalResponsibilitiesCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FiscalResponsibilitiesCommand} obj Optional instance to populate.
     * @return {module:model/FiscalResponsibilitiesCommand} The populated <code>FiscalResponsibilitiesCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FiscalResponsibilitiesCommand();

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
 * Represents the fiscal Responsability code.  For example, the code 'R-99-PN'.
 * @member {String} code
 */
FiscalResponsibilitiesCommand.prototype['code'] = undefined;

/**
 * Represents the fiscal Responsability name.
 * @member {String} name
 */
FiscalResponsibilitiesCommand.prototype['name'] = undefined;






export default FiscalResponsibilitiesCommand;

