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
    instance = new SiigoApi.PursacheOrderModel();
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

  describe('PursacheOrderModel', function() {
    it('should create an instance of PursacheOrderModel', function() {
      // uncomment below and update the code to test PursacheOrderModel
      var instance = new SiigoApi.PursacheOrderModel();
      expect(instance).to.be.a(SiigoApi.PursacheOrderModel);
    });

    it('should have the property prefix (base name: "prefix")', function() {
      // uncomment below and update the code to test the property prefix
      var instance = new SiigoApi.PursacheOrderModel();
      expect(instance.prefix).to.be(undefined);
    });

    it('should have the property number (base name: "number")', function() {
      // uncomment below and update the code to test the property number
      var instance = new SiigoApi.PursacheOrderModel();
      expect(instance.number).to.be(undefined);
    });

  });

}));
