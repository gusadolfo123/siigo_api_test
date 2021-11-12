/**
 * Siigo API
 * Siigo Api v1
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually. cambio de documentacion de ejemlpo
 *
 */


import ApiClient from './ApiClient';
import Account from './model/Account';
import AccountGroup from './model/AccountGroup';
import AccountGroupViewModel from './model/AccountGroupViewModel';
import AccountModel from './model/AccountModel';
import AdditionalFields from './model/AdditionalFields';
import AdditionalFieldsCommand from './model/AdditionalFieldsCommand';
import AdditionalFieldsModel from './model/AdditionalFieldsModel';
import AdditionalFieldsProducts from './model/AdditionalFieldsProducts';
import AddressCommand from './model/AddressCommand';
import AddressModel from './model/AddressModel';
import AssetGroupsViewModel from './model/AssetGroupsViewModel';
import CityCommand from './model/CityCommand';
import CityModel from './model/CityModel';
import ContactCommand from './model/ContactCommand';
import ContactModel from './model/ContactModel';
import CostCentersViewModel from './model/CostCentersViewModel';
import CreateCreditNoteCommand from './model/CreateCreditNoteCommand';
import CreateCustomerCommand from './model/CreateCustomerCommand';
import CreateInvoiceCommand from './model/CreateInvoiceCommand';
import CreateJournalEntryCommand from './model/CreateJournalEntryCommand';
import CreateVoucherCommand from './model/CreateVoucherCommand';
import CreditNotePdfViewModel from './model/CreditNotePdfViewModel';
import CreditNoteViewModel from './model/CreditNoteViewModel';
import CreditNotesViewModel from './model/CreditNotesViewModel';
import CurrencyCommand from './model/CurrencyCommand';
import CurrencyModel from './model/CurrencyModel';
import CustomFieldsCommand from './model/CustomFieldsCommand';
import CustomFieldsModel from './model/CustomFieldsModel';
import Customer from './model/Customer';
import CustomerCommand from './model/CustomerCommand';
import CustomerDeleteViewModel from './model/CustomerDeleteViewModel';
import CustomerViewModel from './model/CustomerViewModel';
import CustomerVoucher from './model/CustomerVoucher';
import CustomersViewModel from './model/CustomersViewModel';
import DeliveryOrderCommand from './model/DeliveryOrderCommand';
import DeliveryOrderModel from './model/DeliveryOrderModel';
import DianReason from './model/DianReason';
import DiscountModel from './model/DiscountModel';
import DocumentCommand from './model/DocumentCommand';
import DocumentModel from './model/DocumentModel';
import DocumentTypeViewModel from './model/DocumentTypeViewModel';
import DocumentVoucher from './model/DocumentVoucher';
import Due from './model/Due';
import EInvoiceErrorViewModel from './model/EInvoiceErrorViewModel';
import EInvoiceErrorsViewModel from './model/EInvoiceErrorsViewModel';
import FiscalResponsabilitiesModel from './model/FiscalResponsabilitiesModel';
import FiscalResponsibilitiesCommand from './model/FiscalResponsibilitiesCommand';
import FixedAssetCommand from './model/FixedAssetCommand';
import FixedAssetModel from './model/FixedAssetModel';
import FixedAssetsViewModel from './model/FixedAssetsViewModel';
import IdTypeModel from './model/IdTypeModel';
import InvoiceCustomerModel from './model/InvoiceCustomerModel';
import InvoiceModel from './model/InvoiceModel';
import InvoicePdfViewModel from './model/InvoicePdfViewModel';
import InvoiceViewModel from './model/InvoiceViewModel';
import InvoicesViewModel from './model/InvoicesViewModel';
import Item from './model/Item';
import ItemDue from './model/ItemDue';
import ItemDueCommand from './model/ItemDueCommand';
import ItemVoucher from './model/ItemVoucher';
import ItemsCommand from './model/ItemsCommand';
import ItemsModel from './model/ItemsModel';
import JournalDue from './model/JournalDue';
import JournalEntryAccountModel from './model/JournalEntryAccountModel';
import JournalEntryCustomerModel from './model/JournalEntryCustomerModel';
import JournalEntryDocumentModel from './model/JournalEntryDocumentModel';
import JournalEntryItem from './model/JournalEntryItem';
import JournalEntryItemModel from './model/JournalEntryItemModel';
import JournalEntryProductCommand from './model/JournalEntryProductCommand';
import JournalEntryProductModel from './model/JournalEntryProductModel';
import JournalEntryTaxModel from './model/JournalEntryTaxModel';
import JournalEntryViewModel from './model/JournalEntryViewModel';
import JournalEntryWarehouseModel from './model/JournalEntryWarehouseModel';
import JournalsEntryViewModel from './model/JournalsEntryViewModel';
import Link from './model/Link';
import LinksPagination from './model/LinksPagination';
import LiteCustomerCommand from './model/LiteCustomerCommand';
import Metadata from './model/Metadata';
import MetadataModel from './model/MetadataModel';
import PageListModel from './model/PageListModel';
import Payment from './model/Payment';
import PaymentTypesViewModel from './model/PaymentTypesViewModel';
import PaymentsCommand from './model/PaymentsCommand';
import PaymentsModel from './model/PaymentsModel';
import PhoneCommand from './model/PhoneCommand';
import PhoneModel from './model/PhoneModel';
import PriceListItemViewModel from './model/PriceListItemViewModel';
import PriceListViewModel from './model/PriceListViewModel';
import PriceListsViewModel from './model/PriceListsViewModel';
import PricesListProducts from './model/PricesListProducts';
import PricesProducts from './model/PricesProducts';
import ProductCommand from './model/ProductCommand';
import ProductDeleteViewModel from './model/ProductDeleteViewModel';
import ProductDetail from './model/ProductDetail';
import ProductDetailsViewModel from './model/ProductDetailsViewModel';
import ProductTaxesCommand from './model/ProductTaxesCommand';
import ProductsModel from './model/ProductsModel';
import PurchaseOrderCommand from './model/PurchaseOrderCommand';
import PursacheOrderModel from './model/PursacheOrderModel';
import RelatedUsersCommand from './model/RelatedUsersCommand';
import RelatedUsersModel from './model/RelatedUsersModel';
import RetentionsCommand from './model/RetentionsCommand';
import RetentionsOutModel from './model/RetentionsOutModel';
import StampCommand from './model/StampCommand';
import StampViewModel from './model/StampViewModel';
import Tax from './model/Tax';
import TaxViewModel from './model/TaxViewModel';
import TaxesCommand from './model/TaxesCommand';
import TaxesModel from './model/TaxesModel';
import UnitProductsViewModel from './model/UnitProductsViewModel';
import UsersModel from './model/UsersModel';
import UsersViewModel from './model/UsersViewModel';
import VoucherViewModel from './model/VoucherViewModel';
import VouchersViewModel from './model/VouchersViewModel';
import Warehouse from './model/Warehouse';
import WarehouseModel from './model/WarehouseModel';
import WarehouseViewModel from './model/WarehouseViewModel';
import AccountGroupsApi from './api/AccountGroupsApi';
import CostCenterApi from './api/CostCenterApi';
import CreditNoteApi from './api/CreditNoteApi';
import CustomerApi from './api/CustomerApi';
import DocumentTypeApi from './api/DocumentTypeApi';
import FixedAssetsApi from './api/FixedAssetsApi';
import InvoiceApi from './api/InvoiceApi';
import JournalEntryApi from './api/JournalEntryApi';
import PaymentTypesApi from './api/PaymentTypesApi';
import PriceListsApi from './api/PriceListsApi';
import ProductApi from './api/ProductApi';
import TaxesApi from './api/TaxesApi';
import UsersApi from './api/UsersApi';
import VoucherApi from './api/VoucherApi';
import WarehousesApi from './api/WarehousesApi';


/**
* Initialization of the API client.  
* @param {Object} params - implicit object with params to initialize the class.
* @param {string} params.basePath - The base URL against which to resolve every API call's path.
* @param {string} params.urlSignIn - The url sign-in.
* @param {string} params.userName - The user name to sign-in.
* @param {string} params.accessKey - The access key to sign-in.
*/
export function initialize({ basePath, urlSignIn, userName, accessKey }) {
  ApiClient.initialize({ basePath, urlSignIn, userName, accessKey });
}

export function prueba22(){
  return "prueba22";
}

/**
* Siigo_Api_v1.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SiigoApi = require('index'); // See note below*.
* var xxxSvc = new SiigoApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SiigoApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SiigoApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SiigoApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account,

    /**
     * The AccountGroup model constructor.
     * @property {module:model/AccountGroup}
     */
    AccountGroup,

    /**
     * The AccountGroupViewModel model constructor.
     * @property {module:model/AccountGroupViewModel}
     */
    AccountGroupViewModel,

    /**
     * The AccountModel model constructor.
     * @property {module:model/AccountModel}
     */
    AccountModel,

    /**
     * The AdditionalFields model constructor.
     * @property {module:model/AdditionalFields}
     */
    AdditionalFields,

    /**
     * The AdditionalFieldsCommand model constructor.
     * @property {module:model/AdditionalFieldsCommand}
     */
    AdditionalFieldsCommand,

    /**
     * The AdditionalFieldsModel model constructor.
     * @property {module:model/AdditionalFieldsModel}
     */
    AdditionalFieldsModel,

    /**
     * The AdditionalFieldsProducts model constructor.
     * @property {module:model/AdditionalFieldsProducts}
     */
    AdditionalFieldsProducts,

    /**
     * The AddressCommand model constructor.
     * @property {module:model/AddressCommand}
     */
    AddressCommand,

    /**
     * The AddressModel model constructor.
     * @property {module:model/AddressModel}
     */
    AddressModel,

    /**
     * The AssetGroupsViewModel model constructor.
     * @property {module:model/AssetGroupsViewModel}
     */
    AssetGroupsViewModel,

    /**
     * The CityCommand model constructor.
     * @property {module:model/CityCommand}
     */
    CityCommand,

    /**
     * The CityModel model constructor.
     * @property {module:model/CityModel}
     */
    CityModel,

    /**
     * The ContactCommand model constructor.
     * @property {module:model/ContactCommand}
     */
    ContactCommand,

    /**
     * The ContactModel model constructor.
     * @property {module:model/ContactModel}
     */
    ContactModel,

    /**
     * The CostCentersViewModel model constructor.
     * @property {module:model/CostCentersViewModel}
     */
    CostCentersViewModel,

    /**
     * The CreateCreditNoteCommand model constructor.
     * @property {module:model/CreateCreditNoteCommand}
     */
    CreateCreditNoteCommand,

    /**
     * The CreateCustomerCommand model constructor.
     * @property {module:model/CreateCustomerCommand}
     */
    CreateCustomerCommand,

    /**
     * The CreateInvoiceCommand model constructor.
     * @property {module:model/CreateInvoiceCommand}
     */
    CreateInvoiceCommand,

    /**
     * The CreateJournalEntryCommand model constructor.
     * @property {module:model/CreateJournalEntryCommand}
     */
    CreateJournalEntryCommand,

    /**
     * The CreateVoucherCommand model constructor.
     * @property {module:model/CreateVoucherCommand}
     */
    CreateVoucherCommand,

    /**
     * The CreditNotePdfViewModel model constructor.
     * @property {module:model/CreditNotePdfViewModel}
     */
    CreditNotePdfViewModel,

    /**
     * The CreditNoteViewModel model constructor.
     * @property {module:model/CreditNoteViewModel}
     */
    CreditNoteViewModel,

    /**
     * The CreditNotesViewModel model constructor.
     * @property {module:model/CreditNotesViewModel}
     */
    CreditNotesViewModel,

    /**
     * The CurrencyCommand model constructor.
     * @property {module:model/CurrencyCommand}
     */
    CurrencyCommand,

    /**
     * The CurrencyModel model constructor.
     * @property {module:model/CurrencyModel}
     */
    CurrencyModel,

    /**
     * The CustomFieldsCommand model constructor.
     * @property {module:model/CustomFieldsCommand}
     */
    CustomFieldsCommand,

    /**
     * The CustomFieldsModel model constructor.
     * @property {module:model/CustomFieldsModel}
     */
    CustomFieldsModel,

    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer,

    /**
     * The CustomerCommand model constructor.
     * @property {module:model/CustomerCommand}
     */
    CustomerCommand,

    /**
     * The CustomerDeleteViewModel model constructor.
     * @property {module:model/CustomerDeleteViewModel}
     */
    CustomerDeleteViewModel,

    /**
     * The CustomerViewModel model constructor.
     * @property {module:model/CustomerViewModel}
     */
    CustomerViewModel,

    /**
     * The CustomerVoucher model constructor.
     * @property {module:model/CustomerVoucher}
     */
    CustomerVoucher,

    /**
     * The CustomersViewModel model constructor.
     * @property {module:model/CustomersViewModel}
     */
    CustomersViewModel,

    /**
     * The DeliveryOrderCommand model constructor.
     * @property {module:model/DeliveryOrderCommand}
     */
    DeliveryOrderCommand,

    /**
     * The DeliveryOrderModel model constructor.
     * @property {module:model/DeliveryOrderModel}
     */
    DeliveryOrderModel,

    /**
     * The DianReason model constructor.
     * @property {module:model/DianReason}
     */
    DianReason,

    /**
     * The DiscountModel model constructor.
     * @property {module:model/DiscountModel}
     */
    DiscountModel,

    /**
     * The DocumentCommand model constructor.
     * @property {module:model/DocumentCommand}
     */
    DocumentCommand,

    /**
     * The DocumentModel model constructor.
     * @property {module:model/DocumentModel}
     */
    DocumentModel,

    /**
     * The DocumentTypeViewModel model constructor.
     * @property {module:model/DocumentTypeViewModel}
     */
    DocumentTypeViewModel,

    /**
     * The DocumentVoucher model constructor.
     * @property {module:model/DocumentVoucher}
     */
    DocumentVoucher,

    /**
     * The Due model constructor.
     * @property {module:model/Due}
     */
    Due,

    /**
     * The EInvoiceErrorViewModel model constructor.
     * @property {module:model/EInvoiceErrorViewModel}
     */
    EInvoiceErrorViewModel,

    /**
     * The EInvoiceErrorsViewModel model constructor.
     * @property {module:model/EInvoiceErrorsViewModel}
     */
    EInvoiceErrorsViewModel,

    /**
     * The FiscalResponsabilitiesModel model constructor.
     * @property {module:model/FiscalResponsabilitiesModel}
     */
    FiscalResponsabilitiesModel,

    /**
     * The FiscalResponsibilitiesCommand model constructor.
     * @property {module:model/FiscalResponsibilitiesCommand}
     */
    FiscalResponsibilitiesCommand,

    /**
     * The FixedAssetCommand model constructor.
     * @property {module:model/FixedAssetCommand}
     */
    FixedAssetCommand,

    /**
     * The FixedAssetModel model constructor.
     * @property {module:model/FixedAssetModel}
     */
    FixedAssetModel,

    /**
     * The FixedAssetsViewModel model constructor.
     * @property {module:model/FixedAssetsViewModel}
     */
    FixedAssetsViewModel,

    /**
     * The IdTypeModel model constructor.
     * @property {module:model/IdTypeModel}
     */
    IdTypeModel,

    /**
     * The InvoiceCustomerModel model constructor.
     * @property {module:model/InvoiceCustomerModel}
     */
    InvoiceCustomerModel,

    /**
     * The InvoiceModel model constructor.
     * @property {module:model/InvoiceModel}
     */
    InvoiceModel,

    /**
     * The InvoicePdfViewModel model constructor.
     * @property {module:model/InvoicePdfViewModel}
     */
    InvoicePdfViewModel,

    /**
     * The InvoiceViewModel model constructor.
     * @property {module:model/InvoiceViewModel}
     */
    InvoiceViewModel,

    /**
     * The InvoicesViewModel model constructor.
     * @property {module:model/InvoicesViewModel}
     */
    InvoicesViewModel,

    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item,

    /**
     * The ItemDue model constructor.
     * @property {module:model/ItemDue}
     */
    ItemDue,

    /**
     * The ItemDueCommand model constructor.
     * @property {module:model/ItemDueCommand}
     */
    ItemDueCommand,

    /**
     * The ItemVoucher model constructor.
     * @property {module:model/ItemVoucher}
     */
    ItemVoucher,

    /**
     * The ItemsCommand model constructor.
     * @property {module:model/ItemsCommand}
     */
    ItemsCommand,

    /**
     * The ItemsModel model constructor.
     * @property {module:model/ItemsModel}
     */
    ItemsModel,

    /**
     * The JournalDue model constructor.
     * @property {module:model/JournalDue}
     */
    JournalDue,

    /**
     * The JournalEntryAccountModel model constructor.
     * @property {module:model/JournalEntryAccountModel}
     */
    JournalEntryAccountModel,

    /**
     * The JournalEntryCustomerModel model constructor.
     * @property {module:model/JournalEntryCustomerModel}
     */
    JournalEntryCustomerModel,

    /**
     * The JournalEntryDocumentModel model constructor.
     * @property {module:model/JournalEntryDocumentModel}
     */
    JournalEntryDocumentModel,

    /**
     * The JournalEntryItem model constructor.
     * @property {module:model/JournalEntryItem}
     */
    JournalEntryItem,

    /**
     * The JournalEntryItemModel model constructor.
     * @property {module:model/JournalEntryItemModel}
     */
    JournalEntryItemModel,

    /**
     * The JournalEntryProductCommand model constructor.
     * @property {module:model/JournalEntryProductCommand}
     */
    JournalEntryProductCommand,

    /**
     * The JournalEntryProductModel model constructor.
     * @property {module:model/JournalEntryProductModel}
     */
    JournalEntryProductModel,

    /**
     * The JournalEntryTaxModel model constructor.
     * @property {module:model/JournalEntryTaxModel}
     */
    JournalEntryTaxModel,

    /**
     * The JournalEntryViewModel model constructor.
     * @property {module:model/JournalEntryViewModel}
     */
    JournalEntryViewModel,

    /**
     * The JournalEntryWarehouseModel model constructor.
     * @property {module:model/JournalEntryWarehouseModel}
     */
    JournalEntryWarehouseModel,

    /**
     * The JournalsEntryViewModel model constructor.
     * @property {module:model/JournalsEntryViewModel}
     */
    JournalsEntryViewModel,

    /**
     * The Link model constructor.
     * @property {module:model/Link}
     */
    Link,

    /**
     * The LinksPagination model constructor.
     * @property {module:model/LinksPagination}
     */
    LinksPagination,

    /**
     * The LiteCustomerCommand model constructor.
     * @property {module:model/LiteCustomerCommand}
     */
    LiteCustomerCommand,

    /**
     * The Metadata model constructor.
     * @property {module:model/Metadata}
     */
    Metadata,

    /**
     * The MetadataModel model constructor.
     * @property {module:model/MetadataModel}
     */
    MetadataModel,

    /**
     * The PageListModel model constructor.
     * @property {module:model/PageListModel}
     */
    PageListModel,

    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment,

    /**
     * The PaymentTypesViewModel model constructor.
     * @property {module:model/PaymentTypesViewModel}
     */
    PaymentTypesViewModel,

    /**
     * The PaymentsCommand model constructor.
     * @property {module:model/PaymentsCommand}
     */
    PaymentsCommand,

    /**
     * The PaymentsModel model constructor.
     * @property {module:model/PaymentsModel}
     */
    PaymentsModel,

    /**
     * The PhoneCommand model constructor.
     * @property {module:model/PhoneCommand}
     */
    PhoneCommand,

    /**
     * The PhoneModel model constructor.
     * @property {module:model/PhoneModel}
     */
    PhoneModel,

    /**
     * The PriceListItemViewModel model constructor.
     * @property {module:model/PriceListItemViewModel}
     */
    PriceListItemViewModel,

    /**
     * The PriceListViewModel model constructor.
     * @property {module:model/PriceListViewModel}
     */
    PriceListViewModel,

    /**
     * The PriceListsViewModel model constructor.
     * @property {module:model/PriceListsViewModel}
     */
    PriceListsViewModel,

    /**
     * The PricesListProducts model constructor.
     * @property {module:model/PricesListProducts}
     */
    PricesListProducts,

    /**
     * The PricesProducts model constructor.
     * @property {module:model/PricesProducts}
     */
    PricesProducts,

    /**
     * The ProductCommand model constructor.
     * @property {module:model/ProductCommand}
     */
    ProductCommand,

    /**
     * The ProductDeleteViewModel model constructor.
     * @property {module:model/ProductDeleteViewModel}
     */
    ProductDeleteViewModel,

    /**
     * The ProductDetail model constructor.
     * @property {module:model/ProductDetail}
     */
    ProductDetail,

    /**
     * The ProductDetailsViewModel model constructor.
     * @property {module:model/ProductDetailsViewModel}
     */
    ProductDetailsViewModel,

    /**
     * The ProductTaxesCommand model constructor.
     * @property {module:model/ProductTaxesCommand}
     */
    ProductTaxesCommand,

    /**
     * The ProductsModel model constructor.
     * @property {module:model/ProductsModel}
     */
    ProductsModel,

    /**
     * The PurchaseOrderCommand model constructor.
     * @property {module:model/PurchaseOrderCommand}
     */
    PurchaseOrderCommand,

    /**
     * The PursacheOrderModel model constructor.
     * @property {module:model/PursacheOrderModel}
     */
    PursacheOrderModel,

    /**
     * The RelatedUsersCommand model constructor.
     * @property {module:model/RelatedUsersCommand}
     */
    RelatedUsersCommand,

    /**
     * The RelatedUsersModel model constructor.
     * @property {module:model/RelatedUsersModel}
     */
    RelatedUsersModel,

    /**
     * The RetentionsCommand model constructor.
     * @property {module:model/RetentionsCommand}
     */
    RetentionsCommand,

    /**
     * The RetentionsOutModel model constructor.
     * @property {module:model/RetentionsOutModel}
     */
    RetentionsOutModel,

    /**
     * The StampCommand model constructor.
     * @property {module:model/StampCommand}
     */
    StampCommand,

    /**
     * The StampViewModel model constructor.
     * @property {module:model/StampViewModel}
     */
    StampViewModel,

    /**
     * The Tax model constructor.
     * @property {module:model/Tax}
     */
    Tax,

    /**
     * The TaxViewModel model constructor.
     * @property {module:model/TaxViewModel}
     */
    TaxViewModel,

    /**
     * The TaxesCommand model constructor.
     * @property {module:model/TaxesCommand}
     */
    TaxesCommand,

    /**
     * The TaxesModel model constructor.
     * @property {module:model/TaxesModel}
     */
    TaxesModel,

    /**
     * The UnitProductsViewModel model constructor.
     * @property {module:model/UnitProductsViewModel}
     */
    UnitProductsViewModel,

    /**
     * The UsersModel model constructor.
     * @property {module:model/UsersModel}
     */
    UsersModel,

    /**
     * The UsersViewModel model constructor.
     * @property {module:model/UsersViewModel}
     */
    UsersViewModel,

    /**
     * The VoucherViewModel model constructor.
     * @property {module:model/VoucherViewModel}
     */
    VoucherViewModel,

    /**
     * The VouchersViewModel model constructor.
     * @property {module:model/VouchersViewModel}
     */
    VouchersViewModel,

    /**
     * The Warehouse model constructor.
     * @property {module:model/Warehouse}
     */
    Warehouse,

    /**
     * The WarehouseModel model constructor.
     * @property {module:model/WarehouseModel}
     */
    WarehouseModel,

    /**
     * The WarehouseViewModel model constructor.
     * @property {module:model/WarehouseViewModel}
     */
    WarehouseViewModel,

    /**
    * The AccountGroupsApi service constructor.
    * @property {module:api/AccountGroupsApi}
    */
    AccountGroupsApi,

    /**
    * The CostCenterApi service constructor.
    * @property {module:api/CostCenterApi}
    */
    CostCenterApi,

    /**
    * The CreditNoteApi service constructor.
    * @property {module:api/CreditNoteApi}
    */
    CreditNoteApi,

    /**
    * The CustomerApi service constructor.
    * @property {module:api/CustomerApi}
    */
    CustomerApi,

    /**
    * The DocumentTypeApi service constructor.
    * @property {module:api/DocumentTypeApi}
    */
    DocumentTypeApi,

    /**
    * The FixedAssetsApi service constructor.
    * @property {module:api/FixedAssetsApi}
    */
    FixedAssetsApi,

    /**
    * The InvoiceApi service constructor.
    * @property {module:api/InvoiceApi}
    */
    InvoiceApi,

    /**
    * The JournalEntryApi service constructor.
    * @property {module:api/JournalEntryApi}
    */
    JournalEntryApi,

    /**
    * The PaymentTypesApi service constructor.
    * @property {module:api/PaymentTypesApi}
    */
    PaymentTypesApi,

    /**
    * The PriceListsApi service constructor.
    * @property {module:api/PriceListsApi}
    */
    PriceListsApi,

    /**
    * The ProductApi service constructor.
    * @property {module:api/ProductApi}
    */
    ProductApi,

    /**
    * The TaxesApi service constructor.
    * @property {module:api/TaxesApi}
    */
    TaxesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The VoucherApi service constructor.
    * @property {module:api/VoucherApi}
    */
    VoucherApi,

    /**
    * The WarehousesApi service constructor.
    * @property {module:api/WarehousesApi}
    */
    WarehousesApi
};
