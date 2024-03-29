'use strict'; // eslint-disable-line

// Author Information and Copyright License:
// **************************************************************************************
/*
SyncSystem – less code, more logic. A product owned by the company Planejamento Visual – Arte, Tecnologia e Comunicação – all rights reserved.

Development and conception carried out by Jorge Mauricio (JM) – Full Stack Web Developer / Designer and company’s head partner.

Any modification or implementation in the github code must be informed / consulted and approved with the company or the author. The code is free for use commercially and personally, without the need of written or verbal authorization. 

The developer provides professional training for better understanding of its architecture and use of the code. Price quotes can be requested through the website. 

Website / contact:
http://fullstackwebdesigner.com
*/
// **************************************************************************************

// Import Node Modules.
// ----------------------
// const os = require("os"); // utility to get hostname // ref: https:// nodejs.org/api/os.html#os_os_hostname
// ----------------------

// Create a namespace to help export all variables / properties.
let gSystemConfig = {}; // eslint-disable-line

// NodeJS configuration.
// **************************************************************************************
gSystemConfig.configDebug = true; // true (debug mode) | false (production mode)
// **************************************************************************************

// General configuration.
// **************************************************************************************
// Basic information.
// ----------------------
gSystemConfig.configSystemClientName = 'Brigadeiro Jiu-Jitsu';
gSystemConfig.configSystemClientDocument = ''; // SSN | CPF
gSystemConfig.configSystemClientCompanyNameLegal = '';
gSystemConfig.configSystemClientCompanyDocument = ''; // CPNJ
gSystemConfig.configSystemClientCompanyDocument1 = ''; // I.M.
gSystemConfig.configSystemClientCompanyDocument2 = ''; // I.E.
gSystemConfig.configSystemClientAddress = '';
gSystemConfig.configSystemClientAddressNumber = '';
gSystemConfig.configSystemClientAddressComplement = '';
gSystemConfig.configSystemClientNeighborhood = '';
gSystemConfig.configSystemClientDistrict = '';
gSystemConfig.configSystemClientCounty = '';
gSystemConfig.configSystemClientCity = '';
gSystemConfig.configSystemClientState = '';
gSystemConfig.configSystemClientCountry = '';
gSystemConfig.configSystemClientZipCode = '';
gSystemConfig.configSystemClientPhone = '';
gSystemConfig.configSystemClientCel = '+ (904) 704-9877';
gSystemConfig.configSystemClientEmail = 'contact@brigadeirojiujitsu.com';

gSystemConfig.configSiteTitle = 'Brigadeiro Jiu-Jitsu - Brazilian Jiu-Jitsu'; // site name (Note: moved to language file)
gSystemConfig.configSystemName = 'Content Management System'; // Sistema de Controle | Sistema Administrativo | CRM | Content Management System (Note: moved to language file)
gSystemConfig.configDevName = 'Full Stack Web Designer - JM - Jorge Mauricio'; // Jorge Mauricio - Programador Visual | Planejamento Visual - Arte e Tecnologia | Jorge Mauricio - Full Stack Web Developer | Web Inventor - Imagine, realize. | Full Stack Web Designer - JM - Jorge Mauricio (Note: moved to language file) (Note: moved to language file)
gSystemConfig.configDevSite = 'http://www.fullstackwebdesigner.com'; // http://www.programadorvisual.com.br | http://www.planejamentovisual.com.br | http://www.jorgemauricio.com | http://www.webinventor.com.br | http://www.fullstackwebdesigner.com
gSystemConfig.configCopyrightYear = '2022';

gSystemConfig.configSystemURL = 'http://backend.brigadeirojiujitsu.com'; // http://multiplatformv1.syncsystem.com.br
// gSystemConfig.configSystemURL = process.env.CONFIG_SYSTEM_URL; // http://multiplatformv1.syncsystem.com.br
// gSystemConfig.configSystemURL = window.location.origin; // http://multiplatformv1.syncsystem.com.br
gSystemConfig.configSystemURLSSL = 'http://backend.brigadeirojiujitsu.com'; // http://multiplatformv1.syncsystem.com.br
// gSystemConfig.configSystemURLSSL = process.env.CONFIG_SYSTEM_URL_SSL; // http://multiplatformv1.syncsystem.com.br
// gSystemConfig.configSystemURLSSL = window.location.origin; // http://multiplatformv1.syncsystem.com.br

gSystemConfig.configAPIURL = gSystemConfig.configSystemURLSSL; // process.env.CONFIG_API_URL;
// gSystemConfig.configURLFrontendReact = process.env.CONFIG_URL_FRONTEND_REACT;
gSystemConfig.configURLFrontendReact = 'http://www.brigadeirojiujitsu.com';

/*
window.location.hash: "#2"
window.location.host: "localhost:4200"
window.location.hostname: "localhost"
window.location.href: "http://localhost:4200/landing?query=1#2"
window.location.origin: "http://localhost:4200"
window.location.pathname: "/landing"
window.location.port: "4200"
window.location.protocol: "http:"
window.location.search: "?query=1"
*/

gSystemConfig.configSystemURLImages = '/'; // ".." = relative path | "/" = root | http://www.nomedodominio.com.br = absolute path | remote (AWS s3): https:// multiplatformnodev1.s3.sa-east-1.amazonaws.com (note: gSystemConfig.configDirectoryFilesSD has to be "")
// gSystemConfig.configSystemURLImages = "https:// multiplatformnodev1.s3.sa-east-1.amazonaws.com";
gSystemConfig.configSystemURLImagesRemote = 'https://multiplatformnodev1.s3.sa-east-1.amazonaws.com'; // maybe it´s not needed
gSystemConfig.configFrontendReactURLImages = gSystemConfig.configSystemURL + '/';
// gSystemConfig.configFrontendReactURLImages = "https:// multiplatformnodev1.s3.sa-east-1.amazonaws.com";

gSystemConfig.configFrontendDefaultView = 'frontend_react'; // frontend_node | frontend_react
gSystemConfig.configFrontendMobileDefaultView = 'frontend_node_mobile';
// ----------------------

// DB especial configuration.
// ----------------------
/*
Moved to .env file.
const configSystemDBTablePrefix = "prefix_ssmv1_";
const configSystemDBType = 2; // 2 - MySQL | 3 - SQL Server
const enableSystemDBSizeOptimize = 0; // 0-disable (all fields created) | 1-enable (only enabled fields created on database setup)
*/

// Table names.
gSystemConfig.configSystemDBTableCounter = 'counter';
gSystemConfig.configSystemDBTableCategories = 'categories';
gSystemConfig.configSystemDBTableFiles = 'files';
gSystemConfig.configSystemDBTableContent = 'content';
gSystemConfig.configSystemDBTableProducts = 'products';
gSystemConfig.configSystemDBTablePublications = 'publications';
gSystemConfig.configSystemDBTableRegisters = 'registers';
gSystemConfig.configSystemDBTableQuizzes = 'quizzes';
gSystemConfig.configSystemDBTableQuizzesOptions = 'quizzes_options';
gSystemConfig.configSystemDBTableQuizzesLog = 'quizzes_log';
gSystemConfig.configSystemDBTableForms = 'forms';
gSystemConfig.configSystemDBTableFormsFields = 'forms_fields';
gSystemConfig.configSystemDBTableFormsFieldsOptions = 'forms_fields_options';
gSystemConfig.configSystemDBTableFiltersGeneric = 'filters_generic';
gSystemConfig.configSystemDBTableFiltersGenericBinding = 'filters_generic_binding';
gSystemConfig.configSystemDBTableUsers = 'users';
// ----------------------

// Media configuration.
// ----------------------
gSystemConfig.configImagePopup = 4; // 0 - no pop-up | 1 - LightBox 2 (JQuery) | 3 - fancybox (JQuery) | 4 - GLightbox (vanilla js)
gSystemConfig.configImagePopupBGColor = '#000000';
gSystemConfig.configImagePopupW = '890';
gSystemConfig.configImagePopupBGColor = '530';
// ----------------------

// Directories configuration.
// ----------------------
gSystemConfig.configPhysicalPathRoot = __dirname;

// gSystemConfig.configDirectoryRootPhysical = __dirname;
/**/
gSystemConfig.configDirectoryAdmin = 'admin_node';
// gSystemConfig.configDirectorySystem = 'backend_node'; // trash
gSystemConfig.configDirectoryBackend = 'backend_node';
// gSystemConfig.configDirectorySystemRoute = "system"; // trash
gSystemConfig.configDirectoryComponents = 'components_node';

gSystemConfig.configDirectoryFilesVisualization = 'app_files_public';
gSystemConfig.configDirectoryFiles = 'app_files_public';
gSystemConfig.configDirectoryFilesLayout = 'app_files_layout';
gSystemConfig.configDirectoryFonts = 'app_fonts';
gSystemConfig.configDirectoryResources = 'app_resources';
gSystemConfig.configDirectoryStyles = 'app_styles';
gSystemConfig.configDirectoryViews = 'app_views';
gSystemConfig.configDirectoryDist = 'dist'; // webpack distribution folder files (production / minifying)
gSystemConfig.configDirectoryBuildReact = 'build'; // webpack distribution folder files - react (production / minifying)
gSystemConfig.configDirectoryBuildReactClient = 'public'; // webpack distribution folder files - react client (production / minifying)
gSystemConfig.configDirectoryJS = 'app_js';

// Upload directories.
gSystemConfig.configDirectoryFilesUpload = gSystemConfig.configPhysicalPathRoot + '/' + gSystemConfig.configDirectoryFilesVisualization;
// gSystemConfig.configDirectoryFilesUpload = gSystemConfig.configPhysicalPathRoot + "\\" + gSystemConfig.configDirectoryFilesVisualization;
// ----------------------

// Static directories configuration (public alias).
// ----------------------
gSystemConfig.configFrontendDefaultViewSD = 'frontend';
gSystemConfig.configDirectorySystemSD = 'backend';
gSystemConfig.configDirectoryAdminSD = 'admin';

// gSystemConfig.configDirectoryFilesSD = ""; // "" - when using remote file storage
gSystemConfig.configDirectoryFilesSD = 'files'; // "" - when using remote
gSystemConfig.configDirectoryFilesLayoutSD = 'files-layout';
gSystemConfig.configDirectoryFontsSD = 'fonts';
gSystemConfig.configDirectoryStylesSD = 'css';
gSystemConfig.configDirectoryJSSD = 'js';
gSystemConfig.configDirectoryDistSD = 'dist';
gSystemConfig.configDirectoryBuildReactSD = 'build'; // TODO: Maybe change to frontend_react
gSystemConfig.configDirectoryBuildReactClientSD = 'public';
// ----------------------

// Routes configuration.
// ----------------------
gSystemConfig.configRouteAPI = 'api';
gSystemConfig.configRouteAPIActionEdit = 'edit';
gSystemConfig.configRouteAPIActionSend = 'send';
gSystemConfig.configRouteAPIActionLog = 'log';
gSystemConfig.configRouteAPIDetails = 'details';
gSystemConfig.configRouteAPIRecords = 'records';

gSystemConfig.configRouteAPICategories = 'categories';
gSystemConfig.configRouteAPIFiles = 'files';
gSystemConfig.configRouteAPIContent = 'content';
gSystemConfig.configRouteAPIProducts = 'products';
gSystemConfig.configRouteAPIPublications = 'publications';
gSystemConfig.configRouteAPIRegisters = 'registers';
gSystemConfig.configRouteAPIQuizzes = 'quizzes';
gSystemConfig.configRouteAPIQuizzesOptions = 'quizzes-options';
gSystemConfig.configRouteAPIForms = 'forms';
gSystemConfig.configRouteAPIFormsFields = 'forms-fields';
gSystemConfig.configRouteAPIFormsFieldsOptions = 'forms-fields-options';
gSystemConfig.configRouteAPIFiltersGeneric = 'filters-generic';
gSystemConfig.configRouteAPIUsers = 'users';
gSystemConfig.configRouteAPIAuthentication = 'authentication';
gSystemConfig.configRouteAPILogin = 'login';

gSystemConfig.configRouteBackend = 'system';
gSystemConfig.configRouteBackendLogin = 'login';
gSystemConfig.configRouteBackendLogOff = 'logoff'; // TODO: change to logoff.
gSystemConfig.configRouteBackendLoginUsers = 'login-users';
// gSystemConfig.configRouteBackendLogOffUsers = "logoff-users";
gSystemConfig.configRouteBackendLogOffUsersRoot = 'logoff-users-root'; // TODO: change to logoff.
gSystemConfig.configRouteBackendDashboard = 'dashboard'; // main

gSystemConfig.configRouteBackendActionEdit = 'edit';
gSystemConfig.configRouteBackendDetails = 'details';
gSystemConfig.configRouteBackendRecords = 'records';
gSystemConfig.configRouteBackendCategories = 'categories';
gSystemConfig.configRouteBackendFiles = 'files';
gSystemConfig.configRouteBackendContent = 'content';
gSystemConfig.configRouteBackendProducts = 'products';
gSystemConfig.configRouteBackendPublications = 'publications';
gSystemConfig.configRouteBackendRegisters = 'registers';
gSystemConfig.configRouteBackendQuizzes = 'quizzes';
gSystemConfig.configRouteBackendQuizzesOptions = 'quizzes-options';
gSystemConfig.configRouteBackendForms = 'forms';
gSystemConfig.configRouteBackendFormsFields = 'forms-fields';
gSystemConfig.configRouteBackendFormsFieldsOptions = 'forms-fields-options';
gSystemConfig.configRouteBackendFiltersGeneric = 'filters-generic';
gSystemConfig.configRouteBackendUsers = 'users';

gSystemConfig.configRouteFrontend = 'en'; // (blank) - root | en
gSystemConfig.configRouteFrontendMobile = 'en-mobile'; // (blank) - responsive |  // NOTE: only in use if layout not responsive

gSystemConfig.configRouteFrontendActionEdit = 'edit';
gSystemConfig.configRouteFrontendActionSend = 'send';
gSystemConfig.configRouteFrontendDetails = 'details';
gSystemConfig.configRouteFrontendRecords = 'records';

gSystemConfig.configRouteFrontendCategories = 'categories';
gSystemConfig.configRouteFrontendFiles = 'files';
gSystemConfig.configRouteFrontendContent = 'content';
gSystemConfig.configRouteFrontendForms = 'forms';
gSystemConfig.configRouteFrontendProducts = 'products';
gSystemConfig.configRouteFrontendPublications = 'publications';
gSystemConfig.configRouteFrontendRegisters = 'registers';
gSystemConfig.configRouteFrontendQuizzes = 'quizzes';
gSystemConfig.configRouteFrontendLogin = 'login';
gSystemConfig.configRouteFrontendLogoff = 'logoff';

gSystemConfig.configRouteFrontendDashboard = 'dashboard';
gSystemConfig.configRouteFrontendDashboardCategories = 'dashboard-categories';
gSystemConfig.configRouteFrontendDashboardFiles = 'dashboard-files';
gSystemConfig.configRouteFrontendDashboardContent = 'dashboard-content';
gSystemConfig.configRouteFrontendDashboardProducts = 'dashboard-products';
gSystemConfig.configRouteFrontendDashboardPublications = 'dashboard-publications';
gSystemConfig.configRouteFrontendDashboardRegisters = 'dashboard-registers';
gSystemConfig.configRouteFrontendDashboardQuizzes = 'dashboard-quizzes';
// ----------------------

// Cryptography.
// ----------------------
gSystemConfig.configCookieSetType = 1; // 0 - disable (without path - directory) | 1 - enable (set with path - directory)
gSystemConfig.configCookieDirectory = '/'; // / - full site

gSystemConfig.configCookiePrefix = 'bjj';
gSystemConfig.configCookiePrefixUserRoot = 'user_root';
gSystemConfig.configCookiePrefixUser = 'user';

gSystemConfig.configCookieDefaultOptions = {
  path: gSystemConfig.configCookieDirectory,
  overwrite: true,
  // domain: '127.0.0.1:4444',
  // secure: process.env.NODE_ENV === 'production'? true: false, / Forces to use https in production.
  // expires: new Date(Date.now() + 900000),
  // maxAge: 1000 * 60 * 10,
  httpOnly: true, // You can't access these tokens in the client's javascript.
}; // ref: https:// alligator.io/nodejs/express-cookies/
gSystemConfig.configCookieDeleteDefaultOptions = {
  path: gSystemConfig.configCookieDirectory,
  overwrite: true,
  // domain: '127.0.0.1:4444',
  // secure: process.env.NODE_ENV === 'production'? true: false, / Forces to use https in production.
  expires: new Date(),
  maxAge: 0,
  httpOnly: true, // You can't access these tokens in the client's javascript.
}; // ref: https:// alligator.io/nodejs/express-cookies/

gSystemConfig.configSessionBackendTimeout = '1440';
// ----------------------

// Cryptography.
// ----------------------
gSystemConfig.configCryptType = 2; // 0 - no cryptography | 1 - hash (doesn´t allow decryptography) | 2 - Data (allows decryptography)
gSystemConfig.configCryptHash = 23; // 23 - Crypto Module
gSystemConfig.configCryptData = 26; // 23 - Crypto Module algorithm: aes-128-cbc and simple key password | 24 - Crypto Module algorithm: aes-128-cbc - 16 byte key and 16 byte iv | 26 - Crypto Module algorithm: aes-256-cbc - 32 byte key and 16 byte iv

gSystemConfig.configCryptKey = 'system_crypt_key'; // generate key data
gSystemConfig.configCryptKey16Byte = '95f19c6f734f9f4fdc1d4258277a1c7d'; // not in use
gSystemConfig.configCryptKey32Byte = 'd0a7e7997b6d5fcd55f4b5c32611b87cd923e88837b63bf2941ef819dc8ca282'; // not in use
gSystemConfig.configCryptiv16Byte = 'bd1e41c05f861867e225d5d998f10813'; // not in use
gSystemConfig.configCryptiv32Byte = '21f534b09237b9716ab561149367ebb8d2d0ab0e0bfec395baf7ba112cb2872f'; // not in use
gSystemConfig.configCryptSalt = 'syncsystem'; // generate a salt data // TODO: think of a way to change salt and key and generate a new master user password
// ----------------------

// Image configuration.
// ----------------------
gSystemConfig.configUploadType = 1; // 1 - Save Files Locally | 2 - Amazon S3
gSystemConfig.configUploadComponent = 1; // 1 - formidable | 2 - multer (TODO) | 3 - multyparty (TODO)
gSystemConfig.configImageComponent = 1; // 1 - sharp
gSystemConfig.configImageQuality = 100; // image quality percentage on resizing
gSystemConfig.configImageFormats = '.bmp, .gif, .jpg, .jpeg, .png'; // formats allowed for image resizing

// Image size configuration.
gSystemConfig.enableDefaultImageSize = 1; // 0 - disable (image sizes different for each table) | 1 - enable (default image sizes)

// prefix;w;h
gSystemConfig.configArrDefaultImageSize = ['g;1000;750', 'NULL;785;590', 'r;480;360', 't;312;235'];
gSystemConfig.configArrCategoriesImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrFilesImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrContentImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrProductsImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrPublicationsImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrRegistersImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrQuizzesImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrQuizzesOptionsImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrFormsFieldsOptionsImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrFiltersGenericImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
gSystemConfig.configArrUsersImageSize = gSystemConfig.enableDefaultImageSize === 1 ? gSystemConfig.configArrDefaultImageSize : ['g;667;500', 'NULL;370;277', 'r;205;154', 't;120;90'];
// ----------------------

// e-mail configuration.
// ----------------------
gSystemConfig.configEmailComponent = 11; // 11 - nodemailer
gSystemConfig.configEmailFormat = 1; // 0 - text | 1 - HTML
// ----------------------

// APIs.
// ----------------------
// .env
gSystemConfig.configAPIKeySystem = '6A0D965EDF973E2793EAD2751B6CFB8917A815378ED0323DC2F2C28C46E5CB90'; // Note: for node deploy, value must be hard coded (TODO: Reaserch architecture to retrieve server variables .env in react).
// gSystemConfig.configAPIKeySystem = process.env.CONFIG_API_KEY_SYSTEM;
// ----------------------
// **************************************************************************************

// Global system configuration.
// **************************************************************************************
gSystemConfig.configBackendTemplateEngine = 1; // 1 - EJS

gSystemConfig.configBackendTextBox = 17; // 1 - no formatting | 2 - basic formatting (CKEditor) | 3 - advanced formatting (CKEditor) | 4 - basic formatting (Ajax HTMLEditorExtender) | 5 - advanced formatting (Ajax HTMLEditorExtender) | 6 - formatting (Ajax HTMLEditor) | 7 - advanced formatting (Ajax HTMLEditor) | 11 - basic (CLEditor) | 12 - advanced formatting (CLEditor) | 13 - basic (Quill) | 14 - advanced formatting (Quill) | 15 - basic (FroalaEditor) | 16 - advanced formatting (FroalaEditor) | 17 basic (TinyMCE) | 18 - advanced formatting (TinyMCE)
gSystemConfig.configFrontendTextBox = 1; // 1 - no formatting | 2 - basic formatting (CKEditor) | 3 - advanced formatting (CKEditor) | 4 - basic formatting (Ajax HTMLEditorExtender) | 5 - advanced formatting (Ajax HTMLEditorExtender) | 6 - formatting (Ajax HTMLEditor) | 7 - advanced formatting (Ajax HTMLEditor) | 11 - basic (CLEditor) | 12 - advanced formatting (CLEditor) | 13 - basic (Quill) | 14 - advanced formatting (Quill) | 15 - basic (FroalaEditor) | 16 - advanced formatting (FroalaEditor) | 17 basic (TinyMCE) | 18 - advanced formatting (TinyMCE)

gSystemConfig.configSystemTimeZone = 'America/Sao_Paulo'; // America/Sao_Paulo (pt-BR) | Atlantic/South_Georgia (en-US) | America/New_York (en-US)  | (en-GB)
gSystemConfig.configBackendLanguage = 'en_US'; // en_US | pt_BR // TODO: DELETE - moved to language (check to see if node code uses)
gSystemConfig.configFrontendLanguage = 'en_US'; // en_US | pt_BR // TODO: DELETE - moved to language (check to see if node or react code uses)

gSystemConfig.configBackendDateFormat = 1; // 1 - portuguese dd/mm/yyyy | 2 - britanic mm/dd/yyyy
gSystemConfig.configBackendDateFieldType = 11; // 0 - simple field | 1 - JQuery DatePicker | 2 - dropdown menu | 11 - js-datepicker (https:// www.npmjs.com/package/js-datepicker)
gSystemConfig.configFrontendDateFormat = 1; // 1 - portuguese dd/mm/yyyy | 2 - britanic mm/dd/yyyy
gSystemConfig.configFrontendDateFieldType = 1; // 0 - simple field | 1 - JQuery DatePicker | 2 - dropdown menu

// Currency.
gSystemConfig.configSystemCurrency = '$'; // R$ | $ | € | £
gSystemConfig.configSystemWeight = 'gounces'; // g | ounces (1 pound -> 16 ounces)
gSystemConfig.configSystemWeight2 = 'Pounds'; // kg | Pounds (453.6 grams)
gSystemConfig.configSystemHeight = 'ft'; // ft | m
gSystemConfig.configSystemMetric = 'ft²'; // m² | ft²
gSystemConfig.configSystemMetricDistance = 'MI'; // KM | MI
// **************************************************************************************

// Backend - main menu configuration.
// **************************************************************************************
gSystemConfig.enableBackendSearch = 0; // 0 - disable | 1 - enable

gSystemConfig.enableBackendMaintenanceRegisters = 0; // 0 - disable | 1 - enable
gSystemConfig.enableBackendMaintenanceCategories = 0; // 0 - disable | 1 - enable
gSystemConfig.enableBackendMaintenanceProducts = 0; // 0 - disable | 1 - enable
gSystemConfig.enableBackendMaintenancePublications = 0; // 0 - disable | 1 - enable
// **************************************************************************************

// Languages.
// **************************************************************************************
// const appLabels = require("./app_resources/language-en-us.js");

// gSystemConfig.languageFrontend = appLabels; // working
gSystemConfig.configLanguageFrontend = require('./' + gSystemConfig.configDirectoryResources + '/language-en-us.js');
// gSystemConfig.languageBackend = appLabels; // working
gSystemConfig.configLanguageBackend = require('./' + gSystemConfig.configDirectoryResources + '/language-en-us.js');
// **************************************************************************************

// Categories types - configuration and resources.
// **************************************************************************************
gSystemConfig.configCategoryType = [
  { category_type: 1, category_type_function_label: 'backendCategoriesType1Function', queryString: '' }, // Content
  { category_type: 2, category_type_function_label: 'backendCategoriesType2Function', queryString: '' }, // Products
  { category_type: 3, category_type_function_label: 'backendCategoriesType3Function', queryString: 'publicationType=1' }, // News
  { category_type: 4, category_type_function_label: 'backendCategoriesType4Function', queryString: 'publicationType=2' }, // Photo Gallery
  // { category_type: 5, category_type_function_label: 'backendCategoriesType5Function', queryString: 'publicationType=3' }, // Articles
  { category_type: 6, category_type_function_label: 'backendCategoriesType6Function', queryString: 'publicationType=4' }, // Publications
  // { category_type: 7, category_type_function_label: 'backendCategoriesType7Function', queryString: 'idType=1' }, // Polls
  { category_type: 9, category_type_function_label: 'backendCategoriesType9Function', queryString: '-' }, // Segment
  { category_type: 12, category_type_function_label: 'backendCategoriesType12Function', queryString: '' }, // Forms
  // { category_type: 13, category_type_function_label: 'backendCategoriesType13Function', queryString: '' }, // Registers
  // { category_type: 17, category_type_function_label: 'backendCategoriesType17Function', queryString: 'idType=2' }, // Quizzes
];
// **************************************************************************************

// Categories - configuration and resources.
// **************************************************************************************
gSystemConfig.configCategoriesSort = 'sort_order'; // options: id | sort_order | date_creation esc | date_creation desc | title
gSystemConfig.enableCategoriesSortCustom = 0; // 0 - disable | 1 - enable
// gSystemConfig.configCategoriesInputOrder = ['inputRowCategories_id_parent', 'inputRowCategories_sort_order', 'inputRowCategories_date1', 'inputRowCategories_id_register_user', 'inputRowCategories_title', 'inputRowCategories_description', 'inputRowCategories_url_alias', 'inputRowCategories_meta_title', 'inputRowCategories_meta_description', 'inputRowCategories_keywords_tags', 'inputRowCategories_info1', 'inputRowCategories_info_small1', 'inputRowCategories_number1', 'inputRowCategories_number_small1', 'inputRowCategories_category_type', 'inputRowCategories_image_main', 'inputRowCategories_file1', 'inputRowCategories_file2', 'inputRowCategories_activation', 'inputRowCategories_id_restricted_access', 'inputRowCategories_id_status', 'inputRowCategories_notes'];
gSystemConfig.configCategoriesInputOrder = [];

// Basic resources.
gSystemConfig.enableCategoriesImageMain = 1; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesDescription = 1; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesSortOrder = 1; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesRestrictedAccess = 0; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesIdParentEdit = 1; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesStatus = 0; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesNotes = 0; // 0 - disable | 1 - enable

gSystemConfig.configCategoriesURLAlias = 0; // 0 - disable | 1 - automatic | 2 - custom
gSystemConfig.enableCategoriesKeywordsTags = 0; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesMetaDescription = 0; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesMetaTitle = 0; // 0 - disable | 1 - enable

// Pagination.
gSystemConfig.enableCategoriesBackendPagination = 0; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesBackendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesBackendPaginationNRecords = 15;

// Resources.
gSystemConfig.enableCategoriesImages = 0; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesVideos = 0; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesFiles = 0; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesZip = 0; // 0 - disable | 1 - enable

// User bind (link categories to registers).
// ----------------------
gSystemConfig.enableCategoriesBindRegisterUser = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesBindRegisterUserMethod = 1; // 1 - category ID | 2 - register type
gSystemConfig.configCategoriesBindRegisterUserIDReference = 3892; // category ID / register type ID | 0 - all registeres
gSystemConfig.configCategoriesBindRegisterUserSort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableCategoriesBindRegister1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesBindRegister1Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configCategoriesBindRegister1IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configCategoriesBindRegister1Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableCategoriesBindRegister2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesBindRegister2Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configCategoriesBindRegister2IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configCategoriesBindRegister2Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableCategoriesBindRegister3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesBindRegister3Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configCategoriesBindRegister3IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configCategoriesBindRegister3Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableCategoriesBindRegister4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesBindRegister4Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configCategoriesBindRegister4IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configCategoriesBindRegister4Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableCategoriesBindRegister5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesBindRegister5Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configCategoriesBindRegister5IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configCategoriesBindRegister5Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order
// ----------------------

// Optional fields (field titles in the language configuration file).
// ----------------------
// Generic filters.
gSystemConfig.enableCategoriesFilterGeneric1 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableCategoriesFilterGeneric2 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableCategoriesFilterGeneric3 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableCategoriesFilterGeneric4 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableCategoriesFilterGeneric5 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableCategoriesFilterGeneric6 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableCategoriesFilterGeneric7 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableCategoriesFilterGeneric8 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableCategoriesFilterGeneric9 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableCategoriesFilterGeneric10 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio

// Big information fields.
gSystemConfig.enableCategoriesInfo1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfo1FieldType = 12; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableCategoriesInfo2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfo2FieldType = 11; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableCategoriesInfo3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfo3FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableCategoriesInfo4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfo4FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableCategoriesInfo5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfo5FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableCategoriesInfo6 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfo6FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableCategoriesInfo7 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfo7FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableCategoriesInfo8 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfo8FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableCategoriesInfo9 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfo9FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableCategoriesInfo10 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfo10FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

// Small information fields.
gSystemConfig.enableCategoriesInfoS1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfoS1FieldType = 2; // 1 - single line | 2 - multiline

gSystemConfig.enableCategoriesInfoS2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfoS2FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableCategoriesInfoS3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfoS3FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableCategoriesInfoS4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfoS4FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableCategoriesInfoS5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesInfoS5FieldType = 1; // 1 - single line | 2 - multiline

// Big number fields (up to 34 digits).
gSystemConfig.enableCategoriesNumber1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesNumber1FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableCategoriesNumber2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesNumber2FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableCategoriesNumber3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesNumber3FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableCategoriesNumber4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesNumber4FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableCategoriesNumber5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesNumber5FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

// Small number fields (up to 9 digits).
gSystemConfig.enableCategoriesNumberS1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesNumberS1FieldType = 2; // 1 - general number | 2 - system currency

gSystemConfig.enableCategoriesNumberS2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesNumberS2FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableCategoriesNumberS3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesNumberS3FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableCategoriesNumberS4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesNumberS4FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableCategoriesNumberS5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesNumberS5FieldType = 1; // 1 - general number | 2 - system currency

// Date fields.
gSystemConfig.enableCategoriesDate1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesDate1FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configCategoriesDate1Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi-complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on) | 6 - history date (backwards on)  | 55 - task date with hour and minute (forward on) | 66 - history date with hour and minute (backwards on)

gSystemConfig.enableCategoriesDate2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesDate2FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configCategoriesDate2Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableCategoriesDate3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesDate3FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configCategoriesDate3Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableCategoriesDate4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesDate4FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configCategoriesDate4Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableCategoriesDate5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesDate5FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configCategoriesDate5Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

// File fields.
gSystemConfig.enableCategoriesFile1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesFile1Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableCategoriesFile2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesFile2Type = 34; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableCategoriesFile3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesFile3Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableCategoriesFile4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesFile4Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableCategoriesFile5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesFile5Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

// Activation fields.
gSystemConfig.enableCategoriesActivation1 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesActivation2 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesActivation3 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesActivation4 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableCategoriesActivation5 = 0; // 0 - disable | 1 - enable
// ----------------------

// Frontend configuration.
gSystemConfig.configCategoriesImagePlaceholder = 1; // 0 - disable | 1 - enable

gSystemConfig.enableCategoriesFrontendPagination = 0; // 0 - disable | 1 - enable (custom) | 11 - enable (bootstrap)
gSystemConfig.enableCategoriesFrontendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configCategoriesFrontendPaginationNRecords = 10;
// **************************************************************************************

// Files - configuration and resources.
// **************************************************************************************
gSystemConfig.configFilesSort = 'sort_order'; // options: id | sort_order | date_creation esc | date_creation desc | caption
gSystemConfig.enableFilesSortCustom = 0; // 0 - disable | 1 - enable
// gSystemConfig.configFilesInputOrder = ['inputRowFiles_id_parent', 'inputRowFiles_sort_order', 'inputRowFiles_date1', 'inputRowFiles_file_config', 'inputRowFiles_caption', 'inputRowFiles_description', 'inputRowFiles_url_alias', 'inputRowFiles_meta_title', 'inputRowFiles_meta_description', 'inputRowFiles_keywords_tags', 'inputRowFiles_info1', 'inputRowFiles_info_small1', 'inputRowFiles_number1', 'inputRowFiles_number_small1', 'inputRowFiles_category_type', 'inputRowFiles_file', 'inputRowFiles_file1', 'inputRowFiles_file2', 'inputRowFiles_activation', 'inputRowFiles_notes'];
gSystemConfig.configFilesInputOrder = [];

// Basic resources.
gSystemConfig.enableFilesIdParentEdit = 1; // 0 - disable | 1 - enable
gSystemConfig.enableFilesSortOrder = 1; // 0 - disable | 1 - enable

gSystemConfig.enableFilesTitle = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFilesDescription = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFilesHTMLCode = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFilesThumbnails = 0; // 0 - disable | 1 - enable // Thumbnails for video files.

gSystemConfig.configFilesURLAlias = 0; // 0 - disable | 1 - automatic | 2 - custom
gSystemConfig.enableFilesKeywordsTags = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFilesMetaDescription = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFilesMetaTitle = 0; // 0 - disable | 1 - enable

gSystemConfig.enableFilesNotes = 0; // 0 - disable | 1 - enable

// Pagination.
gSystemConfig.enableFilesBackendPagination = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFilesBackendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configFilesBackendPaginationNRecords = 15;

// Optioinal fields (field titles in the language configuration file).
// Big information fields.
gSystemConfig.enableFilesInfo1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesInfo1FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableFilesInfo2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesInfo2FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableFilesInfo3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesInfo3FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableFilesInfo4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesInfo4FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableFilesInfo5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesInfo5FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

// Small information fields.
gSystemConfig.enableFilesInfoS1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesInfoS1FieldType = 2; // 1 - single line | 2 - multiline

gSystemConfig.enableFilesInfoS2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesInfoS2FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableFilesInfoS3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesInfoS3FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableFilesInfoS4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesInfoS4FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableFilesInfoS5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesInfoS5FieldType = 1; // 1 - single line | 2 - multiline

// Big number fields (up to 34 digits).
gSystemConfig.enableFilesNumber1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesNumber1FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableFilesNumber2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesNumber2FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableFilesNumber3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesNumber3FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableFilesNumber4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesNumber4FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableFilesNumber5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesNumber5FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

// Small number fields (up to 9 digits).
gSystemConfig.enableFilesNumberS1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesNumberS1FieldType = 2; // 1 - general number | 2 - system currency

gSystemConfig.enableFilesNumberS2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesNumberS2FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableFilesNumberS3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesNumberS3FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableFilesNumberS4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesNumberS4FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableFilesNumberS5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesNumberS5FieldType = 1; // 1 - general number | 2 - system currency

// Date fields.
gSystemConfig.enableFilesDate1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesDate1FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configFilesDate1Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi-complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on) | 6 - history date (backwards on)  | 55 - task date with hour and minute (forward on) | 66 - history date with hour and minute (backwards on)

gSystemConfig.enableFilesDate2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesDate2FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configFilesDate2Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableFilesDate3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesDate3FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configFilesDate3Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableFilesDate4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesDate4FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configFilesDate4Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableFilesDate5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesDate5FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configFilesDate5Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

// File fields.
gSystemConfig.enableFilesFile1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesFile1Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableFilesFile2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesFile2Type = 34; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableFilesFile3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesFile3Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableFilesFile4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesFile4Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableFilesFile5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFilesFile5Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

// Activation fields.
gSystemConfig.enableFilesActivation1 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFilesActivation2 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFilesActivation3 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFilesActivation4 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFilesActivation5 = 0; // 0 - disable | 1 - enable
// ----------------------

// Frontend configuration.
gSystemConfig.configFilesImagePlaceholder = 0; // 0 - disable | 1 - enable

gSystemConfig.enableFilesFrontendPagination = 0; // 0 - disable | 1 - enable (custom) | 11 - enable (bootstrap)
gSystemConfig.enableFilesFrontendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configFilesFrontendPaginationNRecords = 10;
// **************************************************************************************

// Content - configuration and resources.
// **************************************************************************************
gSystemConfig.configContentSort = 'id ASC'; // options: id | sort_order | date_creation esc | date_creation desc
gSystemConfig.enableContentSortCustom = 0; // 0 - disable | 1 - enable
/*
gSystemConfig.configContentInputOrder = ["inputRowContent_id_parent", 
                                            "inputRowContent_sort_order", 
                                            "inputRowContent_date1", 
                                            "inputRowContent_id_register_user", 
                                            "inputRowContent_content_type", 
                                            "inputRowContent_content_columns", 
                                            "inputRowContent_align_text", 
                                            "inputRowContent_align_image", 
                                            "inputRowContent_content_text", 
                                            "inputRowContent_content_url", 
                                            "inputRowContent_caption", 
                                            "inputRowContent_file", 
                                            "inputRowContent_activation"
                                          ];*/ /* not in use */

// Basic resources.
gSystemConfig.enableContentSortOrder = 0; // 0 - disable | 1 - enable
gSystemConfig.enableContentIdParentEdit = 0; // 0 - disable | 1 - enable
gSystemConfig.enableContentURL = 0; // 0 - disable | 1 - enable
// gSystemConfig.enableContentCaption = 1; // 0 - disable | 1 - enable
gSystemConfig.enableContentFileThumbnail = 0; // 0 - disable | 1 - enable
gSystemConfig.enableContentColumns = 0; // 0 - disable | 1 - enable
gSystemConfig.enableContentImageNoResize = 1; // 0 - disable | 1 - enable

gSystemConfig.enableContentHTML = 1; // 0 - disable | 1 - enable
gSystemConfig.enableContentVideos = 0; // 0 - disable | 1 - enable
gSystemConfig.enableContentFiles = 1; // 0 - disable | 1 - enable

gSystemConfig.enableContentBindRegisterUser = 0; // 0 - disable | 1 - enable
gSystemConfig.configContentBindRegisterUserMethod = 1; // 1 - category ID | 2 - register type
gSystemConfig.configContentBindRegisterUserIDReference = 3892; // category ID / register type ID | 0 - all registeres
gSystemConfig.configContentBindRegisterUserSort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order
// **************************************************************************************

// Products - configuration and resources.
// **************************************************************************************
gSystemConfig.configProductsSort = 'sort_order'; // options: id | sort_order | date_creation esc | date_creation desc | title
gSystemConfig.enableProductsSortCustom = 1; // 0 - disable | 1 - enable
// gSystemConfig.configProductsInputOrder = ['inputRowProducts_id_parent', 'inputRowProducts_sort_order', 'inputRowProducts_date1', 'inputRowProducts_id_register_user', 'inputRowProducts_title', 'inputRowProducts_description', 'inputRowProducts_url_alias', 'inputRowProducts_meta_title', 'inputRowProducts_meta_description', 'inputRowProducts_keywords_tags', 'inputRowProducts_info1', 'inputRowProducts_info_small1', 'inputRowProducts_number1', 'inputRowProducts_number_small1', 'inputRowProducts_image_main', 'inputRowProducts_file1', 'inputRowProducts_file2', 'inputRowProducts_activation', 'inputRowProducts_id_restricted_access', 'inputRowProducts_id_status', 'inputRowProducts_notes'];
gSystemConfig.configProductsInputOrder = [];

// Basic resources.
gSystemConfig.enableProductsIdParentEdit = 1; // 0 - disable | 1 - enable
gSystemConfig.enableProductsSortOrder = 1; // 0 - disable | 1 - enable
gSystemConfig.enableProductsType = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsCode = 1; // 0 - disable | 1 - enable
gSystemConfig.enableProductsDescription = 1; // 0 - disable | 1 - enable
gSystemConfig.enableProductsValue = 1; // 0 - disable | 1 - enable
gSystemConfig.enableProductsValue1 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsValue2 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsWeight = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsCoefficient = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsImageMain = 1; // 0 - disable | 1 - enable
gSystemConfig.enableProductsImageMainCaption = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsStatus = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsRestrictedAccess = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsNotes = 0; // 0 - disable | 1 - enable

gSystemConfig.configProductsURLAlias = 0; // 0 - disable | 1 - automatic | 2 - custom
gSystemConfig.enableProductsKeywordsTags = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsMetaDescription = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsMetaTitle = 0; // 0 - disable | 1 - enable

// Pagination.
gSystemConfig.enableProductsBackendPagination = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsBackendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configProductsBackendPaginationNRecords = 15;

// Resources.
gSystemConfig.enableProductsImages = 1; // 0 - disable | 1 - enable
gSystemConfig.enableProductsVideos = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsFiles = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsZip = 0; // 0 - disable | 1 - enable

// User bind (link products to registers).
// ----------------------
gSystemConfig.enableProductsBindRegisterUser = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsBindRegisterUserMethod = 1; // 1 - category ID | 2 - register type
gSystemConfig.configProductsBindRegisterUserIDReference = 3892; // category ID / register type ID | 0 - all registeres
gSystemConfig.configProductsBindRegisterUserSort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableProductsBindRegister1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsBindRegister1Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configProductsBindRegister1IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configProductsBindRegister1Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableProductsBindRegister2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsBindRegister2Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configProductsBindRegister2IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configProductsBindRegister2Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableProductsBindRegister3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsBindRegister3Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configProductsBindRegister3IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configProductsBindRegister3Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableProductsBindRegister4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsBindRegister4Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configProductsBindRegister4IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configProductsBindRegister4Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableProductsBindRegister5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsBindRegister5Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configProductsBindRegister5IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configProductsBindRegister5Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order
// ----------------------

// Optional fields (field titles in the language configuration file).
// ----------------------
// Generic filters.
gSystemConfig.enableProductsFilterGeneric1 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric2 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric3 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric4 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric5 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric6 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric7 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric8 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric9 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric10 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric11 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric12 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric13 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric14 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric15 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric16 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric17 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric18 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric19 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric20 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric21 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric22 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric23 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric24 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric25 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric26 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric27 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric28 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric29 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableProductsFilterGeneric30 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio

// Big information fields.
gSystemConfig.enableProductsInfo1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo1FieldType = 12; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo2FieldType = 11; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo3FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo4FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo5FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo6 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo6FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo7 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo7FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo8 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo8FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo9 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo9FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo10 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo10FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo11 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo11FieldType = 12; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo12 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo12FieldType = 11; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo13 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo13FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo14 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo14FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo15 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo15FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo16 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo16FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo17 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo17FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo18 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo18FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo19 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo19FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableProductsInfo20 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfo20FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

// Small information fields.
gSystemConfig.enableProductsInfoS1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS1FieldType = 2; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS2FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS3FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS4FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS5FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS6 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS6FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS7 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS7FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS8 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS8FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS9 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS9FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS10 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS10FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS11 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS11FieldType = 2; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS12 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS12FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS13 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS13FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS14 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS14FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS15 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS15FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS16 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS16FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS17 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS17FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS18 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS18FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS19 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS19FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS20 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS20FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS21 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS21FieldType = 2; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS22 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS22FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS23 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS23FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS24 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS24FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS25 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS25FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS26 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS26FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS27 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS27FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS28 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS28FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS29 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS29FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableProductsInfoS30 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsInfoS30FieldType = 1; // 1 - single line | 2 - multiline

// Big number fields (up to 34 digits).
gSystemConfig.enableProductsNumber1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsNumber1FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableProductsNumber2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsNumber2FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableProductsNumber3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsNumber3FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableProductsNumber4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsNumber4FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableProductsNumber5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsNumber5FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

// Small number fields (up to 9 digits).
gSystemConfig.enableProductsNumberS1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsNumberS1FieldType = 2; // 1 - general number | 2 - system currency

gSystemConfig.enableProductsNumberS2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsNumberS2FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableProductsNumberS3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsNumberS3FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableProductsNumberS4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsNumberS4FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableProductsNumberS5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsNumberS5FieldType = 1; // 1 - general number | 2 - system currency

// URLs.
gSystemConfig.enableProductsURL1 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsURL2 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsURL3 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsURL4 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsURL5 = 0; // 0 - disable | 1 - enable

// Date fields.
gSystemConfig.enableProductsDate1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsDate1FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configProductsDate1Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi-complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on) | 6 - history date (backwards on)  | 55 - task date with hour and minute (forward on) | 66 - history date with hour and minute (backwards on)

gSystemConfig.enableProductsDate2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsDate2FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configProductsDate2Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableProductsDate3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsDate3FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configProductsDate3Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableProductsDate4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsDate4FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configProductsDate4Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableProductsDate5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsDate5FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configProductsDate5Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

// File fields.
gSystemConfig.enableProductsFile1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsFile1Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableProductsFile2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsFile2Type = 34; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableProductsFile3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsFile3Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableProductsFile4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsFile4Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableProductsFile5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configProductsFile5Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

// Activation fields.
gSystemConfig.enableProductsActivation1 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsActivation2 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsActivation3 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsActivation4 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableProductsActivation5 = 0; // 0 - disable | 1 - enable

// Frontend configuration.
gSystemConfig.configProductsImagePlaceholder = 1; // 0 - disable | 1 - enable
gSystemConfig.configProductsTitleLimitChar = 0; // 0 - disable | 123
gSystemConfig.configProductsDescriptionLimitChar = 150; // 0 - disable | 123

gSystemConfig.enableProductsFrontendPagination = 0; // 0 - disable | 1 - enable (custom) | 11 - enable (bootstrap)
gSystemConfig.enableProductsFrontendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configProductsFrontendPaginationNRecords = 10;
// **************************************************************************************

// Publications - configuration and resources.
// **************************************************************************************
gSystemConfig.configPublicationsSort = 'date_creation desc'; // options: id | sort_order | date_creation asc | date_creation desc | title
gSystemConfig.enablePublicationsSortCustom = 1; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsInputOrder = ['inputRowPublications_id_parent', 'inputRowPublications_sort_order', 'inputRowPublications_date1', 'inputRowPublications_id_register_user', 'inputRowPublications_title', 'inputRowPublications_description', 'inputRowPublications_url_alias', 'inputRowPublications_meta_title', 'inputRowPublications_meta_description', 'inputRowPublications_keywords_tags', 'inputRowPublications_info1', 'inputRowPublications_number1', 'inputRowPublications_image_main', 'inputRowPublications_file1', 'inputRowPublications_file2', 'inputRowPublications_activation', 'inputRowPublications_id_restricted_access', 'inputRowPublications_id_status', 'inputRowPublications_notes'];

// Basic resources.
gSystemConfig.enablePublicationsIdParentEdit = 1; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsSortOrder = 0; // 0 - disable | 1 - enable

gSystemConfig.enablePublicationsDateStart = 0; // 0 - disable | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configPublicationsDateStartType = 55; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi-complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on) | 6 - history date (backwards on)  | 55 - task date with hour and minute (forward on) | 66 - history date with hour and minute (backwards on)

gSystemConfig.enablePublicationsDateEnd = 0; // 0 - disable | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configPublicationsDateEndType = 55; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi-complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on) | 6 - history date (backwards on)  | 55 - task date with hour and minute (forward on) | 66 - history date with hour and minute (backwards on)

gSystemConfig.enablePublicationsDescription = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsSource = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsSourceURL = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsImageMain = 1; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsImageMainCaption = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsStatus = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsRestrictedAccess = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsNotes = 0; // 0 - disable | 1 - enable

gSystemConfig.configPublicationsURLAlias = 0; // 0 - disable | 1 - automatic | 2 - custom
gSystemConfig.enablePublicationsKeywordsTags = 1; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsMetaDescription = 1; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsMetaTitle = 1; // 0 - disable | 1 - enable

// Pagination.
gSystemConfig.enablePublicationsBackendPagination = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsBackendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsBackendPaginationNRecords = 15;

// Resources.
gSystemConfig.enablePublicationsContent = 1; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsImages = 1; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsVideos = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsFiles = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsZip = 0; // 0 - disable | 1 - enable

// User bind (link categories to registers).
// ----------------------
gSystemConfig.enablePublicationsBindRegisterUser = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsBindRegisterUserMethod = 1; // 1 - category ID | 2 - register type
gSystemConfig.configPublicationsBindRegisterUserIDReference = 3892; // category ID / register type ID | 0 - all registeres
gSystemConfig.configPublicationsBindRegisterUserSort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enablePublicationsBindRegister1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsBindRegister1Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configPublicationsBindRegister1IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configPublicationsBindRegister1Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enablePublicationsBindRegister2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsBindRegister2Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configPublicationsBindRegister2IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configPublicationsBindRegister2Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enablePublicationsBindRegister3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsBindRegister3Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configPublicationsBindRegister3IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configPublicationsBindRegister3Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enablePublicationsBindRegister4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsBindRegister4Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configPublicationsBindRegister4IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configPublicationsBindRegister4Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enablePublicationsBindRegister5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsBindRegister5Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configPublicationsBindRegister5IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configPublicationsBindRegister5Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order
// ----------------------

// Optional fields (field titles in the language configuration file).
// ----------------------
// Generic filters.
gSystemConfig.enablePublicationsFilterGeneric1 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enablePublicationsFilterGeneric2 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enablePublicationsFilterGeneric3 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enablePublicationsFilterGeneric4 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enablePublicationsFilterGeneric5 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enablePublicationsFilterGeneric6 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enablePublicationsFilterGeneric7 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enablePublicationsFilterGeneric8 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enablePublicationsFilterGeneric9 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enablePublicationsFilterGeneric10 = 0; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio

// Big information fields.
gSystemConfig.enablePublicationsInfo1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsInfo1FieldType = 12; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enablePublicationsInfo2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsInfo2FieldType = 11; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enablePublicationsInfo3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsInfo3FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enablePublicationsInfo4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsInfo4FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enablePublicationsInfo5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsInfo5FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enablePublicationsInfo6 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsInfo6FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enablePublicationsInfo7 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsInfo7FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enablePublicationsInfo8 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsInfo8FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enablePublicationsInfo9 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsInfo9FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enablePublicationsInfo10 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsInfo10FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

// Big number fields (up to 34 digits).
gSystemConfig.enablePublicationsNumber1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsNumber1FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enablePublicationsNumber2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsNumber2FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enablePublicationsNumber3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsNumber3FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enablePublicationsNumber4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsNumber4FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enablePublicationsNumber5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsNumber5FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

// URLs.
gSystemConfig.enablePublicationsURL1 = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsURL2 = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsURL3 = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsURL4 = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsURL5 = 0; // 0 - disable | 1 - enable

// Date fields.
gSystemConfig.enablePublicationsDate1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsDate1FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configPublicationsDate1Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi-complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on) | 6 - history date (backwards on)  | 55 - task date with hour and minute (forward on) | 66 - history date with hour and minute (backwards on)

gSystemConfig.enablePublicationsDate2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsDate2FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configPublicationsDate2Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enablePublicationsDate3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsDate3FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configPublicationsDate3Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enablePublicationsDate4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsDate4FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configPublicationsDate4Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enablePublicationsDate5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsDate5FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configPublicationsDate5Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

// File fields.
gSystemConfig.enablePublicationsFile1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsFile1Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enablePublicationsFile2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsFile2Type = 34; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enablePublicationsFile3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsFile3Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enablePublicationsFile4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsFile4Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enablePublicationsFile5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsFile5Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

// Activation fields.
gSystemConfig.enablePublicationsActivation1 = 1; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsActivation2 = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsActivation3 = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsActivation4 = 0; // 0 - disable | 1 - enable
gSystemConfig.enablePublicationsActivation5 = 0; // 0 - disable | 1 - enable

// Frontend configuration.
gSystemConfig.configPublicationsImagePlaceholder = 1; // 0 - disable | 1 - enable

gSystemConfig.enablePublicationsFrontendPagination = 0; // 0 - disable | 1 - enable (custom) | 11 - enable (bootstrap)
gSystemConfig.enablePublicationsFrontendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configPublicationsFrontendPaginationNRecords = 10;
// **************************************************************************************

// Registers - configuration and resources.
// **************************************************************************************
gSystemConfig.configRegistersSort = 'id DESC'; // options: id | sort_order | date_creation esc | date_creation desc | name_full
gSystemConfig.enableRegistersSortCustom = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInputOrder = ['inputRowRegisters_id_parent', 'inputRowRegisters_sort_order', 'inputRowRegisters_name', 'inputRowRegisters_info1', 'inputRowRegisters_image_main', 'inputRowRegisters_activation', 'inputRowRegisters_id_status', 'inputRowRegisters_notes'];

// Authentication method.
gSystemConfig.configRegistersAuthenticationMethod = 1; // 1 - cookie | 2 session
gSystemConfig.configRegistersAuthenticationCheck = 1; // 0 - only checks if the cookie / session is empty or not (faster) | 1 - reads the database and checks if the user exists and is active (safer, but slower)

// Basic resources.
gSystemConfig.enableRegistersIdParentEdit = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersSortOrder = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersType = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersActivity = 1; // 0 - disable | 1 - enable

gSystemConfig.enableRegistersRegisterType = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersNameTitle = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersNameFull = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersNameFirst = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersNameLast = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersCompanyNameLegal = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersCompanyNameAlias = 1; // 0 - disable | 1 - enable

gSystemConfig.enableRegistersDescription = 1; // 0 - disable | 1 - enable

gSystemConfig.configRegistersURLAlias = 1; // 0 - disable | 1 - automatic | 2 - custom
gSystemConfig.enableRegistersKeywordsTags = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersMetaDescription = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersMetaTitle = 1; // 0 - disable | 1 - enable

gSystemConfig.enableRegistersDateBirth = 11; // 0 - disable | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.enableRegistersGender = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersHeight = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersWeight = 1; // 0 - disable | 1 - enable

gSystemConfig.enableRegistersDocumentType = 1; // 0 - no rule | 1 - social security (USA) | 55 - cpf (BRA)
gSystemConfig.enableRegistersDocument = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersDocument1Type = 1; // 0 - no rule
gSystemConfig.enableRegistersDocument1 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersDocument2Type = 1; // 0 - no rule
gSystemConfig.enableRegistersDocument2 = 1; // 0 - disable | 1 - enable

gSystemConfig.enableRegistersDocumentCompanyType = 1; // 0 - no rule | 1 - federal register (USA) | 55 - cnpj (BRA)
gSystemConfig.enableRegistersDocumentCompany = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersDocumentCompany1Type = 1; // 0 - no rule | 1 - county register (USA) | 55 - municipal register (BRA)
gSystemConfig.enableRegistersDocumentCompany1 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersDocumentCompany2Type = 1; // 0 - no rule | 1 - state register (USA) | 55 - state register (BRA)
gSystemConfig.enableRegistersDocumentCompany2 = 1; // 0 - disable | 1 - enable

gSystemConfig.enableRegistersZIPCode = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersAddressStreet = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersAddressNumber = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersAddressComplement = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersNeighborhood = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersDistrict = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersCounty = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersCity = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersState = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersCountry = 1; // 0 - disable | 1 - enable

gSystemConfig.enableRegistersAddressConfig = 1; // 0 - disable | 1 - fields | 2 - dropdown (internal DB) | 3 - dropdown (zip code DB) | 4 API (research)

gSystemConfig.enableRegistersLocationReference = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersLocationMap = 1; // 0 - disable | 1 - enable (google maps iframe embeded)

gSystemConfig.enableRegistersPhoneInternationalCode = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersPhone1 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersPhone2 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersPhone3 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersWebsite = 1; // 0 - disable | 1 - enable

gSystemConfig.enableRegistersUsername = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersEmail = 1; // 0 - disable | 1 - enable

gSystemConfig.configRegistersPassword = 1; // 0 - don´t display | 1 - display
gSystemConfig.configRegistersPasswordMethod = 26; // 23 - Crypto Module algorithm: aes-128-cbc and simple key password | 24 - Crypto Module algorithm: aes-128-cbc - 16 byte key and 16 byte iv | 26 - Crypto Module algorithm: aes-256-cbc - 32 byte key and 16 byte iv

gSystemConfig.enableRegistersImageMain = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersImageMainCaption = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersImageLogo = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersImageBanner = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersStatus = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersRestrictedAccess = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersNotes = 1; // 0 - disable | 1 - enable

// Pagination.
gSystemConfig.enableRegistersBackendPagination = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersBackendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersBackendPaginationNRecords = 15;

// Resources.
gSystemConfig.enableRegistersContent = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersImages = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersVideos = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersFiles = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersZip = 1; // 0 - disable | 1 - enable

// User bind (link registers to registers).
// ----------------------
gSystemConfig.enableRegistersBindRegisterUser = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersBindRegisterUserMethod = 1; // 1 - category ID | 2 - register type
gSystemConfig.configRegistersBindRegisterUserIDReference = 3892; // category ID / register type ID | 0 - all registeres
gSystemConfig.configRegistersBindRegisterUserSort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableRegistersBindRegister1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersBindRegister1Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configRegistersBindRegister1IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configRegistersBindRegister1Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableRegistersBindRegister2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersBindRegister2Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configRegistersBindRegister2IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configRegistersBindRegister2Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableRegistersBindRegister3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersBindRegister3Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configRegistersBindRegister3IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configRegistersBindRegister3Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableRegistersBindRegister4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersBindRegister4Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configRegistersBindRegister4IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configRegistersBindRegister4Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableRegistersBindRegister5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersBindRegister5Method = 1; // 1 - category ID | 2 - register type
gSystemConfig.configRegistersBindRegister5IDReference = 3892; // category ID / register type ID | 0 - all register categories
gSystemConfig.configRegistersBindRegister5Sort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order
// ----------------------

// Optional fields (field titles in the language configuration file).
// ----------------------
// Generic filters.
gSystemConfig.enableRegistersFilterGeneric1 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric2 = 2; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric3 = 3; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric4 = 4; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric5 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric6 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric7 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric8 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric9 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric10 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric11 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric12 = 2; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric13 = 3; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric14 = 4; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric15 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric16 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric17 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric18 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric19 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric20 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric21 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric22 = 2; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric23 = 3; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric24 = 4; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric25 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric26 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric27 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric28 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric29 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric30 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric31 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric32 = 2; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric33 = 3; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric34 = 4; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric35 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric36 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric37 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric38 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric39 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio
gSystemConfig.enableRegistersFilterGeneric40 = 1; // 0 - disable | 1 - checkbox | 2 - listbox | 3 - dropdown | 4 - radio

// Big information fields.
gSystemConfig.enableRegistersInfo1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo1FieldType = 12; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo2FieldType = 11; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo3FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo4FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo5FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo6 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo6FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo7 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo7FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo8 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo8FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo9 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo9FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo10 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo10FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo11 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo11FieldType = 12; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo12 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo12FieldType = 11; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo13 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo13FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo14 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo14FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo15 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo15FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo16 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo16FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo17 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo17FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo18 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo18FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo19 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo19FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableRegistersInfo20 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfo20FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

// Small information fields.
gSystemConfig.enableRegistersInfoS1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS1FieldType = 2; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS2FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS3FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS4FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS5FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS6 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS6FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS7 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS7FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS8 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS8FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS9 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS9FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS10 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS10FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS11 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS11FieldType = 2; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS12 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS12FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS13 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS13FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS14 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS14FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS15 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS15FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS16 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS16FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS17 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS17FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS18 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS18FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS19 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS19FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS20 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS20FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS21 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS21FieldType = 2; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS22 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS22FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS23 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS23FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS24 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS24FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS25 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS25FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS26 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS26FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS27 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS27FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS28 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS28FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS29 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS29FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableRegistersInfoS30 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersInfoS30FieldType = 1; // 1 - single line | 2 - multiline

// Big number fields (up to 34 digits).
gSystemConfig.enableRegistersNumber1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersNumber1FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableRegistersNumber2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersNumber2FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableRegistersNumber3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersNumber3FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableRegistersNumber4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersNumber4FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableRegistersNumber5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersNumber5FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

// Small number fields (up to 9 digits).
gSystemConfig.enableRegistersNumberS1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersNumberS1FieldType = 2; // 1 - general number | 2 - system currency

gSystemConfig.enableRegistersNumberS2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersNumberS2FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableRegistersNumberS3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersNumberS3FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableRegistersNumberS4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersNumberS4FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableRegistersNumberS5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersNumberS5FieldType = 1; // 1 - general number | 2 - system currency

// URLs.
gSystemConfig.enableRegistersURL1 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersURL2 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersURL3 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersURL4 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersURL5 = 1; // 0 - disable | 1 - enable

// Date fields.
gSystemConfig.enableRegistersDate1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersDate1FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configRegistersDate1Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi-complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on) | 6 - history date (backwards on)  | 55 - task date with hour and minute (forward on) | 66 - history date with hour and minute (backwards on)

gSystemConfig.enableRegistersDate2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersDate2FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configRegistersDate2Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableRegistersDate3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersDate3FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configRegistersDate3Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableRegistersDate4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersDate4FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configRegistersDate4Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableRegistersDate5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersDate5FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configRegistersDate5Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableRegistersDate6 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersDate6FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configRegistersDate6Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableRegistersDate7 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersDate7FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configRegistersDate7Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableRegistersDate8 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersDate8FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configRegistersDate8Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableRegistersDate9 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersDate9FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configRegistersDate9Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

gSystemConfig.enableRegistersDate10 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersDate10FieldType = 11; // 1 - JQuery DatePicker  | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.configRegistersDate10Type = 1; // 1 - simple date (year, month, day) | 2 -  complete date (year, month, day, hour, minute, seconds) | 3 - semi complete date (year, month, day, hour, minute) | 4 - birth date (limited range) | 5 - task date (forward on)

// File fields.
gSystemConfig.enableRegistersFile1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersFile1Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableRegistersFile2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersFile2Type = 34; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableRegistersFile3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersFile3Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableRegistersFile4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersFile4Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

gSystemConfig.enableRegistersFile5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersFile5Type = 3; // 1 - image | 3 - file (download) | 34 - file (open direct)

// Activation fields.
gSystemConfig.enableRegistersActivation1 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersActivation2 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersActivation3 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersActivation4 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableRegistersActivation5 = 1; // 0 - disable | 1 - enable

// Register types.
gSystemConfig.configRegistersIDClient = 1595;
gSystemConfig.configRegistersIDUser = 1595;
gSystemConfig.configRegistersIDUserSeller = 123;
gSystemConfig.configRegistersIDUserHR = 123;
gSystemConfig.configRegistersIDSubscriber = 1596;

// Frontend configuration.
// Register forms.
gSystemConfig.configRegistersFormFieldsClient = [];
gSystemConfig.configRegistersFormFieldsUser = [];
gSystemConfig.configRegistersFormFieldsUserSeller = [];
gSystemConfig.configRegistersFormFieldsUserHR = [];
gSystemConfig.configRegistersFormFieldsSubscriber = [];

// Terms.
gSystemConfig.configRegistersIDTerms = 123; // 0 - disable | 123 (content ID)

// e-mail validation / confirmation.
gSystemConfig.configRegistersIDEmailValidation = 123; // 0 - disable | 123 (content ID)

// Password resend.
gSystemConfig.configRegistersIDPasswordResend = 123; // 0 - disable | 123 (content ID)

gSystemConfig.configRegistersImagePlaceholder = 1; // 0 - disable | 1 - enable

gSystemConfig.enableRegistersFrontendPagination = 1; // 0 - disable | 1 - enable (custom) | 11 - enable (bootstrap)
gSystemConfig.enableRegistersFrontendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configRegistersFrontendPaginationNRecords = 10;
// **************************************************************************************

// Quizzes / Polls - configuration and resources.
// **************************************************************************************
gSystemConfig.configQuizzesSort = 'id DESC'; // options: id | sort_order | title
gSystemConfig.configQuizzesOptionsSort = 'id DESC'; // options: id | sort_order | title
gSystemConfig.configQuizzesInputOrder = ['inputRowPublications_id_parent', 'inputRowPublications_sort_order', 'inputRowPublications_id_register_user', 'inputRowPublications_title', 'inputRowPublications_description', 'inputRowPublications_url_alias', 'inputRowPublications_meta_title', 'inputRowPublications_meta_description', 'inputRowPublications_keywords_tags', 'inputRowPublications_info1', 'inputRowPublications_number1', 'inputRowPublications_image_main', 'inputRowPublications_file1', 'inputRowPublications_file2', 'inputRowPublications_activation', 'inputRowPublications_id_status', 'inputRowPublications_notes'];

// Basic resources.
gSystemConfig.enableQuizzesIdParentEdit = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesSortOrder = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesType = 0; // 0 - disable | 1 - enable
// gSystemConfig.configQuizzesTypeDefault = 2; // 1 - poll | 2 - quiz (multiple questions)  | 3 - (written template answer) | (Valid only if enableQuizzesType = 0)

gSystemConfig.enableQuizzesBindRegisterUser = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesBindRegisterUserMethod = 1; // 1 - category ID | 2 - register type
gSystemConfig.configQuizzesBindRegisterUserIDReference = 3892; // category ID / register type ID | 0 - all registeres
gSystemConfig.configQuizzesBindRegisterUserSort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableQuizzesDescription = 1; // 0 - disable | 1 - enable

gSystemConfig.configQuizzesURLAlias = 1; // 0 - disable | 1 - automatic | 2 - custom
gSystemConfig.enableQuizzesKeywordsTags = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesMetaDescription = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesMetaTitle = 1; // 0 - disable | 1 - enable

gSystemConfig.enableQuizzesImageMain = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesImageMainCaption = 1; // 0 - disable | 1 - enable

gSystemConfig.enableQuizzesStatus = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesNotes = 1; // 0 - disable | 1 - enable

// Pagination.
gSystemConfig.enableQuizzesBackendPagination = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesBackendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesBackendPaginationNRecords = 15;

// Resources.
gSystemConfig.enableQuizzesContent = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesImages = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesVideos = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesFiles = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesZip = 1; // 0 - disable | 1 - enable

// Big information fields.
gSystemConfig.enableQuizzesInfo1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesInfo1FieldType = 12; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesInfo2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesInfo2FieldType = 11; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesInfo3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesInfo3FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesInfo4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesInfo4FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesInfo5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesInfo5FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

// Big number fields (up to 34 digits).
gSystemConfig.enableQuizzesNumber1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesNumber1FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesNumber2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesNumber2FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesNumber3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesNumber3FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesNumber4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesNumber4FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesNumber5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesNumber5FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

// Activation fields.
gSystemConfig.enableQuizzesActivation1 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesActivation2 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesActivation3 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesActivation4 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesActivation5 = 1; // 0 - disable | 1 - enable

// Frontend configuration.
gSystemConfig.configQuizzesImagePlaceholder = 1; // 0 - disable | 1 - enable

gSystemConfig.enableQuizzesFrontendPagination = 1; // 0 - disable | 1 - enable (custom) | 11 - enable (bootstrap)
gSystemConfig.enableQuizzesFrontendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesFrontendPaginationNRecords = 10;

// Options.
// TODO: Create extra column id_quizzes_options_answer in quizzes_options, if want to enable multiple answers right.
gSystemConfig.enableQuizzesOptionsSortOrder = 1; // 0 - disable | 1 - enable

// gSystemConfig.enableQuizzesOptionsTitle = 1; // 0 - disable | 1 - enable
// gSystemConfig.enableQuizzesOptionsDescription = 1; // 0 - disable | 1 - enable
gSystemConfig.enableQuizzesOptionsImageMain = 1; // 0 - disable | 1 - enable
// gSystemConfig.enableQuizzesOptionsImageMainCaption = 1; // 0 - disable | 1 - enable

gSystemConfig.enableQuizzesOptionsAnswer = 1; // 0 - disable | 1 - enable

// Optional fields (field titles in the language configuration file).
// Big information fields.
gSystemConfig.enableQuizzesOptionsInfo1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsInfo1FieldType = 12; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesOptionsInfo2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsInfo2FieldType = 11; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesOptionsInfo3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsInfo3FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesOptionsInfo4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsInfo4FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableQuizzesOptionsInfo5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsInfo5FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

// Big number fields (up to 34 digits).
gSystemConfig.enableQuizzesOptionsNumber1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsNumber1FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesOptionsNumber2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsNumber2FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesOptionsNumber3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsNumber3FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesOptionsNumber4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsNumber4FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals

gSystemConfig.enableQuizzesOptionsNumber5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configQuizzesOptionsNumber5FieldType = 1; // 1 - general number | 2 - system currency | 3 - decimal | 4 - system currency with decimals
// **************************************************************************************

// Forms - configuration and resources.
// **************************************************************************************
gSystemConfig.configFormsSort = 'form_title'; // options: id | sort_order | form_title | recipient_name | recipient_email
gSystemConfig.configFormsFieldsSort = 'id'; // options: id | sort_order
gSystemConfig.configFormsFieldsOptionsSort = 'id'; // options: id | sort_order

// Forms.
// ----------------------
gSystemConfig.enableFormsIdParentEdit = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFormsSortOrder = 0; // 0 - disable | 1 - enable

gSystemConfig.enableFormsBindRegisterUser = 0; // 0 - disable | 1 - enable
gSystemConfig.configFormsBindRegisterUserMethod = 1; // 1 - category ID | 2 - register type
gSystemConfig.configFormsBindRegisterUserIDReference = 3892; // category ID / register type ID | 0 - all registeres
gSystemConfig.configFormsBindRegisterUserSort = 'name'; // options: name | name_first | name_last | name_company | date_register esc | date_register desc | sort_order

gSystemConfig.enableFormsRecipientEmailCopy = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFormsSender = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFormsSenderConfig = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFormsEmailFormat = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFormsMessageSuccess = 1; // 0 - disable | 1 - enable
gSystemConfig.enableFormsNotes = 0; // 0 - disable | 1 - enable

gSystemConfig.enableFormsEmailSectors = 1; // 0 - disable | 1 - enable
// ----------------------

// Forms fields.
// ----------------------
gSystemConfig.enableFormsFieldsSortOrder = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFormsFieldsInstructions = 0; // 0 - disable | 1 - enable

gSystemConfig.enableFormsFieldsFieldFilter = 0; // 0 - disable | 1 - enable
gSystemConfig.configFormsFieldsFieldFilter = ['email']; // email

gSystemConfig.enableFormsFieldsRequired = 1; // 0 - disable | 1 - enable

gSystemConfig.enableFormsFieldTypeExtraOptions = 1; // 0 - disable | 1 - enable (text, subheader, etc)

// Optional fields (field titles in the language configuration file).
// Small information fields.
gSystemConfig.enableFormsFieldsInfoS1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFormsFieldsInfoS1FieldType = 2; // 1 - single line | 2 - multiline

gSystemConfig.enableFormsFieldsInfoS2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFormsFieldsInfoS2FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableFormsFieldsInfoS3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFormsFieldsInfoS3FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableFormsFieldsInfoS4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFormsFieldsInfoS4FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableFormsFieldsInfoS5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFormsFieldsInfoS5FieldType = 1; // 1 - single line | 2 - multiline
// ----------------------

// Forms fields options.
gSystemConfig.enableFormsFieldsOptionsSortOrder = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFormsFieldsOptionsConfigSelection = 0; // 0 - disable | 1 - enable
gSystemConfig.enableFormsFieldsOptionsImageMain = 0; // 0 - disable | 1 - enable

// Optional fields (field titles in the language configuration file).
// Small information fields.
gSystemConfig.enableFormsFieldsOptionsInfoS1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFormsFieldsOptionsInfoS1FieldType = 2; // 1 - single line | 2 - multiline

gSystemConfig.enableFormsFieldsOptionsInfoS2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFormsFieldsOptionsInfoS2FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableFormsFieldsOptionsInfoS3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFormsFieldsOptionsInfoS3FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableFormsFieldsOptionsInfoS4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFormsFieldsOptionsInfoS4FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableFormsFieldsOptionsInfoS5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configFormsFieldsOptionsInfoS5FieldType = 1; // 1 - single line | 2 - multiline

// Frontend configuration.

// **************************************************************************************

// e-mail - configuration and resources.
// **************************************************************************************
gSystemConfig.enableEmailSenderDefault = 'web@brigadeirojiujitsu.com';
gSystemConfig.enableEmailSenderNameDefault = 'Brigadeiro Jiu-Jitsu';
gSystemConfig.enableEmailReplyDefault = 'web@brigadeirojiujitsu.com';

gSystemConfig.enableEmailRecipientDefault = 'web@brigadeirojiujitsu.com';
gSystemConfig.enableEmailRecipientNameDefault = 'Brigadeiro Jiu-Jitsu';

gSystemConfig.enableEmailCCDefault = 'web@brigadeirojiujitsu.com';
gSystemConfig.enableEmailCCNameDefault = 'Brigadeiro Jiu-Jitsu';

gSystemConfig.enableEmailBCCDefault = 'web@brigadeirojiujitsu.com';
gSystemConfig.enableEmailBCCNameDefault = 'Brigadeiro Jiu-Jitsu';

gSystemConfig.enableEmailTSL = true;
gSystemConfig.enableEmailSSL = false;
// **************************************************************************************

// Filters Generic - configuration and resources.
// **************************************************************************************
gSystemConfig.configFiltersGenericSort = 'id DESC'; // options: id | sort_order | date_creation esc | date_creation desc | title
gSystemConfig.enableFiltersGenericSortCustom = 1; // 0 - disable | 1 - enable
gSystemConfig.configFiltersGenericInputOrder = ['inputRowFiltersGeneric_id_parent', 'inputRowFiltersGeneric_sort_order', 'inputRowFiltersGeneric_id_register_user', 'inputRowFiltersGeneric_title', 'inputRowFiltersGeneric_description', 'inputRowFiltersGeneric_url_alias', 'inputRowFiltersGeneric_meta_title', 'inputRowFiltersGeneric_meta_description', 'inputRowFiltersGeneric_keywords_tags', 'inputRowFiltersGeneric_info_small1', 'inputRowFiltersGeneric_number_small1', 'inputRowFiltersGeneric_image_main', 'inputRowFiltersGeneric_activation', 'inputRowFiltersGeneric_notes'];

// Basic resources.
gSystemConfig.enableFiltersGenericSortOrder = 1; // 0 - disable | 1 - enable
gSystemConfig.enableFiltersGenericDescription = 1; // 0 - disable | 1 - enable
gSystemConfig.enableFiltersGenericImageMain = 1; // 0 - disable | 1 - enable
gSystemConfig.enableFiltersGenericConfigSelection = 1; // 0 - disable | 1 - enable
gSystemConfig.enableFiltersGenericNotes = 1; // 0 - disable | 1 - enable
// TODO: change name on DB

gSystemConfig.configFiltersGenericURLAlias = 1; // 0 - disable | 1 - automatic | 2 - custom
gSystemConfig.enableFiltersGenericKeywordsTags = 1; // 0 - disable | 1 - enable
gSystemConfig.enableFiltersGenericMetaDescription = 1; // 0 - disable | 1 - enable
gSystemConfig.enableFiltersGenericMetaTitle = 1; // 0 - disable | 1 - enable

// Small information fields.
gSystemConfig.enableFiltersGenericInfoS1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configFiltersGenericInfoS1FieldType = 2; // 1 - single line | 2 - multiline

gSystemConfig.enableFiltersGenericInfoS2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configFiltersGenericInfoS2FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableFiltersGenericInfoS3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configFiltersGenericInfoS3FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableFiltersGenericInfoS4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configFiltersGenericInfoS4FieldType = 1; // 1 - single line | 2 - multiline

gSystemConfig.enableFiltersGenericInfoS5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configFiltersGenericInfoS5FieldType = 1; // 1 - single line | 2 - multiline

// Small number fields (up to 9 digits).
gSystemConfig.enableFiltersGenericNumberS1 = 1; // 0 - disable | 1 - enable
gSystemConfig.configFiltersGenericNumberS1FieldType = 2; // 1 - general number | 2 - system currency

gSystemConfig.enableFiltersGenericNumberS2 = 1; // 0 - disable | 1 - enable
gSystemConfig.configFiltersGenericNumberS2FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableFiltersGenericNumberS3 = 1; // 0 - disable | 1 - enable
gSystemConfig.configFiltersGenericNumberS3FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableFiltersGenericNumberS4 = 1; // 0 - disable | 1 - enable
gSystemConfig.configFiltersGenericNumberS4FieldType = 1; // 1 - general number | 2 - system currency

gSystemConfig.enableFiltersGenericNumberS5 = 1; // 0 - disable | 1 - enable
gSystemConfig.configFiltersGenericNumberS5FieldType = 1; // 1 - general number | 2 - system currency

// Activation fields.
gSystemConfig.enableFiltersGenericActivation1 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableFiltersGenericActivation2 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableFiltersGenericActivation3 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableFiltersGenericActivation4 = 1; // 0 - disable | 1 - enable
gSystemConfig.enableFiltersGenericActivation5 = 1; // 0 - disable | 1 - enable

// Frontend configuration.
gSystemConfig.configFiltersGenericImagePlaceholder = 1; // 0 - disable | 1 - enable
// **************************************************************************************

// Search.
// **************************************************************************************
// **************************************************************************************

// Users.
// **************************************************************************************
gSystemConfig.configUsersSort = 'name_full'; // options: id | sort_order | date_creation esc | date_creation desc | name_full
gSystemConfig.enableUsersSortCustom = 0; // 0 - disable | 1 - enable
// gSystemConfig.configUsersInputOrder = ['inputRowUsers_id_parent', 'inputRowUsers_sort_order', 'inputRowUsers_name', 'inputRowUsers_info1', 'inputRowUsers_image_main', 'inputRowUsers_activation', 'inputRowUsers_id_status', 'inputRowUsers_notes'];
gSystemConfig.configUsersInputOrder = [];

// Authentication method.
gSystemConfig.configUsersRootAuthenticationMethod = 1; // 1 - cookie | 2 session // Root was Master on other versions
gSystemConfig.configUsersRootAuthenticationCheck = 1; // 0 - only checks if the cookie / session is empty or not (faster) | 1 - reads the database and checks if the user exists and is active (safer, but slower)

gSystemConfig.configUsersAuthenticationMethod = 1; // 1 - cookie | 2 session
gSystemConfig.configUsersAuthenticationCheck = 1; // 0 - only checks if the cookie / session is empty or not (faster) | 1 - reads the database and checks if the user exists and is active (safer, but slower)

// Basic resources.
gSystemConfig.enableUsersSortOrder = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersType = 1; // 0 - disable | 1 - enable

gSystemConfig.enableUsersNameTitle = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersNameFull = 1; // 0 - disable | 1 - enable
gSystemConfig.enableUsersNameFirst = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersNameLast = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersDateBirth = 0; // 0 - disable | 2 - dropdown menu | 11 - js-datepicker
gSystemConfig.enableUsersGender = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersDocument = 0; // 0 - disable | 1 - enable
gSystemConfig.configUsersDocument = 0; // 1 - USA | 55 - CPF (BRA) | 1055 - CNPJ (BRA)
gSystemConfig.enableUsersAddress = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersPhoneInternationalCode = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersPhone1 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersPhone2 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersPhone3 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersUsername = 1; // 0 - disable | 1 - enable
gSystemConfig.enableUsersEmail = 0; // 0 - disable | 1 - enable

gSystemConfig.configUsersPassword = 1; // 0 - don´t display | 1 - display
gSystemConfig.configUsersPasswordMethod = 26; // 23 - Crypto Module algorithm: aes-128-cbc and simple key password | 24 - Crypto Module algorithm: aes-128-cbc - 16 byte key and 16 byte iv | 26 - Crypto Module algorithm: aes-256-cbc - 32 byte key and 16 byte iv

gSystemConfig.enableUsersImageMain = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersStatus = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersNotes = 0; // 0 - disable | 1 - enable

// Pagination.
gSystemConfig.enableUsersBackendPagination = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersBackendPaginationNumbering = 1; // 0 - disable | 1 - enable
gSystemConfig.configUsersBackendPaginationNRecords = 15;

// Big information fields.
gSystemConfig.enableUsersInfo1 = 0; // 0 - disable | 1 - enable
gSystemConfig.configUsersInfo1FieldType = 12; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableUsersInfo2 = 0; // 0 - disable | 1 - enable
gSystemConfig.configUsersInfo2FieldType = 11; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableUsersInfo3 = 0; // 0 - disable | 1 - enable
gSystemConfig.configUsersInfo3FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableUsersInfo4 = 0; // 0 - disable | 1 - enable
gSystemConfig.configUsersInfo4FieldType = 2; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableUsersInfo5 = 0; // 0 - disable | 1 - enable
gSystemConfig.configUsersInfo5FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableUsersInfo6 = 0; // 0 - disable | 1 - enable
gSystemConfig.configUsersInfo6FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableUsersInfo7 = 0; // 0 - disable | 1 - enable
gSystemConfig.configUsersInfo7FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableUsersInfo8 = 0; // 0 - disable | 1 - enable
gSystemConfig.configUsersInfo8FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableUsersInfo9 = 0; // 0 - disable | 1 - enable
gSystemConfig.configUsersInfo9FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

gSystemConfig.enableUsersInfo10 = 0; // 0 - disable | 1 - enable
gSystemConfig.configUsersInfo10FieldType = 1; // 1 - single line | 2 - multiline | 11 - single (encrypted) | 12 - multiline (encrypted)

// Activation fields.
gSystemConfig.enableUsersActivation1 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersActivation2 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersActivation3 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersActivation4 = 0; // 0 - disable | 1 - enable
gSystemConfig.enableUsersActivation5 = 0; // 0 - disable | 1 - enable
// **************************************************************************************

// Export module.
// **************************************************************************************
/*
module.exports =  {
    configSystemClientName : configSystemClientName, 
    configSiteTitle : configSiteTitle, 
    configSystemName : configSystemName, 
    configDevName : configDevName, 
    configDevSite : configDevSite, 
    configCopyrightYear : configCopyrightYear, 
    configCopyrightYear : configCopyrightYear, 
    configCopyrightYear : configCopyrightYear, 
    configCopyrightYear : configCopyrightYear, 
    SomeMathObject : SomeMathObject
}
*/

// Export all elements in namespace.
// ref: https:// vancelucas.com/blog/module-exports-all-the-things/
// ref: https:// hackernoon.com/5-techniques-to-iterate-over-javascript-object-entries-and-their-performance-6602dcb708a8
/**/
for (const prop in gSystemConfig) {
  if (gSystemConfig.hasOwnProperty(prop)) {
    module.exports[prop] = gSystemConfig[prop];
  }
}
// exports.gSystemConfig;
// **************************************************************************************
