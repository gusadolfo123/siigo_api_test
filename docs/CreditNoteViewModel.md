# SiigoApi.CreditNoteViewModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Represents the unique Id of credit note, this value must be a \&quot;Guid\&quot;  with the next format 00000000-0000-0000-0000-000000000000 | [optional] 
**document** | [**DocumentModel**](DocumentModel.md) |  | [optional] 
**number** | **Number** | Represents the sequential number of the document,   this number is required depending of document type | [optional] 
**name** | **String** | Contains information about document type,   document type Id and the sequential number of the document | [optional] 
**date** | **String** | Represents the date of document. This format must be yyyy-MM-dd | [optional] 
**invoice** | [**InvoiceModel**](InvoiceModel.md) |  | [optional] 
**customer** | [**InvoiceCustomerModel**](InvoiceCustomerModel.md) |  | [optional] 
**costCenter** | **Number** | Represents the number of the cost center | [optional] 
**currency** | [**CurrencyModel**](CurrencyModel.md) |  | [optional] 
**seller** | **Number** | Represents the Id of seller associated to invoice | [optional] 
**retentions** | [**[RetentionsOutModel]**](RetentionsOutModel.md) | Contains a list information about every Retention associated to invoice | [optional] 
**advancePayment** | **Number** | Represent the Advance Payment | [optional] 
**total** | **Number** | Represent the total value of document | [optional] 
**observations** | **String** | Represent additional comments in document | [optional] 
**items** | [**[ItemsModel]**](ItemsModel.md) | Contains a list with items associated to invoice | [optional] 
**payments** | [**[PaymentsModel]**](PaymentsModel.md) | Contains a list with payments types associated to invoice | [optional] 
**stamp** | [**StampViewModel**](StampViewModel.md) |  | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 


