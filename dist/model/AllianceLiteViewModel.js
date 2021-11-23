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
 * Siigo.Alliances API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: V1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

/**
 * The AllianceLiteViewModel model module.
 * @module model/AllianceLiteViewModel
 * @version V1
 */
var AllianceLiteViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AllianceLiteViewModel</code>.
   * @alias module:model/AllianceLiteViewModel
   */
  function AllianceLiteViewModel() {
    (0, _classCallCheck2["default"])(this, AllianceLiteViewModel);
    AllianceLiteViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(AllianceLiteViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AllianceLiteViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllianceLiteViewModel} obj Optional instance to populate.
     * @return {module:model/AllianceLiteViewModel} The populated <code>AllianceLiteViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AllianceLiteViewModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('order')) {
          obj['order'] = _ApiClient["default"].convertToType(data['order'], 'Number');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
      }

      return obj;
    }
  }]);
  return AllianceLiteViewModel;
}();
/**
 * @member {String} id
 */


AllianceLiteViewModel.prototype['id'] = undefined;
/**
 * @member {Boolean} active
 */

AllianceLiteViewModel.prototype['active'] = undefined;
/**
 * @member {Number} order
 */

AllianceLiteViewModel.prototype['order'] = undefined;
/**
 * @member {String} code
 */

AllianceLiteViewModel.prototype['code'] = undefined;
var _default = AllianceLiteViewModel;
exports["default"] = _default;