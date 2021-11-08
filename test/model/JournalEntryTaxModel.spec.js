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
    instance = new SiigoApi.JournalEntryTaxModel();
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

  describe('JournalEntryTaxModel', function() {
    it('should create an instance of JournalEntryTaxModel', function() {
      // uncomment below and update the code to test JournalEntryTaxModel
      //var instance = new SiigoApi.JournalEntryTaxModel();
      //expect(instance).to.be.a(SiigoApi.JournalEntryTaxModel);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SiigoApi.JournalEntryTaxModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SiigoApi.JournalEntryTaxModel();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new SiigoApi.JournalEntryTaxModel();
      //expect(instance).to.be();
    });

    it('should have the property percentage (base name: "percentage")', function() {
      // uncomment below and update the code to test the property percentage
      //var instance = new SiigoApi.JournalEntryTaxModel();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new SiigoApi.JournalEntryTaxModel();
      //expect(instance).to.be();
    });

    it('should have the property baseValue (base name: "base_value")', function() {
      // uncomment below and update the code to test the property baseValue
      //var instance = new SiigoApi.JournalEntryTaxModel();
      //expect(instance).to.be();
    });

  });

}));
