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
 * The DeliveryOrderModel model module.
 * @module model/DeliveryOrderModel
 * @version v1
 */
var DeliveryOrderModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeliveryOrderModel</code>.
   * @alias module:model/DeliveryOrderModel
   */
  function DeliveryOrderModel() {
    (0, _classCallCheck2["default"])(this, DeliveryOrderModel);
    DeliveryOrderModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(DeliveryOrderModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeliveryOrderModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeliveryOrderModel} obj Optional instance to populate.
     * @return {module:model/DeliveryOrderModel} The populated <code>DeliveryOrderModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeliveryOrderModel();

        if (data.hasOwnProperty('prefix')) {
          obj['prefix'] = _ApiClient["default"].convertToType(data['prefix'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }
      }

      return obj;
    }
  }]);
  return DeliveryOrderModel;
}();
/**
 * Represent the prefix of order type.  For example, 'OE' represents 'Delivery Order' and 'OC' means 'Purchase Order'.
 * @member {String} prefix
 */


DeliveryOrderModel.prototype['prefix'] = undefined;
/**
 * Represents the number of the delivery order.
 * @member {String} number
 */

DeliveryOrderModel.prototype['number'] = undefined;
/**
 * Represents the date of delivery.
 * @member {String} date
 */

DeliveryOrderModel.prototype['date'] = undefined;
var _default = DeliveryOrderModel;
exports["default"] = _default;