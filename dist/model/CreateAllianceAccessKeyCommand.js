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

/**
 * The CreateAllianceAccessKeyCommand model module.
 * @module model/CreateAllianceAccessKeyCommand
 * @version V1
 */
var CreateAllianceAccessKeyCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAllianceAccessKeyCommand</code>.
   * @alias module:model/CreateAllianceAccessKeyCommand
   */
  function CreateAllianceAccessKeyCommand() {
    (0, _classCallCheck2["default"])(this, CreateAllianceAccessKeyCommand);
    CreateAllianceAccessKeyCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(CreateAllianceAccessKeyCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateAllianceAccessKeyCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAllianceAccessKeyCommand} obj Optional instance to populate.
     * @return {module:model/CreateAllianceAccessKeyCommand} The populated <code>CreateAllianceAccessKeyCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAllianceAccessKeyCommand();

        if (data.hasOwnProperty('alliance_code')) {
          obj['alliance_code'] = _ApiClient["default"].convertToType(data['alliance_code'], 'String');
        }
      }

      return obj;
    }
  }]);
  return CreateAllianceAccessKeyCommand;
}();
/**
 * @member {String} alliance_code
 */


CreateAllianceAccessKeyCommand.prototype['alliance_code'] = undefined;
var _default = CreateAllianceAccessKeyCommand;
exports["default"] = _default;