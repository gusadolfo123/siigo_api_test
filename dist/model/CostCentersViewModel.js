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
 * The CostCentersViewModel model module.
 * @module model/CostCentersViewModel
 * @version 0.1.0
 */
var CostCentersViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CostCentersViewModel</code>.
   * @alias module:model/CostCentersViewModel
   */
  function CostCentersViewModel() {
    (0, _classCallCheck2["default"])(this, CostCentersViewModel);
    CostCentersViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(CostCentersViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CostCentersViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CostCentersViewModel} obj Optional instance to populate.
     * @return {module:model/CostCentersViewModel} The populated <code>CostCentersViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CostCentersViewModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }
      }

      return obj;
    }
  }]);
  return CostCentersViewModel;
}();
/**
 * @member {Number} id
 */


CostCentersViewModel.prototype['id'] = undefined;
/**
 * @member {String} code
 */

CostCentersViewModel.prototype['code'] = undefined;
/**
 * @member {String} name
 */

CostCentersViewModel.prototype['name'] = undefined;
/**
 * @member {Boolean} active
 */

CostCentersViewModel.prototype['active'] = undefined;
var _default = CostCentersViewModel;
exports["default"] = _default;