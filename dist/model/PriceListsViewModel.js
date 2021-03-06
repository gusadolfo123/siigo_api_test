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
 * The PriceListsViewModel model module.
 * @module model/PriceListsViewModel
 * @version v1
 */
var PriceListsViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PriceListsViewModel</code>.
   * Viewmodel Specifically made for the clients, based on the data returned by the queries.
   * @alias module:model/PriceListsViewModel
   */
  function PriceListsViewModel() {
    (0, _classCallCheck2["default"])(this, PriceListsViewModel);
    PriceListsViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(PriceListsViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PriceListsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceListsViewModel} obj Optional instance to populate.
     * @return {module:model/PriceListsViewModel} The populated <code>PriceListsViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PriceListsViewModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }
      }

      return obj;
    }
  }]);
  return PriceListsViewModel;
}();
/**
 * Represents the id of the price list, the value of this field must be an integer  number that represents the unique id of the price list. For example '2766'.
 * @member {Number} id
 */


PriceListsViewModel.prototype['id'] = undefined;
/**
 * Represents the name of the price list. This value can be an alphanumeric name  like 'Sale Price 1' or 'Product Prices'.
 * @member {String} name
 */

PriceListsViewModel.prototype['name'] = undefined;
/**
 * Represents if price list status is activated or disabled,   the value of this status will be true (for activated) or false (disabled).  By default, this field will be true.
 * @member {Boolean} active
 */

PriceListsViewModel.prototype['active'] = undefined;
/**
 * Represents the Price position on the list.  For example, '1'.
 * @member {Number} position
 */

PriceListsViewModel.prototype['position'] = undefined;
var _default = PriceListsViewModel;
exports["default"] = _default;