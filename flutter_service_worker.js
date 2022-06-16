'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1b0bb36ad5fe1ae38f9b36b6fc1bd6ef",
".git/config": "15e596a4f0243a2b3863e6f28f0262f4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "53164fc7384e8cdfdc91da8ef3afd12d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "84750c4c0c5b91a7948fc905e5baf359",
".git/logs/refs/heads/master": "84750c4c0c5b91a7948fc905e5baf359",
".git/logs/refs/remotes/origin/master": "ea579a0269a5d1bb9302182376d2db49",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/02/f953325c5d49ddcd9777e0c391596ecb01a8d9": "952deb68334bdf5b7a550b3a022c4bd1",
".git/objects/08/5696585f3bfb3f8b11dbc7b98ef5bdba299c0d": "d17ab542a5e765f48ce780ad574d8a1f",
".git/objects/09/f20c01dd36bac6e8a33019e2b3e121c716fb71": "ee43ce8d27058576e776bb87ba564462",
".git/objects/0a/11ec3d95cc413cb1a23edb1b1ff00c599ce9a1": "a62384f4f2a2bcf68345957f36d496c1",
".git/objects/0a/54bdc4d776d20461eb5d4b5d2823533ba434cd": "b92fd9cdd31d497786b64be913c3c215",
".git/objects/0b/6802e74ee56c1e2dbb69993828d1be4eff5411": "d696b62aa3db2109c605343060ed9a39",
".git/objects/15/7bb1167202ef73842806b1b5e28170acd91b3e": "557dfb69c4e901c7ed3e1cd52aafebbe",
".git/objects/1e/a7362f79dd893f3c5d2fe5f838c8b8418c3389": "d3561e086ffb7df06fc38f474b254597",
".git/objects/26/36aaafe72835a98f14e5d624f8991dab5a6aaa": "e95f0a8e3fe973af05e49a83295f0e11",
".git/objects/28/62675d88737712b7ea69619c7f8b9bcf386550": "12b518bd5185ace17b42348fac31ca62",
".git/objects/29/218937f2ac2ad00eaabd6c96635d5eeb46328f": "dfc013778672305cf4d193ec1f9dbb66",
".git/objects/2a/319559b0a968dc0944246a2f3697f2dba3ccc7": "de5b1cd63b48365a510cc948dfc7b69d",
".git/objects/2b/27451c2528d0b3e8e7a8869376a2c190a4e3f7": "3b48128e99a13bf5d0cb6b296ccb04d1",
".git/objects/2b/8863d6a936c0955a1f0bce85651feb32713cf9": "40924acb3a0c9f0396e915b0d77aaa03",
".git/objects/2f/0a75a3db66fc8a3ea4f0649e6970bc5f5c21c7": "376b67c8c1565d7c0b5c5849ce909bb5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/4c1518ada11eb58e14de0c53fc07b7e2b2113e": "56b9e83aee791471ef8779b35e3d2233",
".git/objects/35/c2ab34662b49188e16fac3218651071b1b1638": "a5a4db860c8e0156a1b027ece3d49af9",
".git/objects/3a/c8ccade72a411cc5ba78401554d523f242eda2": "92eca624166cea306318d3622f9fb7a0",
".git/objects/3d/daeffa4249a0f9ac5041b9f0d47f17e8b44358": "995c8f4acfb3dc7f448519fc86545ce9",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/3e/69feef96f19e462ab227f2f025f242f4fa9252": "c8fd0508fb3748730918842000557ace",
".git/objects/41/b4c70b1970094775c4a4e3c4d3c9f7f500fd13": "59cb7c0dd07e10b23b1e1f19356c395d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/72cbaa125ab30b9820c5f226577bc100019b72": "39d168ae3c2d32c3c3b09afb193290f2",
".git/objects/53/ec29da510fcf0da5879f70e77da5fca05a7ced": "5fa1217e59f27b8d6d16677bef4810d4",
".git/objects/54/4f33fc6b8d8f96f75f2f33a4f1ce301b4c6894": "8cfb9316043ad287d08c1b8a683df7e7",
".git/objects/56/f963989b52027acf540a2f6532eecd8c8875fa": "950188adbe9fc17a7468d3975787296d",
".git/objects/57/934fb189b7183e1f1aa00d8840352892dee39f": "336cab94bde8e15d9358d228c91ed434",
".git/objects/5f/8a6387a42ac06234b22f99f66a953f69a3026c": "7cc27296927b9bb7f587ebbf57848990",
".git/objects/64/f2415ae1ad24565aaaa6ae50f44bb129a10c79": "adf29a95cc877a7421af5ac8d8c66fe7",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/6a/eb78b8618731edabb06ebe9f7aaa1b058b5bef": "cea2db1d0805f3fa1bda34ff1a6cbd73",
".git/objects/6b/9528d2d7bb827e4f4422151d7baca7b31470ee": "7ab51d02bf8f20c66031166979ea06ab",
".git/objects/6f/8201c47f90ed68f5fea0636d478d7cc704feb7": "24ef15944b73227983f0510516f1c024",
".git/objects/72/3c7a533e5ac908bbc2dcadc3902e948ef3368c": "c44a9ea10a58501793819f14bfc9ca3b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/3e42c38b2a90220447bdb5922d6791f36cdc88": "01f0534db8eff34ba41e55e6c4eb6621",
".git/objects/7f/713ec10d7e2b2850c247acfb81036edbfa25d0": "773be5a54762043a71cb02ef910bf562",
".git/objects/80/9adbe944cf987a1cf7393f53d66470c9d435fb": "8bcb08e0645a75977beff8887e808d2f",
".git/objects/82/aa0dfe63abc6e2e218309a308cb5bc2b25f2a3": "38d8e25b07dc3e09675bd106382f7492",
".git/objects/84/c0c23af545f3eee7cbfa873069d37d337bbd5d": "b20cae32a6b95631ed905f429d31e6d2",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/b2d1fc921350b683a90c02d20ebbc37480ad99": "67d7a93846c56293f9428832e85a3658",
".git/objects/90/240ecfd1fea6c6b58d3f7e4c0f1eed3836606d": "6c1cae8f405d783d2dd9e726a0c12efc",
".git/objects/91/22db2885e1af079fbdb56075afb7b7781cd895": "973e070a584f1c3f6e58a3caf84105d2",
".git/objects/91/6646e95b9514a3c89d8bfe391094710b067831": "7171beb1bc6c7f294c0d0bea9a7da661",
".git/objects/92/78f8b5ee87549e4b03eda1fc7bbfd0acbabfef": "81f80fcfb4c42e83aac5aeb3699a3980",
".git/objects/93/b67afd672b37b4e61ef95a88aaef78faa0bd59": "a28425512a068ce73cc5f9ff33bff1bd",
".git/objects/93/ed03f6ba8b2190c37f74b4e634f3a6d9213055": "16f3719dbea32c393e0dbac5f067408d",
".git/objects/94/67c4413da05fc5448a32dc21e9a4427e5650db": "fef7a6926b8ab0fa861b492c87375a57",
".git/objects/9e/61d4cfc8e21b36fe0c29a55d4e01519f2d0de6": "d007496365736b018855fd1d2642ed2d",
".git/objects/9f/b21c7762752c7fb7b1156bf0c98267afcdd3e2": "25de9c0fc12f1117afcc74114bd9ea18",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/2d6a55e3c3d9e6058e24b706f694d7f1ab9852": "2be5e326f138f19d86d7eda1c43e6561",
".git/objects/a5/4625210f97c957c6239ce9edfec0cf8958b074": "9831f6514fd07e6b65f5b80ea0247c0f",
".git/objects/a7/114154605cff5664f61e367a4138a506220e12": "a222394a63ce84c92fbf6c46543d253e",
".git/objects/a7/eb8f883586014af3cd07e7966926e4395e55a5": "f04850ea34e875c0f9decfff3c58a793",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/1b33e60d6ed3d721b61b421ff280b77fc5c823": "e77bad9587420a916458e80c2305e1f6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/33e9401108fa46adbc9e0fc755775d2ca5e4f9": "aa13552b9fd3f28399ce1fd55ef273fd",
".git/objects/ab/53802338adbb9b41e8fa34ca6d656ba77909fc": "0c8ca016d84da4722ba3aa91e33aeb1b",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b1/3668a93d82fbcc5198b1794fb5bb5b3898117f": "e617ec308dcf9e5f4a121d316c3f9603",
".git/objects/b5/8af0c2c66dd2e1f9f5be815516552181c37a55": "79e7c1474a6d3309d19c86f5c050d722",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/57415f029311288e3ef393e5279eae09f9dd5b": "27df1a1895c8273c77f1126090f7a3db",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5392efa997bb451005e250b1b8eebfa40fb34d": "3b2df329885c8f38700b1d9786ea5158",
".git/objects/c2/377ce5e11ddaaaae71dec6e7da0667a6f04156": "ec6f0786a2c0140db7432be49fa9cc11",
".git/objects/c3/bf03796a7ecd6b648df489772ae0adecf7e7e4": "b093e124152c580412ccb121edaa090e",
".git/objects/c6/93c16871853d551d5bfb98d4d7ab1507bb8b6a": "7aaea994af6b8dccd0bfd2480f3f63b7",
".git/objects/c9/1f58c868f62cb1058e3d9f9b6cb87c99700397": "ac55d510e5ae16a08c46c7f1edf85d6f",
".git/objects/ce/69a3c81c1d8c57f6deede6f671ba0d7421a0f4": "92510c4479aca1a44db3bdf20a898bef",
".git/objects/d2/eb98c65f27846ec5a44811a5dc8f5fc753962d": "5fc8ee7dfbff0d38f5e9aa57ae890fb0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/ef626eff086ceccc72a9f1ef70cc4a582c48fb": "3b9caa876901268a9ad7ed21041a6d51",
".git/objects/db/cd9aa433a146d1889864aeb7c215a25c0da245": "6333c081676db80b751e3d124c816409",
".git/objects/df/3c7261572016ba9d89b7fa80fc90685a489403": "6c2f2f5f53f20c21df5dfd1bf6941fe0",
".git/objects/e0/4d799b8fdd8f668ddc8f71f2cceeb7d9fe8761": "cc850fccfc858c80fafad96de84568a8",
".git/objects/e2/e2a7b41f9fe3277cfd21095d0184c546ffd863": "f82928b1127fdf04be621d79a0b6f467",
".git/objects/e3/2b51d73edf8bd78db53d11dc067c80705c9413": "05de6a1b70b0a03e011471cf488a4853",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/17d473cafe6ad9fde20fe3b5a9c51f7978ade1": "cca605e5a1e624c48edc6f4151bd5aa4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/730f8c7b789eaa2555fa4155226f35784299df": "7e54188eb4a94360d08fbfe2b9290bbe",
".git/objects/ec/a6b419f5b993ce5f92533ccdbb018a8d6f6674": "9a148ed8b23e704ed6d7219214ed287b",
".git/objects/ec/f38af7bb241c023deeb852d77ff399322dddd1": "0061b3f8b5ca72eb6e374a7ad3b4ca77",
".git/objects/ed/25ea86a010474adfdfae63467e2f5f52425563": "965d7bc3173fa949506cdf7fff883793",
".git/objects/ee/763867d30f11928287cdc20647b728cbe32074": "14aa98ab14fb5e71fe372b142b9eae42",
".git/objects/f1/b3d246e1e2ceb5e604d7abec388f29a2e10acb": "ec702983ac7b04d532bbedf8c8468132",
".git/objects/f2/443d20936e82db10be7515ba803dc359373105": "e0ee27a078dfe5c3680f279089666635",
".git/objects/f7/d064cb525833161024008be95e86329dfe4453": "e852ec215f3641d2b285b1c351d513e6",
".git/objects/f9/1d59fc84e6d0dc6ca100273fbe5153990a5d73": "6685814260764cb62928c3db59146310",
".git/objects/ff/cff0ca618388531845bac1c8dd559e94dac92b": "3e147e8ba5144f3daa6359d15bb43da9",
".git/refs/heads/master": "ab084006137cb2d3c582fe1f11ddd8c9",
".git/refs/remotes/origin/master": "ab084006137cb2d3c582fe1f11ddd8c9",
"assets/AssetManifest.json": "f9d2a52ae2d7c10e0224f48d331f3d16",
"assets/assets/images/atistirmalik.jpeg": "1aa5233eb218b9fe087bfdda584e7798",
"assets/assets/images/bulgur1.jpeg": "ce3dd5b3fec59c710b4e0f287b2ae082",
"assets/assets/images/bulgur2.jpeg": "3f396c8d0f7855775c931afe88436acf",
"assets/assets/images/bulgur3.jpeg": "acaa241c85cc7cbcb9200b1e8ed5d8a8",
"assets/assets/images/cips1.jpeg": "d5bd6c36772a443e905fd84b52e5ed26",
"assets/assets/images/cips2.png": "aacfbd48e02c448f86f5f27bc6a0ec02",
"assets/assets/images/cips3.jpeg": "81040028dcc5f8975b8d943844586ac4",
"assets/assets/images/cips4.jpeg": "cc9cd15db1b6011e5f532871c78e8ae5",
"assets/assets/images/cips5.jpeg": "6a8b0458263aa07791793e34becc2d48",
"assets/assets/images/cips6.jpeg": "6c0c365c4a54755960f8fee916df65bb",
"assets/assets/images/cips7.jpeg": "9a7c4fd9675b529c3ae92edcf4a02778",
"assets/assets/images/cips8.png": "70f4587f5a40fb6498bfdc99a8bf9c46",
"assets/assets/images/dnd1.jpeg": "e2fee40e0cfdfbf4e3ed4444b0fcfcb0",
"assets/assets/images/dnd2.jpeg": "88985e3b75b79fde59fee5e69355ba32",
"assets/assets/images/dnd3.jpeg": "d24c56511b6407b35373d5f23066dc91",
"assets/assets/images/dnd4.jpeg": "49a8d466918e95a840776c85a08ca505",
"assets/assets/images/dnd5.jpeg": "fdc6504f3a7d11436fc99cf5f6d5132b",
"assets/assets/images/dnd6.jpeg": "848fe746f76704a63928f8ac526ee810",
"assets/assets/images/dondurma.jpeg": "dd51c5af7f81f0f82a4747d6b75e0bb7",
"assets/assets/images/ekmek1.jpeg": "11b4f27d425db1ffa99a1caa99facc1d",
"assets/assets/images/ekmek10.jpeg": "2185e63269ab07b39450fb31d556be52",
"assets/assets/images/ekmek11.jpeg": "18ca89663d14e83be9955010f8d95a6d",
"assets/assets/images/ekmek12.jpeg": "7f44780a4faa62b0069ae5fd3b68a744",
"assets/assets/images/ekmek2.jpeg": "d72e05c7d602f8f1ff902399a5cd9b74",
"assets/assets/images/ekmek3.jpeg": "7d64567aad0dd900f626d2736d1dcdf7",
"assets/assets/images/ekmek4.jpeg": "d5d59a541697c04ed0222d9c86348a4f",
"assets/assets/images/ekmek5.jpeg": "72effe2f837e1940e60b14d2c1cdcfa8",
"assets/assets/images/ekmek6.jpeg": "a5cf75ee1988bf2ebfa4426de9813cd7",
"assets/assets/images/ekmek7.jpeg": "aebeead845b4c4dcc26fae00bff24e06",
"assets/assets/images/ekmek8.jpeg": "3f164c6028af6193dd46a92068dbbd47",
"assets/assets/images/ekmek9.jpeg": "526923383464b286eb92c1208659cca6",
"assets/assets/images/et1.jpeg": "11f5f202b818d01f22cefe10371d8418",
"assets/assets/images/et2.jpeg": "6cfe887e84f5312738f50024baea2cbe",
"assets/assets/images/et3.jpeg": "583c51502bb053d5eb4711790c24e67d",
"assets/assets/images/ev.png": "ed0858e2cc9b4be3253e8911a4dbe4be",
"assets/assets/images/f%25C4%25B1r%25C4%25B1n.jpeg": "85a190c7d6dac9586dc912f2ca3824a8",
"assets/assets/images/icecek1.jpeg": "83c02e5a5867852e45020c80ac40898a",
"assets/assets/images/icecek2.jpeg": "dc8a14475c1f886856c1fab04835ad09",
"assets/assets/images/icecek3.jpeg": "cd87bb2e300a7ee73171577a9b7bd18f",
"assets/assets/images/icecek4.jpeg": "e961e99bc89b0ea4072067aa9d01e417",
"assets/assets/images/indirim1.jpeg": "3e3eac475c29515f8e2b2d938ddb3291",
"assets/assets/images/indirim2.jpeg": "a211e87f6708869889c036c5c74626c0",
"assets/assets/images/indirim3.jpeg": "73edc849efecaa4c7b41182bd924a2e3",
"assets/assets/images/indirim4.jpeg": "33b0597a1976ade3f7d853d74a7c41ca",
"assets/assets/images/indirim5.jpeg": "8c68b13220f4abba96fd7ae6e1207b89",
"assets/assets/images/indirim7.jpeg": "a67b435a8c99be1d8c37ef009e195aff",
"assets/assets/images/kahvaltilik.jpeg": "36f0b0b910135d7047335e8f7127ff7c",
"assets/assets/images/makarna1.jpeg": "ad0aaaf3d81bb573bb9810ffb0f75f5a",
"assets/assets/images/makarna2.jpeg": "7afae6b272c9eff242e1fc228e2b35d3",
"assets/assets/images/makarna3.jpeg": "7a852599a0ea205bafa6b38dc454c73f",
"assets/assets/images/meyve1.jpeg": "160ff6716f16ac61f2c6026c0d325a48",
"assets/assets/images/meyve2.jpeg": "5f68655e17f3c4d8eee2ee50a6a15c0c",
"assets/assets/images/meyve3.jpeg": "9227db87991a15e905d062ce3ca22fe2",
"assets/assets/images/meyve4.jpeg": "ab5cffbb479af17bc5ad65314f029737",
"assets/assets/images/meyve5.jpeg": "76d2c3dcd5c558defd6df30c58ec3230",
"assets/assets/images/meyve6.jpeg": "8d1b410bc572c5c781ca855b2f3d8761",
"assets/assets/images/meyve7.jpeg": "a068300f123bb23b9771498769f8e5e7",
"assets/assets/images/meyve8.jpeg": "401139fe06ea9009bbed3898e38d77ed",
"assets/assets/images/pirin%25C3%25A71.jpeg": "fe53e2b85478768bb3be6ff8e97f716b",
"assets/assets/images/pirin%25C3%25A72.jpeg": "67959e6c4006ceb85a07ca27678ff92c",
"assets/assets/images/pirin%25C3%25A73.jpeg": "1c0c84016a8dfe00b41d4dff36dd5e66",
"assets/assets/images/reklam2.jpeg": "1392a22c84e805e5866b526e256f13e2",
"assets/assets/images/scu5.jpeg": "41747eb474d7816b449e89e7a8a338d0",
"assets/assets/images/sebze.jpeg": "0af64c949bf9f134314cce6408fb3105",
"assets/assets/images/sebze1.jpeg": "3fe12db321ce046fb35354ea4cdc8402",
"assets/assets/images/sebze2.jpeg": "9a316acedfc1b92ce20b242d3787db67",
"assets/assets/images/sebze3.png": "794026952909f346ca66f1225599f2a5",
"assets/assets/images/sebze4.jpeg": "2164189d1dbdeb0eb7ad1fe1a39652c9",
"assets/assets/images/sebze5.jpeg": "344a8fb5db40bd3fa1435e19b0b210c7",
"assets/assets/images/sebze6.jpeg": "a54b35da698b085100a400b123b1e627",
"assets/assets/images/sebze7.jpeg": "0b28f2f55363ec9fb8b9d536b9825e90",
"assets/assets/images/sebze8.jpeg": "fd68a848a118fb3a8e6c1d52269c22fa",
"assets/assets/images/su.jpeg": "d3bce63433cdc8aad3cf1eba8fa402d8",
"assets/assets/images/su1.jpeg": "dbd1a0b3f47b647afc96c76fd4d86281",
"assets/assets/images/su10.jpeg": "c2bd84a0faad08d87d8976a102a450ec",
"assets/assets/images/su11.jpeg": "617bb52dd8763502710ea31a6fdc8881",
"assets/assets/images/su12.jpeg": "f94c283248eea983ee26d75efd5a2371",
"assets/assets/images/su2.jpeg": "a6dba151bc8ef3a7a35c486c15dca6bc",
"assets/assets/images/su3.jpeg": "3d93c3e956d313ba04c050956fcc0626",
"assets/assets/images/su4.jpeg": "72ece4b5cfee3bee11c301f1b49a03b3",
"assets/assets/images/su5.jpeg": "136f95fc096cd25be2b8125c6e65b883",
"assets/assets/images/su6.jpeg": "5391bf76ffaf3c43e22db398c4902827",
"assets/assets/images/su7.jpeg": "83f8a0b1999e1335591f51d9ba6208f6",
"assets/assets/images/su8.jpeg": "1ae1ca2545c76cd545ca1f21b16f16ea",
"assets/assets/images/su9.jpeg": "e488f39e5c4faf1c71b84f9bdeeb1ba2",
"assets/assets/images/suc1.jpeg": "5e9025e162e144be5f98f7c55909c4ac",
"assets/assets/images/suc2.jpeg": "f06f9f0d1b2a6dc13408e530c0995b94",
"assets/assets/images/suc3.jpeg": "2f8950da9527914b9d2dfb20c364136f",
"assets/assets/images/suc4.jpeg": "07e3397986cf8dbd4e64ab960e776048",
"assets/assets/images/suc5.jpeg": "41747eb474d7816b449e89e7a8a338d0",
"assets/assets/images/suc6.jpeg": "68965f5f3bd8f7b3c2894144d3ed4352",
"assets/assets/images/sut1.jpeg": "0d403a84cf3e9cbfd58a3328129acdca",
"assets/assets/images/sut2.jpeg": "f3378d64b211fea1983d686b21978675",
"assets/assets/images/sut3.jpeg": "cc481d99cc081a8037ced5a520e7c0ac",
"assets/assets/images/sut4.jpeg": "10a2420ab5396d4816fd2aeee06b5547",
"assets/assets/images/sut5.jpeg": "0f044792ba4b451d4d15d4abfbb4b11c",
"assets/assets/images/sut6.jpeg": "83ea1a75004ad7a6200130c6a030e9ea",
"assets/assets/images/sutUrunleri.jpeg": "088d6bdc3d9a85e11f210048d5ace79a",
"assets/assets/images/temelgida.jpeg": "2fb2cf0b1825a26e08c671cbf0e4ed1e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0dc9189a364268329fc0065a741401cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0d48479009317c4e67d5affd596db846",
"/": "0d48479009317c4e67d5affd596db846",
"main.dart.js": "6851520a3f770646e9da33c8d761f18f",
"manifest.json": "1d1ed6d6d3ce34adf07398f45b79360c",
"version.json": "0ca95a73c3cfec75684d9ecad18912f4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
