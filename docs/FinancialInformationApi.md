# SiigoAlliancesApi.FinancialInformationApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiFinancialInformationGet**](FinancialInformationApi.md#apiFinancialInformationGet) | **GET** /api/financial-information | 
[**apiUpdateFinancialInformationPut**](FinancialInformationApi.md#apiUpdateFinancialInformationPut) | **PUT** /api/update-financial-information | 




## apiFinancialInformationGet

> FinancialInformationViewModel apiFinancialInformationGet(opts)



### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.FinancialInformationApi();

let opts = {
  'periodStart': 56, // Number | 
  'periodEnd': 56 // Number | 
};

apiInstance.apiFinancialInformationGet(opts).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.FinancialInformationApi();
    let opts = {
    'periodStart': 56, // Number | 
    'periodEnd': 56 // Number | 
    };

    const data = await apiInstance.apiFinancialInformationGet(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **periodStart** | **Number**|  | [optional] 
 **periodEnd** | **Number**|  | [optional] 

### Return type

[**FinancialInformationViewModel**](FinancialInformationViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiUpdateFinancialInformationPut

> UpdateFinancialInformationViewModel apiUpdateFinancialInformationPut(opts)



### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.FinancialInformationApi();

let opts = {
  'financialinformationQuery': {key: null} // Object | 
};

apiInstance.apiUpdateFinancialInformationPut(opts).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.FinancialInformationApi();
    let opts = {
    'financialinformationQuery': {key: null} // Object | 
    };

    const data = await apiInstance.apiUpdateFinancialInformationPut(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financialinformationQuery** | [**Object**](.md)|  | [optional] 

### Return type

[**UpdateFinancialInformationViewModel**](UpdateFinancialInformationViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

