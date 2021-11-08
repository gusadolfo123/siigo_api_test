# SiigoApi.CustomerViewModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Represents the unique Id of customer, this value must be a \&quot;Guid\&quot;  with the next format 00000000-0000-0000-0000-000000000000 | [optional] 
**type** | **String** | Represents the customer type (\&quot;Customer\&quot;, \&quot;Supplier\&quot; and \&quot;Other\&quot;),  this field will be \&quot;Customer\&quot; by default | [optional] 
**personType** | **String** | Represents the person type, this type can be a \&quot;Person\&quot; or \&quot;Company\&quot; | [optional] 
**idType** | [**IdTypeModel**](IdTypeModel.md) |  | [optional] 
**identification** | **String** | Represents the identification number of customer | [optional] 
**branchOffice** | **Number** | Represents the branch office of customer, this value by default will be 0 | [optional] 
**checkDigit** | **String** | Represents the check digit, this digit will be calculated automatically | [optional] 
**name** | **[String]** | Contains a list of strings with information about customer  this information will be commercial_name (or first name and last name, depnding of customer)  branch_office, active and vat_responsible | [optional] 
**commercialName** | **String** | Represents the commercial name of customer organization | [optional] 
**active** | **Boolean** | Represents the state of customer, this value by default will be true | [optional] 
**vatResponsible** | **Boolean** | Represents whether a person is responsible for VAT, by default will be false | [optional] 
**fiscalResponsibilities** | [**[FiscalResponsabilitiesModel]**](FiscalResponsabilitiesModel.md) | Represents a list of tax responsibilities of a person, by default will be R-99-PN | [optional] 
**address** | [**AddressModel**](AddressModel.md) |  | [optional] 
**phones** | [**[PhoneModel]**](PhoneModel.md) | Represents the phones of client | [optional] 
**contacts** | [**[ContactModel]**](ContactModel.md) | Represents the associated contantacts of customer | [optional] 
**comments** | **String** | Represents additional comments or observations | [optional] 
**relatedUsers** | [**RelatedUsersModel**](RelatedUsersModel.md) |  | [optional] 
**customFields** | [**[CustomFieldsModel]**](CustomFieldsModel.md) | Allows you to send the purchase order and delivery order fields. | [optional] 
**metadata** | [**MetadataModel**](MetadataModel.md) |  | [optional] 


