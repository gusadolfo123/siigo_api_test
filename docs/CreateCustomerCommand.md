# SiigoApi.CreateCustomerCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Represents the customer type (\&quot;Customer\&quot;, \&quot;Supplier\&quot; and \&quot;Other\&quot;),  this field will be \&quot;Customer\&quot; by default | [optional] 
**personType** | **String** | Represents the person type, this type can be a \&quot;Person\&quot; or \&quot;Company\&quot; | [optional] 
**idType** | **String** | Represents the code of type id | [optional] 
**identification** | **String** | Represents the identification number of customer | [optional] 
**checkDigit** | **String** | Represents the check digit, this digit will be calculated automatically | [optional] 
**name** | **[String]** | Contains a list of strings with information about customer  this information will be commercial_name (or first name and last name, depnding of customer)  branch_office, active and vat_responsible | [optional] 
**commercialName** | **String** | Represents the commercial name of customer organization | [optional] 
**branchOffice** | **Number** | Represents the branch office of customer, this value by default will be 0 | [optional] 
**active** | **Boolean** | Represents the state of customer, this value by default will be true | [optional] 
**vatResponsible** | **Boolean** | Represents whether a person is responsible for VAT, by default will be false | [optional] 
**fiscalResponsibilities** | [**[FiscalResponsibilitiesCommand]**](FiscalResponsibilitiesCommand.md) | Represents a list of tax responsibilities of a person, by default will be R-99-PN | [optional] 
**address** | [**AddressCommand**](AddressCommand.md) |  | [optional] 
**phones** | [**[PhoneCommand]**](PhoneCommand.md) | Represents the phones of client | [optional] 
**contacts** | [**[ContactCommand]**](ContactCommand.md) | Represents the associated contantacts of customer | [optional] 
**comments** | **String** | Represents additional comments or observations | [optional] 
**relatedUsers** | [**RelatedUsersCommand**](RelatedUsersCommand.md) |  | [optional] 
**customFields** | [**[CustomFieldsCommand]**](CustomFieldsCommand.md) | Allows you to send the purchase order and delivery order fields. | [optional] 


