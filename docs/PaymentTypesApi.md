# SiigoApi.PaymentTypesApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PaymentTypesGet**](PaymentTypesApi.md#v1PaymentTypesGet) | **GET** /v1/payment-types | Get a list of Payment Types.




## v1PaymentTypesGet

> PaymentTypesViewModel v1PaymentTypesGet(opts)

Get a list of Payment Types.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.PaymentTypesApi();

let opts = {
  'documentType': "documentType_example" // String | Represents the document type of payment method
};

apiInstance.v1PaymentTypesGet(opts).then((data) => {
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
    let apiInstance = new SiigoApi.PaymentTypesApi();
    let opts = {
    'documentType': "documentType_example" // String | Represents the document type of payment method
    };

    const data = await apiInstance.v1PaymentTypesGet(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentType** | **String**| Represents the document type of payment method | [optional] 

### Return type

[**PaymentTypesViewModel**](PaymentTypesViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

