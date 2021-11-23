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

var _JournalEntryDocumentModel = _interopRequireDefault(require("./JournalEntryDocumentModel"));

var _JournalEntryItemModel = _interopRequireDefault(require("./JournalEntryItemModel"));

var _Metadata = _interopRequireDefault(require("./Metadata"));

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
 * The JournalEntryViewModel model module.
 * @module model/JournalEntryViewModel
 * @version v1
 */
var JournalEntryViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JournalEntryViewModel</code>.
   * @alias module:model/JournalEntryViewModel
   */
  function JournalEntryViewModel() {
    (0, _classCallCheck2["default"])(this, JournalEntryViewModel);
    JournalEntryViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(JournalEntryViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JournalEntryViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalEntryViewModel} obj Optional instance to populate.
     * @return {module:model/JournalEntryViewModel} The populated <code>JournalEntryViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JournalEntryViewModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('document')) {
          obj['document'] = _JournalEntryDocumentModel["default"].constructFromObject(data['document']);
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

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _CurrencyModel["default"].constructFromObject(data['currency']);
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_JournalEntryItemModel["default"]]);
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
  return JournalEntryViewModel;
}();
/**
 * Represents the unique Id of credit note, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
 * @member {String} id
 */


JournalEntryViewModel.prototype['id'] = undefined;
/**
 * @member {module:model/JournalEntryDocumentModel} document
 */

JournalEntryViewModel.prototype['document'] = undefined;
/**
 * Represents the sequential number of the document,   this number is required depending of document type.
 * @member {Number} number
 */

JournalEntryViewModel.prototype['number'] = undefined;
/**
 * Contains information about document type,   document type Id, and the sequential number of the document.  For example, 'CC-10-20' indicates that its document type is a 'Journal',  its document type id is '10' and its sequential number is '20'.
 * @member {String} name
 */

JournalEntryViewModel.prototype['name'] = undefined;
/**
 * Represents the date of the document. This format must be 'yyyy-MM-dd'.  For example, '2021-10-10' to indicate the date 'October 10th, 2021'.
 * @member {String} date
 */

JournalEntryViewModel.prototype['date'] = undefined;
/**
 * @member {module:model/CurrencyModel} currency
 */

JournalEntryViewModel.prototype['currency'] = undefined;
/**
 * Contains a list of items associated with the journal.
 * @member {Array.<module:model/JournalEntryItemModel>} items
 */

JournalEntryViewModel.prototype['items'] = undefined;
/**
 * Represent additional comments in document.
 * @member {String} observations
 */

JournalEntryViewModel.prototype['observations'] = undefined;
/**
 * @member {module:model/Metadata} metadata
 */

JournalEntryViewModel.prototype['metadata'] = undefined;
var _default = JournalEntryViewModel;
exports["default"] = _default;