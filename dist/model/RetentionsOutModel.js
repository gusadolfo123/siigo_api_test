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
 * The RetentionsOutModel model module.
 * @module model/RetentionsOutModel
 * @version 0.1.0
 */
var RetentionsOutModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RetentionsOutModel</code>.
   * @alias module:model/RetentionsOutModel
   */
  function RetentionsOutModel() {
    (0, _classCallCheck2["default"])(this, RetentionsOutModel);
    RetentionsOutModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(RetentionsOutModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RetentionsOutModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RetentionsOutModel} obj Optional instance to populate.
     * @return {module:model/RetentionsOutModel} The populated <code>RetentionsOutModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RetentionsOutModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('percentage')) {
          obj['percentage'] = _ApiClient["default"].convertToType(data['percentage'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }

      return obj;
    }
  }]);
  return RetentionsOutModel;
}();
/**
 * @member {Number} id
 */


RetentionsOutModel.prototype['id'] = undefined;
/**
 * @member {String} name
 */

RetentionsOutModel.prototype['name'] = undefined;
/**
 * @member {String} type
 */

RetentionsOutModel.prototype['type'] = undefined;
/**
 * @member {Number} percentage
 */

RetentionsOutModel.prototype['percentage'] = undefined;
/**
 * @member {Number} value
 */

RetentionsOutModel.prototype['value'] = undefined;
var _default = RetentionsOutModel;
exports["default"] = _default;