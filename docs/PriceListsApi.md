# SiigoApi.PriceListsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PriceListsGet**](PriceListsApi.md#v1PriceListsGet) | **GET** /v1/price-lists | Get a list of Price Lists.




## v1PriceListsGet

> [PriceListsViewModel] v1PriceListsGet()

Get a list of Price Lists.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.PriceListsApi();


apiInstance.v1PriceListsGet().then((data) => {
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
    let apiInstance = new SiigoApi.PriceListsApi();

    const data = await apiInstance.v1PriceListsGet();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**[PriceListsViewModel]**](PriceListsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

