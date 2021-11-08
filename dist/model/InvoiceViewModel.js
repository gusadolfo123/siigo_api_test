"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AdditionalFieldsModel = _interopRequireDefault(require("./AdditionalFieldsModel"));

var _CurrencyModel = _interopRequireDefault(require("./CurrencyModel"));

var _DocumentModel = _interopRequireDefault(require("./DocumentModel"));

var _InvoiceCustomerModel = _interopRequireDefault(require("./InvoiceCustomerModel"));

var _ItemsModel = _interopRequireDefault(require("./ItemsModel"));

var _Metadata = _interopRequireDefault(require("./Metadata"));

var _PaymentsModel = _interopRequireDefault(require("./PaymentsModel"));

var _RetentionsOutModel = _interopRequireDefault(require("./RetentionsOutModel"));

var _StampViewModel = _interopRequireDefault(require("./StampViewModel"));

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
 * The InvoiceViewModel model module.
 * @module model/InvoiceViewModel
 * @version 0.1.0
 */
var InvoiceViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvoiceViewModel</code>.
   * Viewmodel Specifically made for the clients, based on the data returned by the queries.
   * @alias module:model/InvoiceViewModel
   */
  function InvoiceViewModel() {
    (0, _classCallCheck2["default"])(this, InvoiceViewModel);
    InvoiceViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(InvoiceViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvoiceViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceViewModel} obj Optional instance to populate.
     * @return {module:model/InvoiceViewModel} The populated <code>InvoiceViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvoiceViewModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('document')) {
          obj['document'] = _DocumentModel["default"].constructFromObject(data['document']);
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('customer')) {
          obj['customer'] = _InvoiceCustomerModel["default"].constructFromObject(data['customer']);
        }

        if (data.hasOwnProperty('cost_center')) {
          obj['cost_center'] = _ApiClient["default"].convertToType(data['cost_center'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _CurrencyModel["default"].constructFromObject(data['currency']);
        }

        if (data.hasOwnProperty('seller')) {
          obj['seller'] = _ApiClient["default"].convertToType(data['seller'], 'Number');
        }

        if (data.hasOwnProperty('retentions')) {
          obj['retentions'] = _ApiClient["default"].convertToType(data['retentions'], [_RetentionsOutModel["default"]]);
        }

        if (data.hasOwnProperty('advance_payment')) {
          obj['advance_payment'] = _ApiClient["default"].convertToType(data['advance_payment'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _ApiClient["default"].convertToType(data['balance'], 'Number');
        }

        if (data.hasOwnProperty('observations')) {
          obj['observations'] = _ApiClient["default"].convertToType(data['observations'], 'String');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ItemsModel["default"]]);
        }

        if (data.hasOwnProperty('payments')) {
          obj['payments'] = _ApiClient["default"].convertToType(data['payments'], [_PaymentsModel["default"]]);
        }

        if (data.hasOwnProperty('additional_fields')) {
          obj['additional_fields'] = _AdditionalFieldsModel["default"].constructFromObject(data['additional_fields']);
        }

        if (data.hasOwnProperty('stamp')) {
          obj['stamp'] = _StampViewModel["default"].constructFromObject(data['stamp']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _Metadata["default"].constructFromObject(data['metadata']);
        }
      }

      return obj;
    }
  }]);
  return InvoiceViewModel;
}();
/**
 * @member {String} id
 */


InvoiceViewModel.prototype['id'] = undefined;
/**
 * @member {module:model/DocumentModel} document
 */

InvoiceViewModel.prototype['document'] = undefined;
/**
 * @member {Number} number
 */

InvoiceViewModel.prototype['number'] = undefined;
/**
 * @member {String} name
 */

InvoiceViewModel.prototype['name'] = undefined;
/**
 * @member {String} date
 */

InvoiceViewModel.prototype['date'] = undefined;
/**
 * @member {module:model/InvoiceCustomerModel} customer
 */

InvoiceViewModel.prototype['customer'] = undefined;
/**
 * @member {Number} cost_center
 */

InvoiceViewModel.prototype['cost_center'] = undefined;
/**
 * @member {module:model/CurrencyModel} currency
 */

InvoiceViewModel.prototype['currency'] = undefined;
/**
 * @member {Number} seller
 */

InvoiceViewModel.prototype['seller'] = undefined;
/**
 * @member {Array.<module:model/RetentionsOutModel>} retentions
 */

InvoiceViewModel.prototype['retentions'] = undefined;
/**
 * @member {Number} advance_payment
 */

InvoiceViewModel.prototype['advance_payment'] = undefined;
/**
 * @member {Number} total
 */

InvoiceViewModel.prototype['total'] = undefined;
/**
 * @member {Number} balance
 */

InvoiceViewModel.prototype['balance'] = undefined;
/**
 * @member {String} observations
 */

InvoiceViewModel.prototype['observations'] = undefined;
/**
 * @member {Array.<module:model/ItemsModel>} items
 */

InvoiceViewModel.prototype['items'] = undefined;
/**
 * @member {Array.<module:model/PaymentsModel>} payments
 */

InvoiceViewModel.prototype['payments'] = undefined;
/**
 * @member {module:model/AdditionalFieldsModel} additional_fields
 */

InvoiceViewModel.prototype['additional_fields'] = undefined;
/**
 * @member {module:model/StampViewModel} stamp
 */

InvoiceViewModel.prototype['stamp'] = undefined;
/**
 * @member {module:model/Metadata} metadata
 */

InvoiceViewModel.prototype['metadata'] = undefined;
var _default = InvoiceViewModel;
exports["default"] = _default;