// ==UserScript==
// @name         SSSSS
// @namespace    http://tampermonkey.net/
// @version      2024-05-11
// @description  try to take over the world!
// @author       You
// @match        https://algeria.blsspainglobal.com/DZA/blsappointment/manageappointment*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blsspainmorocco.net
// @grant        none
// ==/UserScript==

(function() {

    var countryData = [{"Id":"5e44cd63-68f0-41f2-b708-0eb3bf9f4a72","Name":"Morocco","Code":"MAR"},{"Id":"713e181b-c0ab-4f30-b5f6-ee8be4de73ea","Name":"Afghanistan","Code":"AFG"},{"Id":"9c815a0e-a072-4ea2-8fac-175b0ff953c9","Name":"Aland Islands","Code":"ALA"},{"Id":"4e42e61b-ca79-4411-af5c-6e60cbf2f23a","Name":"Albania","Code":"ALB"},{"Id":"a8662331-a1df-43eb-8477-fd82f8ce928e","Name":"Algeria","Code":"DZA"},{"Id":"ba124489-505d-4c1e-baae-885d3f14218b","Name":"American Samoa","Code":"ASM"},{"Id":"9c0262b7-5ece-404e-bd08-d0c106d6fc8f","Name":"Andorra\t","Code":"AND"},{"Id":"4551cafd-7030-41e1-8612-0919a05eb8b5","Name":"Angola\t","Code":"AGO"},{"Id":"ee7a0e9c-000b-4e85-8845-69c0708dbdce","Name":"Anguila\t","Code":"AIA"},{"Id":"c3cb73cb-addc-46a2-900c-a6de351a186f","Name":"Antarctica","Code":"ATA"},{"Id":"4eca3f28-52ef-4ad9-aa8e-db0274f119db","Name":"Antigua and Barbuda\t","Code":"ATG"},{"Id":"1e82da04-60ef-4f21-bb45-9c753d777aff","Name":"Argentina\t","Code":"ARG"},{"Id":"7b1863d9-61ed-411c-9713-9dde4e3ae71f","Name":"Armenia\t","Code":"ARM"},{"Id":"a305379b-4e20-4c26-914c-13ce5c74fba3","Name":"Aruba\t","Code":"ABW"},{"Id":"b5c7000d-308e-4a30-bee2-63d918411612","Name":"Australia\t","Code":"AUS"},{"Id":"019dfec5-10dc-4f69-ad61-f959dd1254e3","Name":"Austria\t","Code":"AUT"},{"Id":"1322c8ac-c651-4554-b438-998113ab7227","Name":"Azerbaijan\t","Code":"AZE"},{"Id":"21c4a061-26ba-45ca-9032-decae9dcc931","Name":"Bahamas","Code":"BHS"},{"Id":"953aade7-1bca-41fa-a8b7-9a3d3baef504","Name":"Bahrain","Code":"BHR"},{"Id":"99da4cba-0925-4477-a78c-415ced6cb729","Name":"Bangladesh","Code":"BGD"},{"Id":"c3ced9b8-980a-4d36-bb4e-d20a5965dced","Name":"Barbados","Code":"BRB"},{"Id":"d025c4db-1618-4746-b82d-515684811cf1","Name":"Belarus","Code":"BLR"},{"Id":"7b03fe2b-0092-41cd-9303-ae8e2b6c5c15","Name":"Belgium\t","Code":"BEL"},{"Id":"c6fadcdf-7ce9-4bdd-aedf-944829be18ad","Name":"Belgium-Luxembourg","Code":"BLX"},{"Id":"682132f4-7967-44a5-982e-d97f069a12e1","Name":"Belize\t","Code":"BLZ"},{"Id":"0f0d5bd0-f921-4ae4-a10e-ea0df7fd2556","Name":"Benin\t","Code":"BEN"},{"Id":"25c77eba-1de1-478d-b835-f9aa1f461ed2","Name":"Bermuda\t","Code":"BMU"},{"Id":"a5d253a9-07db-4486-9a4a-b1a3d7d02d6e","Name":"Bhutan\t","Code":"BTN"},{"Id":"71a74001-a8b8-4867-825c-4efd7f675613","Name":"Bolivia\t","Code":"BOL"},{"Id":"39e912c6-361f-4e16-9616-632e05490f2f","Name":"Bophuthatswana","Code":"ZAF"},{"Id":"ee63c82a-1d66-4407-b000-bb4ac18cb1f1","Name":"Bosnia and Herzegovina\t","Code":"BIH"},{"Id":"d605b064-5716-4baa-8fd6-26329e8d64e1","Name":"Bosnia Herzegovina","Code":"BIH"},{"Id":"088bd628-635a-406d-9edc-c3d8b46682f1","Name":"Botswana\t","Code":"BWA"},{"Id":"7cd484e1-5146-4272-90db-0d83d2a10fde","Name":"Bouvet Island","Code":"BVT"},{"Id":"3840e794-70c8-49d3-a52a-c531007440ee","Name":"Brazil\t","Code":"BRA"},{"Id":"a4044597-658a-4ffe-bb18-6e78be59e910","Name":"British Indian Ocean Territory","Code":"IOT"},{"Id":"3d9f36d8-69c8-44b2-876c-e6e60c1f9c78","Name":"British Virgin Islands\t\t","Code":"VGB"},{"Id":"2e92c425-90d1-4bb5-bba9-e5574e4da787","Name":"Brunei\t","Code":"BRN"},{"Id":"0927c5e6-cda6-4ac2-8962-715864e2c1d7","Name":"Brunei Darussalam","Code":"BRN"},{"Id":"51665116-6345-488c-91b8-0a3d609608b2","Name":"Bulgaria\t","Code":"BGR"},{"Id":"c67b914d-8985-4675-80d8-2a17c5c23d68","Name":"Burkina Faso\t","Code":"BFA"},{"Id":"e899e62c-d031-4127-82d9-a7125eab2012","Name":"Burundi\t","Code":"BDI"},{"Id":"b89a2227-58b3-402a-903e-1a4b3fffb253","Name":"Cambodia\t","Code":"KHM"},{"Id":"dc0eb97a-3efd-4ab8-9170-78511d72689c","Name":"Cameroon\t","Code":"CMR"},{"Id":"3029c387-e955-428a-afa1-373a7b8e3d95","Name":"Canada\t","Code":"CAN"},{"Id":"ec8a91a2-6da5-443e-b871-30dc68d6563d","Name":"Cape Verde\t","Code":"CPV"},{"Id":"8f935102-0d0d-47a7-ae80-2efe46f781ef","Name":"Cayman Islands\t","Code":"CYM"},{"Id":"3337b292-6085-4b2a-b49d-5ead8025bea1","Name":"Central African Republic\t","Code":"CAF"},{"Id":"0ab81cc2-339c-49f0-b583-4de44d304044","Name":"Chad\t","Code":"TCD"},{"Id":"3b2cedec-c991-485b-9367-e8a1c7808c62","Name":"Chile\t","Code":"CHL"},{"Id":"0b546577-8389-4d5f-a8ae-1345a5f215e3","Name":"China\t","Code":"CHN"},{"Id":"409487a3-80c5-4883-9099-ce6a05975825","Name":"Christmas Island\t","Code":"CXR"},{"Id":"c45cb13d-df34-49c9-a021-543e75ff0cbc","Name":"Cocos (Keeling) Islands\t","Code":"CCK"},{"Id":"bcf8e13b-e9df-4abb-b6a0-16f74778d03f","Name":"Colombia\t","Code":"COL"},{"Id":"03ce740b-828e-4b93-9953-6542dfa7fac4","Name":"Comoros\t","Code":"COM"},{"Id":"45d9ba56-7778-41e5-893b-b8acaaf9a633","Name":"Congo (Brazzaville)","Code":"COG"},{"Id":"8262f9e2-34c2-4902-8fb2-9a7b910af76f","Name":"Congo, (Kinshasa)","Code":"COD"},{"Id":"d10d3298-4964-488d-a343-288700bb1e2b","Name":"Congo, Dem. Rep.","Code":"ZAR"},{"Id":"bc092ef6-90f2-4b22-9696-f0cbfc363794","Name":"Congo, Rep.\t","Code":"COG"},{"Id":"479b6e06-ddfa-436e-bb3d-2229a0197576","Name":"Cook Islands\t","Code":"COK"},{"Id":"02afd22c-047f-4eb8-9222-b971c967f1d6","Name":"Costa Rica\t","Code":"CRI"},{"Id":"f3a09ebd-0ced-4209-98e3-03580d6bd356","Name":"Cote d'Ivoire\t","Code":"CIV"},{"Id":"e507aabd-6a55-463c-8f3b-0303def862c7","Name":"Croatia\t","Code":"HRV"},{"Id":"14f53d45-f40a-4579-b485-698625e3e267","Name":"Cuba\t","Code":"CUB"},{"Id":"4ed0156b-41c1-4f2c-947f-e1815c0794c8","Name":"Cyprus\t","Code":"CYP"},{"Id":"d2c870f5-88db-41b2-bdc7-d842c41a3cfe","Name":"Czech Republic\t","Code":"CZE"},{"Id":"1162afe8-9c02-4ecf-8472-d77ff2a8b5a6","Name":"Czechoslovakia\t","Code":"CSK"},{"Id":"7b058b60-a4d6-479e-bfd7-ba7fe640b722","Name":"Democratic Republic of the Congo","Code":"COD"},{"Id":"9f363c6b-7d42-4ff9-b1f2-6d33a2014274","Name":"Denmark\t","Code":"DNK"},{"Id":"5a32d0c7-a063-4099-9780-8590bdc25a14","Name":"Djibouti\t","Code":"DJI"},{"Id":"e4ed2d51-d52f-483d-b072-645d7a19ff77","Name":"Djibuti","Code":"DJI"},{"Id":"a5c15d24-3b47-4208-890f-2e7cfc885c8a","Name":"Dominica\t","Code":"DMA"},{"Id":"2407feb1-15fc-4ecf-9609-ca72f62b5e02","Name":"Dominican Republic\t","Code":"DOM"},{"Id":"a602734f-a039-46c3-908a-e34e66b03d14","Name":"East Timor\t","Code":"TMP"},{"Id":"c3677f60-bc46-48e8-9a3c-863f1872e65e","Name":"Ecuador\t","Code":"ECU"},{"Id":"a18ed957-f998-4465-a72d-8caf6cf7f595","Name":"Egypt, Arab Rep.\t","Code":"EGY"},{"Id":"fbca0541-9b9c-4955-84da-ceb2c37e8f55","Name":"El Salvador\t","Code":"SLV"},{"Id":"58e9af74-322b-4347-b9f7-c56cb1d31a0e","Name":"Equatorial Guinea\t","Code":"GNQ"},{"Id":"621ef9f5-d54e-4624-82a3-6a3a6f50063d","Name":"Eritrea\t`","Code":"ERI"},{"Id":"65aabc8a-5837-4342-b124-576fed7355a1","Name":"Estonia\t","Code":"EST"},{"Id":"94c57314-fa3b-4fe8-a194-98b235914c3c","Name":"Ethiopia (excludes Eritrea)\t","Code":"ETH"},{"Id":"1b0c5718-ea8f-4f22-8692-c773fb1c86ad","Name":"Ethiopia (includes Eritrea)\t","Code":"ETF"},{"Id":"57beedf5-d472-4407-be16-db38486a7d68","Name":"European Union\t","Code":"EUN"},{"Id":"aa9742ec-982e-4c6b-be9b-fb147e57c85d","Name":"Faeroe Islands\t","Code":"FRO"},{"Id":"fc58dcbb-664e-4650-b570-34b6eb536fda","Name":"Falkland Island\t","Code":"FLK"},{"Id":"d95a66b1-7568-4466-992d-04a34d7ad652","Name":"Falkland Islands (Malvinas)","Code":"FLK"},{"Id":"14e2e84d-97b4-455e-bed4-653d46405768","Name":"Faroe Islands","Code":"FRO"},{"Id":"ef43469f-f1c2-4fda-90c8-9e19dee2b01d","Name":"Fidji (Islands)","Code":"FIJI"},{"Id":"59f050e4-a2f8-4a50-a121-c4f237a4c322","Name":"Fiji\t","Code":"FJI"},{"Id":"487e66f6-bcb5-45d6-ae2e-3d713427ca98","Name":"Finland\t","Code":"FIN"},{"Id":"1d121b96-2b1a-458e-877b-cdcaf5c474f3","Name":"Fm Panama Cz\t","Code":"PCZ"},{"Id":"2f1d6f37-8227-4bdd-8d7d-8456b4cb436c","Name":"Fm Rhod Nyas\t","Code":"ZW1"},{"Id":"c4cc777b-672f-4d8b-b51c-08e2ab133cb0","Name":"Fm Tanganyik\t","Code":"TAN"},{"Id":"ae783159-1b91-488e-aaa9-e524e05af276","Name":"Fm Vietnam Dr\t","Code":"VDR"},{"Id":"2cc0845c-f225-4470-a783-b4409ea07ac9","Name":"Fm Vietnam Rp\t","Code":"SVR"},{"Id":"121de6f0-43f8-4ea5-a688-21a1d44a2f65","Name":"Fm Zanz-Pemb\t","Code":"ZPM"},{"Id":"253581c1-8b42-45c6-9500-9fc30f559103","Name":"Fr. So. Ant. Tr\t","Code":"ATF"},{"Id":"1150cb04-3aaa-4d60-a0c1-88a778e0d4f7","Name":"France\t","Code":"FRA"},{"Id":"fbc27530-c5ab-4c07-8b3c-7daf9603e608","Name":"Free Zones\t","Code":"FRE"},{"Id":"bff32ad0-2bb4-4cbc-8bb7-d14b8fa1dbd2","Name":"French Guiana\t","Code":"GUF"},{"Id":"6cccd98f-8872-4c90-852b-6ad22c50a878","Name":"French Polynesia\t","Code":"PYF"},{"Id":"005b44b6-41b0-461e-b720-0f3152e614b5","Name":"French Southern Territories","Code":"ATF"},{"Id":"d36de7d6-da2e-4ddd-82e5-1519c2a9da2f","Name":"Gabon\t","Code":"GAB"},{"Id":"79844592-c3c3-4aa0-a48a-d6ea45505b79","Name":"Gambia, The\t","Code":"GMB"},{"Id":"20587610-fe8c-4509-8abd-ad7fb6638937","Name":"Gaza Strip\t","Code":"GAZ"},{"Id":"062e4577-763b-40fe-b93f-b66ea262e0d1","Name":"Georgia\t","Code":"GEO"},{"Id":"1cbd2b85-4199-4343-abda-8ce3b5520ac2","Name":"German Democratic Republic\t","Code":"DDR"},{"Id":"67645f39-b8f2-482e-91e4-bf974d4a3d48","Name":"Germany\t","Code":"DEU"},{"Id":"e188700b-94c6-417c-ba44-0264f3980237","Name":"Ghana\t","Code":"GHA"},{"Id":"5c6f04cf-b4b5-40b3-aa52-092fd5927370","Name":"Gibraltar\t","Code":"GIB"},{"Id":"fa813ff8-49e5-4599-b503-3573d5780f7d","Name":"Granada","Code":"GRD"},{"Id":"adcaffbb-b902-4176-9957-b7b5becabd4a","Name":"Greece\t","Code":"GRC"},{"Id":"921649b7-54d2-466b-86d8-81be186db1f1","Name":"Greenland\t","Code":"GRL"},{"Id":"6afd37a2-8cd9-4b74-9100-b71216bd989f","Name":"Grenada\t","Code":"GRD"},{"Id":"451225f1-778e-4f17-a3e0-65cea327891a","Name":"Guadeloupe\t","Code":"GLP"},{"Id":"797d75aa-4284-47ed-a9a8-dda15dfdb20d","Name":"Guam\t","Code":"GUM"},{"Id":"ffd2a775-53f9-4d20-99f6-1fc13904e236","Name":"Guatemala\t","Code":"GTM"},{"Id":"235e67a1-7a99-4f38-aa25-3f9f2a26fbd9","Name":"Guernsey","Code":"GGY"},{"Id":"9d1a8a54-7e98-43a2-b23d-c8050333fbc6","Name":"Guinea\t","Code":"GIN"},{"Id":"59bd4cd7-167a-40db-9234-2d5752611934","Name":"Guinea Bissau","Code":"GNB"},{"Id":"7b6abb03-5ce5-430a-8d55-07c7f2355c5e","Name":"Guinea-Bissau\t","Code":"GNB"},{"Id":"77e85677-02ad-4fbd-bb30-fc41c0c736e8","Name":"Guyana\t","Code":"GUY"},{"Id":"6d2ecd9d-2f48-48fd-965d-00d69b71f86e","Name":"Haiti\t","Code":"HTI"},{"Id":"da6d13dd-c7f5-42a9-8b73-6b091417ab0a","Name":"Heard and Mcdonald Islands","Code":"HMD"},{"Id":"29a4a262-2e6d-4897-bb23-8bfed66fb400","Name":"Holy See\t","Code":"VAT"},{"Id":"5886364c-8b30-4162-ae11-d7ed6b45e93e","Name":"Honduras\t\t","Code":"HND"},{"Id":"2663a417-309b-484d-ac26-6fbe31a6bc67","Name":"Hong Kong (China)","Code":"HKG"},{"Id":"74b368db-da5a-4ec7-8ef0-ec16e098bffb","Name":"Hong Kong, China\t","Code":"HKG"},{"Id":"1bc43e4d-83cc-4e2e-8fb6-2f77db384ce0","Name":"Hungary\t","Code":"HUN"},{"Id":"74cbdfc0-1326-4e50-aa07-10d7bcd74dce","Name":"Iceland\t","Code":"ISL"},{"Id":"d9772e95-fd6b-4c56-b6bf-fdb4e36a5cb7","Name":"India","Code":"IND"},{"Id":"0c67bc36-fa11-4281-870f-0b3e474afcd5","Name":"Indonesia","Code":"IND"},{"Id":"6a8722a7-c090-4cce-afb8-e95f4a428772","Name":"Iran, Rep. Islamic Of","Code":"IRN"},{"Id":"5aecd3b4-9c07-417a-a950-5b9465b6491c","Name":"Iraq","Code":"IRQ"},{"Id":"ad819c77-a6ed-475d-ba71-c33568214413","Name":"Ireland ","Code":"IRL"},{"Id":"7793d540-dc3e-4167-bfe0-bcfa7222a68a","Name":"Israel ","Code":"ISR"},{"Id":"ac864d0d-c849-46b3-93c5-56f9c92cbb9c","Name":"Italy","Code":"ITA"},{"Id":"9fa698cb-71c7-4867-ab58-a52813bf4dfa","Name":"Ivory Coast","Code":"CIV"},{"Id":"6172d434-bae1-4b1a-8c8a-d7e2984ae07e","Name":"Jamaica","Code":"JAM"},{"Id":"1966606a-5fbe-4d04-babd-d113dbd1ae4d","Name":"Japan","Code":"JPN"},{"Id":"78f7061d-5b2a-4a74-90e6-fa42bb340f46","Name":"Jordan","Code":"JOR"},{"Id":"b92589db-b82c-4015-9e52-323403a5f95f","Name":"Kazakhstan","Code":"KAZ"},{"Id":"ef094c48-3e13-41ae-8b9f-ac1cb09d70ca","Name":"Kenya ","Code":"KEN"},{"Id":"7223d5ed-ff55-45f7-9d96-6d5b90e3913f","Name":"Kiribati","Code":"KIR"},{"Id":"149d7cff-75e0-42f0-af7b-83c0e77029f4","Name":"Korea, Democ. Ppl.'S Rep.","Code":"PRK"},{"Id":"73265f64-11db-44ca-b3a5-d11f67608abf","Name":"Korea, Republic","Code":"KOR"},{"Id":"2cd48266-7c7b-4d04-bf1f-e86c803e0106","Name":"Kuwait","Code":"KWT"},{"Id":"470d0e74-0fdf-4663-a09b-6ed947c27ca9","Name":"Kyrgyzstan","Code":"KGZ"},{"Id":"0f3ca61a-1b71-406c-98ed-fe92ce7746b3","Name":"Laos","Code":"LAO"},{"Id":"a692fed0-fb9f-4e40-9f30-18a633b0182f","Name":"Latvia","Code":"LVA"},{"Id":"77fc3922-0535-4fda-aa22-79c23a1a76bd","Name":"Lebanon","Code":"LBN"},{"Id":"37338397-4ca0-4acb-8c4a-510fcbcbfa46","Name":"Lesotho","Code":"LSO"},{"Id":"34492706-95b7-4b83-adfc-02816f906c09","Name":"Liberia","Code":"LBR"},{"Id":"06ff2ae1-a788-44c1-8732-d9993fa7ec79","Name":"Libya","Code":"LBY"},{"Id":"9c43bd69-9466-47fd-a298-1ce88878dbc7","Name":"Liechtenstein","Code":"LIE"},{"Id":"6b9c5ff2-4c99-4a7e-af0c-30f0f320fb24","Name":"Lithuania","Code":"LTU"},{"Id":"0c48aa8e-032d-4516-8e8f-868da5a5b090","Name":"Luxembourg","Code":"LUX"},{"Id":"9de8ed7d-2e78-4b9b-a5fa-29c0c719a99f","Name":"Macao","Code":"MCA"},{"Id":"8ce2914e-30f0-4216-a97a-23de5df967c8","Name":"Macedonia","Code":"MKD"},{"Id":"a5a7a851-dc24-492c-999c-ce31bf36688e","Name":"Madagascar","Code":"MDG"},{"Id":"39b87cf2-d1c7-4cbe-9ed4-adb2882a3ac3","Name":"Malawi","Code":"MWI"},{"Id":"2cca3bdb-bc55-4091-9a4f-120b65c62de0","Name":"Malaysia","Code":"MYS"},{"Id":"325c6625-972a-4cf4-beee-f0bb17171341","Name":"Maldives (Islands)","Code":"MDV"},{"Id":"dfe1d5a2-c78e-4131-86e2-017a397b8ed1","Name":"Mali","Code":"MLI"},{"Id":"4576f4d8-da46-46b1-aca5-293d8a0402fc","Name":"Malta","Code":"MLT"},{"Id":"7e0b0d95-76d1-44f6-a342-d8d4faa0fc3c","Name":"Marianas (Islands)","Code":"MNP"},{"Id":"b36596cb-f5bb-4db1-a502-194a471a94f7","Name":"Marschall (Islands)","Code":"MHL"},{"Id":"04f5f3a1-32ec-4562-aef5-8da043de7a6c","Name":"Mauritania","Code":"MRT"},{"Id":"57f5ee46-477e-436c-9680-b1a00997352d","Name":"Mauritius","Code":"MUS"},{"Id":"1050b853-7853-44c3-ac57-f60330016595","Name":"Mauritius (Islands)","Code":"MUS"},{"Id":"53526983-83be-4664-a5a1-a52c84de6450","Name":"Mexico","Code":"MEX"},{"Id":"c6a2b70d-578a-4a1c-8258-e459c2439b23","Name":"Micronesia (Federated States Of)","Code":null},{"Id":"32b8b2df-014a-4cdb-83fe-3b5d3165de6f","Name":"Micronesia, Fed States","Code":"FSM"},{"Id":"14c8711c-a4bb-465d-8ce4-55db02f7777d","Name":"Moldova","Code":"MDA"},{"Id":"faf197ec-54d5-4db9-9863-7613ad2343b0","Name":"Monaco","Code":"MCO"},{"Id":"ac1d953c-33c3-4a5c-ac5d-b6d147e14783","Name":"Mongolia","Code":"MNG"},{"Id":"b5610652-6f45-4b9b-881b-0fe8b9da08ec","Name":"Montenegro","Code":"MNE"},{"Id":"0f9e3319-f064-41ec-b119-80f6d5004b25","Name":"Montserrat","Code":"MSR"},{"Id":"149b96f4-a864-464d-aa27-8bfc9624ba66","Name":"Mozambique","Code":"MOZ"},{"Id":"aeb5c2f6-24b7-4971-b735-e35a98b7221b","Name":"Myanmar (Burma)","Code":"MMR"},{"Id":"35eaaf3c-f835-4dac-ae80-6e773b2e259b","Name":"Namibia","Code":"NAM"},{"Id":"4bbf852b-5007-42d3-9b38-294a970299dd","Name":"Nauru","Code":"NRU"},{"Id":"c1738c88-3cfb-49ff-93cc-b71d69fbea36","Name":"Nepal","Code":"NPL"},{"Id":"6df9dffc-e35b-445d-90a9-37e34f4c3b4d","Name":"Netherlands","Code":"NLD"},{"Id":"dcce2dac-79da-409d-8b57-8ba0fc958402","Name":"New Zealand","Code":"NZL"},{"Id":"6a5ed632-8b87-42ca-9d86-dc103e20c96e","Name":"Nicaragua","Code":"NIC"},{"Id":"5cfaf340-9d76-48bd-baac-498148708c85","Name":"Niger","Code":"NER"},{"Id":"049927f7-721b-4051-8a27-d0892272c77b","Name":"Nigeria","Code":"NGA"},{"Id":"09dff31c-1079-44cc-b6c1-4853fd00a966","Name":"Norway","Code":"NOR"},{"Id":"89e9736e-d851-4988-80a8-5eb57107e509","Name":"O.N.U.","Code":null},{"Id":"96183144-a7d9-4be4-87ac-fa4481fee227","Name":"Oman","Code":"OMN"},{"Id":"eae3b853-44cc-4ca6-a95a-b9e0f96a5b93","Name":"Other","Code":null},{"Id":"e35f5669-0198-44e8-baaf-fdc72e5f5bcb","Name":"Pakistan","Code":"PAK"},{"Id":"200e9509-131d-441d-9d50-1d934b04a2b0","Name":"Palau","Code":"PLW"},{"Id":"4896fda3-29f4-4cb0-a123-dcefd9dd009c","Name":"Palestine","Code":"PSE"},{"Id":"008c3620-286a-4bbf-a0f9-c6055e180baf","Name":"Palestinian Not Acknowledge.","Code":"PSE"},{"Id":"b8f90bd0-2e4c-4905-95fd-f86d79107078","Name":"Panama","Code":"PAN"},{"Id":"fcb29936-8373-45e5-bd6e-76d2418eec13","Name":"Papua New Guinea","Code":"PNG"},{"Id":"8750f0db-ea18-4a93-94c0-23b558efb3b0","Name":"Paraguay","Code":"PRY"},{"Id":"56e3f239-2acd-4ce6-a158-7f8d4b9c1f20","Name":"Peru","Code":"PER"},{"Id":"8192625c-fcd1-4a05-8654-22a6173db33c","Name":"Philippines","Code":"PHL"},{"Id":"69abb2fd-6143-49bd-88d8-3b86184d284c","Name":"Poland","Code":"POL"},{"Id":"b41e2b40-eb1f-42f4-9176-57b5708da35e","Name":"Portugal","Code":"PRT"},{"Id":"90fe2405-f896-49b6-a853-702e34e4ab9e","Name":"Qatar","Code":"QAT"},{"Id":"4a703786-f095-4e7a-b67f-178cfe5e879a","Name":"Romania","Code":"ROU"},{"Id":"1e1c1613-5a9c-40e5-8d12-bca00c0b889e","Name":"RUSSIAN FEDERATION","Code":"RUS"},{"Id":"d543e2f2-0d7a-4068-993b-a264545e5968","Name":"Rwanda","Code":"RWA"},{"Id":"b891d231-af3e-43b5-b15f-441245fbba96","Name":"Saint Kitts And Nevis","Code":"KNA"},{"Id":"2c81218b-7e5b-4dc4-b0fa-c707889a71ef","Name":"Saint Vincent And Granad.","Code":"VCT"},{"Id":"b0eb39d5-d2e6-44b1-8ac6-867a10d1cad1","Name":"San Marino","Code":"SMR"},{"Id":"d08b8602-6d31-4846-bbc7-fe652fcc02cd","Name":"Santa Lucia","Code":"LAC"},{"Id":"7a984483-5694-4f53-9346-ccefeba38e40","Name":"Sao Tome And Principe","Code":"STP"},{"Id":"3937142b-70a8-4d20-9f0a-50ccc8817d24","Name":"Saudi Arabia","Code":"SAU"},{"Id":"ca21f95b-a206-457d-a554-8dd14b302f85","Name":"Seichelles (Islands)","Code":"SYC"},{"Id":"42ad176c-ff16-49dd-b81c-b0f04ea4ab22","Name":"Senegal","Code":"SEN"},{"Id":"b15401e8-9cb6-48c6-93ad-c474a4d69450","Name":"Serbia","Code":"SRB"},{"Id":"8a695719-23a9-4111-8bd4-0ec21c3a2ccb","Name":"Sierra Leone","Code":"SLE"},{"Id":"35e42956-d883-49e9-836d-02c3e8144a9a","Name":"Singapore","Code":"SGP"},{"Id":"d94827d6-02d5-469b-bc5a-0be5a6b5a673","Name":"Slovakia","Code":"SVK"},{"Id":"5520507b-9f97-4598-a979-c79aa2c925f5","Name":"SLOVENIA","Code":"SVN"},{"Id":"9372e7b7-1509-47dd-a266-f3be02fe10e7","Name":"Solomon (Islands)","Code":"SLB"},{"Id":"f259f41f-2cd6-4ed4-a98a-4738fc43b98e","Name":"Somalia","Code":"SOM"},{"Id":"e080de35-937c-48ad-86b7-5f22f8c8627d","Name":"South Africa","Code":"ZAF"},{"Id":"3a58bf56-7344-4ac4-9bdc-cb0fa2478a0b","Name":"South Sudan","Code":"SSD"},{"Id":"0cf9da11-cb76-4566-81e5-8628d5488e3c","Name":"Spain","Code":"ESP"},{"Id":"cc6a0ea9-5973-4407-ae2c-7b02a448005b","Name":"Sri Lanka","Code":"LKA"},{"Id":"3688ec30-4495-44d8-ae96-22542034fcda","Name":"Sudan","Code":"SDN"},{"Id":"b30c21ef-4dd2-404d-b67e-ee69cbc98ce4","Name":"Suriname","Code":"SUR"},{"Id":"d907917a-fddc-477e-98c9-cbae048385be","Name":"Swazilandia","Code":"SWZ"},{"Id":"fde081b8-4c49-43cf-847a-50c354042c28","Name":"Sweden","Code":"SWE"},{"Id":"12e6135d-3c67-4058-8b27-70452d67978e","Name":"Switzerland","Code":"CHE"},{"Id":"20d464cf-da7c-4b7b-8f65-fbd2e0d74593","Name":"Syria","Code":"SYR"},{"Id":"d0c22f63-0536-4faa-b678-5c46d7c75494","Name":"Tadjikistan","Code":"TJK"},{"Id":"f7dd6c14-e6f3-4fcb-b01b-8e5ad69ab47c","Name":"Taiwan, China","Code":"TWN"},{"Id":"12585cbc-99da-4eb3-acf0-faaafac84898","Name":"Tanzania, Republic","Code":"TZA"},{"Id":"b5527102-3c2a-4288-9123-42cedb9f03f8","Name":"Thailand","Code":"THA"},{"Id":"bb726c46-68d9-40ce-9f3c-18a6d4d40ea0","Name":"Togo","Code":"TGO"},{"Id":"a501bc18-5c1f-4ca4-b940-c3e323c58e50","Name":"Tonga","Code":"TON"},{"Id":"dfd3e249-c978-4a6d-880f-75f89841f09e","Name":"Trinidad And Tobago","Code":"TTO"},{"Id":"7ab1c95c-ea29-4c22-8aa1-d1a9d9136967","Name":"Tunisia","Code":"TUN"},{"Id":"1a26ff1a-0850-4600-b5db-b3cfbdb1566a","Name":"Turkey","Code":"TUR"},{"Id":"0b81c412-9ebc-4682-801a-96d10f0368b6","Name":"Turkmenistan","Code":"TKM"},{"Id":"4b9b62c0-5466-4a09-b57d-c16568b457b6","Name":"Tuvalu","Code":"TUV"},{"Id":"9bc9d916-0e89-4e84-83cd-fa0997dbe103","Name":"U. Arab Emirates","Code":"ARE"},{"Id":"3a9bd732-d68c-49a2-b87a-ebef01bad33a","Name":"Uganda","Code":"UGA"},{"Id":"c6f536fd-3a46-4bf3-8800-48f1464d46bf","Name":"Ukraine","Code":"UKR"},{"Id":"9ab13fab-9938-44d9-a145-4b84c7a72546","Name":"United Kingdom","Code":"GBR"},{"Id":"a37ebdaa-3747-416a-bae3-0f1f67e19ddb","Name":"United States","Code":"USA"},{"Id":"c7f74792-2d45-4ffe-92fb-275fc76a4607","Name":"Uruguay","Code":"URY"},{"Id":"a711a3a6-2185-48dc-9aa8-20c7ebba6e9d","Name":"Ussr","Code":"UR"},{"Id":"28d1a8eb-7a4a-48dd-af8b-2b9a092cc009","Name":"Uzbekistan","Code":"UZB"},{"Id":"adf3d52e-164a-41c5-a769-88d480c17086","Name":"Vanuatu-New Hebrides","Code":"VUT"},{"Id":"503ae2b3-641a-4174-bcf8-e32f400ee0b6","Name":"Venezuela","Code":"VEN"},{"Id":"9dcb022d-c28b-42a9-875e-80bd6af8ecaf","Name":"Vietnam","Code":"VNM"},{"Id":"c5434870-6b1e-44ab-b278-d5bc0ba7044d","Name":"Wallis and Futura Isl.\t","Code":"WLF"},{"Id":"e71d8eb3-ae47-41b7-88da-fb9ce098433c","Name":"Western Sahara\t","Code":"ESH"},{"Id":"52f11650-1364-44e2-a307-6e18f7d717fa","Name":"Western Samoa","Code":"WSM"},{"Id":"866b8e8a-e053-4fb6-9421-9a8ba2b7cdc6","Name":"World\t","Code":"WLD"},{"Id":"9179e355-a23b-4c42-9738-9b56d61eb42d","Name":"Yemen Democratic\t\t","Code":"YDR"},{"Id":"b26c8482-9165-4c73-95eb-41babdcba8a1","Name":"Yemen Republic","Code":"YEM"},{"Id":"394e6184-650a-4a22-94cc-69cc6c5f6588","Name":"Yemen, Rep.\t","Code":"YEM"},{"Id":"10a67d22-74d5-4bd6-a065-663b83b4d8d8","Name":"Yugoslavia","Code":"SER"},{"Id":"9cfa5ec4-1b4d-498a-a5f0-9c915b5a0bb1","Name":"Yugoslavia\t","Code":"SER"},{"Id":"6bdf8c78-edcc-4066-8a84-d26ea32913e3","Name":"Yugoslavia, FR (Serbia/Montene\t","Code":"YUG"},{"Id":"6bcedb56-3878-4683-98c8-3432d7aa15c5","Name":"Zambia\t","Code":"ZMB"},{"Id":"21cd6ad9-bf3f-47a3-a31f-faa85a6f60eb","Name":"Zimbabwe\t","Code":"ZWE"}];
    var genderData =  [{"Id":"2a299467-0281-4efc-bd69-0cba402d6b26","Name":"Male","Code":"MALE"},{"Id":"b43ee54d-885a-458f-8f2a-92cd9cf29693","Name":"Female","Code":"FEMALE"}];
    var maritalStatusData =  [{"Id":"24b87330-375a-493b-887f-93be3e73ab5c","Name":" Other","Code":"OT"},{"Id":"e8319038-a568-47ea-ad5a-3381bab11fe5","Name":"Divorced","Code":"D"},{"Id":"23c3d9ec-f504-4109-89b5-804189ecb4c1","Name":"Married","Code":"C"},{"Id":"81c6fe56-6370-4f58-b0b0-540aee2d1ff7","Name":"Separated","Code":"SE"},{"Id":"f738e816-1c6b-4371-a65d-3800c2354391","Name":"Single","Code":"SO"},{"Id":"67d42c06-40b9-4f9a-b725-9c4494ed5388","Name":"Widow(er)","Code":"V"}];
    var occupationData =  [{"Id":"1a53659a-d13b-4682-a23d-bed051de5288","Name":" BANKER ","Code":"06"},{"Id":"b070bc49-c3e3-4673-a31e-de49e45ba839","Name":"ARCHITECT","Code":"02"},{"Id":"d6e4ee98-fc4e-4943-b2fc-74108abeb5fe","Name":"ARTISAN ","Code":"03"},{"Id":"9026767e-af5a-43ab-931e-1cd68159cb11","Name":"ARTIST ","Code":"05"},{"Id":"78c61e20-bade-49ed-8163-d0a1b9a015db","Name":"BUSINESSMAN ","Code":"07"},{"Id":"43fdfdfc-1b6c-4d9e-84c0-17b3329846ec","Name":"CHEMIST ","Code":"19"},{"Id":"86239124-ce2d-41a6-9cde-5229a972b09a","Name":"CIVIL SERVANT ","Code":"15"},{"Id":"efe674c5-69b2-4879-b37b-57e4b18e0b70","Name":"COMPUTER SPECIALIST","Code":"17"},{"Id":"d841d752-8199-4533-82eb-7eedb3d365dd","Name":"DIPLOMAT ","Code":"32"},{"Id":"c1c61724-e094-4723-a0d0-ab52e909248c","Name":"DRIVER ","Code":"10"},{"Id":"8f480992-f491-46e4-aed9-1fb8beeb4b21","Name":"ELECTRONIC TECHNICIAN ","Code":"18"},{"Id":"44ff2918-3227-4dcd-8c86-a37c0f66fcda","Name":"EMPLOYEE ","Code":"14"},{"Id":"eb2de7b2-1e1b-4e45-9610-d3297f7c833c","Name":"EXECUTIVE DIRECTOR ","Code":"08"},{"Id":"f1bfdcbc-3b7c-478b-803e-56cfa5202b0a","Name":"FARMER ","Code":"01"},{"Id":"7b015f04-ac2e-4b63-b29f-100ef9b7ef92","Name":"FASHION ","Code":"26"},{"Id":"e7dd3c0e-9c15-483d-8d5d-0c3f48a5abff","Name":"JOURNALIST ","Code":"21"},{"Id":"1446b19f-a16b-47b1-91fd-838e5036949e","Name":"JUDGE ","Code":"35"},{"Id":"b1f340d0-4a22-46e2-90e6-46f3d1188734","Name":"LAWYER ","Code":"04"},{"Id":"c3adb5d2-8fa9-4e1a-816e-514fb2e9e8e3","Name":"LIBERAL PROFESSION","Code":"25"},{"Id":"7c77b1d3-6612-4195-83a3-f8a619140036","Name":"MANAGER","Code":"36"},{"Id":"02ad9310-903c-4686-978e-690854789a26","Name":"MEDICINE ","Code":"22"},{"Id":"95558c08-7fd5-45f7-8883-56bdd3cdfc2c","Name":"OTHER","Code":"99"},{"Id":"8ef555d7-24b1-47c9-88dd-5096cc77a4bd","Name":"PER. ADMVO.TEC. SER.","Code":"33"},{"Id":"cb6db8f1-f56b-4045-a848-002812e76586","Name":"POLICEMAN","Code":"27"},{"Id":"4a96ce3d-c5f2-4a2b-9fbb-5f07eac4a776","Name":"POLITICIAN","Code":"16"},{"Id":"6f2fe60c-0d02-4587-8d71-7183dbe52da8","Name":"RELIGION","Code":"09"},{"Id":"181c6d66-e1cb-463e-bd07-bcff4e18d012","Name":"RESEARCHER","Code":"12"},{"Id":"fb23e338-6ef3-4759-93fd-1abf61587f71","Name":"RETIRED","Code":"28"},{"Id":"3dd09278-76e6-4dee-a3ea-a80f2abbdd42","Name":"SAILOR","Code":"23"},{"Id":"af117951-0cb5-442e-8e8d-7782176a7ce1","Name":"SPORTSMAN","Code":"29"},{"Id":"3f86ab0e-b203-4b11-b1c9-eb4a6de0c463","Name":"STAGIAIRE (STUDENT/INTERN) ","Code":"31"},{"Id":"3a9872c6-8c2a-4ceb-998d-40d607245c28","Name":"TEACHER ","Code":"13"},{"Id":"cb56aa19-8505-491b-9f5c-e43cf875afb6","Name":"TECHNICIAN (OTHER) ","Code":"20"},{"Id":"8c56419a-6b15-43bc-b949-21f0400b9b89","Name":"UNEMPLOYED","Code":"30"},{"Id":"e0c241ed-c2e1-4d4d-81ed-db2809d063c3","Name":"WORKER ","Code":"24"}];
    var journeyPurposeData =  [{"Id":"351336f9-b83c-4eab-9676-756f110b7a78","Name":"Airport transit ","Code":"13"},{"Id":"5a15a780-3e47-49c8-942e-ef755acf57fd","Name":"Business","Code":"01"},{"Id":"0191076d-59fd-4389-a626-a75ed744b1aa","Name":"Cultural reasons ","Code":"02"},{"Id":"0716dfa8-b50a-4498-ae80-b5a477b2e17a","Name":"Medical reasons ","Code":"00"},{"Id":"e15e803e-0eb6-4834-8e5f-4beccd1ea31f","Name":"Official visit ","Code":"05"},{"Id":"5abfe19e-6753-48ed-b5f2-fc1f24b127dd","Name":"Others","Code":"99"},{"Id":"2d75e12f-dea8-4451-9998-7f043a1cdae0","Name":"Sports","Code":"07"},{"Id":"b4ec779f-08d5-4fc1-aada-aea342de2334","Name":"Study","Code":"11"},{"Id":"82a413f6-0e05-4ac0-8224-61432e8dfa44","Name":"Tourism","Code":"10"},{"Id":"fe271b94-3a93-419c-8482-7153115c9ac3","Name":"Transit","Code":"12"},{"Id":"f59cde68-3cb3-4237-b772-d8e9f53ba600","Name":"Visiting family ","Code":"03"}];
    var schengenCountryData = [{"Id":"019dfec5-10dc-4f69-ad61-f959dd1254e3","Name":"Austria\t","Code":"AUT","lazy":true},{"Id":"7b03fe2b-0092-41cd-9303-ae8e2b6c5c15","Name":"Belgium\t","Code":"BEL","lazy":true},{"Id":"e507aabd-6a55-463c-8f3b-0303def862c7","Name":"Croatia\t","Code":"HRV","lazy":true},{"Id":"d2c870f5-88db-41b2-bdc7-d842c41a3cfe","Name":"Czech Republic\t","Code":"CZE","lazy":true},{"Id":"9f363c6b-7d42-4ff9-b1f2-6d33a2014274","Name":"Denmark\t","Code":"DNK","lazy":true},{"Id":"65aabc8a-5837-4342-b124-576fed7355a1","Name":"Estonia\t","Code":"EST","lazy":true},{"Id":"487e66f6-bcb5-45d6-ae2e-3d713427ca98","Name":"Finland\t","Code":"FIN","lazy":true},{"Id":"1150cb04-3aaa-4d60-a0c1-88a778e0d4f7","Name":"France\t","Code":"FRA","lazy":true},{"Id":"67645f39-b8f2-482e-91e4-bf974d4a3d48","Name":"Germany\t","Code":"DEU","lazy":true},{"Id":"adcaffbb-b902-4176-9957-b7b5becabd4a","Name":"Greece\t","Code":"GRC","lazy":true},{"Id":"1bc43e4d-83cc-4e2e-8fb6-2f77db384ce0","Name":"Hungary\t","Code":"HUN","lazy":true},{"Id":"74cbdfc0-1326-4e50-aa07-10d7bcd74dce","Name":"Iceland\t","Code":"ISL","lazy":true},{"Id":"ac864d0d-c849-46b3-93c5-56f9c92cbb9c","Name":"Italy","Code":"ITA","lazy":true},{"Id":"a692fed0-fb9f-4e40-9f30-18a633b0182f","Name":"Latvia","Code":"LVA","lazy":true},{"Id":"9c43bd69-9466-47fd-a298-1ce88878dbc7","Name":"Liechtenstein","Code":"LIE","lazy":true},{"Id":"6b9c5ff2-4c99-4a7e-af0c-30f0f320fb24","Name":"Lithuania","Code":"LTU","lazy":true},{"Id":"0c48aa8e-032d-4516-8e8f-868da5a5b090","Name":"Luxembourg","Code":"LUX","lazy":true},{"Id":"4576f4d8-da46-46b1-aca5-293d8a0402fc","Name":"Malta","Code":"MLT","lazy":true},{"Id":"6df9dffc-e35b-445d-90a9-37e34f4c3b4d","Name":"Netherlands","Code":"NLD","lazy":true},{"Id":"09dff31c-1079-44cc-b6c1-4853fd00a966","Name":"Norway","Code":"NOR","lazy":true},{"Id":"69abb2fd-6143-49bd-88d8-3b86184d284c","Name":"Poland","Code":"POL","lazy":true},{"Id":"b41e2b40-eb1f-42f4-9176-57b5708da35e","Name":"Portugal","Code":"PRT","lazy":true},{"Id":"d94827d6-02d5-469b-bc5a-0be5a6b5a673","Name":"Slovakia","Code":"SVK","lazy":true},{"Id":"5520507b-9f97-4598-a979-c79aa2c925f5","Name":"SLOVENIA","Code":"SVN","lazy":true},{"Id":"0cf9da11-cb76-4566-81e5-8628d5488e3c","Name":"Spain","Code":"ESP","lazy":true},{"Id":"fde081b8-4c49-43cf-847a-50c354042c28","Name":"Sweden","Code":"SWE","lazy":true},{"Id":"12e6135d-3c67-4058-8b27-70452d67978e","Name":"Switzerland","Code":"CHE","lazy":true}];
    var costCoveredData = [{"Id":"9c8cc30f-4d1d-4b45-acdb-2c84ffaaa55f","Name":"By a Sponsor(Host, Company, Organisation)","Code":"SP"},{"Id":"fe60c70c-dfa2-46c6-b2aa-ccfd06755da5","Name":"By the Applicant himself / herself ","Code":"AP"}];
    var meansOfSupportData = [{"Id":"cfedc2ad-e428-47fd-94bd-d3eda7504882","Name":"Accommodation provided ","Code":"3"},{"Id":"cd501560-1ce1-4c4b-bb30-65970171e353","Name":"All expenses covered ","Code":"2"},{"Id":"8c9aad1e-6660-4622-b40a-f8a54afee50c","Name":"Cash ","Code":"1"},{"Id":"992a926c-3947-48c2-8eda-dcefd35ea9a4","Name":"Credit card ","Code":"6"},{"Id":"d0e7f547-bc1b-4bc5-8718-f880f683b762","Name":"Others","Code":"8"},{"Id":"772ee90f-b325-492c-9476-919461871f9f","Name":"Pre-paid accommodation ","Code":"5"},{"Id":"78df5ab9-223a-4ecf-89b2-ed636bdcd4b3","Name":"Pre-paid transport ","Code":"4"},{"Id":"b2d97628-9f39-49bd-9e0e-f769bd9f5a12","Name":"Traveller cheques ","Code":"7"}];
    var familyRelationData = [{"Id":"ecb6ec54-65b1-48fd-9244-a60d1a3582f9","Name":"Child","Code":"CH"},{"Id":"51e81fed-0fbf-46ad-8d5d-8ebf493a7996","Name":"Dependent Ascendant","Code":"DA"},{"Id":"0534762c-2415-4fb1-9394-ceca55eaa151","Name":"Grandchild","Code":"GC"},{"Id":"bbcfa75c-cb0f-4049-b8f9-e5b78e5f6b39","Name":"Spouse","Code":"SP"}];
    var passportTypeData =[{"Id":"0a152f62-b7b2-49ad-893e-b41b15e2bef3","Name":"Ordinary Passport","Code":"BLS_ORDINARY_PASSPORT"},{"Id":"ea3865a7-edae-4768-8883-3bc9339bdd85","Name":"Collective Passport","Code":"BLS_COLLECTIVE_PASSPORT"},{"Id":"e8d43836-1c41-4599-8bf6-f6108c5e8dd2","Name":"Diplomatic Passport","Code":"BLS_DIPLOMATIC_PASSPORT"},{"Id":"41353ecd-51d5-43bc-8b12-5f675e18d400","Name":"D. Viaje Apatridas C. New York","Code":"BLS_D_VIAJE_APATRIDAS_C_NEWYORK"},{"Id":"4dc4ccec-1ed7-4469-bc9e-8334cbebef00","Name":"Government official on duty","Code":"BLS_GOVERNMENT_OFFICIAL_ON_DUTY"},{"Id":"23231676-e95c-4f60-992d-0b9b341ba39c","Name":"National laissez-passer","Code":"BLS_NATIONAL_LAISSEZ_PASSER"},{"Id":"d70484dc-1223-4ce8-9e82-b1f6fb31c01f","Name":"Official Passport","Code":"BLS_OFFICIAL_PASSPORT"},{"Id":"32425826-f3fd-4b39-bb1b-5aec243969a1","Name":"Passport of foreigners","Code":"BLS_PASSPORT_OF_FOREIGNERS"},{"Id":"56b07a52-3ca8-47cb-bd6b-1e17254e5c8a","Name":"Protection passport","Code":"BLS_PROTECTION_PASSPORT"},{"Id":"134321d9-ee69-4714-a1ef-280b81087fa8","Name":"Refugee Travel Document (Geneva Convention)","Code":"BLS_REFUGEE_TRAVEL_DOCUMENT"},{"Id":"b5afa076-6a45-49f3-8349-7d3eb2ef6848","Name":"Seaman book","Code":"BLS_SEAMAN_BOOK"},{"Id":"55cfa975-6737-4711-a7f1-04b4ed5dd921","Name":"UN laissez-passer","Code":"BLS_UN_LAISSEZ_PASSER"}];
    var ivd = [{"Id":"4ce5405a-4842-46b3-859f-07cf63f08562","Name":"No","Code":"BLS_NO"},{"Id":"b0219784-c9d3-4dd1-916d-45b44f3e0ee4","Name":"Yes","Code":"BLS_YES"}];
    var visaIdData2 =[{"Id":"fb33a698-a3bd-4b02-8ef7-b589775187df","Code":"NATIONAL_VISA","Name":"National Visa","VisaTypeCode":"NATIONAL_VISA"},{"Id":"c805c157-7e8f-4932-89cf-d7ab69e1af96","Code":"SCHENGEN_VISA","Name":"Schengen Visa","VisaTypeCode":"SCHENGEN_VISA"},{"Id":"c6c05a56-38d7-4929-8b3d-77a2280d9c20","Code":"SCHENGEN_VISA_CASA_ONE","Name":"Casa 1 ","VisaTypeCode":"SCHENGEN_VISA_CASA_ONE"},{"Id":"5e43f8e9-cb93-42f6-8350-9d8e2e79a42d","Code":"SCHENGEN_VISA_CASA_TWO","Name":"Casa 2","VisaTypeCode":"SCHENGEN_VISA_CASA_TWO"},{"Id":"889bd811-ae40-4507-93f3-cc1486c0f282","Code":"SCHENGEN_VISA_CASA_THREE","Name":"Casa 3","VisaTypeCode":"SCHENGEN_VISA_CASA_THREE"}];
    var locationData2 =[{"Id":"8d780684-1524-4bda-b138-7c71a8591944","Name":"Rabat","Code":"RABAT"},{"Id":"889689b5-1099-4795-ac19-c9263da23252","Name":"Tetouan","Code":"TETOUAN"},{"Id":"8457a52e-98be-4860-88fc-2ce11b80a75e","Name":"Tangier","Code":"TANGIER"},{"Id":"0566245a-7ba1-4b5a-b03b-3dd33e051f46","Name":"Nador","Code":"NADOR"},{"Id":"138660df-f645-488f-8458-97186b17c7f9","Name":"Agadir","Code":"AGADIR"},{"Id":"60d2df036755e8de168d8db7","Name":"Casablanca","Code":"CASABLANCA"}];
    var relationshipData =[{"Id":"c45b9741-eed8-4dd9-b9b9-080683331130","Name":"Daughter","Code":"BLS_RELATION_DAUGHTER"},{"Id":"4712b335-cf1f-4486-8867-f7e5cabf3ea3","Name":"Father","Code":"BLS_RELATION_FATHER"},{"Id":"44de378f-7c7c-48aa-8b0b-404a3135f666","Name":"Husband","Code":"BLS_RELATION_HUSBAND"},{"Id":"25b02916-8295-4a48-80c5-d485ef31e005","Name":"Mother","Code":"BLS_RELATION_MOTHER"},{"Id":"75d7b35c-a8ba-46f2-a71b-b0378bc03e0e","Name":"Sister","Code":"BLS_RELATION_SISTER"},{"Id":"a6a7d5a7-aa99-4800-9bf9-cba6a0a35eb4","Name":"Son","Code":"BLS_RELATION_SON"},{"Id":"0b23e5cd-4c95-49d1-82c7-d53d2260e31b","Name":"Wife","Code":"BLS_RELATION_WIFE"}];
    var applicantsCount = parseInt(1);
    var noOfEntriesData=[{"Id":"da65c355-ce70-486e-bcd4-f5de9b9b5608","Name":"Multiple Entries","Code":"BLS_MULTIPLE_ENTRIES"},{"Id":"8fda31c3-6bb3-4180-ad30-875a3c38d42d","Name":"Single Entry","Code":"BLS_SINGLE_ENTRY"},{"Id":"2545f664-6779-43ea-be61-d405908131cd","Name":"Two Entries","Code":"BLS_TWO_ENTRIES"}];
    var applicantMasterList=[{"Id":"9bcbe002-a3a8-4568-bd76-203c4dd52262","Name":"KHELAFA ABDELHAK","Code":"KHELAFA"},{"Id":"c1897a5b-0eac-4702-aba7-f6eaa5709256","Name":"KHELAFA AHMED HAMZA","Code":"KHELAFA"}];
    var missionList2=[{"Id":"beae2d19-89a9-46e7-9415-5422adafe619","Name":"Consulate - Casablanca","Code":"CONSULATE_CASABLANCA"},{"Id":"33f113d1-fa23-4292-b865-393675093998","Name":"Consulate - Tetouan","Code":"CONSULATE_TETOUAN"},{"Id":"2c64c42a-1359-437a-9257-d8ad3f566e1a","Name":"Consulate - Nador","Code":"CONSULATE_NADOR"},{"Id":"98a73e17-bf8f-41f2-933e-03e60b009327","Name":"Consulate - Rabat","Code":"CONSULATE_RABAT"},{"Id":"d133459a-6482-45ed-bd00-5ff32aa8b71b","Name":"Consulate - Tangier","Code":"CONSULATE_TANGIER"},{"Id":"4edec922-cd94-4955-9788-802269c9ff44","Name":"Consulate - Agadir","Code":"CONSULATE_AGADIR"}];


    var baseurl = 'http://synergy-api-service/';
    var presentDate = new Date();

    $(document).ready(function () {

    $("#TravelDate").kendoDatePicker({
        format: "{0:yyyy-MM-dd}",
        min: presentDate,
        month: {
            empty: '<div class="k-state-disabled">#= data.value #</div>'
        }
    });

        $("#visaId").kendoDropDownList({
            optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Id",
            filter: "contains",
            dataSource: visaIdData2
        });



        if ('WEB_BLS'==='WEB_BLS')
        {
            $("#locId").kendoDropDownList({
            dataTextField: "Name",
            dataValueField: "Id",
            filter: "contains",
            dataSource: locationData2
            });
        }

        $("#mId").kendoDropDownList({
            dataTextField: "Name",
            dataValueField: "Id",
            filter: "contains",
            dataSource: missionList2
        });

});

    function SetApplicantDetails(data, j) {

        if (j > 0) {
            $("#Relationship_" + j).data('kendoDropDownList').value(data.RelationShip);
        }

        $("#FirstName_" + j).val(data.FirstName);
        $("#SurName_" + j).val(data.SurName);
        $("#LastName_" + j).val(data.LastName);
        var td = data.DateOfBirth != null ? moment(data.DateOfBirth).format('YYYY-MM-DD') : data.DateOfBirth;
        $("#DateOfBirth_" + j).val(td);
        $("#PlaceOfBirth_" + j).val(data.PlaceOfBirth);
        $("#CountryOfBirthId_" + j).data('kendoDropDownList').value(data.CountryOfBirthId);
        $("#NationalityId_" + j).data('kendoDropDownList').value(data.NationalityId);
        $("#NationalityAtBirthId_" + j).data('kendoDropDownList').value(data.NationalityAtBirthId);
        $("#GenderId_" + j).data('kendoDropDownList').value(data.GenderId);
        $("#MaritalStatusId_" + j).data('kendoDropDownList').value(data.MaritalStatusId);
        $('#IsMinor_' + j).prop('checked', data.IsMinor);
        if (data.IsMinor==true) {
             $('#minor_div_'+j).show('slow');
         }
         else {
             $('#minor_div_'+j).hide('slow');
         }
        $("#MinorParentSurname_" + j).val(data.MinorParentSurname);
        $("#MinorParentFirstName_" + j).val(data.MinorParentFirstName);
        $("#MinorParentLastName_" + j).val(data.MinorParentLastName);
        $("#MinorParentNationalityId_" + j).data('kendoDropDownList').value(data.MinorParentNationalityId);
        $("#MinorParentLastName_" + j).val(data.MinorParentLastName);
        $("#MinorParentAddress_" + j).val(data.MinorParentAddress);
        $("#NationalIdentityNumber_" + j).val(data.NationalIdentityNumber);
        $("#PassportType_" + j).data('kendoDropDownList').value(data.PassportType);
        $("#PassportNo_" + j).val(data.PassportNo);
        td = data.TravelDate != null? moment(data.TravelDate).format('YYYY-MM-DD'): data.TravelDate;
        $("#TravelDate_" + j).val(td);
        td = data.IssueDate!=null?moment(data.IssueDate).format('YYYY-MM-DD'): data.IssueDate;
        $("#IssueDate_" + j).val(td);
        td = data.ExpiryDate!=null? moment(data.ExpiryDate).format('YYYY-MM-DD'): data.ExpiryDate;
        $("#ExpiryDate_" + j).val(td);
        $("#IssuePlace_" + j).val(data.IssuePlace);
        $("#IssueCountryId_" + j).data('kendoDropDownList').value(data.IssueCountryId);
        $("#IssuePlace_" + j).val(data.IssuePlace);
        $("#HomeAddressLine1_" + j).val(data.HomeAddressLine1);
        $("#HomeAddressLine2_" + j).val(data.HomeAddressLine2);
        $("#HomeAddressCountryId_" + j).data('kendoDropDownList').value(data.HomeAddressCountryId);
        $("#HomeAddressState_" + j).val(data.HomeAddressState);
        $("#HomeAddressCity_" + j).val(data.HomeAddressCity);
        $("#HomeAddressPostalCode_" + j).val(data.HomeAddressPostalCode);
        $("#HomeAddressContactNumber_" + j).val(data.HomeAddressContactNumber);
        //$("#HasOtherResidenceship_" + j).val(data.HasOtherResidenceship);
        $('#HasOtherResidenceship_' + j).prop('checked', data.HasOtherResidenceship);
        if (data.HasOtherResidenceship==true) {
             $('#residence_div_'+j).show('slow');
         }
         else {
             $('#residence_div_'+j).hide('slow');
         }
        $("#OtherResidenceshipPermitNumber_" + j).val(data.OtherResidenceshipPermitNumber);
        td = data.OtherResidenceshipPermitValidUntill != null ? moment(data.OtherResidenceshipPermitValidUntill).format('YYYY-MM-DD') : data.OtherResidenceshipPermitValidUntill;
        $("#OtherResidenceshipPermitValidUntill_" + j).val(td);
        $("#EmployerName_" + j).val(data.EmployerName);
        $("#EmployerPhone_" + j).val(data.EmployerPhone);
        $("#EmployerAddress_" + j).val(data.EmployerAddress);
        $("#CurrentOccupationId_" + j).data('kendoDropDownList').value(data.CurrentOccupationId);
        $("#PurposeOfJourneyId_" + j).data('kendoDropDownList').value(data.PurposeOfJourneyId);
        $("#MemberStateDestinationId_" + j).data('kendoDropDownList').value(data.MemberStateDestinationId);
        $("#MemberStateSecondDestinationId_" + j).data('kendoDropDownList').value(data.MemberStateSecondDestinationId);
        $("#MemberStateFirstEntryId_" + j).data('kendoDropDownList').value(data.MemberStateFirstEntryId);
        //$("#MemberStateFirstEntryId_" + j).data('kendoDropDownList').value(data.MemberStateFirstEntryId);
        $("#NumberOfEntriesRequested_" + j).data('kendoDropDownList').value(data.NumberOfEntriesRequested);
        $("#IntendedStayDuration_" + j).val(data.IntendedStayDuration);
        $('#IsVisaIssuedBefore_' + j).prop('checked', data.IsVisaIssuedBefore);
        if (data.IsVisaIssuedBefore==true) {
             $('#previous_visa_div_'+j).show('slow');
         }
         else {
             $('#previous_visa_div_'+j).hide('slow');
         }
        $("#PreviousVisaNumber_" + j).val(data.PreviousVisaNumber);
        td = data.PreviousVisaValidFrom!=null? moment(data.PreviousVisaValidFrom).format('YYYY-MM-DD'): data.PreviousVisaValidFrom;
        $("#PreviousVisaValidFrom_" + j).val(td);
        td = data.PreviousVisaValidTo!=null? moment(data.PreviousVisaValidTo).format('YYYY-MM-DD'): data.PreviousVisaValidTo;
        $('#PreviousVisaValidTo_' + j).val(td);
        //$('#PreviousVisaValidTo_' + j).prop('checked', data.PreviousVisaValidTo);
        $("#PreviousVisaIssuedCountryId_" + j).data('kendoDropDownList').value(data.PreviousVisaIssuedCountryId);

        $('input:radio[id=PreviousFingerPrintStatus_' + data.PreviousFingerPrintStatus + '_' + j + ']').prop('checked', true);

        if (data.PreviousFingerPrintStatus == '0') {
            $('#div_pr_fp_date_'+j).show('slow');
        }
        else if (data.PreviousFingerPrintStatus == '1') {
          $('#div_pr_fp_date_'+j).hide('slow');
        }
        else if (data.PreviousFingerPrintStatus == '2') {
            $('#div_pr_fp_date_'+j).hide('slow');
        }
        td = data.PreviousFingerPrintDate != null ? moment(data.PreviousFingerPrintDate).format('YYYY-MM-DD') : data.PreviousFingerPrintDate;
        $("#PreviousFingerPrintDate_" + j).val(td);
        $("#FinalDestinationIssuedByCountryId_" + j).data('kendoDropDownList').value(data.FinalDestinationIssuedByCountryId);
        td = data.FinalDestinationValidFromDate != null ? moment(data.FinalDestinationValidFromDate).format('YYYY-MM-DD') : data.FinalDestinationValidFromDate;
        $("#FinalDestinationValidFromDate_" + j).val(td);
        td = data.FinalDestinationValidToDate != null ? moment(data.FinalDestinationValidToDate).format('YYYY-MM-DD') : data.FinalDestinationValidToDate;
        $("#FinalDestinationValidToDate_" + j).val(td);
        td = data.IntendedDateOfArrival != null ? moment(data.IntendedDateOfArrival).format('YYYY-MM-DD') : data.IntendedDateOfArrival;
        $("#IntendedDateOfArrival_" + j).val(td);
        td = data.IntendedDateOfDeparture != null ? moment(data.IntendedDateOfDeparture).format('YYYY-MM-DD') : data.IntendedDateOfDeparture;
        $("#IntendedDateOfDeparture_" + j).val(td);

        $('input:radio[id=BlsInvitingAuthority_' + data.BlsInvitingAuthority + '_' + j + ']').prop('checked', true);
        if (data.BlsInvitingAuthority == '0') {
                $('#div_inviting_auth_'+j).show('slow');
                $('#div_inviting_cp_'+j).show('slow');
            }
        else if (data.BlsInvitingAuthority == '1') {
                  $('#div_inviting_auth_'+j).show('slow');
                $('#div_inviting_cp_'+j).hide('slow');
            }
        else if (data.BlsInvitingAuthority == '2') {
                    $('#div_inviting_auth_'+j).hide('slow');
                $('#div_inviting_cp_'+j).show('slow');
            }
        $("#InvitingAuthorityName_" + j).val(data.InvitingAuthorityName);
        $("#InvitingCountryId_" + j).data('kendoDropDownList').value(data.InvitingCountryId);
        $("#InvitingCity_" + j).val(data.InvitingCity);
        $("#InvitingZipCode_" + j).val(data.InvitingZipCode);
        $("#InvitingAddress_" + j).val(data.InvitingAddress);
        $("#InvitingEmail_" + j).val(data.InvitingEmail);
        $("#InvitingContactNo_" + j).val(data.InvitingContactNo);
        $("#InvitingFaxNo_" + j).val(data.InvitingFaxNo);
        $("#InvitingContactName_" + j).val(data.InvitingContactName);
        $("#InvitingContactSurname_" + j).val(data.InvitingContactSurname);
        $("#InvitingContactCountryId_" + j).data('kendoDropDownList').value(data.InvitingContactCountryId);
        $("#InvitingContactCity_" + j).val(data.InvitingContactCity);
        $("#InvitingContactZipCode_" + j).val(data.InvitingContactZipCode);
        $("#InvitingContactAddress_" + j).val(data.InvitingContactAddress);
        $("#InvitingContactContactNo_" + j).val(data.InvitingContactContactNo);
        $("#InvitingContactEmail_" + j).val(data.InvitingContactEmail);
        $("#InvitingContactFaxNo_" + j).val(data.InvitingContactFaxNo);
        $("#CostCoveredById_" + j).data('kendoDropDownList').value(data.CostCoveredById);
        $("#MeansOfSupportId_" + j).data('kendoDropDownList').value(data.MeansOfSupportId);
        $("#OtherCitizenSurname_" + j).val(data.OtherCitizenSurname);
        $("#OtherCitizenFirstName_" + j).val(data.OtherCitizenFirstName);
        td = data.OtherCitizenDateOfBirth != null ? moment(data.OtherCitizenDateOfBirth).format('YYYY-MM-DD') : data.OtherCitizenDateOfBirth;
        $("#OtherCitizenDateOfBirth_" + j).val(td);
        $("#OtherCitizenNationalityId_" + j).data('kendoDropDownList').value(data.OtherCitizenNationalityId);
        $("#OtherCitizenDocumentNumber_" + j).val(data.OtherCitizenDocumentNumber);
        $("#OtherCitizenFamilyRelationshipId_" + j).data('kendoDropDownList').value(data.OtherCitizenFamilyRelationshipId);
    }
 function onIssueEarlierChange(e){
     $("#PreviousVisaNumber").val("");
     $("#PreviousVisaValidFrom").val("");
     $("#PreviousVisaValidTo").val("");
     $("#ServerPreviousVisaValidFrom").val("");
     $("#ServerPreviousVisaValidTo").val("");
    var issuedEarlier =$("#IsVisaIssuedEarlier").data("kendoDropDownList").text();
     if (issuedEarlier == "Yes") {
         $(".issueEarlierFields").show();

     }
    else {
        $(".issueEarlierFields").hide();

    }

 }

    function OnApplicationSubmit(e) {

   // var td = kendo.toString($("#TravelDate").data("kendoDatePicker").value(), 'yyyy-MM-dd');
  //  $("#ServerTravelDate").val(td);
    var ApplicantsData = [];
    for (var j = 0; j < applicantsCount; j++) {
        ApplicantsData[j] = {};
        if (j>0) {
            ApplicantsData[j]["Relationship"] = $("#Relationship_" + j).val();
        }
        k = j + 1;
        ApplicantsData[j]["ApplicantSerialNo"] = k.toString();
        ApplicantsData[j]["FirstName"] = $("#FirstName_" + j).val();
        ApplicantsData[j]["SurName"] = $("#SurName_" + j).val();
        ApplicantsData[j]["LastName"] = $("#LastName_" + j).val();
        var datefield = $("#DateOfBirth_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {

            //ApplicantsData[j]["ServerDateOfBirth"] = kendo.toString($("#DateOfBirth_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerDateOfBirth"] =  moment($("#DateOfBirth_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD')
        }
        ApplicantsData[j]["PlaceOfBirth"] = $("#PlaceOfBirth_" + j).val();
        ApplicantsData[j]["CountryOfBirthId"] = $("#CountryOfBirthId_" + j).val();
        ApplicantsData[j]["NationalityId"] = $("#NationalityId_" + j).val();
        ApplicantsData[j]["NationalityAtBirthId"] = $("#NationalityAtBirthId_" + j).val();
        ApplicantsData[j]["GenderId"] = $("#GenderId_" + j).val();
        ApplicantsData[j]["MaritalStatusId"] = $("#MaritalStatusId_" + j).val();
        ApplicantsData[j]["IsMinor"] = $('#IsMinor_'+j).prop('checked');
        ApplicantsData[j]["MinorParentSurname"] = $("#MinorParentSurname_" + j).val();
        ApplicantsData[j]["MinorParentFirstName"] = $("#MinorParentFirstName_" + j).val();
        ApplicantsData[j]["MinorParentLastName"] = $("#MinorParentLastName_" + j).val();
        ApplicantsData[j]["MinorParentNationalityId"] = $("#MinorParentNationalityId_" + j).val();
        ApplicantsData[j]["MinorParentAddress"] = $("#MinorParentAddress_" + j).val();
        ApplicantsData[j]["NationalIdentityNumber"] = $("#NationalIdentityNumber_" + j).val();
        ApplicantsData[j]["PassportType"] = $("#PassportType_" + j).val();
        ApplicantsData[j]["PassportNo"] = $("#PassportNo_" + j).val();
        datefield = $("#IssueDate_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
          //  ApplicantsData[j]["ServerPassportIssueDate"] = kendo.toString($("#IssueDate_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerPassportIssueDate"] = moment($("#IssueDate_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        datefield = $("#ExpiryDate_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
           // ApplicantsData[j]["ServerPassportExpiryDate"] = kendo.toString($("#ExpiryDate_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerPassportExpiryDate"] = moment($("#ExpiryDate_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        datefield = $("#TravelDate_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
            //ApplicantsData[j]["ServerTravelDate"] = kendo.toString($("#TravelDate_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerTravelDate"] = moment($("#TravelDate_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD');
        }

        ApplicantsData[j]["IssuePlace"] = $("#IssuePlace_" + j).val();
        ApplicantsData[j]["IssueCountryId"] = $("#IssueCountryId_" + j).val();
        ApplicantsData[j]["HomeAddressLine1"] = $("#HomeAddressLine1_" + j).val();
        ApplicantsData[j]["HomeAddressLine2"] = $("#HomeAddressLine2_" + j).val();
        ApplicantsData[j]["HomeAddressCountryId"] = $("#HomeAddressCountryId_" + j).val();
        ApplicantsData[j]["HomeAddressState"] = $("#HomeAddressState_" + j).val();
        ApplicantsData[j]["HomeAddressCity"] = $("#HomeAddressCity_" + j).val();
        ApplicantsData[j]["HomeAddressPostalCode"] = $("#HomeAddressPostalCode_" + j).val();
        ApplicantsData[j]["HomeAddressContactNumber"] = $("#HomeAddressContactNumber_" + j).val();
        ApplicantsData[j]["HasOtherResidenceship"] = $('#HasOtherResidenceship_' + j).prop('checked');
        ApplicantsData[j]["OtherResidenceshipPermitNumber"] = $("#OtherResidenceshipPermitNumber_" + j).val();
        datefield = $("#OtherResidenceshipPermitValidUntill_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
            //ApplicantsData[j]["ServerOtherResidenceshipPermitValidUntill"] = kendo.toString($("#OtherResidenceshipPermitValidUntill_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerOtherResidenceshipPermitValidUntill"] = moment($("#OtherResidenceshipPermitValidUntill_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        ApplicantsData[j]["EmployerName"] = $("#EmployerName_" + j).val();
        ApplicantsData[j]["EmployerPhone"] = $("#EmployerPhone_" + j).val();
        ApplicantsData[j]["EmployerAddress"] = $("#EmployerAddress_" + j).val();
        ApplicantsData[j]["CurrentOccupationId"] = $("#CurrentOccupationId_" + j).val();
        ApplicantsData[j]["PurposeOfJourneyId"] = $("#PurposeOfJourneyId_" + j).val();
        ApplicantsData[j]["MemberStateDestinationId"] = $("#MemberStateDestinationId_" + j).val();
        ApplicantsData[j]["MemberStateSecondDestinationId"] = $("#MemberStateSecondDestinationId_" + j).val();
        ApplicantsData[j]["MemberStateFirstEntryId"] = $("#MemberStateFirstEntryId_" + j).val();
        ApplicantsData[j]["NumberOfEntriesRequested"] = $("#NumberOfEntriesRequested_" + j).val();
        ApplicantsData[j]["IntendedStayDuration"] = $("#IntendedStayDuration_" + j).val();
        ApplicantsData[j]["IsVisaIssuedBefore"] = $('#IsVisaIssuedBefore_' + j).prop('checked');
        ApplicantsData[j]["PreviousVisaNumber"] = $("#PreviousVisaNumber_" + j).val();
        datefield = $("#PreviousVisaValidFrom_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
           // ApplicantsData[j]["ServerPreviousVisaValidFrom"] = kendo.toString($("#PreviousVisaValidFrom_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerPreviousVisaValidFrom"] = moment($("#PreviousVisaValidFrom_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        datefield = $("#PreviousVisaValidTo_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
           // ApplicantsData[j]["ServerPreviousVisaValidTo"] = kendo.toString($("#PreviousVisaValidTo_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerPreviousVisaValidTo"] = moment($("#PreviousVisaValidTo_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        ApplicantsData[j]["PreviousVisaIssuedCountryId"] = $("#PreviousVisaIssuedCountryId_" + j).val();
        ApplicantsData[j]["PreviousFingerPrintStatus"] = $('input[name="PreviousFingerPrintStatus_' + j + '"]:checked').val();
        datefield = $("#PreviousFingerPrintDate_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
           // ApplicantsData[j]["ServerPreviousFingerPrintDate"] = kendo.toString($("#PreviousFingerPrintDate_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerPreviousFingerPrintDate"] = kendo.toString($("#PreviousFingerPrintDate_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
        }
        ApplicantsData[j]["FinalDestinationIssuedByCountryId"] = $("#FinalDestinationIssuedByCountryId_" + j).val();
        datefield = $("#FinalDestinationValidFromDate_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
           // ApplicantsData[j]["ServerFinalDestinationValidFromDate"] = kendo.toString($("#FinalDestinationValidFromDate_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerFinalDestinationValidFromDate"] = kendo.toString($("#FinalDestinationValidFromDate_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
        }
        datefield = $("#FinalDestinationValidToDate_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
          //  ApplicantsData[j]["ServerFinalDestinationValidToDate"] = kendo.toString($("#FinalDestinationValidToDate_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerFinalDestinationValidToDate"] = moment($("#FinalDestinationValidToDate_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        datefield = $("#IntendedDateOfArrival_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
           // ApplicantsData[j]["ServerIntendedDateOfArrival"] = kendo.toString($("#IntendedDateOfArrival_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerIntendedDateOfArrival"] = moment($("#IntendedDateOfArrival_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        datefield = $("#IntendedDateOfDeparture_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
          //  ApplicantsData[j]["ServerIntendedDateOfDeparture"] = kendo.toString($("#IntendedDateOfDeparture_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerIntendedDateOfDeparture"] = moment($("#IntendedDateOfDeparture_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        ApplicantsData[j]["BlsInvitingAuthority"] = $('input[name="BlsInvitingAuthority_' + j + '"]:checked').val();
        ApplicantsData[j]["InvitingAuthorityName"] = $("#InvitingAuthorityName_" + j).val();
        ApplicantsData[j]["InvitingCountryId"] = $("#InvitingCountryId_" + j).val();
        ApplicantsData[j]["InvitingCity"] = $("#InvitingCity_" + j).val();
        ApplicantsData[j]["InvitingZipCode"] = $("#InvitingZipCode_" + j).val();
        ApplicantsData[j]["InvitingAddress"] = $("#InvitingAddress_" + j).val();
        ApplicantsData[j]["InvitingEmail"] = $("#InvitingEmail_" + j).val();
        ApplicantsData[j]["InvitingContactNo"] = $("#InvitingContactNo_" + j).val();
        ApplicantsData[j]["InvitingFaxNo"] = $("#InvitingFaxNo_" + j).val();
        ApplicantsData[j]["InvitingContactName"] = $("#InvitingContactName_" + j).val();
        ApplicantsData[j]["InvitingContactSurname"] = $("#InvitingContactSurname_" + j).val();
        ApplicantsData[j]["InvitingContactCountryId"] = $("#InvitingContactCountryId_" + j).val();
        ApplicantsData[j]["InvitingContactCity"] = $("#InvitingContactCity_" + j).val();
        ApplicantsData[j]["InvitingContactZipCode"] = $("#InvitingContactZipCode_" + j).val();
        ApplicantsData[j]["InvitingContactAddress"] = $("#InvitingContactAddress_" + j).val();
        ApplicantsData[j]["InvitingContactContactNo"] = $("#InvitingContactContactNo_" + j).val();
        ApplicantsData[j]["InvitingContactEmail"] = $("#InvitingContactEmail_" + j).val();
        ApplicantsData[j]["InvitingContactFaxNo"] = $("#InvitingContactFaxNo_" + j).val();
        ApplicantsData[j]["CostCoveredById"] = $("#CostCoveredById_" + j).val();
        ApplicantsData[j]["MeansOfSupportId"] = $("#MeansOfSupportId_" + j).val();
        ApplicantsData[j]["OtherCitizenSurname"] = $("#OtherCitizenSurname_" + j).val();
        ApplicantsData[j]["OtherCitizenFirstName"] = $("#OtherCitizenFirstName_" + j).val();
        datefield = $("#OtherCitizenDateOfBirth_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
           // ApplicantsData[j]["ServerOtherCitizenDateOfBirth"] = kendo.toString($("#OtherCitizenDateOfBirth_"+j).data("kendoDatePicker").value(), 'yyyy-MM-dd');
            ApplicantsData[j]["ServerOtherCitizenDateOfBirth"] = moment($("#OtherCitizenDateOfBirth_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        ApplicantsData[j]["OtherCitizenNationalityId"] = $("#OtherCitizenNationalityId_" + j).val();
        ApplicantsData[j]["OtherCitizenDocumentNumber"] = $("#OtherCitizenDocumentNumber_" + j).val();
        ApplicantsData[j]["OtherCitizenFamilyRelationshipId"] = $("#OtherCitizenFamilyRelationshipId_" + j).val();
        ApplicantsData[j]["ParentId"] = "5ec160c6-dd17-45dc-978e-43ac72b9a258";
        ApplicantsData[j]["ApplicantId"] = $("#ApplicantId_" + j).val();
        ApplicantsData[j]["Id"] = $("#ApplicantId_" + j).val();
    }

    var detailsString = JSON.stringify(ApplicantsData);
    $("#ApplicantsDetailsList").val(detailsString);
    HideError();
    return true;
 }
    var interval = setInterval(checkChanges, 500);
      var onApplicationAjaxSuccess = function (res) {
        if (res.success) {
            $("#AppointmentDate").val("");
            $("#appointmentDetails").removeClass("text-primary");
            $("#appointmentDetails").addClass("text-success");
            $("#paymentDetails").removeClass("text-secondary");
            $("#paymentDetails").addClass("text-primary");
            document.getElementById("progress-percent").innerHTML='50%'
            $('.progress-bar').css('width', '54%');
            $("#applicantDetailsDiv").hide();
            $("#paymentDetailsDiv").show();


            //BackToTop();
        }
        else {
            HideLoader();
            if (res.childAlert) {
                $('#childConfirmBody').html(res.error);
                $('#childConfirm').modal('show');
            }
            else {
                ShowError(res.error);
            }

        }
    };
    function OnChildConfirmAccept() {
        $('#childConfirm').modal('hide');
        $("#RemoveChildren").val(true);
        $("#visaForm").submit();
        return false;
    }

function checkChanges() {

    if (typeof  onApplicationAjaxSuccess !== 'undefined') {
        Object.defineProperty(window, 'onApplicationAjaxSuccess', { value:  onApplicationAjaxSuccess });
        clearInterval(interval);
    }
}
})();