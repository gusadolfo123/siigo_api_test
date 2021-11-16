# SiigoAlliancesApi.TermsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTermsAllianceIdGet**](TermsApi.md#apiTermsAllianceIdGet) | **GET** /api/terms/{allianceId} | Get last Terms by AllianceId
[**apiUnauthorizedTermsPost**](TermsApi.md#apiUnauthorizedTermsPost) | **POST** /api/unauthorized_terms | Unauthorized the terms




## apiTermsAllianceIdGet

> TermsViewModel apiTermsAllianceIdGet(allianceId)

Get last Terms by AllianceId

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.TermsApi();

let allianceId = "allianceId_example"; // String | 

apiInstance.apiTermsAllianceIdGet(allianceId).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.TermsApi();
    let allianceId = "allianceId_example"; // String | 

    const data = await apiInstance.apiTermsAllianceIdGet(allianceId);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allianceId** | **String**|  | 

### Return type

[**TermsViewModel**](TermsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiUnauthorizedTermsPost

> UnauthorizedTermsViewModel apiUnauthorizedTermsPost(opts)

Unauthorized the terms

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.TermsApi();

let opts = {
  'createUnauthorizedTermsCommand': new SiigoAlliancesApi.CreateUnauthorizedTermsCommand() // CreateUnauthorizedTermsCommand | 
};

apiInstance.apiUnauthorizedTermsPost(opts).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.TermsApi();
    let opts = {
    'createUnauthorizedTermsCommand': new SiigoAlliancesApi.CreateUnauthorizedTermsCommand() // CreateUnauthorizedTermsCommand | 
    };

    const data = await apiInstance.apiUnauthorizedTermsPost(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUnauthorizedTermsCommand** | [**CreateUnauthorizedTermsCommand**](CreateUnauthorizedTermsCommand.md)|  | [optional] 

### Return type

[**UnauthorizedTermsViewModel**](UnauthorizedTermsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

