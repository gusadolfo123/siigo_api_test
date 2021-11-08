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
    describe('v1InvoicesGet', function() {
      it('should call v1InvoicesGet successfully', function(done) {
        //uncomment below and update the code to test v1InvoicesGet
        //instance.v1InvoicesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1InvoicesIdGet', function() {
      it('should call v1InvoicesIdGet successfully', function(done) {
        //uncomment below and update the code to test v1InvoicesIdGet
        //instance.v1InvoicesIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1InvoicesIdPdfGet', function() {
      it('should call v1InvoicesIdPdfGet successfully', function(done) {
        //uncomment below and update the code to test v1InvoicesIdPdfGet
        //instance.v1InvoicesIdPdfGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1InvoicesIdStampErrorsGet', function() {
      it('should call v1InvoicesIdStampErrorsGet successfully', function(done) {
        //uncomment below and update the code to test v1InvoicesIdStampErrorsGet
        //instance.v1InvoicesIdStampErrorsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1InvoicesPost', function() {
      it('should call v1InvoicesPost successfully', function(done) {
        //uncomment below and update the code to test v1InvoicesPost
        //instance.v1InvoicesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
