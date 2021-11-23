"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CurrencyModel = _interopRequireDefault(require("./CurrencyModel"));

var _CustomerVoucher = _interopRequireDefault(require("./CustomerVoucher"));

var _DocumentVoucher = _interopRequireDefault(require("./DocumentVoucher"));

var _ItemVoucher = _interopRequireDefault(require("./ItemVoucher"));

var _Metadata = _interopRequireDefault(require("./Metadata"));

var _PaymentsModel = _interopRequireDefault(require("./PaymentsModel"));

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
 * The VoucherViewModel model module.
 * @module model/VoucherViewModel
 * @version v1
 */
var VoucherViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VoucherViewModel</code>.
   * @alias module:model/VoucherViewModel
   */
  function VoucherViewModel() {
    (0, _classCallCheck2["default"])(this, VoucherViewModel);
    VoucherViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(VoucherViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VoucherViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VoucherViewModel} obj Optional instance to populate.
     * @return {module:model/VoucherViewModel} The populated <code>VoucherViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VoucherViewModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('document')) {
          obj['document'] = _DocumentVoucher["default"].constructFromObject(data['document']);
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

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('cost_center')) {
          obj['cost_center'] = _ApiClient["default"].convertToType(data['cost_center'], 'Number');
        }

        if (data.hasOwnProperty('customer')) {
          obj['customer'] = _CustomerVoucher["default"].constructFromObject(data['customer']);
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _CurrencyModel["default"].constructFromObject(data['currency']);
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ItemVoucher["default"]]);
        }

        if (data.hasOwnProperty('payment')) {
          obj['payment'] = _PaymentsModel["default"].constructFromObject(data['payment']);
        }

        if (data.hasOwnProperty('observations')) {
          obj['observations'] = _ApiClient["default"].convertToType(data['observations'], 'String');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _Metadata["default"].constructFromObject(data['metadata']);
        }
      }

      return obj;
    }
  }]);
  return VoucherViewModel;
}();
/**
 * Represents the unique Id of voucher, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
 * @member {String} id
 */


VoucherViewModel.prototype['id'] = undefined;
/**
 * @member {module:model/DocumentVoucher} document
 */

VoucherViewModel.prototype['document'] = undefined;
/**
 * Represents the sequential number of the document,   this number is required depending of document type.
 * @member {Number} number
 */

VoucherViewModel.prototype['number'] = undefined;
/**
 * Contains information about document type,   document type Id and the sequential number of the document.  For example, 'RC-2-22' indicates that its document type is a 'voucher',  its document type id is '2' and its sequential number is '22'.
 * @member {String} name
 */

VoucherViewModel.prototype['name'] = undefined;
/**
 * Represents the date of the document. This format must be 'yyyy-MM-dd'.  For example, '2021-10-31' to indicate the date 'October 31st, 2021'.
 * @member {String} date
 */

VoucherViewModel.prototype['date'] = undefined;
/**
 * Represents the voucher type, this type will be 'DebtPayment', 'AdvancePayment' or 'Detailed'.
 * @member {String} type
 */

VoucherViewModel.prototype['type'] = undefined;
/**
 * Represents the id of the cost center, the value of this field must be an integer  number that represents the unique id of the cost center.
 * @member {Number} cost_center
 */

VoucherViewModel.prototype['cost_center'] = undefined;
/**
 * @member {module:model/CustomerVoucher} customer
 */

VoucherViewModel.prototype['customer'] = undefined;
/**
 * @member {module:model/CurrencyModel} currency
 */

VoucherViewModel.prototype['currency'] = undefined;
/**
 * Contains a list with items associated to voucher.
 * @member {Array.<module:model/ItemVoucher>} items
 */

VoucherViewModel.prototype['items'] = undefined;
/**
 * @member {module:model/PaymentsModel} payment
 */

VoucherViewModel.prototype['payment'] = undefined;
/**
 * Represents additional comments in document.
 * @member {String} observations
 */

VoucherViewModel.prototype['observations'] = undefined;
/**
 * @member {module:model/Metadata} metadata
 */

VoucherViewModel.prototype['metadata'] = undefined;
var _default = VoucherViewModel;
exports["default"] = _default;