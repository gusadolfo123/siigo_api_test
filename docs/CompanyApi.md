# SiigoAlliancesApi.CompanyApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiCompaniesGet**](CompanyApi.md#apiCompaniesGet) | **GET** /api/companies | Get the list of companies that have accepted agreements




## apiCompaniesGet

> CompanyViewModel apiCompaniesGet(opts)

Get the list of companies that have accepted agreements

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.CompanyApi();

let opts = {
  'allianceCode': "allianceCode_example" // String | 
};

apiInstance.apiCompaniesGet(opts).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.CompanyApi();
    let opts = {
    'allianceCode': "allianceCode_example" // String | 
    };

    const data = await apiInstance.apiCompaniesGet(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allianceCode** | **String**|  | [optional] 

### Return type

[**CompanyViewModel**](CompanyViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

