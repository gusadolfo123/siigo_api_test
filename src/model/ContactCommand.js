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
import PhoneCommand from './PhoneCommand';

/**
 * The ContactCommand model module.
 * @module model/ContactCommand
 * @version 0.0.0
 */
class ContactCommand {
    /**
     * Constructs a new <code>ContactCommand</code>.
     * @alias module:model/ContactCommand
     */
    constructor() { 
        
        ContactCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactCommand} obj Optional instance to populate.
     * @return {module:model/ContactCommand} The populated <code>ContactCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactCommand();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = PhoneCommand.constructFromObject(data['phone']);
            }
        }
        return obj;
    }


}

/**
 * Represents the first name.  For example, the first name 'Marcos'.
 * @member {String} first_name
 */
ContactCommand.prototype['first_name'] = undefined;

/**
 * Represents the last name.  For example, the last name 'Castillo'.
 * @member {String} last_name
 */
ContactCommand.prototype['last_name'] = undefined;

/**
 * Represents the email.  For example, the email 'marcos.castillo@contacto.com'.
 * @member {String} email
 */
ContactCommand.prototype['email'] = undefined;

/**
 * @member {module:model/PhoneCommand} phone
 */
ContactCommand.prototype['phone'] = undefined;






export default ContactCommand;

