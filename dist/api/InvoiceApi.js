"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateInvoiceCommand = _interopRequireDefault(require("../model/CreateInvoiceCommand"));

var _EInvoiceErrorsViewModel = _interopRequireDefault(require("../model/EInvoiceErrorsViewModel"));

var _InvoicePdfViewModel = _interopRequireDefault(require("../model/InvoicePdfViewModel"));

var _InvoiceViewModel = _interopRequireDefault(require("../model/InvoiceViewModel"));

var _InvoicesViewModel = _interopRequireDefault(require("../model/InvoicesViewModel"));

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
* Invoice service.
* @module api/InvoiceApi
* @version 0.1.0
*/
var InvoiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InvoiceApi. 
  * @alias module:api/InvoiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InvoiceApi(apiClient) {
    (0, _classCallCheck2["default"])(this, InvoiceApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Gets a list of Invoices with pagination.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.documentId 
   * @param {String} opts.customerIdentification 
   * @param {Number} opts.customerBranchOffice 
   * @param {String} opts.name 
   * @param {Date} opts.createdStart Returns results where the \"created\" field is greater or equal than the entered date
   * @param {Date} opts.createdEnd Returns results where the \"created\" field is less or equal than the entered date
   * @param {Date} opts.dateStart Returns results with date greater or equal than the \"date_start\" date
   * @param {Date} opts.dateEnd Returns results with date less or equal than the \"date_end\" date
   * @param {Date} opts.updatedStart Returns results where the \"last_updated\" field is greater or equal than the entered date
   * @param {Date} opts.updatedEnd Returns results where the \"last_updated\" field is less or equal than the entered date
   * @param {Number} opts.page Represents the current page
   * @param {Number} opts.pageSize Represents the number of results per page.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoicesViewModel} and HTTP response
   */


  (0, _createClass2["default"])(InvoiceApi, [{
    key: "v1InvoicesGetWithHttpInfo",
    value: function v1InvoicesGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'document_id': opts['documentId'],
        'customer_identification': opts['customerIdentification'],
        'customer_branch_office': opts['customerBranchOffice'],
        'name': opts['name'],
        'created_start': opts['createdStart'],
        'created_end': opts['createdEnd'],
        'date_start': opts['dateStart'],
        'date_end': opts['dateEnd'],
        'updated_start': opts['updatedStart'],
        'updated_end': opts['updatedEnd'],
        'page': opts['page'],
        'page_size': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _InvoicesViewModel["default"];
      return this.apiClient.callApi('/v1/invoices', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets a list of Invoices with pagination.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.documentId 
     * @param {String} opts.customerIdentification 
     * @param {Number} opts.customerBranchOffice 
     * @param {String} opts.name 
     * @param {Date} opts.createdStart Returns results where the \"created\" field is greater or equal than the entered date
     * @param {Date} opts.createdEnd Returns results where the \"created\" field is less or equal than the entered date
     * @param {Date} opts.dateStart Returns results with date greater or equal than the \"date_start\" date
     * @param {Date} opts.dateEnd Returns results with date less or equal than the \"date_end\" date
     * @param {Date} opts.updatedStart Returns results where the \"last_updated\" field is greater or equal than the entered date
     * @param {Date} opts.updatedEnd Returns results where the \"last_updated\" field is less or equal than the entered date
     * @param {Number} opts.page Represents the current page
     * @param {Number} opts.pageSize Represents the number of results per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoicesViewModel}
     */

  }, {
    key: "v1InvoicesGet",
    value: function v1InvoicesGet(opts) {
      return this.v1InvoicesGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets an Invoice by GUID.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoiceViewModel} and HTTP response
     */

  }, {
    key: "v1InvoicesIdGetWithHttpInfo",
    value: function v1InvoicesIdGetWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1InvoicesIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _InvoiceViewModel["default"];
      return this.apiClient.callApi('/v1/invoices/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets an Invoice by GUID.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoiceViewModel}
     */

  }, {
    key: "v1InvoicesIdGet",
    value: function v1InvoicesIdGet(id) {
      return this.v1InvoicesIdGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets an Invoice PDF by GUID.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoicePdfViewModel} and HTTP response
     */

  }, {
    key: "v1InvoicesIdPdfGetWithHttpInfo",
    value: function v1InvoicesIdPdfGetWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1InvoicesIdPdfGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _InvoicePdfViewModel["default"];
      return this.apiClient.callApi('/v1/invoices/{id}/pdf', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets an Invoice PDF by GUID.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoicePdfViewModel}
     */

  }, {
    key: "v1InvoicesIdPdfGet",
    value: function v1InvoicesIdPdfGet(id) {
      return this.v1InvoicesIdPdfGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get errors for rejected invoice by GUID.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EInvoiceErrorsViewModel} and HTTP response
     */

  }, {
    key: "v1InvoicesIdStampErrorsGetWithHttpInfo",
    value: function v1InvoicesIdStampErrorsGetWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1InvoicesIdStampErrorsGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _EInvoiceErrorsViewModel["default"];
      return this.apiClient.callApi('/v1/invoices/{id}/stamp/errors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get errors for rejected invoice by GUID.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EInvoiceErrorsViewModel}
     */

  }, {
    key: "v1InvoicesIdStampErrorsGet",
    value: function v1InvoicesIdStampErrorsGet(id) {
      return this.v1InvoicesIdStampErrorsGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Creates an Invoice.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateInvoiceCommand} opts.createInvoiceCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoiceViewModel} and HTTP response
     */

  }, {
    key: "v1InvoicesPostWithHttpInfo",
    value: function v1InvoicesPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['createInvoiceCommand'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _InvoiceViewModel["default"];
      return this.apiClient.callApi('/v1/invoices', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates an Invoice.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateInvoiceCommand} opts.createInvoiceCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoiceViewModel}
     */

  }, {
    key: "v1InvoicesPost",
    value: function v1InvoicesPost(opts) {
      return this.v1InvoicesPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return InvoiceApi;
}();

exports["default"] = InvoiceApi;