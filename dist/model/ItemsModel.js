"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DiscountModel = _interopRequireDefault(require("./DiscountModel"));

var _TaxesModel = _interopRequireDefault(require("./TaxesModel"));

var _WarehouseModel = _interopRequireDefault(require("./WarehouseModel"));

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
 * The ItemsModel model module.
 * @module model/ItemsModel
 * @version 0.1.0
 */
var ItemsModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemsModel</code>.
   * @alias module:model/ItemsModel
   */
  function ItemsModel() {
    (0, _classCallCheck2["default"])(this, ItemsModel);
    ItemsModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(ItemsModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemsModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemsModel} obj Optional instance to populate.
     * @return {module:model/ItemsModel} The populated <code>ItemsModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemsModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('seller')) {
          obj['seller'] = _ApiClient["default"].convertToType(data['seller'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('discount')) {
          obj['discount'] = _DiscountModel["default"].constructFromObject(data['discount']);
        }

        if (data.hasOwnProperty('taxes')) {
          obj['taxes'] = _ApiClient["default"].convertToType(data['taxes'], [_TaxesModel["default"]]);
        }

        if (data.hasOwnProperty('warehouse')) {
          obj['warehouse'] = _WarehouseModel["default"].constructFromObject(data['warehouse']);
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);
  return ItemsModel;
}();
/**
 * @member {String} id
 */


ItemsModel.prototype['id'] = undefined;
/**
 * @member {String} code
 */

ItemsModel.prototype['code'] = undefined;
/**
 * @member {Number} quantity
 */

ItemsModel.prototype['quantity'] = undefined;
/**
 * @member {Number} price
 */

ItemsModel.prototype['price'] = undefined;
/**
 * @member {Number} seller
 */

ItemsModel.prototype['seller'] = undefined;
/**
 * @member {String} description
 */

ItemsModel.prototype['description'] = undefined;
/**
 * @member {module:model/DiscountModel} discount
 */

ItemsModel.prototype['discount'] = undefined;
/**
 * @member {Array.<module:model/TaxesModel>} taxes
 */

ItemsModel.prototype['taxes'] = undefined;
/**
 * @member {module:model/WarehouseModel} warehouse
 */

ItemsModel.prototype['warehouse'] = undefined;
/**
 * @member {Number} total
 */

ItemsModel.prototype['total'] = undefined;
var _default = ItemsModel;
exports["default"] = _default;