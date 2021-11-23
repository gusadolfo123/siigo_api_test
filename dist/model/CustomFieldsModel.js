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
 * The CustomFieldsModel model module.
 * @module model/CustomFieldsModel
 * @version v1
 */
var CustomFieldsModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomFieldsModel</code>.
   * @alias module:model/CustomFieldsModel
   */
  function CustomFieldsModel() {
    (0, _classCallCheck2["default"])(this, CustomFieldsModel);
    CustomFieldsModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(CustomFieldsModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomFieldsModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldsModel} obj Optional instance to populate.
     * @return {module:model/CustomFieldsModel} The populated <code>CustomFieldsModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomFieldsModel();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);
  return CustomFieldsModel;
}();
/**
 * Represents the Id of additional field  For example, an additional field called 'YearsOld'.
 * @member {String} key
 */


CustomFieldsModel.prototype['key'] = undefined;
/**
 * Represents the value of additional field.  For example, this field can be '29'.
 * @member {String} value
 */

CustomFieldsModel.prototype['value'] = undefined;
var _default = CustomFieldsModel;
exports["default"] = _default;