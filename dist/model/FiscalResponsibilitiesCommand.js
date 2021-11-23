"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

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
 * The FiscalResponsibilitiesCommand model module.
 * @module model/FiscalResponsibilitiesCommand
 * @version v1
 */
var FiscalResponsibilitiesCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FiscalResponsibilitiesCommand</code>.
   * @alias module:model/FiscalResponsibilitiesCommand
   */
  function FiscalResponsibilitiesCommand() {
    (0, _classCallCheck2["default"])(this, FiscalResponsibilitiesCommand);
    FiscalResponsibilitiesCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(FiscalResponsibilitiesCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FiscalResponsibilitiesCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FiscalResponsibilitiesCommand} obj Optional instance to populate.
     * @return {module:model/FiscalResponsibilitiesCommand} The populated <code>FiscalResponsibilitiesCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FiscalResponsibilitiesCommand();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);
  return FiscalResponsibilitiesCommand;
}();
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
var _default = FiscalResponsibilitiesCommand;
exports["default"] = _default;