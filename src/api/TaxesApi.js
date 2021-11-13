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
import TaxViewModel from '../model/TaxViewModel';

/**
* Taxes service.
* @module api/TaxesApi
* @version v1
*/
export default class TaxesApi {

    /**
    * Constructs a new TaxesApi. 
    * @alias module:api/TaxesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Gets a list of Taxes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaxViewModel} and HTTP response
     */
    v1TaxesGetWithHttpInfo() {
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
      let returnType = TaxViewModel;
      return this.apiClient.callApi(
        '/v1/taxes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets a list of Taxes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaxViewModel}
     */
    v1TaxesGet() {
      return this.v1TaxesGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
