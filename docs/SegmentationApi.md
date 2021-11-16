# SiigoAlliancesApi.SegmentationApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSegmentPost**](SegmentationApi.md#apiSegmentPost) | **POST** /api/segment | Register a list of clients allowed for an alliance




## apiSegmentPost

> Boolean apiSegmentPost(opts)

Register a list of clients allowed for an alliance

### Example

#### - calls with promises

```javascript
import * as SiigoAlliancesApi from 'siigo_alliances_api';

let apiInstance = new SiigoAlliancesApi.SegmentationApi();

let opts = {
  'createSegmentationCommand': new SiigoAlliancesApi.CreateSegmentationCommand() // CreateSegmentationCommand | 
};

apiInstance.apiSegmentPost(opts).then((data) => {
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
    let apiInstance = new SiigoAlliancesApi.SegmentationApi();
    let opts = {
    'createSegmentationCommand': new SiigoAlliancesApi.CreateSegmentationCommand() // CreateSegmentationCommand | 
    };

    const data = await apiInstance.apiSegmentPost(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSegmentationCommand** | [**CreateSegmentationCommand**](CreateSegmentationCommand.md)|  | [optional] 

### Return type

**Boolean**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

