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
 * The RelatedUsersCommand model module.
 * @module model/RelatedUsersCommand
 * @version v1
 */
var RelatedUsersCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelatedUsersCommand</code>.
   * @alias module:model/RelatedUsersCommand
   */
  function RelatedUsersCommand() {
    (0, _classCallCheck2["default"])(this, RelatedUsersCommand);
    RelatedUsersCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(RelatedUsersCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelatedUsersCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedUsersCommand} obj Optional instance to populate.
     * @return {module:model/RelatedUsersCommand} The populated <code>RelatedUsersCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelatedUsersCommand();

        if (data.hasOwnProperty('seller_id')) {
          obj['seller_id'] = _ApiClient["default"].convertToType(data['seller_id'], 'Number');
        }

        if (data.hasOwnProperty('collector_id')) {
          obj['collector_id'] = _ApiClient["default"].convertToType(data['collector_id'], 'Number');
        }
      }

      return obj;
    }
  }]);
  return RelatedUsersCommand;
}();
/**
 * Represents the seller Id.
 * @member {Number} seller_id
 */


RelatedUsersCommand.prototype['seller_id'] = undefined;
/**
 * Represents the debt collector Id.
 * @member {Number} collector_id
 */

RelatedUsersCommand.prototype['collector_id'] = undefined;
var _default = RelatedUsersCommand;
exports["default"] = _default;