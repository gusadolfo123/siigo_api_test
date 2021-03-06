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
 * The CreateRevokeCommand model module.
 * @module model/CreateRevokeCommand
 * @version V1
 */
var CreateRevokeCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateRevokeCommand</code>.
   * A command has all the data needed to service a request
   * @alias module:model/CreateRevokeCommand
   */
  function CreateRevokeCommand() {
    (0, _classCallCheck2["default"])(this, CreateRevokeCommand);
    CreateRevokeCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(CreateRevokeCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateRevokeCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRevokeCommand} obj Optional instance to populate.
     * @return {module:model/CreateRevokeCommand} The populated <code>CreateRevokeCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateRevokeCommand();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);
  return CreateRevokeCommand;
}();
/**
 * @member {String} id
 */


CreateRevokeCommand.prototype['id'] = undefined;
var _default = CreateRevokeCommand;
exports["default"] = _default;