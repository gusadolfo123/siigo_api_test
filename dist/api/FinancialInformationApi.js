"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FinancialInformationViewModel = _interopRequireDefault(require("../model/FinancialInformationViewModel"));

var _UpdateFinancialInformationViewModel = _interopRequireDefault(require("../model/UpdateFinancialInformationViewModel"));

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
* FinancialInformation service.
* @module api/FinancialInformationApi
* @version V1
*/
var FinancialInformationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FinancialInformationApi. 
  * @alias module:api/FinancialInformationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FinancialInformationApi(apiClient) {
    (0, _classCallCheck2["default"])(this, FinancialInformationApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {Object} opts Optional parameters
   * @param {Number} opts.periodStart 
   * @param {Number} opts.periodEnd 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FinancialInformationViewModel} and HTTP response
   */


  (0, _createClass2["default"])(FinancialInformationApi, [{
    key: "apiFinancialInformationGetWithHttpInfo",
    value: function apiFinancialInformationGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'period_start': opts['periodStart'],
        'period_end': opts['periodEnd']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _FinancialInformationViewModel["default"];
      return this.apiClient.callApi('/api/financial-information', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.periodStart 
     * @param {Number} opts.periodEnd 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FinancialInformationViewModel}
     */

  }, {
    key: "apiFinancialInformationGet",
    value: function apiFinancialInformationGet(opts) {
      return this.apiFinancialInformationGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.financialinformationQuery 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateFinancialInformationViewModel} and HTTP response
     */

  }, {
    key: "apiUpdateFinancialInformationPutWithHttpInfo",
    value: function apiUpdateFinancialInformationPutWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'financialinformationQuery': opts['financialinformationQuery']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _UpdateFinancialInformationViewModel["default"];
      return this.apiClient.callApi('/api/update-financial-information', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.financialinformationQuery 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateFinancialInformationViewModel}
     */

  }, {
    key: "apiUpdateFinancialInformationPut",
    value: function apiUpdateFinancialInformationPut(opts) {
      return this.apiUpdateFinancialInformationPutWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return FinancialInformationApi;
}();

exports["default"] = FinancialInformationApi;