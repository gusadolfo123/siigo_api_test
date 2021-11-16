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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SiigoApi);
  }
}(this, function(expect, SiigoApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SiigoApi.InvoiceApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InvoiceApi', function() {
    describe('createInvoice', function() {
      it('should call createInvoice successfully', function(done) {
        //uncomment below and update the code to test createInvoice
        //instance.createInvoice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoice', function() {
      it('should call getInvoice successfully', function(done) {
        //uncomment below and update the code to test getInvoice
        //instance.getInvoice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoiceErrors', function() {
      it('should call getInvoiceErrors successfully', function(done) {
        //uncomment below and update the code to test getInvoiceErrors
        //instance.getInvoiceErrors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoicePDF', function() {
      it('should call getInvoicePDF successfully', function(done) {
        //uncomment below and update the code to test getInvoicePDF
        //instance.getInvoicePDF(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoices', function() {
      it('should call getInvoices successfully', function(done) {
        //uncomment below and update the code to test getInvoices
        //instance.getInvoices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));