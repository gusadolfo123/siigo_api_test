"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JournalEntryViewModel = _interopRequireDefault(require("./JournalEntryViewModel"));

var _LinksPagination = _interopRequireDefault(require("./LinksPagination"));

var _PageListModel = _interopRequireDefault(require("./PageListModel"));

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
 * The JournalsEntryViewModel model module.
 * @module model/JournalsEntryViewModel
 * @version 0.1.0
 */
var JournalsEntryViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JournalsEntryViewModel</code>.
   * Class that contain the jsons that the client will see after request  a journal entry list with pagination that came from msacentryqueries
   * @alias module:model/JournalsEntryViewModel
   */
  function JournalsEntryViewModel() {
    (0, _classCallCheck2["default"])(this, JournalsEntryViewModel);
    JournalsEntryViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(JournalsEntryViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JournalsEntryViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalsEntryViewModel} obj Optional instance to populate.
     * @return {module:model/JournalsEntryViewModel} The populated <code>JournalsEntryViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JournalsEntryViewModel();

        if (data.hasOwnProperty('pagination')) {
          obj['pagination'] = _PageListModel["default"].constructFromObject(data['pagination']);
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_JournalEntryViewModel["default"]]);
        }

        if (data.hasOwnProperty('__links')) {
          obj['__links'] = _LinksPagination["default"].constructFromObject(data['__links']);
        }
      }

      return obj;
    }
  }]);
  return JournalsEntryViewModel;
}();
/**
 * @member {module:model/PageListModel} pagination
 */


JournalsEntryViewModel.prototype['pagination'] = undefined;
/**
 * @member {Array.<module:model/JournalEntryViewModel>} results
 */

JournalsEntryViewModel.prototype['results'] = undefined;
/**
 * @member {module:model/LinksPagination} __links
 */

JournalsEntryViewModel.prototype['__links'] = undefined;
var _default = JournalsEntryViewModel;
exports["default"] = _default;