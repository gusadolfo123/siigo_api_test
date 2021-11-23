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
 * The AllianceViewModel model module.
 * @module model/AllianceViewModel
 * @version V1
 */
var AllianceViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AllianceViewModel</code>.
   * @alias module:model/AllianceViewModel
   */
  function AllianceViewModel() {
    (0, _classCallCheck2["default"])(this, AllianceViewModel);
    AllianceViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(AllianceViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AllianceViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllianceViewModel} obj Optional instance to populate.
     * @return {module:model/AllianceViewModel} The populated <code>AllianceViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AllianceViewModel();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('basic_information')) {
          obj['basic_information'] = _ApiClient["default"].convertToType(data['basic_information'], 'String');
        }

        if (data.hasOwnProperty('detail_information')) {
          obj['detail_information'] = _ApiClient["default"].convertToType(data['detail_information'], 'String');
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }

        if (data.hasOwnProperty('logo')) {
          obj['logo'] = _ApiClient["default"].convertToType(data['logo'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('class')) {
          obj['class'] = _ApiClient["default"].convertToType(data['class'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('category_name')) {
          obj['category_name'] = _ApiClient["default"].convertToType(data['category_name'], 'String');
        }

        if (data.hasOwnProperty('request_contact_data')) {
          obj['request_contact_data'] = _ApiClient["default"].convertToType(data['request_contact_data'], 'Boolean');
        }

        if (data.hasOwnProperty('financial_information')) {
          obj['financial_information'] = _ApiClient["default"].convertToType(data['financial_information'], [Object]);
        }
      }

      return obj;
    }
  }]);
  return AllianceViewModel;
}();
/**
 * @member {String} id
 */


AllianceViewModel.prototype['id'] = undefined;
/**
 * @member {Boolean} active
 */

AllianceViewModel.prototype['active'] = undefined;
/**
 * @member {String} code
 */

AllianceViewModel.prototype['code'] = undefined;
/**
 * @member {String} name
 */

AllianceViewModel.prototype['name'] = undefined;
/**
 * @member {String} basic_information
 */

AllianceViewModel.prototype['basic_information'] = undefined;
/**
 * @member {String} detail_information
 */

AllianceViewModel.prototype['detail_information'] = undefined;
/**
 * @member {String} image
 */

AllianceViewModel.prototype['image'] = undefined;
/**
 * @member {String} logo
 */

AllianceViewModel.prototype['logo'] = undefined;
/**
 * @member {String} url
 */

AllianceViewModel.prototype['url'] = undefined;
/**
 * @member {String} status
 */

AllianceViewModel.prototype['status'] = undefined;
/**
 * @member {String} class
 */

AllianceViewModel.prototype['class'] = undefined;
/**
 * @member {String} type
 */

AllianceViewModel.prototype['type'] = undefined;
/**
 * @member {String} category
 */

AllianceViewModel.prototype['category'] = undefined;
/**
 * @member {String} category_name
 */

AllianceViewModel.prototype['category_name'] = undefined;
/**
 * @member {Boolean} request_contact_data
 */

AllianceViewModel.prototype['request_contact_data'] = undefined;
/**
 * @member {Array.<Object>} financial_information
 */

AllianceViewModel.prototype['financial_information'] = undefined;
var _default = AllianceViewModel;
exports["default"] = _default;