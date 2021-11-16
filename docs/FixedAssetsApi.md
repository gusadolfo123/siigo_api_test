# SiigoApi.FixedAssetsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAssetGroup**](FixedAssetsApi.md#getAssetGroup) | **GET** /v1/asset-groups | Gets a list of fixed assets
[**getFixedAssets**](FixedAssetsApi.md#getFixedAssets) | **GET** /v1/fixed-assets | Gets a list of fixed assets




## getAssetGroup

> [AssetGroupsViewModel] getAssetGroup()

Gets a list of fixed assets

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.FixedAssetsApi();


apiInstance.getAssetGroup().then((data) => {
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
    let apiInstance = new SiigoApi.FixedAssetsApi();

    const data = await apiInstance.getAssetGroup();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**[AssetGroupsViewModel]**](AssetGroupsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getFixedAssets

> [FixedAssetsViewModel] getFixedAssets()

Gets a list of fixed assets

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.FixedAssetsApi();


apiInstance.getFixedAssets().then((data) => {
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
    let apiInstance = new SiigoApi.FixedAssetsApi();

    const data = await apiInstance.getFixedAssets();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**[FixedAssetsViewModel]**](FixedAssetsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json
