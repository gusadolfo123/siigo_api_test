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
    define(['expect.js', process.cwd()+'/src/index', process.cwd()+'/test/app'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'), require(process.cwd()+'/test/app.js'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SiigoApi, root.app);
  }
}(this, function(expect, SiigoApi, app) {
  'use strict';

  var instance;
  var result;

  beforeEach(function() {
    SiigoApi = app._test.initialize(SiigoApi);
    instance = new SiigoApi.DocumentTypeApi();
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

  describe('DocumentTypeApi', function() {
    describe('getDocumentTypes', function() {
      it('should call getDocumentTypes successfully', async function() {
        try {
          result = await instance.getDocumentTypesWithHttpInfo({ type: 'FV' });
        } catch (error) {
          throw error;
        }
        expect(result.response.statusCode).to.be(200);
        expect(result.response.body[0].id).to.be(115057);
        expect(result.response.body[0].code).to.be('1');
        expect(result.response.body[0].name).to.be('Factura');
        expect(result.response.body[0].description).to.be('Factura de venta No');
        expect(result.response.body[0].type).to.be('FV');
        expect(result.response.body[0].active).to.be(true);
        expect(result.response.body[0].seller_by_item).to.be(false);
        expect(result.response.body[0].cost_center).to.be(true);
        expect(result.response.body[0].cost_center_mandatory).to.be(false);
        expect(result.response.body[0].cost_center_default).to.be(13212);
        expect(result.response.body[0].automatic_number).to.be(true);
        //expect(result.response.body[0].consecutive).to.be(-539214787);
        expect(result.response.body[0].discount_type).to.be('Percentage');
        expect(result.response.body[0].decimals).to.be(true);
        expect(result.response.body[0].advance_payment).to.be(true);
        expect(result.response.body[0].reteiva).to.be(true);
        expect(result.response.body[0].reteica).to.be(true);
        expect(result.response.body[0].self_withholding).to.be(true);
        expect(result.response.body[0].self_withholding_limit).to.be(1000);
        expect(result.response.body[0].electronic_type).to.be('NoElectronic');
      });
    }); 
  });

}));