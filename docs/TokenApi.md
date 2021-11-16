# SiigoAlliancesApi.TokenApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthPost**](TokenApi.md#apiAuthPost) | **POST** /api/auth | Returns a token valid for alliances




## apiAuthPost

> TokenViewModel apiAuthPost(opts)

Returns a token valid for alliances

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.TokenApi();

let opts = {
  'allianceModel': new SiigoAlliancesApi.AllianceModel() // AllianceModel | Alliance code
};

apiInstance.apiAuthPost(opts).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.TokenApi();
    let opts = {
    'allianceModel': new SiigoAlliancesApi.AllianceModel() // AllianceModel | Alliance code
    };

    const data = await apiInstance.apiAuthPost(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allianceModel** | [**AllianceModel**](AllianceModel.md)| Alliance code | [optional] 

### Return type

[**TokenViewModel**](TokenViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

