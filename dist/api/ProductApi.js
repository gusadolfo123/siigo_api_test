"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProductCommand = _interopRequireDefault(require("../model/ProductCommand"));

var _ProductDeleteViewModel = _interopRequireDefault(require("../model/ProductDeleteViewModel"));

var _ProductDetailsViewModel = _interopRequireDefault(require("../model/ProductDetailsViewModel"));

var _ProductsModel = _interopRequireDefault(require("../model/ProductsModel"));

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
* Product service.
* @module api/ProductApi
* @version 0.1.0
*/
var ProductApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProductApi. 
  * @alias module:api/ProductApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProductApi(apiClient) {
    (0, _classCallCheck2["default"])(this, ProductApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Gets a list of Products with pagination.
   * @param {Object} opts Optional parameters
   * @param {String} opts.code 
   * @param {String} opts.accountGroup 
   * @param {String} opts.type 
   * @param {String} opts.stockControl 
   * @param {String} opts.active 
   * @param {String} opts.ids 
   * @param {Date} opts.createdStart Returns results where the \"created\" field is greater or equal than the entered date
   * @param {Date} opts.createdEnd Returns results where the \"created\" field is less or equal than the entered date
   * @param {Date} opts.dateStart Returns results with date greater or equal than the \"date_start\" date
   * @param {Date} opts.dateEnd Returns results with date less or equal than the \"date_end\" date
   * @param {Date} opts.updatedStart Returns results where the \"last_updated\" field is greater or equal than the entered date
   * @param {Date} opts.updatedEnd Returns results where the \"last_updated\" field is less or equal than the entered date
   * @param {Number} opts.page Represents the current page
   * @param {Number} opts.pageSize Represents the number of results per page.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductDetailsViewModel} and HTTP response
   */


  (0, _createClass2["default"])(ProductApi, [{
    key: "v1ProductsGetWithHttpInfo",
    value: function v1ProductsGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'code': opts['code'],
        'account_group': opts['accountGroup'],
        'type': opts['type'],
        'stock_control': opts['stockControl'],
        'active': opts['active'],
        'ids': opts['ids'],
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
      var returnType = _ProductDetailsViewModel["default"];
      return this.apiClient.callApi('/v1/products', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets a list of Products with pagination.
     * @param {Object} opts Optional parameters
     * @param {String} opts.code 
     * @param {String} opts.accountGroup 
     * @param {String} opts.type 
     * @param {String} opts.stockControl 
     * @param {String} opts.active 
     * @param {String} opts.ids 
     * @param {Date} opts.createdStart Returns results where the \"created\" field is greater or equal than the entered date
     * @param {Date} opts.createdEnd Returns results where the \"created\" field is less or equal than the entered date
     * @param {Date} opts.dateStart Returns results with date greater or equal than the \"date_start\" date
     * @param {Date} opts.dateEnd Returns results with date less or equal than the \"date_end\" date
     * @param {Date} opts.updatedStart Returns results where the \"last_updated\" field is greater or equal than the entered date
     * @param {Date} opts.updatedEnd Returns results where the \"last_updated\" field is less or equal than the entered date
     * @param {Number} opts.page Represents the current page
     * @param {Number} opts.pageSize Represents the number of results per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductDetailsViewModel}
     */

  }, {
    key: "v1ProductsGet",
    value: function v1ProductsGet(opts) {
      return this.v1ProductsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Deletes a Product by GUID
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductDeleteViewModel} and HTTP response
     */

  }, {
    key: "v1ProductsIdDeleteWithHttpInfo",
    value: function v1ProductsIdDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1ProductsIdDelete");
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
      var returnType = _ProductDeleteViewModel["default"];
      return this.apiClient.callApi('/v1/products/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deletes a Product by GUID
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductDeleteViewModel}
     */

  }, {
    key: "v1ProductsIdDelete",
    value: function v1ProductsIdDelete(id) {
      return this.v1ProductsIdDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets a Product by GUID.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductsModel} and HTTP response
     */

  }, {
    key: "v1ProductsIdGetWithHttpInfo",
    value: function v1ProductsIdGetWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1ProductsIdGet");
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
      var returnType = _ProductsModel["default"];
      return this.apiClient.callApi('/v1/products/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets a Product by GUID.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductsModel}
     */

  }, {
    key: "v1ProductsIdGet",
    value: function v1ProductsIdGet(id) {
      return this.v1ProductsIdGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Updates a Product by GUID
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductCommand} opts.productCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductsModel} and HTTP response
     */

  }, {
    key: "v1ProductsIdPutWithHttpInfo",
    value: function v1ProductsIdPutWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['productCommand']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1ProductsIdPut");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProductsModel["default"];
      return this.apiClient.callApi('/v1/products/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Updates a Product by GUID
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductCommand} opts.productCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductsModel}
     */

  }, {
    key: "v1ProductsIdPut",
    value: function v1ProductsIdPut(id, opts) {
      return this.v1ProductsIdPutWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Creates a Product.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductCommand} opts.productCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductsModel} and HTTP response
     */

  }, {
    key: "v1ProductsPostWithHttpInfo",
    value: function v1ProductsPostWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['productCommand'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProductsModel["default"];
      return this.apiClient.callApi('/v1/products', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a Product.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductCommand} opts.productCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductsModel}
     */

  }, {
    key: "v1ProductsPost",
    value: function v1ProductsPost(opts) {
      return this.v1ProductsPostWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return ProductApi;
}();

exports["default"] = ProductApi;