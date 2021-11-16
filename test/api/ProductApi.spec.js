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
    // Browser globals (root is window)
    factory(root.expect, root.SiigoApi, root.app);
  }
}(this, function (expect, SiigoApi, app) {
  'use strict';

  var instance;

  before(function () {
    SiigoApi = app._test.initialize(SiigoApi);
    instance = new SiigoApi.ProductApi();
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

  let result = {};
  var document={};
  var id="";
  var code = Date.now().toString();
  let data = {
    "code": code,
    "name": "producto",
    "account_group": "26529",
    "type": "ConsumerGood",
    "stock_control": true,
    "active": true,
    "tax_classification": "Excluded",
    "tax_included": false,
    "tax_consumption_value": 0,
    "taxes": [
      {
        "id": "67540"
      }
    ],
    "prices": [
      {
        "currency_code": "COP",
        "price_list": [
          {
            "value": 785,
            "position": 1
          },
          {
            "value": 2500,
            "position": 2
          }
        ]
      }
    ],
    "unit": "94",
    "unit_label": "",
    "reference": "",
    "description": "",
    "additional_fields": {
      "barcode": "",
      "brand": "",
      "tariff": "1234567807",
      "model": "12"
    }
  }
  describe('ProductApi', function () {
    describe('createProduct', function () {
      it('should call createProduct successfully', async function () {
        let opts = {
          'productCommand': data
        };
        try {
          result = await instance.createProductWithHttpInfo(opts);
          id = result.response.body.id;
          document=result.response.body;
        } catch (error) {
          throw error;
        }
        expect(result.response.statusCode).to.be(201);
        expect(result.response.body.id).to.be(document.id)
        expect(result.response.body.code).to.be(document.code);
        expect(result.response.body.name).to.be(document.name);        
      });
    });
    describe('getProduct', function () {
      it('should call getProduct successfully', async function () {
        try {
          result = await instance.getProductWithHttpInfo(id);
        } catch (error) {
          throw error;
        }
        expect(result.response.statusCode).to.be(200);
        expect(result.response.body.id).to.be(document.id)
        expect(result.response.body.code).to.be(document.code);
        expect(result.response.body.name).to.be(document.name);
      });
    });
    describe('updateProduct', function () {
      it('should call updateProduct successfully', async function () {  
        let newCode = Date.now().toString(); 
        data.code = newCode;
        try {
          result = await instance.updateProductWithHttpInfo(id,  { 'productCommand': data });
        } catch (error) {
          throw error;
        }
        expect(result.response.body.code).to.be(newCode);
      });
    });
    describe('getProducts', function () {
      it('should call getProducts successfully', async function () {
        let opts = {
        }
        try {
          result = await instance.getProductsWithHttpInfo(opts);
        } catch (error) {
          throw error;
        }
        expect(result.response.statusCode).to.be(200);
        expect(result.response.body.results[0].id).to.be(id);
        expect(result.response.body.results[0].code).to.be(data.code);
        expect(result.response.body.results[0].name).to.be('producto');
        expect(result.response.body.results[0].type).to.be('ConsumerGood');
      });
    });
    describe('deleteProduct', function () {
      it('should call deleteProduct successfully', async function () {
        try {
          result = await instance.deleteProductWithHttpInfo(id);
        } catch (error) {
          throw error;
        }
        expect(result.response.statusCode).to.be(200);
        expect(result.response.body.deleted).to.be(true);
      });
    });
  });

}));
