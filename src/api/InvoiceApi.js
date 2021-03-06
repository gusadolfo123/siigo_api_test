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
import CreateInvoiceCommand from '../model/CreateInvoiceCommand';
import EInvoiceErrorsViewModel from '../model/EInvoiceErrorsViewModel';
import InvoicePdfViewModel from '../model/InvoicePdfViewModel';
import InvoiceViewModel from '../model/InvoiceViewModel';
import InvoicesViewModel from '../model/InvoicesViewModel';

/**
* Invoice service.
* @module api/InvoiceApi
* @version v1
*/
export default class InvoiceApi {

    /**
    * Constructs a new InvoiceApi. 
    * @alias module:api/InvoiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates an invoice.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateInvoiceCommand} opts.createInvoiceCommand Represents the request with the invoice information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoiceViewModel} and HTTP response
     */
    createInvoiceWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createInvoiceCommand'];

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
      let returnType = InvoiceViewModel;
      return this.apiClient.callApi(
        '/v1/invoices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates an invoice.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateInvoiceCommand} opts.createInvoiceCommand Represents the request with the invoice information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoiceViewModel}
     */
    createInvoice(opts) {
      return this.createInvoiceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the errors list for a rejected electronic invoice by GUID.
     * @param {String} id Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EInvoiceErrorsViewModel} and HTTP response
     */
    getElectronicInvoiceErrorsWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getElectronicInvoiceErrors");
      }

      let pathParams = {
        'id': id
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
      let returnType = EInvoiceErrorsViewModel;
      return this.apiClient.callApi(
        '/v1/invoices/{id}/stamp/errors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the errors list for a rejected electronic invoice by GUID.
     * @param {String} id Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EInvoiceErrorsViewModel}
     */
    getElectronicInvoiceErrors(id) {
      return this.getElectronicInvoiceErrorsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets the invoice by GUID.
     * @param {String} id Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoiceViewModel} and HTTP response
     */
    getInvoiceWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInvoice");
      }

      let pathParams = {
        'id': id
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
      let returnType = InvoiceViewModel;
      return this.apiClient.callApi(
        '/v1/invoices/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets the invoice by GUID.
     * @param {String} id Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoiceViewModel}
     */
    getInvoice(id) {
      return this.getInvoiceWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets the invoice PDF by GUID.
     * @param {String} id Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoicePdfViewModel} and HTTP response
     */
    getInvoicePDFWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInvoicePDF");
      }

      let pathParams = {
        'id': id
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
      let returnType = InvoicePdfViewModel;
      return this.apiClient.callApi(
        '/v1/invoices/{id}/pdf', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets the invoice PDF by GUID.
     * @param {String} id Represents the unique Id of invoice, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoicePdfViewModel}
     */
    getInvoicePDF(id) {
      return this.getInvoicePDFWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a paginated list of invoices.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.documentId Represents the document id of invoice.  For example, a document id can be like '24' or '10'.
     * @param {String} opts.customerIdentification Represents the customer id associated to invoice.  For example, the number '51874544' can be the id of the customer 'Jackson Smith'.
     * @param {Number} opts.customerBranchOffice Represents the branch office id associated to customer.  For example, the branch office '627'.
     * @param {String} opts.name Represents the name of invoice.   For example, the name of an invoice can be like 'FV-003-457'.
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
    getInvoicesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
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
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = InvoicesViewModel;
      return this.apiClient.callApi(
        '/v1/invoices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a paginated list of invoices.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.documentId Represents the document id of invoice.  For example, a document id can be like '24' or '10'.
     * @param {String} opts.customerIdentification Represents the customer id associated to invoice.  For example, the number '51874544' can be the id of the customer 'Jackson Smith'.
     * @param {Number} opts.customerBranchOffice Represents the branch office id associated to customer.  For example, the branch office '627'.
     * @param {String} opts.name Represents the name of invoice.   For example, the name of an invoice can be like 'FV-003-457'.
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
    getInvoices(opts) {
      return this.getInvoicesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
