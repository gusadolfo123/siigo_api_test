# SiigoApi.ProductApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ProductsGet**](ProductApi.md#v1ProductsGet) | **GET** /v1/products | Gets a list of Products with pagination.
[**v1ProductsIdDelete**](ProductApi.md#v1ProductsIdDelete) | **DELETE** /v1/products/{id} | Deletes a Product by GUID
[**v1ProductsIdGet**](ProductApi.md#v1ProductsIdGet) | **GET** /v1/products/{id} | Gets a Product by GUID.
[**v1ProductsIdPut**](ProductApi.md#v1ProductsIdPut) | **PUT** /v1/products/{id} | Updates a Product by GUID
[**v1ProductsPost**](ProductApi.md#v1ProductsPost) | **POST** /v1/products | Creates a Product.




## v1ProductsGet

> ProductDetailsViewModel v1ProductsGet(opts)

Gets a list of Products with pagination.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.ProductApi();

let opts = {
  'code': "code_example", // String | 
  'accountGroup': "accountGroup_example", // String | 
  'type': "type_example", // String | 
  'stockControl': "stockControl_example", // String | 
  'active': "active_example", // String | 
  'ids': "ids_example", // String | 
  'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
  'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
  'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
  'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
  'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
  'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
  'page': 1, // Number | Represents the current page
  'pageSize': 25 // Number | Represents the number of results per page.
};

apiInstance.v1ProductsGet(opts).then((data) => {
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
    let apiInstance = new SiigoApi.ProductApi();
    let opts = {
    'code': "code_example", // String | 
    'accountGroup': "accountGroup_example", // String | 
    'type': "type_example", // String | 
    'stockControl': "stockControl_example", // String | 
    'active': "active_example", // String | 
    'ids': "ids_example", // String | 
    'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
    'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
    'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
    'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
    'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
    'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
    'page': 1, // Number | Represents the current page
    'pageSize': 25 // Number | Represents the number of results per page.
    };

    const data = await apiInstance.v1ProductsGet(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | [optional] 
 **accountGroup** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **stockControl** | **String**|  | [optional] 
 **active** | **String**|  | [optional] 
 **ids** | **String**|  | [optional] 
 **createdStart** | **Date**| Returns results where the \&quot;created\&quot; field is greater or equal than the entered date | [optional] 
 **createdEnd** | **Date**| Returns results where the \&quot;created\&quot; field is less or equal than the entered date | [optional] 
 **dateStart** | **Date**| Returns results with date greater or equal than the \&quot;date_start\&quot; date | [optional] 
 **dateEnd** | **Date**| Returns results with date less or equal than the \&quot;date_end\&quot; date | [optional] 
 **updatedStart** | **Date**| Returns results where the \&quot;last_updated\&quot; field is greater or equal than the entered date | [optional] 
 **updatedEnd** | **Date**| Returns results where the \&quot;last_updated\&quot; field is less or equal than the entered date | [optional] 
 **page** | **Number**| Represents the current page | [optional] 
 **pageSize** | **Number**| Represents the number of results per page. | [optional] 

### Return type

[**ProductDetailsViewModel**](ProductDetailsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1ProductsIdDelete

> ProductDeleteViewModel v1ProductsIdDelete(id)

Deletes a Product by GUID

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.ProductApi();

let id = null; // String | 

apiInstance.v1ProductsIdDelete(id).then((data) => {
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
    let apiInstance = new SiigoApi.ProductApi();
    let id = null; // String | 

    const data = await apiInstance.v1ProductsIdDelete(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**ProductDeleteViewModel**](ProductDeleteViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1ProductsIdGet

> ProductsModel v1ProductsIdGet(id)

Gets a Product by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.ProductApi();

let id = null; // String | 

apiInstance.v1ProductsIdGet(id).then((data) => {
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
    let apiInstance = new SiigoApi.ProductApi();
    let id = null; // String | 

    const data = await apiInstance.v1ProductsIdGet(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**ProductsModel**](ProductsModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1ProductsIdPut

> ProductsModel v1ProductsIdPut(id, opts)

Updates a Product by GUID

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.ProductApi();

let id = null; // String | 
let opts = {
  'productCommand': new SiigoApi.ProductCommand() // ProductCommand | 
};

apiInstance.v1ProductsIdPut(id, opts).then((data) => {
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
    let apiInstance = new SiigoApi.ProductApi();
    let id = null; // String | 
    let opts = {
    'productCommand': new SiigoApi.ProductCommand() // ProductCommand | 
    };

    const data = await apiInstance.v1ProductsIdPut(id, opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **productCommand** | [**ProductCommand**](ProductCommand.md)|  | [optional] 

### Return type

[**ProductsModel**](ProductsModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1ProductsPost

> ProductsModel v1ProductsPost(opts)

Creates a Product.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.ProductApi();

let opts = {
  'productCommand': new SiigoApi.ProductCommand() // ProductCommand | 
};

apiInstance.v1ProductsPost(opts).then((data) => {
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
    let apiInstance = new SiigoApi.ProductApi();
    let opts = {
    'productCommand': new SiigoApi.ProductCommand() // ProductCommand | 
    };

    const data = await apiInstance.v1ProductsPost(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCommand** | [**ProductCommand**](ProductCommand.md)|  | [optional] 

### Return type

[**ProductsModel**](ProductsModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

