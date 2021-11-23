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

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd() + '/src/index', process.cwd() + '/test/app'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd() + '/src/index'), require(process.cwd() + '/test/app.js'));
  } else {
    
    factory(root.expect, root.SiigoApi, root.app);
  }
}(this, function (expect, SiigoApi, app) {
  'use strict';
  var instance;

  var result;

  before(function () {
    SiigoApi = app._test.initialize(SiigoApi);
    instance = new SiigoApi.CostCenterApi();
  });

  var getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CostCenterApi', function () {
    describe('getCostCenters', function () {
      it('should call getCostCenters successfully', async function () {
        //uncomment below and update the code to test getCostCenters
        try {
          result = await instance.getCostCentersWithHttpInfo();
        } catch (error) {
          console.error(error);
        }
        expect(result.response.statusCode).to.be(200);
        expect(result.data[0].id).to.be(13212);
        expect(result.data[0].code).to.be('1112-1');
        expect(result.data[0].name).to.be('polas center');
        expect(result.data[0].active).to.be(true);
      });
    });
  });

}));
