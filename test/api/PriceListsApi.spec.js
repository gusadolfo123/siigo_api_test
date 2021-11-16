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
  if (typeof define === "function" && define.amd) {
    // AMD.
    define([
      "expect.js",
      process.cwd() + "/src/index",
      process.cwd() + "/test/app",
    ], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(
      require("expect.js"),
      require(process.cwd() + "/src/index"),
      require(process.cwd() + "/test/app.js")
    );
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SiigoApi, root.app);
  }
})(this, function (expect, SiigoApi, app) {
  "use strict";

  var instance;

  before(function () {
    SiigoApi = app._test.initialize(SiigoApi);
    instance = new SiigoApi.PriceListsApi();
  });

  var getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === "function") return object[getter]();
    else return object[property];
  };

  var setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === "function") object[setter](value);
    else object[property] = value;
  };
  let result = {};
  describe("getPriceList", function () {
    it("should call getPriceList successfully", async function () {
      //uncomment below and update the code to test getPriceList
      //instance.getPriceList(function(error) {
      //  if (error) throw error;
      //expect().to.be();
      //});
      try {
        result = await instance.getPriceListWithHttpInfo();
      } catch (error) {
        throw error;
      }
      expect(result.response.statusCode).to.be(200);
      expect(result.response.body[0].id).to.be(38081);
      expect(result.response.body[0].name).to.be('Precio de venta 1');
      expect(result.response.body[0].active).to.be(true);
      expect(result.response.body[0].position).to.be(1);
    });
  });
});
