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
import CreateSegmentationCommand from '../model/CreateSegmentationCommand';

/**
* Segmentation service.
* @module api/SegmentationApi
* @version V1
*/
export default class SegmentationApi {

    /**
    * Constructs a new SegmentationApi. 
    * @alias module:api/SegmentationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Register a list of clients allowed for an alliance
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateSegmentationCommand} opts.createSegmentationCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    apiSegmentPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createSegmentationCommand'];

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
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/api/segment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Register a list of clients allowed for an alliance
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateSegmentationCommand} opts.createSegmentationCommand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    apiSegmentPost(opts) {
      return this.apiSegmentPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
