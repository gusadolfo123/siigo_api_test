# SiigoApi.UsersApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1UsersGet**](UsersApi.md#v1UsersGet) | **GET** /v1/users | Gets a list of Users with pagination.




## v1UsersGet

> UsersViewModel v1UsersGet(opts)

Gets a list of Users with pagination.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.UsersApi();

let opts = {
  'page': 56, // Number | 
  'pageSize': 56 // Number | 
};

apiInstance.v1UsersGet(opts).then((data) => {
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
    let apiInstance = new SiigoApi.UsersApi();
    let opts = {
    'page': 56, // Number | 
    'pageSize': 56 // Number | 
    };

    const data = await apiInstance.v1UsersGet(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 

### Return type

[**UsersViewModel**](UsersViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

