# SiigoAlliancesApi.AlliancesApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAcceptedGet**](AlliancesApi.md#apiAcceptedGet) | **GET** /api/accepted | Get the Alliances&#39; state of acceptance for a company
[**apiAccessKeyPost**](AlliancesApi.md#apiAccessKeyPost) | **POST** /api/access-key | Generates credentials for an alliance
[**apiAlliancesDetailsAllianceIdGet**](AlliancesApi.md#apiAlliancesDetailsAllianceIdGet) | **GET** /api/alliances/details/{allianceId} | Get the Alliance with more information
[**apiAlliancesGet**](AlliancesApi.md#apiAlliancesGet) | **GET** /api/alliances | Get the Alliances List
[**apiApprovedGet**](AlliancesApi.md#apiApprovedGet) | **GET** /api/approved | Get the Alliances&#39; state of approved for a company that do not have PT




## apiAcceptedGet

> AcceptedViewModel apiAcceptedGet(opts)

Get the Alliances&#39; state of acceptance for a company

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.AlliancesApi();

let opts = {
  'eSiigoCloudTenantCode': "eSiigoCloudTenantCode_example", // String | 
  'NIT': "NIT_example" // String | 
};

apiInstance.apiAcceptedGet(opts).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.AlliancesApi();
    let opts = {
    'eSiigoCloudTenantCode': "eSiigoCloudTenantCode_example", // String | 
    'NIT': "NIT_example" // String | 
    };

    const data = await apiInstance.apiAcceptedGet(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eSiigoCloudTenantCode** | **String**|  | [optional] 
 **NIT** | **String**|  | [optional] 

### Return type

[**AcceptedViewModel**](AcceptedViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiAccessKeyPost

> AllianceAccessKeyViewModel apiAccessKeyPost(opts)

Generates credentials for an alliance

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.AlliancesApi();

let opts = {
  'createAllianceAccessKeyCommand': new SiigoAlliancesApi.CreateAllianceAccessKeyCommand() // CreateAllianceAccessKeyCommand | 
};

apiInstance.apiAccessKeyPost(opts).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.AlliancesApi();
    let opts = {
    'createAllianceAccessKeyCommand': new SiigoAlliancesApi.CreateAllianceAccessKeyCommand() // CreateAllianceAccessKeyCommand | 
    };

    const data = await apiInstance.apiAccessKeyPost(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAllianceAccessKeyCommand** | [**CreateAllianceAccessKeyCommand**](CreateAllianceAccessKeyCommand.md)|  | [optional] 

### Return type

[**AllianceAccessKeyViewModel**](AllianceAccessKeyViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## apiAlliancesDetailsAllianceIdGet

> AllianceDetailsViewModel apiAlliancesDetailsAllianceIdGet(allianceId)

Get the Alliance with more information

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.AlliancesApi();

let allianceId = "allianceId_example"; // String | 

apiInstance.apiAlliancesDetailsAllianceIdGet(allianceId).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.AlliancesApi();
    let allianceId = "allianceId_example"; // String | 

    const data = await apiInstance.apiAlliancesDetailsAllianceIdGet(allianceId);
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

[**AllianceDetailsViewModel**](AllianceDetailsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiAlliancesGet

> AllianceViewModel apiAlliancesGet()

Get the Alliances List

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.AlliancesApi();


apiInstance.apiAlliancesGet().then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.AlliancesApi();

    const data = await apiInstance.apiAlliancesGet();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**AllianceViewModel**](AllianceViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiApprovedGet

> ApprovedViewModel apiApprovedGet(opts)

Get the Alliances&#39; state of approved for a company that do not have PT

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.AlliancesApi();

let opts = {
  'cloudTenantId': "cloudTenantId_example" // String | 
};

apiInstance.apiApprovedGet(opts).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.AlliancesApi();
    let opts = {
    'cloudTenantId': "cloudTenantId_example" // String | 
    };

    const data = await apiInstance.apiApprovedGet(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudTenantId** | **String**|  | [optional] 

### Return type

[**ApprovedViewModel**](ApprovedViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

