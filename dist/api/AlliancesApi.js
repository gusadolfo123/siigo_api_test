"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AcceptedViewModel = _interopRequireDefault(require("../model/AcceptedViewModel"));

var _AllianceAccessKeyViewModel = _interopRequireDefault(require("../model/AllianceAccessKeyViewModel"));

var _AllianceDetailsViewModel = _interopRequireDefault(require("../model/AllianceDetailsViewModel"));

var _AllianceViewModel = _interopRequireDefault(require("../model/AllianceViewModel"));

var _ApprovedViewModel = _interopRequireDefault(require("../model/ApprovedViewModel"));

var _CreateAllianceAccessKeyCommand = _interopRequireDefault(require("../model/CreateAllianceAccessKeyCommand"));

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
* Alliances service.
* @module api/AlliancesApi
* @version V1
*/
var AlliancesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AlliancesApi. 
  * @alias module:api/AlliancesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AlliancesApi(apiClient) {
    (0, _classCallCheck2["default"])(this, AlliancesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get the Alliances' state of acceptance for a company
   * @param {Object} opts Optional parameters
   * @param {String} opts.eSiigoCloudTenantCode 
   * @param {String} opts.NIT 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AcceptedViewModel} and HTTP response
   */


  (0, _createClass2["default"])(AlliancesApi, [{
    key: "apiAcceptedGetWithHttpInfo",
    value: function apiAcceptedGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'eSiigoCloudTenantCode': opts['eSiigoCloudTenantCode'],
        'NIT': opts['NIT']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _AcceptedViewModel["default"];
      return this.apiClient.callApi('/api/accepted', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the Alliances' state of acceptance for a company
     * @param {Object} opts Optional parameters
     * @param {String} opts.eSiigoCloudTenantCode 
     * @param {String} opts.NIT 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AcceptedViewModel}
     */

  }, {
    key: "apiAcceptedGet",
    value: function apiAcceptedGet(opts) {
      return this.apiAcceptedGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generates credentials for an alliance
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateAllianceAccessKeyCommand} opts.createAllianceAccessKeyCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AllianceAccessKeyViewModel} and HTTP response
     */

  }, {
    key: "apiAccessKeyPostWithHttpInfo",
    value: function apiAccessKeyPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['createAllianceAccessKeyCommand'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _AllianceAccessKeyViewModel["default"];
      return this.apiClient.callApi('/api/access-key', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generates credentials for an alliance
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateAllianceAccessKeyCommand} opts.createAllianceAccessKeyCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AllianceAccessKeyViewModel}
     */

  }, {
    key: "apiAccessKeyPost",
    value: function apiAccessKeyPost(opts) {
      return this.apiAccessKeyPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the Alliance with more information
     * @param {String} allianceId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AllianceDetailsViewModel} and HTTP response
     */

  }, {
    key: "apiAlliancesDetailsAllianceIdGetWithHttpInfo",
    value: function apiAlliancesDetailsAllianceIdGetWithHttpInfo(allianceId) {
      var postBody = null; // verify the required parameter 'allianceId' is set

      if (allianceId === undefined || allianceId === null) {
        throw new Error("Missing the required parameter 'allianceId' when calling apiAlliancesDetailsAllianceIdGet");
      }

      var pathParams = {
        'allianceId': allianceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _AllianceDetailsViewModel["default"];
      return this.apiClient.callApi('/api/alliances/details/{allianceId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the Alliance with more information
     * @param {String} allianceId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AllianceDetailsViewModel}
     */

  }, {
    key: "apiAlliancesDetailsAllianceIdGet",
    value: function apiAlliancesDetailsAllianceIdGet(allianceId) {
      return this.apiAlliancesDetailsAllianceIdGetWithHttpInfo(allianceId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the Alliances List
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AllianceViewModel} and HTTP response
     */

  }, {
    key: "apiAlliancesGetWithHttpInfo",
    value: function apiAlliancesGetWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _AllianceViewModel["default"];
      return this.apiClient.callApi('/api/alliances', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the Alliances List
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AllianceViewModel}
     */

  }, {
    key: "apiAlliancesGet",
    value: function apiAlliancesGet() {
      return this.apiAlliancesGetWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the Alliances' state of approved for a company that do not have PT
     * @param {Object} opts Optional parameters
     * @param {String} opts.cloudTenantId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApprovedViewModel} and HTTP response
     */

  }, {
    key: "apiApprovedGetWithHttpInfo",
    value: function apiApprovedGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'CloudTenantId': opts['cloudTenantId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ApprovedViewModel["default"];
      return this.apiClient.callApi('/api/approved', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the Alliances' state of approved for a company that do not have PT
     * @param {Object} opts Optional parameters
     * @param {String} opts.cloudTenantId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApprovedViewModel}
     */

  }, {
    key: "apiApprovedGet",
    value: function apiApprovedGet(opts) {
      return this.apiApprovedGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return AlliancesApi;
}();

exports["default"] = AlliancesApi;