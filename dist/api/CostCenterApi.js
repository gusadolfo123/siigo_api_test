"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CostCentersViewModel = _interopRequireDefault(require("../model/CostCentersViewModel"));

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
* CostCenter service.
* @module api/CostCenterApi
* @version 0.1.0
*/
var CostCenterApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CostCenterApi. 
  * @alias module:api/CostCenterApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CostCenterApi(apiClient) {
    (0, _classCallCheck2["default"])(this, CostCenterApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Gets a list of Cost Centers.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CostCentersViewModel>} and HTTP response
   */


  (0, _createClass2["default"])(CostCenterApi, [{
    key: "getCostCentersWithHttpInfo",
    value: function getCostCentersWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = [_CostCentersViewModel["default"]];
      return this.apiClient.callApi('/v1/cost-centers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets a list of Cost Centers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CostCentersViewModel>}
     */

  }, {
    key: "getCostCenters",
    value: function getCostCenters() {
      return this.getCostCentersWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return CostCenterApi;
}();

exports["default"] = CostCenterApi;