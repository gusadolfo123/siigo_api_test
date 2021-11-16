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


import ApiClient from "../ApiClient";
import CreateHistoryCommand from '../model/CreateHistoryCommand';
import CreateRevokeCommand from '../model/CreateRevokeCommand';
import HistoryDetailViewModel from '../model/HistoryDetailViewModel';
import HistoryViewModel from '../model/HistoryViewModel';
import RevokeViewModel from '../model/RevokeViewModel';

/**
* History service.
* @module api/HistoryApi
* @version V1
*/
export default class HistoryApi {

    /**
    * Constructs a new HistoryApi. 
    * @alias module:api/HistoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get last History by AllianceId
     * @param {String} allianceId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HistoryDetailViewModel} and HTTP response
     */
    apiHistoryAllianceIdGetWithHttpInfo(allianceId) {
      let postBody = null;
      // verify the required parameter 'allianceId' is set
      if (allianceId === undefined || allianceId === null) {
        throw new Error("Missing the required parameter 'allianceId' when calling apiHistoryAllianceIdGet");
      }

      let pathParams = {
        'allianceId': allianceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = HistoryDetailViewModel;
      return this.apiClient.callApi(
        '/api/history/{allianceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get last History by AllianceId
     * @param {String} allianceId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HistoryDetailViewModel}
     */
    apiHistoryAllianceIdGet(allianceId) {
      return this.apiHistoryAllianceIdGetWithHttpInfo(allianceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Register a History record for the AllianceID
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateHistoryCommand} opts.createHistoryCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HistoryViewModel} and HTTP response
     */
    apiHistoryPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createHistoryCommand'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = HistoryViewModel;
      return this.apiClient.callApi(
        '/api/history', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Register a History record for the AllianceID
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateHistoryCommand} opts.createHistoryCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HistoryViewModel}
     */
    apiHistoryPost(opts) {
      return this.apiHistoryPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Register a Revoke record for the AllianceID
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateRevokeCommand} opts.createRevokeCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RevokeViewModel} and HTTP response
     */
    apiRevokePostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createRevokeCommand'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = RevokeViewModel;
      return this.apiClient.callApi(
        '/api/revoke', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Register a Revoke record for the AllianceID
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateRevokeCommand} opts.createRevokeCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RevokeViewModel}
     */
    apiRevokePost(opts) {
      return this.apiRevokePostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}