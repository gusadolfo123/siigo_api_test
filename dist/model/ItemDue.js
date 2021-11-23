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
 * The ItemDue model module.
 * @module model/ItemDue
 * @version v1
 */
var ItemDue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemDue</code>.
   * @alias module:model/ItemDue
   */
  function ItemDue() {
    (0, _classCallCheck2["default"])(this, ItemDue);
    ItemDue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(ItemDue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemDue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemDue} obj Optional instance to populate.
     * @return {module:model/ItemDue} The populated <code>ItemDue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemDue();

        if (data.hasOwnProperty('prefix')) {
          obj['prefix'] = _ApiClient["default"].convertToType(data['prefix'], 'String');
        }

        if (data.hasOwnProperty('consecutive')) {
          obj['consecutive'] = _ApiClient["default"].convertToType(data['consecutive'], 'Number');
        }

        if (data.hasOwnProperty('quote')) {
          obj['quote'] = _ApiClient["default"].convertToType(data['quote'], 'Number');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }
      }

      return obj;
    }
  }]);
  return ItemDue;
}();
/**
 * Represents the prefix of the invoice to which the credit or payment will be applied.
 * @member {String} prefix
 */


ItemDue.prototype['prefix'] = undefined;
/**
 * Represents the consecutive of the invoice to which the credit or payment will be applied.
 * @member {Number} consecutive
 */

ItemDue.prototype['consecutive'] = undefined;
/**
 * Represents the quota number of the credit or payment.
 * @member {Number} quote
 */

ItemDue.prototype['quote'] = undefined;
/**
 * Represents the payment date of the fee.
 * @member {String} date
 */

ItemDue.prototype['date'] = undefined;
var _default = ItemDue;
exports["default"] = _default;