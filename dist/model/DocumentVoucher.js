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
 * The DocumentVoucher model module.
 * @module model/DocumentVoucher
 * @version v1
 */
var DocumentVoucher = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DocumentVoucher</code>.
   * @alias module:model/DocumentVoucher
   */
  function DocumentVoucher() {
    (0, _classCallCheck2["default"])(this, DocumentVoucher);
    DocumentVoucher.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(DocumentVoucher, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DocumentVoucher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentVoucher} obj Optional instance to populate.
     * @return {module:model/DocumentVoucher} The populated <code>DocumentVoucher</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DocumentVoucher();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
      }

      return obj;
    }
  }]);
  return DocumentVoucher;
}();
/**
 * Represents the id of the document, the value of this field must be an integer  number that represents the unique id of the document.
 * @member {Number} id
 */


DocumentVoucher.prototype['id'] = undefined;
var _default = DocumentVoucher;
exports["default"] = _default;