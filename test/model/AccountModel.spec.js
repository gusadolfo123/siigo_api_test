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
    instance = new SiigoApi.AccountModel();
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

  describe('AccountModel', function() {
    it('should create an instance of AccountModel', function() {
      // uncomment below and update the code to test AccountModel
      var instance = new SiigoApi.AccountModel();
      expect(instance).to.be.a(SiigoApi.AccountModel);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      var instance = new SiigoApi.AccountModel();
      expect(instance.code).to.be(undefined);
    });

    it('should have the property movement (base name: "movement")', function() {
      // uncomment below and update the code to test the property movement
      var instance = new SiigoApi.AccountModel();
      expect(instance.movement).to.be(undefined);
    });

  });

}));
