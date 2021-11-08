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
 * The PageListModel model module.
 * @module model/PageListModel
 * @version 0.1.0
 */
var PageListModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PageListModel</code>.
   * @alias module:model/PageListModel
   */
  function PageListModel() {
    (0, _classCallCheck2["default"])(this, PageListModel);
    PageListModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(PageListModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PageListModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageListModel} obj Optional instance to populate.
     * @return {module:model/PageListModel} The populated <code>PageListModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PageListModel();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'Number');
        }

        if (data.hasOwnProperty('page_size')) {
          obj['page_size'] = _ApiClient["default"].convertToType(data['page_size'], 'Number');
        }

        if (data.hasOwnProperty('total_results')) {
          obj['total_results'] = _ApiClient["default"].convertToType(data['total_results'], 'Number');
        }
      }

      return obj;
    }
  }]);
  return PageListModel;
}();
/**
 * Represents the current page
 * @member {Number} page
 */


PageListModel.prototype['page'] = undefined;
/**
 * Represents the number of results per page.
 * @member {Number} page_size
 */

PageListModel.prototype['page_size'] = undefined;
/**
 * Respresents the total count of the results
 * @member {Number} total_results
 */

PageListModel.prototype['total_results'] = undefined;
var _default = PageListModel;
exports["default"] = _default;