# SiigoAlliancesApi.ContactsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiContactsGet**](ContactsApi.md#apiContactsGet) | **GET** /api/contacts | Returns the contact details of the companies that have accepted an alliance




## apiContactsGet

> [ContactViewModel] apiContactsGet(opts)

Returns the contact details of the companies that have accepted an alliance

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.ContactsApi();

let opts = {
  'acceptanceDateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'acceptanceDateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'nit': "nit_example" // String | 
};

apiInstance.apiContactsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```
#### - calls with async await

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

async function main(){
  try {
    let apiInstance = new SiigoAlliancesApi.ContactsApi();
    let opts = {
    'acceptanceDateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | 
    'acceptanceDateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | 
    'nit': "nit_example" // String | 
    };

    const data = await apiInstance.apiContactsGet(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptanceDateStart** | **Date**|  | [optional] 
 **acceptanceDateEnd** | **Date**|  | [optional] 
 **nit** | **String**|  | [optional] 

### Return type

[**[ContactViewModel]**](ContactViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

