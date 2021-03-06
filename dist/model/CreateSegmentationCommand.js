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
 * The CreateSegmentationCommand model module.
 * @module model/CreateSegmentationCommand
 * @version V1
 */
var CreateSegmentationCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateSegmentationCommand</code>.
   * A command has all the data needed to service a request
   * @alias module:model/CreateSegmentationCommand
   */
  function CreateSegmentationCommand() {
    (0, _classCallCheck2["default"])(this, CreateSegmentationCommand);
    CreateSegmentationCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(CreateSegmentationCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateSegmentationCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSegmentationCommand} obj Optional instance to populate.
     * @return {module:model/CreateSegmentationCommand} The populated <code>CreateSegmentationCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateSegmentationCommand();

        if (data.hasOwnProperty('alliance_code')) {
          obj['alliance_code'] = _ApiClient["default"].convertToType(data['alliance_code'], 'String');
        }

        if (data.hasOwnProperty('companies')) {
          obj['companies'] = _ApiClient["default"].convertToType(data['companies'], ['String']);
        }
      }

      return obj;
    }
  }]);
  return CreateSegmentationCommand;
}();
/**
 * @member {String} alliance_code
 */


CreateSegmentationCommand.prototype['alliance_code'] = undefined;
/**
 * @member {Array.<String>} companies
 */

CreateSegmentationCommand.prototype['companies'] = undefined;
var _default = CreateSegmentationCommand;
exports["default"] = _default;