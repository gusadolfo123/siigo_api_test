# SiigoApi.CreateCreditNoteCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**DocumentCommand**](DocumentCommand.md) |  | [optional] 
**number** | **Number** | Represents the sequential number of the document,   this number is required depending of document type | [optional] 
**name** | **String** | Represents the information about document type,   document type Id and the sequential number of the document | [optional] 
**date** | **String** | Represents the date of document. This format must be yyyy-MM-dd | [optional] 
**invoice** | **String** | Represents the GUID of invoice to which the credit note was applied | [optional] 
**reason** | [**DianReason**](DianReason.md) |  | [optional] 
**seller** | **Number** | Represents the Id of seller associated to invoice | [optional] 
**costCenter** | **Number** | Represents the number of the cost center | [optional] 
**currency** | [**CurrencyCommand**](CurrencyCommand.md) |  | [optional] 
**retentions** | [**[RetentionsCommand]**](RetentionsCommand.md) | Contains a list information about every Retention associated to invoice | [optional] 
**advancePayment** | **Number** | Represent the Advance Payment | [optional] 
**observations** | **String** | Represent additional comments in document | [optional] 
**items** | [**[ItemsCommand]**](ItemsCommand.md) | Contains a list with items associated to invoice | [optional] 
**payments** | [**[PaymentsCommand]**](PaymentsCommand.md) | Contains a list with payments types associated to invoice | [optional] 


