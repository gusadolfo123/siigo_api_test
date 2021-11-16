# SiigoAlliancesApi.HistoryApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiHistoryAllianceIdGet**](HistoryApi.md#apiHistoryAllianceIdGet) | **GET** /api/history/{allianceId} | Get last History by AllianceId
[**apiHistoryPost**](HistoryApi.md#apiHistoryPost) | **POST** /api/history | Register a History record for the AllianceID
[**apiRevokePost**](HistoryApi.md#apiRevokePost) | **POST** /api/revoke | Register a Revoke record for the AllianceID




## apiHistoryAllianceIdGet

> HistoryDetailViewModel apiHistoryAllianceIdGet(allianceId)

Get last History by AllianceId

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.HistoryApi();

let allianceId = "allianceId_example"; // String | 

apiInstance.apiHistoryAllianceIdGet(allianceId).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.HistoryApi();
    let allianceId = "allianceId_example"; // String | 

    const data = await apiInstance.apiHistoryAllianceIdGet(allianceId);
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

[**HistoryDetailViewModel**](HistoryDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiHistoryPost

> HistoryViewModel apiHistoryPost(opts)

Register a History record for the AllianceID

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.HistoryApi();

let opts = {
  'createHistoryCommand': new SiigoAlliancesApi.CreateHistoryCommand() // CreateHistoryCommand | 
};

apiInstance.apiHistoryPost(opts).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.HistoryApi();
    let opts = {
    'createHistoryCommand': new SiigoAlliancesApi.CreateHistoryCommand() // CreateHistoryCommand | 
    };

    const data = await apiInstance.apiHistoryPost(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createHistoryCommand** | [**CreateHistoryCommand**](CreateHistoryCommand.md)|  | [optional] 

### Return type

[**HistoryViewModel**](HistoryViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## apiRevokePost

> RevokeViewModel apiRevokePost(opts)

Register a Revoke record for the AllianceID

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.HistoryApi();

let opts = {
  'createRevokeCommand': new SiigoAlliancesApi.CreateRevokeCommand() // CreateRevokeCommand | 
};

apiInstance.apiRevokePost(opts).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.HistoryApi();
    let opts = {
    'createRevokeCommand': new SiigoAlliancesApi.CreateRevokeCommand() // CreateRevokeCommand | 
    };

    const data = await apiInstance.apiRevokePost(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRevokeCommand** | [**CreateRevokeCommand**](CreateRevokeCommand.md)|  | [optional] 

### Return type

[**RevokeViewModel**](RevokeViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

