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
    instance = new SiigoApi.VoucherViewModel();
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

  describe('VoucherViewModel', function() {
    it('should create an instance of VoucherViewModel', function() {
      // uncomment below and update the code to test VoucherViewModel
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be.a(SiigoApi.VoucherViewModel);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

    it('should have the property document (base name: "document")', function() {
      // uncomment below and update the code to test the property document
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

    it('should have the property number (base name: "number")', function() {
      // uncomment below and update the code to test the property number
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

    it('should have the property costCenter (base name: "cost_center")', function() {
      // uncomment below and update the code to test the property costCenter
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

    it('should have the property payment (base name: "payment")', function() {
      // uncomment below and update the code to test the property payment
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

    it('should have the property observations (base name: "observations")', function() {
      // uncomment below and update the code to test the property observations
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new SiigoApi.VoucherViewModel();
      //expect(instance).to.be();
    });

  });

}));
