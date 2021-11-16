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
    instance = new SiigoApi.CustomFieldsCommand();
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

  describe('CustomFieldsCommand', function() {
    it('should create an instance of CustomFieldsCommand', function() {
      // uncomment below and update the code to test CustomFieldsCommand
      var instance = new SiigoApi.CustomFieldsCommand();
      expect(instance).to.be.a(SiigoApi.CustomFieldsCommand);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      var instance = new SiigoApi.CustomFieldsCommand();
      expect(instance.key).to.be(undefined);
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      var instance = new SiigoApi.CustomFieldsCommand();
      expect(instance.value).to.be(undefined);
    });

  });

}));
