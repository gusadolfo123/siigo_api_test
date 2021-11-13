# SiigoApi.InvoiceApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1InvoicesGet**](InvoiceApi.md#v1InvoicesGet) | **GET** /v1/invoices | Gets a list of Invoices with pagination.
[**v1InvoicesIdGet**](InvoiceApi.md#v1InvoicesIdGet) | **GET** /v1/invoices/{id} | Gets an Invoice by GUID.
[**v1InvoicesIdPdfGet**](InvoiceApi.md#v1InvoicesIdPdfGet) | **GET** /v1/invoices/{id}/pdf | Gets an Invoice PDF by GUID.
[**v1InvoicesIdStampErrorsGet**](InvoiceApi.md#v1InvoicesIdStampErrorsGet) | **GET** /v1/invoices/{id}/stamp/errors | Get errors for rejected invoice by GUID.
[**v1InvoicesPost**](InvoiceApi.md#v1InvoicesPost) | **POST** /v1/invoices | Creates an Invoice.




## v1InvoicesGet

> InvoicesViewModel v1InvoicesGet(opts)

Gets a list of Invoices with pagination.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let opts = {
  'documentId': 789, // Number | 
  'customerIdentification': "customerIdentification_example", // String | 
  'customerBranchOffice': 56, // Number | 
  'name': "name_example", // String | 
  'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
  'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
  'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
  'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
  'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
  'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
  'page': 1, // Number | Represents the current page
  'pageSize': 25 // Number | Represents the number of results per page.
};

apiInstance.v1InvoicesGet(opts).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let opts = {
    'documentId': 789, // Number | 
    'customerIdentification': "customerIdentification_example", // String | 
    'customerBranchOffice': 56, // Number | 
    'name': "name_example", // String | 
    'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
    'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
    'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
    'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
    'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
    'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
    'page': 1, // Number | Represents the current page
    'pageSize': 25 // Number | Represents the number of results per page.
    };

    const data = await apiInstance.v1InvoicesGet(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **Number**|  | [optional] 
 **customerIdentification** | **String**|  | [optional] 
 **customerBranchOffice** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **createdStart** | **Date**| Returns results where the \&quot;created\&quot; field is greater or equal than the entered date | [optional] 
 **createdEnd** | **Date**| Returns results where the \&quot;created\&quot; field is less or equal than the entered date | [optional] 
 **dateStart** | **Date**| Returns results with date greater or equal than the \&quot;date_start\&quot; date | [optional] 
 **dateEnd** | **Date**| Returns results with date less or equal than the \&quot;date_end\&quot; date | [optional] 
 **updatedStart** | **Date**| Returns results where the \&quot;last_updated\&quot; field is greater or equal than the entered date | [optional] 
 **updatedEnd** | **Date**| Returns results where the \&quot;last_updated\&quot; field is less or equal than the entered date | [optional] 
 **page** | **Number**| Represents the current page | [optional] 
 **pageSize** | **Number**| Represents the number of results per page. | [optional] 

### Return type

[**InvoicesViewModel**](InvoicesViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1InvoicesIdGet

> InvoiceViewModel v1InvoicesIdGet(id)

Gets an Invoice by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let id = "id_example"; // String | 

apiInstance.v1InvoicesIdGet(id).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let id = "id_example"; // String | 

    const data = await apiInstance.v1InvoicesIdGet(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**InvoiceViewModel**](InvoiceViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1InvoicesIdPdfGet

> InvoicePdfViewModel v1InvoicesIdPdfGet(id)

Gets an Invoice PDF by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let id = "id_example"; // String | 

apiInstance.v1InvoicesIdPdfGet(id).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let id = "id_example"; // String | 

    const data = await apiInstance.v1InvoicesIdPdfGet(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**InvoicePdfViewModel**](InvoicePdfViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1InvoicesIdStampErrorsGet

> EInvoiceErrorsViewModel v1InvoicesIdStampErrorsGet(id)

Get errors for rejected invoice by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let id = "id_example"; // String | 

apiInstance.v1InvoicesIdStampErrorsGet(id).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let id = "id_example"; // String | 

    const data = await apiInstance.v1InvoicesIdStampErrorsGet(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**EInvoiceErrorsViewModel**](EInvoiceErrorsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1InvoicesPost

> InvoiceViewModel v1InvoicesPost(opts)

Creates an Invoice.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.InvoiceApi();

let opts = {
  'createInvoiceCommand': new SiigoApi.CreateInvoiceCommand() // CreateInvoiceCommand | 
};

apiInstance.v1InvoicesPost(opts).then((data) => {
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
    let apiInstance = new SiigoApi.InvoiceApi();
    let opts = {
    'createInvoiceCommand': new SiigoApi.CreateInvoiceCommand() // CreateInvoiceCommand | 
    };

    const data = await apiInstance.v1InvoicesPost(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInvoiceCommand** | [**CreateInvoiceCommand**](CreateInvoiceCommand.md)|  | [optional] 

### Return type

[**InvoiceViewModel**](InvoiceViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

