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
import AcceptedViewModel from '../model/AcceptedViewModel';
import AllianceAccessKeyViewModel from '../model/AllianceAccessKeyViewModel';
import AllianceDetailsViewModel from '../model/AllianceDetailsViewModel';
import AllianceViewModel from '../model/AllianceViewModel';
import ApprovedViewModel from '../model/ApprovedViewModel';
import CreateAllianceAccessKeyCommand from '../model/CreateAllianceAccessKeyCommand';

/**
* Alliances service.
* @module api/AlliancesApi
* @version V1
*/
export default class AlliancesApi {

    /**
    * Constructs a new AlliancesApi. 
    * @alias module:api/AlliancesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get the Alliances' state of acceptance for a company
     * @param {Object} opts Optional parameters
     * @param {String} opts.eSiigoCloudTenantCode 
     * @param {String} opts.NIT 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AcceptedViewModel} and HTTP response
     */
    apiAcceptedGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'eSiigoCloudTenantCode': opts['eSiigoCloudTenantCode'],
        'NIT': opts['NIT']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = AcceptedViewModel;
      return this.apiClient.callApi(
        '/api/accepted', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Alliances' state of acceptance for a company
     * @param {Object} opts Optional parameters
     * @param {String} opts.eSiigoCloudTenantCode 
     * @param {String} opts.NIT 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AcceptedViewModel}
     */
    apiAcceptedGet(opts) {
      return this.apiAcceptedGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Generates credentials for an alliance
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateAllianceAccessKeyCommand} opts.createAllianceAccessKeyCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AllianceAccessKeyViewModel} and HTTP response
     */
    apiAccessKeyPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createAllianceAccessKeyCommand'];

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
      let returnType = AllianceAccessKeyViewModel;
      return this.apiClient.callApi(
        '/api/access-key', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Generates credentials for an alliance
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateAllianceAccessKeyCommand} opts.createAllianceAccessKeyCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AllianceAccessKeyViewModel}
     */
    apiAccessKeyPost(opts) {
      return this.apiAccessKeyPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the Alliance with more information
     * @param {String} allianceId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AllianceDetailsViewModel} and HTTP response
     */
    apiAlliancesDetailsAllianceIdGetWithHttpInfo(allianceId) {
      let postBody = null;
      // verify the required parameter 'allianceId' is set
      if (allianceId === undefined || allianceId === null) {
        throw new Error("Missing the required parameter 'allianceId' when calling apiAlliancesDetailsAllianceIdGet");
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
      let returnType = AllianceDetailsViewModel;
      return this.apiClient.callApi(
        '/api/alliances/details/{allianceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Alliance with more information
     * @param {String} allianceId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AllianceDetailsViewModel}
     */
    apiAlliancesDetailsAllianceIdGet(allianceId) {
      return this.apiAlliancesDetailsAllianceIdGetWithHttpInfo(allianceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the Alliances List
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AllianceViewModel} and HTTP response
     */
    apiAlliancesGetWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = AllianceViewModel;
      return this.apiClient.callApi(
        '/api/alliances', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Alliances List
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AllianceViewModel}
     */
    apiAlliancesGet() {
      return this.apiAlliancesGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the Alliances' state of approved for a company that do not have PT
     * @param {Object} opts Optional parameters
     * @param {String} opts.cloudTenantId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApprovedViewModel} and HTTP response
     */
    apiApprovedGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'CloudTenantId': opts['cloudTenantId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ApprovedViewModel;
      return this.apiClient.callApi(
        '/api/approved', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Alliances' state of approved for a company that do not have PT
     * @param {Object} opts Optional parameters
     * @param {String} opts.cloudTenantId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApprovedViewModel}
     */
    apiApprovedGet(opts) {
      return this.apiApprovedGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
