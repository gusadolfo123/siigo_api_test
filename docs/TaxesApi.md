# SiigoApi.TaxesApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1TaxesGet**](TaxesApi.md#v1TaxesGet) | **GET** /v1/taxes | Gets a list of Taxes.




## v1TaxesGet

> TaxViewModel v1TaxesGet()

Gets a list of Taxes.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.TaxesApi();


apiInstance.v1TaxesGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```
#### - calls with async await

```javascript
import * as SiigoApi from 'siigo_api';

async function main(){
  try {
    let apiInstance = new SiigoApi.TaxesApi();

    const data = await apiInstance.v1TaxesGet();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**TaxViewModel**](TaxViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

