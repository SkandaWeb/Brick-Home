'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eacdd99e14b00a2b5dbee4c715d21452",
"assets/AssetManifest.bin.json": "c3890a72b2fb3ab0b3301e64e70270c8",
"assets/AssetManifest.json": "13fd3d6ce52b406c3587e2e0b060cfbc",
"assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"assets/assets/bg/apartment_bg.jpg": "7dfedafd0cb395c3fb6480242ce05db9",
"assets/assets/bg/login.jpg": "ab05700b34a8e45d2910fb16d02e9946",
"assets/assets/bg/map.jpg": "1a239302dd0313db46a9d95c8f1c3bfb",
"assets/assets/bg/site.png": "d8e51e99a35f88c1ece62bcaf6339d0e",
"assets/assets/images/134.jpeg": "078fa3bfe704401e92f5c02006718081",
"assets/assets/images/2.png": "b71b1e866074a46ace69f60d83a8ae5d",
"assets/assets/images/2071.jpg": "5f7b648f6b496e811acd6271a9e847ad",
"assets/assets/images/3.png": "1657eb18c7adb431d11905ec6fb131d5",
"assets/assets/images/4.png": "3145290c35c974a53e865a441f80e186",
"assets/assets/images/5.png": "92ed69845b0c5afe60ecef976eb36a00",
"assets/assets/images/6.png": "1423fe96ef411101097f32acc4d7ecd1",
"assets/assets/images/7.png": "5d4465fffaa99f6a78024cc2d3c4759d",
"assets/assets/images/8.png": "9242bf59ae50ca21aec5aa123bea1632",
"assets/assets/images/home-satisfy.png": "3ad520aaec949e1d016807618f3ef051",
"assets/assets/images/home_banner_1.jpg": "a8e6579ca95d242596d68311ccf79a6a",
"assets/assets/images/home_banner_1.png": "32a571584bb3ea01f740a9d6836ad366",
"assets/assets/images/logo.png": "3c90f5d0aecbaf31ccd22c7fb82f8708",
"assets/assets/images/real_bg_1.png": "247814d388aea06744d95c7297273596",
"assets/assets/images/Receipt_324089.pdf": "99314c0a50f95fc550279cbb938739cf",
"assets/assets/images/Receipt_324090.pdf": "4efc9b37c7c70a8e2d7976c5007bf410",
"assets/assets/images/Receipt_R50002_202503.pdf": "2d6628197978ffd716064165473e9404",
"assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"assets/assets/nodatafound.png": "248ef50c0361053ebe7269460031a4dc",
"assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"assets/FontManifest.json": "1ee00d31df7d0b30bfafc1cf4922abf8",
"assets/fonts/MaterialIcons-Regular.otf": "4827c4e78720fbba2e9bb1aeea932b36",
"assets/NOTICES": "2f3cd752588515d7c2f8bdfc26dee2c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"Brick-Home/.git/COMMIT_EDITMSG": "c7ebe1b77f5462f09cca41f5460ec2db",
"Brick-Home/.git/config": "1eabb1d95066886081703a48cec22946",
"Brick-Home/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Brick-Home/.git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"Brick-Home/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"Brick-Home/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Brick-Home/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Brick-Home/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"Brick-Home/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Brick-Home/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Brick-Home/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"Brick-Home/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Brick-Home/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Brick-Home/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Brick-Home/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Brick-Home/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Brick-Home/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Brick-Home/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Brick-Home/.git/index": "fa829564b635329e3e55b4dad5bf94d2",
"Brick-Home/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Brick-Home/.git/logs/HEAD": "e7681ab85a1e4a26310deead3bb95ada",
"Brick-Home/.git/logs/refs/heads/main": "e7681ab85a1e4a26310deead3bb95ada",
"Brick-Home/.git/logs/refs/remotes/origin/HEAD": "d86c97f19894ad93fb3502485cbe96ac",
"Brick-Home/.git/logs/refs/remotes/origin/main": "7e72c4c8d4d348f75d131e77f9a63d74",
"Brick-Home/.git/objects/01/6c139f05f59bb0c171cb88ee4926f9c60f4ba4": "21959663af3d19747a97bdeea6547186",
"Brick-Home/.git/objects/03/c473376050aba17e6b20ea37297a8c7efc4b13": "d7acd7a11a450722206d5ac64fc5be75",
"Brick-Home/.git/objects/05/8d2cc76ec6c3319246992954c1489450f75bd9": "43f48308bbaf88cb3e20b658d798883f",
"Brick-Home/.git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "cc729cbc1de09e26c8ac1c31cb284e98",
"Brick-Home/.git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "aa6bc2588c86a5df58354e8329a5819b",
"Brick-Home/.git/objects/08/8f35e558f4af9431252fdbb6d16fdafe45b15b": "67b365cb6ccf2b90e7738903eb182d12",
"Brick-Home/.git/objects/0a/2621c0ac99a183e970f639eded778f4cc7e685": "6e2c1b0085241177a1472046f2307472",
"Brick-Home/.git/objects/0b/54f795b23d46868887a330bb5f5656d30d6824": "3ef863187cc9456c7f8faad1a67c0131",
"Brick-Home/.git/objects/0b/e4802d4e84ea8e20fd452a7a0ae875225754c3": "b9f742d0e793715e4b4042f51a7314fc",
"Brick-Home/.git/objects/0c/9f4b309e3270b5c8b8754c620d5982d90b4b99": "0a3ce9d0d7d3ceec98cb35c233e68631",
"Brick-Home/.git/objects/0f/f61e08b01444bba7562123bf22970cd321c5fe": "98fbeb5aea40e86d3ca6e6add0b8ec15",
"Brick-Home/.git/objects/12/4d3c7e4f78ad3a6f7a92550b9396bfe4d5c390": "ce7e153132579c3548de0caafb421f2a",
"Brick-Home/.git/objects/13/3691d4971029f3566556c36afec4dbcfe040cd": "0426c31354af5733d0141c307c5cb3cd",
"Brick-Home/.git/objects/13/6187055b9a242b3de7492424a254f8ba113441": "1dc5bf9f021af49d068b029f1de26572",
"Brick-Home/.git/objects/14/a7a095df5d4ac0372d4676b7e195ddf3d7168f": "c845a4af3703e5c9d434ee3fbc65a04e",
"Brick-Home/.git/objects/15/6a04b68692ffa75c9e2f2986b48c2bce9ad745": "ddf39962951fe2c22fe28bb0a0c71f9a",
"Brick-Home/.git/objects/15/dc378a14fbf0f9bf44a7b9ab4afc1103809649": "4f2f9a01fb4efb45420894e270b2f71c",
"Brick-Home/.git/objects/16/7bc66d34c4a37c8449622bae22c89e8524a93f": "b3f77d276cc473b0d988d22d753dec8c",
"Brick-Home/.git/objects/17/87427447957ba305e18ac0d5ec9e543182bf1f": "64f0fe42d0edd0f33a2c525fc77dc28b",
"Brick-Home/.git/objects/1a/cb59297303ec818fcd18e8995eac49b3cfcf66": "19323325bb5273e4abcdfb4fa76fc4d9",
"Brick-Home/.git/objects/1d/f9ac61139761f0d22214d297190d1558b6e528": "87baf98ea1adac34440df927985b5749",
"Brick-Home/.git/objects/1f/26936b106840e104d0b79c509e254291fee240": "5113bcbd622a732bd31915284f1b2847",
"Brick-Home/.git/objects/21/a23bf6abab44d3105ba7087e98514ee0c70ba4": "e5098c97f040f4f263094ba76c6d211c",
"Brick-Home/.git/objects/22/6772341c21e2b2548364b635aafc382b0f3622": "1c12b17ed2b9ce81ec1416d7507fa525",
"Brick-Home/.git/objects/22/d04a9fff6bf4cf414f82228dd73ef7ea6f3749": "e5dc46d19a85e62572955c8f2e0669ff",
"Brick-Home/.git/objects/23/0cb60e67539ea52f7b20b9cab5ce55c254f5da": "aaa680ce9d214dac88394d99660c2d42",
"Brick-Home/.git/objects/24/eda27733cece1dec15b0b1e117031f36b3492f": "5e0d618555a1446923dbf32fdad92e59",
"Brick-Home/.git/objects/25/6648bf53c20975fd9143aeeaa2bdb30e12a558": "330c4922804b4e02525740afc147d9ae",
"Brick-Home/.git/objects/25/e71d56f92ab45fa542f698dd3a712f3c746d35": "9c31afbc4d2d2be09a970658073e69c2",
"Brick-Home/.git/objects/25/f9ede9317f756285999d9e6f19ca28ad5b3763": "de7a82c4d2bc679eb17f03835d46d5dc",
"Brick-Home/.git/objects/27/14cddb60779143b9499b5f5be98e9fb4277d6e": "802ac7d5f23cec24b74468a75d8b7dc9",
"Brick-Home/.git/objects/27/3a448d725036006f17de24f03e7942d0749970": "da59b600f371b8a78682121d86542ba5",
"Brick-Home/.git/objects/27/3bc1885bbf3f7155e17ade360415aca0f603c3": "71f39b58d7af8887bb9811de4d3550c6",
"Brick-Home/.git/objects/28/9eea6a87a8f1643d652238c83679518c6a6161": "3e9a1f41b04ecd9b05cd3ea8e07dede6",
"Brick-Home/.git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "f610cbe34ab930f142b6d073ab27deb5",
"Brick-Home/.git/objects/30/6e0db30cd00a1624cdfa4b451d4f50a4878b20": "6b8219fc014643201ff968985e5bbb99",
"Brick-Home/.git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "cefb98dcae0301097bc465deeeb72772",
"Brick-Home/.git/objects/35/8ba0c73c19c25231a2ace24a85783e0a90f3be": "b87797f4d204654fe5c1cb2d797292be",
"Brick-Home/.git/objects/36/78897577a134fcb55d9560ed66eb2b6ab39f64": "7ae4d970e7c84bb68d4f0daa18506319",
"Brick-Home/.git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "18afdd808b7e0b924a0e7474cebad727",
"Brick-Home/.git/objects/3a/bec4b6b52f34e6d18ce030a9e3c9b197c4b1ef": "56ae704b930b3e61e590509f50a1ddbc",
"Brick-Home/.git/objects/3b/58f82c13273c43d1c1e71f85e705c4107a4562": "1ce43e40b803fa76d5ebb2fc44ae03a6",
"Brick-Home/.git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "707307abdda4f1fc08504b12b08018e6",
"Brick-Home/.git/objects/3d/faf87dc77bff7a8139872039d45789dcdce179": "0f5c951a97a38fe43980c0bb2c6c44bb",
"Brick-Home/.git/objects/3e/218315ac651ade03fa73b1b4865ff30165b729": "fbdc25e1a6cf5cdf1fddd662cec14e78",
"Brick-Home/.git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "b51c8670b810523b169634bf530a8675",
"Brick-Home/.git/objects/42/3e1cc9bef37dde593b6b8ba61c868c3053c0fd": "ca72755baa09bbe6527950c3e5afe986",
"Brick-Home/.git/objects/43/bd7ac9a8387817a871d4fd83829b349ad3966b": "50cd9caecd48f708ec4bdd24c41e7f16",
"Brick-Home/.git/objects/44/296892db39eaa791701e9c3ed6d57cdde533eb": "6d2e93b9490d866e7a0408efbb234063",
"Brick-Home/.git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "f6fc11391a8c401cfb67cb54aa713a55",
"Brick-Home/.git/objects/48/c7c830a2aaa3d7340042f5f793ea2e9308b00d": "73aa06482ff33d1f7c07eb549b17bcd8",
"Brick-Home/.git/objects/49/59eef24e148d25c61e8d968c46b74c4fe2c45f": "6f96bfcd5b567df37aa3d7cc36fdebb3",
"Brick-Home/.git/objects/4d/1397fc5144efbeb962284afb0b367bbd786d26": "6658bf86751f1119e2862a45e3cfb339",
"Brick-Home/.git/objects/50/126928c16c7c7666d45aedffece63acfb09a31": "4b6acd9387f90e0f938b28c742951432",
"Brick-Home/.git/objects/56/ee13378c62832a497fe5f7a19df7046618b9e0": "27a1c1f88824fc2da0637ae17cfe0faa",
"Brick-Home/.git/objects/5a/0a3024717fab0da86e8d0b8de5e724c5406982": "86dab1c2a8b7721d5e9f1702b17f67a1",
"Brick-Home/.git/objects/5c/49836a3bf06163282814bef69aa584d63dce9b": "0a762a245c689c61c956044ed5449f1f",
"Brick-Home/.git/objects/5f/06d36f0f933cb015e1d8a723b59b627c742ae8": "5ef020115f2f3ee03c7f13eb6dfe6098",
"Brick-Home/.git/objects/5f/5e79d80adee9c2d964c1f930bcb0d71a2de862": "91d779d841fe12f7f5b87f2ea9d48a31",
"Brick-Home/.git/objects/5f/ecd32441044345729c38cc39cdae956b88ff30": "0ffb43d7ad237fda05930a516664abfe",
"Brick-Home/.git/objects/60/dc86e5a0285225a23323c4c614b3470e19db18": "1d4f497c90776e8e886b385dc06de1ff",
"Brick-Home/.git/objects/65/8813f77250399902bfbe5f7000332cf3453d5f": "39bd9a5729cfca800f08e45341cc291b",
"Brick-Home/.git/objects/65/fd1cdaf0dd3228782319a3c7c0a620276fb32c": "607513d9adb943909adf658287acb77d",
"Brick-Home/.git/objects/69/a69ea1bc17721dc046e3ab702ef8f6d80f4b9f": "951672eb4cc5b5bfe574ae2d21e16b1d",
"Brick-Home/.git/objects/69/c4395641af5d907052176f930bdea9571d3d4b": "5a7ac4602a7161ed317e535cd6734743",
"Brick-Home/.git/objects/69/e1b26f5e1d4ccbe89a230d87bfb131ce6ac934": "20a9ab6c5a118e9f8833caf197272806",
"Brick-Home/.git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "f1341a25d22b4a8e5f9c0241d202a781",
"Brick-Home/.git/objects/6b/f31c9a5bed6e3ff47b5fe95e77e74835c5184b": "b26564f80299e2c88578d45526806316",
"Brick-Home/.git/objects/6c/13d4e4ee4daa7ab76b590e0b5270e9075593b4": "648111879146917e0c3e55c3c9c5868c",
"Brick-Home/.git/objects/6c/8a108eab3ddfb86005b1298e699c53cb999088": "82a78d3e8af382c13b1fe08cf8e1a297",
"Brick-Home/.git/objects/6c/9b6bf121af65ed3405dd1633cbc36c6af78d13": "e72d9f4b91aab13ef0b1d56da2396d57",
"Brick-Home/.git/objects/74/de36b6febbff9a2a042d1060f3624b6b78157b": "24921b3394ca2024f89c423ebe5b2ed7",
"Brick-Home/.git/objects/77/79554588acae4d4bba8dab4d718d0f798fc1de": "7340d0447202e418759791d38fe20668",
"Brick-Home/.git/objects/78/800fcb266be32e8c8eda899a9683e71025e78d": "0bc0542e181ff76627736684fb0fe7be",
"Brick-Home/.git/objects/7a/9805aab9ce531d4c4d2d970cb5a4d582064a0e": "c07ee57a2a4802b4d26f31fd907dc31d",
"Brick-Home/.git/objects/7b/d44b057e35e8aa8366ac311b7508dbc6ab9706": "390edae7fc0d8891d8867675769ecf8e",
"Brick-Home/.git/objects/80/8192651801033c6b823ae597fac52baa0a2562": "0e763407a3d5a0fce3040f2ffc46b980",
"Brick-Home/.git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "f88c3e8f69490491359c01fdfbf4dea9",
"Brick-Home/.git/objects/84/8136f745e7f779d6b4fab30c0f403612db9a35": "b0cfb624f57fbfde1e2e72bf41453157",
"Brick-Home/.git/objects/86/3078fa620b6cf31318837f55211cc5f47ea6d0": "5c8a9b76c32d4af200cc2cee2ee4f07d",
"Brick-Home/.git/objects/87/2c956235868cb514de1e1fee4aab52a58cd73e": "ace64bd73fdab51fa46b569518a280bc",
"Brick-Home/.git/objects/87/d3578d4be44405232cfad127cbb9b59e08fdbb": "ddf76c9d2278095dfc88dc0a5f193807",
"Brick-Home/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
"Brick-Home/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
"Brick-Home/.git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "cc171eda59b2198bcfb662da9c3ed257",
"Brick-Home/.git/objects/92/a565478b4ad60baec3aae5909d422c85eac63e": "814bb18b2308cdfbf41dca867671cae7",
"Brick-Home/.git/objects/93/6f67b909813070ddd45d49b015cd815674e894": "de8d6ed43affe219b765be4590595d03",
"Brick-Home/.git/objects/94/1ab267651a3b3c42cc9a91ae91034df50b42ec": "7edf402f63249fe45a875b254d627d72",
"Brick-Home/.git/objects/96/4d8ed33a244d46fa1fd6f34b1b827d188869e7": "02bce6093054529cad263a9e1ee59673",
"Brick-Home/.git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "e0aee1a764d4e79300d1392e0233ed7e",
"Brick-Home/.git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "0b688f613cb79b7928e386a6ceb6ac8b",
"Brick-Home/.git/objects/9a/50092ba3b09a03e6804e79618f0c720272dc31": "24f34face0e88fa870a9aab3181f86b4",
"Brick-Home/.git/objects/9c/106e770721ca273311b0fed64f3bb5111c8929": "a9c206eeb1e79cf1bb7caa640bcde601",
"Brick-Home/.git/objects/9c/9e1e16d28261c1d57f152897818da97af4576f": "5de5e14190ddf7c1ef7b9253f39a2473",
"Brick-Home/.git/objects/9d/275915cd2af441ed03efa439b44505bdf25e0b": "13fbba01c5187f1cfd52c6a136dfe3d1",
"Brick-Home/.git/objects/9d/584811545e9a776a56396c871bdaccc0bf0185": "55c9ec83d8cb05a2da3a9369e4f7fdab",
"Brick-Home/.git/objects/a1/f8bdc577a5029040c2da121d838351c68643fc": "5d95621d9b0adce53a2cba2ce35a26ba",
"Brick-Home/.git/objects/a2/ac4ed04854e5311378403e9be7dbfc84374446": "655b6b1236fe3ef4cc6515f47d24b181",
"Brick-Home/.git/objects/a2/bdb49cc748c0c3075c66dde1bc99c8190b1dcc": "89e7ec4659a39ec5d755f4198838d71d",
"Brick-Home/.git/objects/a4/c21cd7dc26bd86fef4420ae0e0d1676c53d394": "4a1945fd2ed73955d32093f84b87582a",
"Brick-Home/.git/objects/a8/6742bd08fc3af095fd355b1fe903d59a828600": "75a6f45454c0716d2f7a16f06bb5723b",
"Brick-Home/.git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "a8ee603f3c72787ba9ac0d9e8695cfe0",
"Brick-Home/.git/objects/aa/154ee7502345271c0a25de05c1c73b9206e93e": "2b3e14319ef24f351a123445d143e243",
"Brick-Home/.git/objects/aa/224f0cb4ef6bafca0744eb0211506769f6a3f5": "20b87bd48539ca6fe840ecef68247dfa",
"Brick-Home/.git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "0f71dae0bcf233241efa99a3c9d748a0",
"Brick-Home/.git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "61886305a27a3edc9485ae96c5c20381",
"Brick-Home/.git/objects/b2/212d334d21a3d0eee871d44c6bed9b519a3411": "edb99dde40679bc7b5ae0ab2e6cae97c",
"Brick-Home/.git/objects/b2/f5ea272c6b28e5e74ebd1004d77eecccdcc199": "646dc9d427e18046290b8564c7d4e408",
"Brick-Home/.git/objects/b3/ecc96e3bfce9c7a37b232463282fa704710e14": "760de881cadb2b77ac8a54f45e731470",
"Brick-Home/.git/objects/b6/51ba8d4ad6354f5a100a20c7aa245c9e2ee6e9": "39835ac3bd5546dcf2a6fe50b23302ec",
"Brick-Home/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
"Brick-Home/.git/objects/b8/a0c0e654f95b54c3655345b8d2315003e39cfa": "e72d37af70940a776a20164bd2a0f219",
"Brick-Home/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
"Brick-Home/.git/objects/ba/afd909b3630382c34c5b4efd6a46a6cd46168d": "e055dbfc094a4a7c13ce32668d3cb882",
"Brick-Home/.git/objects/bd/09f2599a93da3a5c037cd84d8b04fb120c1d3f": "bcf4e43e45bef27c52b642dd93aa758c",
"Brick-Home/.git/objects/bf/a2c7162985329e6dab6da999465bdb83838868": "da0a4e209fb014c8786cec64dd34c3f3",
"Brick-Home/.git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "5e6d59f1d6187e2b1ab5f657c723ff8c",
"Brick-Home/.git/objects/c0/af9a5333b41f104826d9c5c27f16ea404bb51a": "92fd9902b5981f29243f5c00afcd3535",
"Brick-Home/.git/objects/c1/535c0bb2a6f1418df9b6606909e824a3d30e88": "1dfe1a5936c88294e0907b0abae165f9",
"Brick-Home/.git/objects/c1/68583b37e7d21f51ccd4f324a604bca8d3adcb": "dafe4c1485123021a20575344224ddde",
"Brick-Home/.git/objects/c3/1fd0b25f5c8111443b008bdb344a4b8495b4f9": "ab65804790018136bcb50a0b257ae05f",
"Brick-Home/.git/objects/c3/7f660612ad55abffba3f1039c2f5a672c19f78": "2e3e406c1ca1747d266f9cf8cfce4320",
"Brick-Home/.git/objects/c4/e21e89e33e64ad4ea4b548c9a7660becd36404": "40c40be93477a91dfa43d6ad1aa4c9a9",
"Brick-Home/.git/objects/c4/ebad28239876de1b986a2427376b077c1a0220": "aeb993fd881daff87b035781588eca06",
"Brick-Home/.git/objects/c5/542a435c284f6096c8a82da5e56e7b6129171f": "93386c3cbdec31297da7dc47c3b47f37",
"Brick-Home/.git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6060cb588c8774586304298a5710f1f7",
"Brick-Home/.git/objects/c7/a73c32f85baac7e0a860e584195f00c87d0d41": "db4c2850b00c617fe7952bb2eda365b9",
"Brick-Home/.git/objects/c8/2bf7fb8846a640e60efb2ebe98a94d5885eda6": "596cb1d0d3f43db3f60b9d91f54bc275",
"Brick-Home/.git/objects/cc/09c7f5fcf313453eca24f8ceec4f8fbfc1d225": "8fe1d402dcf2919b654f54b85c39ff40",
"Brick-Home/.git/objects/cc/975a4882ea03bbf67850b159c184f4752fd9ba": "18f43c854f6151d52c23f54a82c86a02",
"Brick-Home/.git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "e328ba153ad3c7d383daf129966de954",
"Brick-Home/.git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "43ec7593c54051d29f6a01ef0b3cdb05",
"Brick-Home/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
"Brick-Home/.git/objects/d5/97f11b3a4cf4b9efed7b7b41f5a13dd095b0ee": "ed288a67b0f2979679cd4a8e98511930",
"Brick-Home/.git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "6fb66a610eeb3a4d0399d24581bd4509",
"Brick-Home/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
"Brick-Home/.git/objects/d7/4134d89a8863bb3b0295aac01c3495c69e3888": "8eb6bda2d258e51786810a5f6775e6cf",
"Brick-Home/.git/objects/d8/6606c6d47d337838a8a98ebac13b9791481c78": "c19b6e8ed33a06fdcc3156c6b14912fb",
"Brick-Home/.git/objects/d8/72a9d2bc9d6aba17af88387be4ccadb15689cb": "8777e0a348902553205bd813a92a6adb",
"Brick-Home/.git/objects/da/398ad6f350fd52267c448ba07f799070986c24": "b2e47a7f329a9b61b230961fded6e42b",
"Brick-Home/.git/objects/da/b69648cc6c4fce2f90e616f36a50b0f9ed0d53": "ba32840451869aa0512cd9d7a9b1ac6d",
"Brick-Home/.git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "561d04eb65f955d114e3388465614e21",
"Brick-Home/.git/objects/dd/8302b3818893ea34d8c39c56bfa497e0df622e": "9d7f7c00f0bff7ef26374bae3cf67529",
"Brick-Home/.git/objects/e1/e34bf345091b1e3a59dbbc588dc72f4904860e": "e828711a788e3ddd57e3f3ae91d3475c",
"Brick-Home/.git/objects/e2/81fa491fb61b0690ab891f676bf25efdbdbb28": "c3d169158fa3fc7e377050e5c7c10438",
"Brick-Home/.git/objects/e2/c06660c007c0995415bbc0cb6c5213c7d9bd8f": "e04a52324d78154aa71864eaebee975b",
"Brick-Home/.git/objects/e5/8d26cb01b02f1d21b57b5c88556df8c9472b90": "302e8ce93a55487f59859c978cd14eb7",
"Brick-Home/.git/objects/e8/6eaf6503499dfd48794f689acac8ae21813191": "2ba884e627eea659cbbeb275240db6a2",
"Brick-Home/.git/objects/e8/bc95980146395b5b8c6446744cb6d063e0c06c": "49e19abb6f1ff70dafd4e5211f32db45",
"Brick-Home/.git/objects/e8/d87e09ace6c58da08da7926a42e3056cf74d5f": "fd49b45c99328384dc0674d799a66a59",
"Brick-Home/.git/objects/eb/1e72b5b77f91c38720a6d2f330a13531726d89": "6c0baea592d902e1ad396845d171d996",
"Brick-Home/.git/objects/eb/90d18d33e905b6951f823d447e19d615862193": "0e67e88345e176e7951d9ce650a93cc5",
"Brick-Home/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
"Brick-Home/.git/objects/eb/c8fab9c61e14e0eb3ff8472b7da0ee176866b5": "936960a4c9269fc70963e31a7a4556b9",
"Brick-Home/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
"Brick-Home/.git/objects/f2/a514d73a8569ce6b08c2e8f28d13dc27c3aa83": "7e6d09710dfe0b1062ebe6a81a8d14a9",
"Brick-Home/.git/objects/f4/d9f8d29b19fe6b991b46dcee382c891f56118f": "f4aef8887d82b146de5c81d946710c29",
"Brick-Home/.git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "66a93bdb624bc8a34dbe3c3330302d4d",
"Brick-Home/.git/objects/fa/fe3bad4191f274a7c0f59c9a469073dd262629": "5c1cd737e736bb01d71a98c834f0c2f1",
"Brick-Home/.git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "5683090fd9e290a9ba6fa0dd1a01142c",
"Brick-Home/.git/objects/fd/6aab26384a1ad97033473a0cea2f1d249b7ec0": "4d17c9b6e3eae927660830963846f830",
"Brick-Home/.git/objects/pack/pack-aaec7346036924a09bc8b12e8ec888072176d5c1.idx": "cca10c7de5fcd5cc11090830890ab402",
"Brick-Home/.git/objects/pack/pack-aaec7346036924a09bc8b12e8ec888072176d5c1.pack": "8bf4dc75cf8781ef03966d46d4b4e1c6",
"Brick-Home/.git/packed-refs": "84eef82bde4b48990e92457b2e546efa",
"Brick-Home/.git/refs/heads/main": "dac9a39827e45996b8aa86b7b3acc88f",
"Brick-Home/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"Brick-Home/.git/refs/remotes/origin/main": "dac9a39827e45996b8aa86b7b3acc88f",
"Brick-Home/assets/AssetManifest.bin": "ad9196bf264db78030c7780fbdb2987d",
"Brick-Home/assets/AssetManifest.bin.json": "d6e9323a0f7a09856b8b82e70f795baa",
"Brick-Home/assets/AssetManifest.json": "5de3c5feeed07d7d9c7960ece2d9f31a",
"Brick-Home/assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"Brick-Home/assets/assets/bg/apartment_bg.jpg": "7dfedafd0cb395c3fb6480242ce05db9",
"Brick-Home/assets/assets/bg/login.jpg": "ab05700b34a8e45d2910fb16d02e9946",
"Brick-Home/assets/assets/bg/map.jpg": "1a239302dd0313db46a9d95c8f1c3bfb",
"Brick-Home/assets/assets/bg/site.png": "d8e51e99a35f88c1ece62bcaf6339d0e",
"Brick-Home/assets/assets/images/134.jpeg": "078fa3bfe704401e92f5c02006718081",
"Brick-Home/assets/assets/images/2.png": "b71b1e866074a46ace69f60d83a8ae5d",
"Brick-Home/assets/assets/images/2071.jpg": "5f7b648f6b496e811acd6271a9e847ad",
"Brick-Home/assets/assets/images/3.png": "1657eb18c7adb431d11905ec6fb131d5",
"Brick-Home/assets/assets/images/4.png": "3145290c35c974a53e865a441f80e186",
"Brick-Home/assets/assets/images/5.png": "92ed69845b0c5afe60ecef976eb36a00",
"Brick-Home/assets/assets/images/6.png": "1423fe96ef411101097f32acc4d7ecd1",
"Brick-Home/assets/assets/images/7.png": "5d4465fffaa99f6a78024cc2d3c4759d",
"Brick-Home/assets/assets/images/8.png": "9242bf59ae50ca21aec5aa123bea1632",
"Brick-Home/assets/assets/images/home-satisfy.png": "3ad520aaec949e1d016807618f3ef051",
"Brick-Home/assets/assets/images/home_banner_1.jpg": "a8e6579ca95d242596d68311ccf79a6a",
"Brick-Home/assets/assets/images/home_banner_1.png": "32a571584bb3ea01f740a9d6836ad366",
"Brick-Home/assets/assets/images/logo.png": "3c90f5d0aecbaf31ccd22c7fb82f8708",
"Brick-Home/assets/assets/images/real_bg_1.png": "247814d388aea06744d95c7297273596",
"Brick-Home/assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"Brick-Home/assets/assets/nodatafound.png": "248ef50c0361053ebe7269460031a4dc",
"Brick-Home/assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"Brick-Home/assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"Brick-Home/assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"Brick-Home/assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"Brick-Home/assets/FontManifest.json": "1ee00d31df7d0b30bfafc1cf4922abf8",
"Brick-Home/assets/fonts/MaterialIcons-Regular.otf": "a0c6b7f98c309968052ff8f84ac1fd99",
"Brick-Home/assets/NOTICES": "2f3cd752588515d7c2f8bdfc26dee2c1",
"Brick-Home/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"Brick-Home/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"Brick-Home/assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"Brick-Home/assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"Brick-Home/assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"Brick-Home/assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"Brick-Home/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"Brick-Home/canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"Brick-Home/canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"Brick-Home/canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"Brick-Home/canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"Brick-Home/canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"Brick-Home/canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"Brick-Home/canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"Brick-Home/canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"Brick-Home/canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"Brick-Home/canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"Brick-Home/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Brick-Home/flutter.js": "f393d3c16b631f36852323de8e583132",
"Brick-Home/flutter_bootstrap.js": "84d2ac723dba8a7916173a90788ad238",
"Brick-Home/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Brick-Home/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Brick-Home/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Brick-Home/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"Brick-Home/index.html": "5fee6f8a2ba251bb646dc5629fc81d03",
"Brick-Home/logo.png": "3c90f5d0aecbaf31ccd22c7fb82f8708",
"Brick-Home/main.dart.js": "9ee075c5c970a7ab67731415f7abaf9f",
"Brick-Home/main.txt": "81051bcc2cf1bedf378224b0a93e2877",
"Brick-Home/manifest.json": "44249681fe36f400cc94348e2423bc69",
"Brick-Home/version.json": "2b04f4dd17f41ab45ea8ed44bfea692a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7fd5769fdaaf875f6eddc21eaa5522b2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0afd91d2ffdbf1f12d6ada5d13b175c",
"/": "a0afd91d2ffdbf1f12d6ada5d13b175c",
"logo.png": "3c90f5d0aecbaf31ccd22c7fb82f8708",
"main.dart.js": "3ff43cba7b02822456c4247ffd619a71",
"manifest.json": "44249681fe36f400cc94348e2423bc69",
"version.json": "2b04f4dd17f41ab45ea8ed44bfea692a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
