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
 * @version v1
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
 * Represents the id of the retention, the value of this field must be an integer  number that represents the unique id of the retention.
 * @member {Number} id
 */


RetentionsOutModel.prototype['id'] = undefined;
/**
 * Represents the name of the retention. This value can be an alphanumeric  name like 'VAT 19%' or 'RET 0.55%'.
 * @member {String} name
 */

RetentionsOutModel.prototype['name'] = undefined;
/**
 * Represents the type of retention. For example its type can be IVA, 'Retefuente', 'ReteIVA',  'ReteICA', 'Impoconsumo', 'AdValorem', 'Autorretencion', or 'ReteIVA'.
 * @member {String} type
 */

RetentionsOutModel.prototype['type'] = undefined;
/**
 * Represents the percentage of the tax. For example, for Colombia in the year 2021   the percentage value of the VAT was 19%.
 * @member {Number} percentage
 */

RetentionsOutModel.prototype['percentage'] = undefined;
/**
 * Represents the value of retention associated with the document.   For example, 5 dollars.
 * @member {Number} value
 */

RetentionsOutModel.prototype['value'] = undefined;
var _default = RetentionsOutModel;
exports["default"] = _default;