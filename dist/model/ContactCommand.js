"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PhoneCommand = _interopRequireDefault(require("./PhoneCommand"));

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

/**
 * The ContactCommand model module.
 * @module model/ContactCommand
 * @version v1
 */
var ContactCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactCommand</code>.
   * @alias module:model/ContactCommand
   */
  function ContactCommand() {
    (0, _classCallCheck2["default"])(this, ContactCommand);
    ContactCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(ContactCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContactCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactCommand} obj Optional instance to populate.
     * @return {module:model/ContactCommand} The populated <code>ContactCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactCommand();

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _PhoneCommand["default"].constructFromObject(data['phone']);
        }
      }

      return obj;
    }
  }]);
  return ContactCommand;
}();
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
var _default = ContactCommand;
exports["default"] = _default;