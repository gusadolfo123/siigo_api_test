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


import ApiClient from "../ApiClient";
import DocumentTypeViewModel from '../model/DocumentTypeViewModel';

/**
* DocumentType service.
* @module api/DocumentTypeApi
* @version 0.1.0
*/
export default class DocumentTypeApi {

    /**
    * Constructs a new DocumentTypeApi. 
    * @alias module:api/DocumentTypeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Gets a list of Document Types.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DocumentTypeViewModel>} and HTTP response
     */
    getDocumentTypesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'type': opts['type']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = [DocumentTypeViewModel];
      return this.apiClient.callApi(
        '/v1/document-types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets a list of Document Types.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DocumentTypeViewModel>}
     */
    getDocumentTypes(opts) {
      return this.getDocumentTypesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
