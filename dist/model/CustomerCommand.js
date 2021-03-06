"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddressCommand = _interopRequireDefault(require("./AddressCommand"));

var _ContactCommand = _interopRequireDefault(require("./ContactCommand"));

var _CustomFieldsCommand = _interopRequireDefault(require("./CustomFieldsCommand"));

var _FiscalResponsibilitiesCommand = _interopRequireDefault(require("./FiscalResponsibilitiesCommand"));

var _PhoneCommand = _interopRequireDefault(require("./PhoneCommand"));

var _RelatedUsersCommand = _interopRequireDefault(require("./RelatedUsersCommand"));

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
 * The CustomerCommand model module.
 * @module model/CustomerCommand
 * @version v1
 */
var CustomerCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerCommand</code>.
   * @alias module:model/CustomerCommand
   */
  function CustomerCommand() {
    (0, _classCallCheck2["default"])(this, CustomerCommand);
    CustomerCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(CustomerCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerCommand} obj Optional instance to populate.
     * @return {module:model/CustomerCommand} The populated <code>CustomerCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerCommand();

        if (data.hasOwnProperty('person_type')) {
          obj['person_type'] = _ApiClient["default"].convertToType(data['person_type'], 'String');
        }

        if (data.hasOwnProperty('id_type')) {
          obj['id_type'] = _ApiClient["default"].convertToType(data['id_type'], 'String');
        }

        if (data.hasOwnProperty('identification')) {
          obj['identification'] = _ApiClient["default"].convertToType(data['identification'], 'String');
        }

        if (data.hasOwnProperty('check_digit')) {
          obj['check_digit'] = _ApiClient["default"].convertToType(data['check_digit'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], ['String']);
        }

        if (data.hasOwnProperty('commercial_name')) {
          obj['commercial_name'] = _ApiClient["default"].convertToType(data['commercial_name'], 'String');
        }

        if (data.hasOwnProperty('branch_office')) {
          obj['branch_office'] = _ApiClient["default"].convertToType(data['branch_office'], 'Number');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('vat_responsible')) {
          obj['vat_responsible'] = _ApiClient["default"].convertToType(data['vat_responsible'], 'Boolean');
        }

        if (data.hasOwnProperty('fiscal_responsibilities')) {
          obj['fiscal_responsibilities'] = _ApiClient["default"].convertToType(data['fiscal_responsibilities'], [_FiscalResponsibilitiesCommand["default"]]);
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _AddressCommand["default"].constructFromObject(data['address']);
        }

        if (data.hasOwnProperty('phones')) {
          obj['phones'] = _ApiClient["default"].convertToType(data['phones'], [_PhoneCommand["default"]]);
        }

        if (data.hasOwnProperty('contacts')) {
          obj['contacts'] = _ApiClient["default"].convertToType(data['contacts'], [_ContactCommand["default"]]);
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'String');
        }

        if (data.hasOwnProperty('related_users')) {
          obj['related_users'] = _RelatedUsersCommand["default"].constructFromObject(data['related_users']);
        }

        if (data.hasOwnProperty('custom_fields')) {
          obj['custom_fields'] = _ApiClient["default"].convertToType(data['custom_fields'], [_CustomFieldsCommand["default"]]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);
  return CustomerCommand;
}();
/**
 * Represents the person type, this type can be a 'Person' or 'Company'.
 * @member {String} person_type
 */


CustomerCommand.prototype['person_type'] = undefined;
/**
 * Represents the code of type id.
 * @member {String} id_type
 */

CustomerCommand.prototype['id_type'] = undefined;
/**
 * Represents the identification number of customer.  For example, the identifitication number '13832081'.
 * @member {String} identification
 */

CustomerCommand.prototype['identification'] = undefined;
/**
 * Represents the check digit, this digit will be calculated automatically.
 * @member {String} check_digit
 */

CustomerCommand.prototype['check_digit'] = undefined;
/**
 * Contains a list of strings with information about customer  this information will be commercial_name (or first name and last name, depnding of customer)  branch_office, active and vat_responsible
 * @member {Array.<String>} name
 */

CustomerCommand.prototype['name'] = undefined;
/**
 * Represents the commercial name of customer organization.  For example, 'Siigo'.
 * @member {String} commercial_name
 */

CustomerCommand.prototype['commercial_name'] = undefined;
/**
 * Represents the branch office of customer, this value by default will be 0.
 * @member {Number} branch_office
 */

CustomerCommand.prototype['branch_office'] = undefined;
/**
 * @member {Boolean} active
 */

CustomerCommand.prototype['active'] = undefined;
/**
 * @member {Boolean} vat_responsible
 */

CustomerCommand.prototype['vat_responsible'] = undefined;
/**
 * Represents a list of tax responsibilities of a person, by default will be 'R-99-PN'.
 * @member {Array.<module:model/FiscalResponsibilitiesCommand>} fiscal_responsibilities
 */

CustomerCommand.prototype['fiscal_responsibilities'] = undefined;
/**
 * @member {module:model/AddressCommand} address
 */

CustomerCommand.prototype['address'] = undefined;
/**
 * Represents the phones of the customer.
 * @member {Array.<module:model/PhoneCommand>} phones
 */

CustomerCommand.prototype['phones'] = undefined;
/**
 * Represents the associated contantacts of customer.
 * @member {Array.<module:model/ContactCommand>} contacts
 */

CustomerCommand.prototype['contacts'] = undefined;
/**
 * Represents additional comments or observations.
 * @member {String} comments
 */

CustomerCommand.prototype['comments'] = undefined;
/**
 * @member {module:model/RelatedUsersCommand} related_users
 */

CustomerCommand.prototype['related_users'] = undefined;
/**
 * Allows you to send the purchase order and delivery order fields.
 * @member {Array.<module:model/CustomFieldsCommand>} custom_fields
 */

CustomerCommand.prototype['custom_fields'] = undefined;
/**
 * @member {String} type
 */

CustomerCommand.prototype['type'] = undefined;
var _default = CustomerCommand;
exports["default"] = _default;