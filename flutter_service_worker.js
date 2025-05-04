'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c71f0ac73f57e519c1ec0d7303bae99f",
"assets/AssetManifest.bin.json": "1763974dd8119f82c8b500b2d02a9de1",
"assets/AssetManifest.json": "290d9470b102c527a66b0fec7cb76d8a",
"assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"assets/assets/images/134.jpeg": "078fa3bfe704401e92f5c02006718081",
"assets/assets/images/2.png": "b71b1e866074a46ace69f60d83a8ae5d",
"assets/assets/images/2071.jpg": "5f7b648f6b496e811acd6271a9e847ad",
"assets/assets/images/3.png": "1657eb18c7adb431d11905ec6fb131d5",
"assets/assets/images/4.png": "3145290c35c974a53e865a441f80e186",
"assets/assets/images/5.png": "92ed69845b0c5afe60ecef976eb36a00",
"assets/assets/images/6.png": "1423fe96ef411101097f32acc4d7ecd1",
"assets/assets/images/7.png": "5d4465fffaa99f6a78024cc2d3c4759d",
"assets/assets/images/8.png": "9242bf59ae50ca21aec5aa123bea1632",
"assets/assets/images/home_banner_1.jpg": "a8e6579ca95d242596d68311ccf79a6a",
"assets/assets/images/home_banner_1.png": "32a571584bb3ea01f740a9d6836ad366",
"assets/assets/images/logo.png": "69bb17fd2c88918cddd9c7f29e3711cc",
"assets/assets/images/real_bg_1.png": "247814d388aea06744d95c7297273596",
"assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"assets/assets/nodatafound.png": "248ef50c0361053ebe7269460031a4dc",
"assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"assets/FontManifest.json": "1ee00d31df7d0b30bfafc1cf4922abf8",
"assets/fonts/MaterialIcons-Regular.otf": "339d06b83f6c8b98046afd8261f221f9",
"assets/NOTICES": "2f3cd752588515d7c2f8bdfc26dee2c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"Brick-Home/.git/COMMIT_EDITMSG": "4289bbdd6fba75013b317b2f9a540736",
"Brick-Home/.git/config": "1eabb1d95066886081703a48cec22946",
"Brick-Home/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Brick-Home/.git/FETCH_HEAD": "9c1f663d1c0533ea16fd8829cf3ff9f6",
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
"Brick-Home/.git/index": "9a7ac0c83b2a11030b5eec1b0589d15d",
"Brick-Home/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Brick-Home/.git/logs/HEAD": "290a768dd64735018dbacf83da1c56ce",
"Brick-Home/.git/logs/refs/heads/main": "290a768dd64735018dbacf83da1c56ce",
"Brick-Home/.git/logs/refs/remotes/origin/HEAD": "f4f3c403e97262031d174ef791aed916",
"Brick-Home/.git/logs/refs/remotes/origin/main": "2cb3af96c5d6c110d374c39d250e1bd8",
"Brick-Home/.git/objects/05/8d2cc76ec6c3319246992954c1489450f75bd9": "43f48308bbaf88cb3e20b658d798883f",
"Brick-Home/.git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "cc729cbc1de09e26c8ac1c31cb284e98",
"Brick-Home/.git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "aa6bc2588c86a5df58354e8329a5819b",
"Brick-Home/.git/objects/08/8f35e558f4af9431252fdbb6d16fdafe45b15b": "67b365cb6ccf2b90e7738903eb182d12",
"Brick-Home/.git/objects/0b/e4802d4e84ea8e20fd452a7a0ae875225754c3": "b9f742d0e793715e4b4042f51a7314fc",
"Brick-Home/.git/objects/0f/f61e08b01444bba7562123bf22970cd321c5fe": "98fbeb5aea40e86d3ca6e6add0b8ec15",
"Brick-Home/.git/objects/13/3691d4971029f3566556c36afec4dbcfe040cd": "0426c31354af5733d0141c307c5cb3cd",
"Brick-Home/.git/objects/13/6187055b9a242b3de7492424a254f8ba113441": "1dc5bf9f021af49d068b029f1de26572",
"Brick-Home/.git/objects/14/a7a095df5d4ac0372d4676b7e195ddf3d7168f": "c845a4af3703e5c9d434ee3fbc65a04e",
"Brick-Home/.git/objects/15/6a04b68692ffa75c9e2f2986b48c2bce9ad745": "ddf39962951fe2c22fe28bb0a0c71f9a",
"Brick-Home/.git/objects/1a/cb59297303ec818fcd18e8995eac49b3cfcf66": "19323325bb5273e4abcdfb4fa76fc4d9",
"Brick-Home/.git/objects/1f/26936b106840e104d0b79c509e254291fee240": "5113bcbd622a732bd31915284f1b2847",
"Brick-Home/.git/objects/21/a23bf6abab44d3105ba7087e98514ee0c70ba4": "e5098c97f040f4f263094ba76c6d211c",
"Brick-Home/.git/objects/23/0cb60e67539ea52f7b20b9cab5ce55c254f5da": "aaa680ce9d214dac88394d99660c2d42",
"Brick-Home/.git/objects/24/eda27733cece1dec15b0b1e117031f36b3492f": "5e0d618555a1446923dbf32fdad92e59",
"Brick-Home/.git/objects/25/f9ede9317f756285999d9e6f19ca28ad5b3763": "de7a82c4d2bc679eb17f03835d46d5dc",
"Brick-Home/.git/objects/27/14cddb60779143b9499b5f5be98e9fb4277d6e": "802ac7d5f23cec24b74468a75d8b7dc9",
"Brick-Home/.git/objects/27/3bc1885bbf3f7155e17ade360415aca0f603c3": "71f39b58d7af8887bb9811de4d3550c6",
"Brick-Home/.git/objects/28/9eea6a87a8f1643d652238c83679518c6a6161": "3e9a1f41b04ecd9b05cd3ea8e07dede6",
"Brick-Home/.git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "f610cbe34ab930f142b6d073ab27deb5",
"Brick-Home/.git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "cefb98dcae0301097bc465deeeb72772",
"Brick-Home/.git/objects/35/8ba0c73c19c25231a2ace24a85783e0a90f3be": "b87797f4d204654fe5c1cb2d797292be",
"Brick-Home/.git/objects/36/78897577a134fcb55d9560ed66eb2b6ab39f64": "7ae4d970e7c84bb68d4f0daa18506319",
"Brick-Home/.git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "18afdd808b7e0b924a0e7474cebad727",
"Brick-Home/.git/objects/3b/58f82c13273c43d1c1e71f85e705c4107a4562": "1ce43e40b803fa76d5ebb2fc44ae03a6",
"Brick-Home/.git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "707307abdda4f1fc08504b12b08018e6",
"Brick-Home/.git/objects/3d/faf87dc77bff7a8139872039d45789dcdce179": "0f5c951a97a38fe43980c0bb2c6c44bb",
"Brick-Home/.git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "b51c8670b810523b169634bf530a8675",
"Brick-Home/.git/objects/42/3e1cc9bef37dde593b6b8ba61c868c3053c0fd": "ca72755baa09bbe6527950c3e5afe986",
"Brick-Home/.git/objects/44/296892db39eaa791701e9c3ed6d57cdde533eb": "6d2e93b9490d866e7a0408efbb234063",
"Brick-Home/.git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "f6fc11391a8c401cfb67cb54aa713a55",
"Brick-Home/.git/objects/49/59eef24e148d25c61e8d968c46b74c4fe2c45f": "6f96bfcd5b567df37aa3d7cc36fdebb3",
"Brick-Home/.git/objects/4d/1397fc5144efbeb962284afb0b367bbd786d26": "6658bf86751f1119e2862a45e3cfb339",
"Brick-Home/.git/objects/50/126928c16c7c7666d45aedffece63acfb09a31": "4b6acd9387f90e0f938b28c742951432",
"Brick-Home/.git/objects/5c/49836a3bf06163282814bef69aa584d63dce9b": "0a762a245c689c61c956044ed5449f1f",
"Brick-Home/.git/objects/5f/06d36f0f933cb015e1d8a723b59b627c742ae8": "5ef020115f2f3ee03c7f13eb6dfe6098",
"Brick-Home/.git/objects/5f/5e79d80adee9c2d964c1f930bcb0d71a2de862": "91d779d841fe12f7f5b87f2ea9d48a31",
"Brick-Home/.git/objects/60/dc86e5a0285225a23323c4c614b3470e19db18": "1d4f497c90776e8e886b385dc06de1ff",
"Brick-Home/.git/objects/65/fd1cdaf0dd3228782319a3c7c0a620276fb32c": "607513d9adb943909adf658287acb77d",
"Brick-Home/.git/objects/69/a69ea1bc17721dc046e3ab702ef8f6d80f4b9f": "951672eb4cc5b5bfe574ae2d21e16b1d",
"Brick-Home/.git/objects/69/c4395641af5d907052176f930bdea9571d3d4b": "5a7ac4602a7161ed317e535cd6734743",
"Brick-Home/.git/objects/69/e1b26f5e1d4ccbe89a230d87bfb131ce6ac934": "20a9ab6c5a118e9f8833caf197272806",
"Brick-Home/.git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "f1341a25d22b4a8e5f9c0241d202a781",
"Brick-Home/.git/objects/6c/8a108eab3ddfb86005b1298e699c53cb999088": "82a78d3e8af382c13b1fe08cf8e1a297",
"Brick-Home/.git/objects/6c/9b6bf121af65ed3405dd1633cbc36c6af78d13": "e72d9f4b91aab13ef0b1d56da2396d57",
"Brick-Home/.git/objects/78/800fcb266be32e8c8eda899a9683e71025e78d": "0bc0542e181ff76627736684fb0fe7be",
"Brick-Home/.git/objects/80/8192651801033c6b823ae597fac52baa0a2562": "0e763407a3d5a0fce3040f2ffc46b980",
"Brick-Home/.git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "f88c3e8f69490491359c01fdfbf4dea9",
"Brick-Home/.git/objects/87/2c956235868cb514de1e1fee4aab52a58cd73e": "ace64bd73fdab51fa46b569518a280bc",
"Brick-Home/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
"Brick-Home/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
"Brick-Home/.git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "cc171eda59b2198bcfb662da9c3ed257",
"Brick-Home/.git/objects/92/a565478b4ad60baec3aae5909d422c85eac63e": "814bb18b2308cdfbf41dca867671cae7",
"Brick-Home/.git/objects/93/6f67b909813070ddd45d49b015cd815674e894": "de8d6ed43affe219b765be4590595d03",
"Brick-Home/.git/objects/94/1ab267651a3b3c42cc9a91ae91034df50b42ec": "7edf402f63249fe45a875b254d627d72",
"Brick-Home/.git/objects/96/4d8ed33a244d46fa1fd6f34b1b827d188869e7": "02bce6093054529cad263a9e1ee59673",
"Brick-Home/.git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "e0aee1a764d4e79300d1392e0233ed7e",
"Brick-Home/.git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "0b688f613cb79b7928e386a6ceb6ac8b",
"Brick-Home/.git/objects/9c/106e770721ca273311b0fed64f3bb5111c8929": "a9c206eeb1e79cf1bb7caa640bcde601",
"Brick-Home/.git/objects/9c/9e1e16d28261c1d57f152897818da97af4576f": "5de5e14190ddf7c1ef7b9253f39a2473",
"Brick-Home/.git/objects/9d/584811545e9a776a56396c871bdaccc0bf0185": "55c9ec83d8cb05a2da3a9369e4f7fdab",
"Brick-Home/.git/objects/a1/f8bdc577a5029040c2da121d838351c68643fc": "5d95621d9b0adce53a2cba2ce35a26ba",
"Brick-Home/.git/objects/a2/bdb49cc748c0c3075c66dde1bc99c8190b1dcc": "89e7ec4659a39ec5d755f4198838d71d",
"Brick-Home/.git/objects/a4/c21cd7dc26bd86fef4420ae0e0d1676c53d394": "4a1945fd2ed73955d32093f84b87582a",
"Brick-Home/.git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "a8ee603f3c72787ba9ac0d9e8695cfe0",
"Brick-Home/.git/objects/aa/154ee7502345271c0a25de05c1c73b9206e93e": "2b3e14319ef24f351a123445d143e243",
"Brick-Home/.git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "0f71dae0bcf233241efa99a3c9d748a0",
"Brick-Home/.git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "61886305a27a3edc9485ae96c5c20381",
"Brick-Home/.git/objects/b6/51ba8d4ad6354f5a100a20c7aa245c9e2ee6e9": "39835ac3bd5546dcf2a6fe50b23302ec",
"Brick-Home/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
"Brick-Home/.git/objects/b8/a0c0e654f95b54c3655345b8d2315003e39cfa": "e72d37af70940a776a20164bd2a0f219",
"Brick-Home/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
"Brick-Home/.git/objects/bd/09f2599a93da3a5c037cd84d8b04fb120c1d3f": "bcf4e43e45bef27c52b642dd93aa758c",
"Brick-Home/.git/objects/bf/a2c7162985329e6dab6da999465bdb83838868": "da0a4e209fb014c8786cec64dd34c3f3",
"Brick-Home/.git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "5e6d59f1d6187e2b1ab5f657c723ff8c",
"Brick-Home/.git/objects/c1/535c0bb2a6f1418df9b6606909e824a3d30e88": "1dfe1a5936c88294e0907b0abae165f9",
"Brick-Home/.git/objects/c3/1fd0b25f5c8111443b008bdb344a4b8495b4f9": "ab65804790018136bcb50a0b257ae05f",
"Brick-Home/.git/objects/c4/ebad28239876de1b986a2427376b077c1a0220": "aeb993fd881daff87b035781588eca06",
"Brick-Home/.git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6060cb588c8774586304298a5710f1f7",
"Brick-Home/.git/objects/c7/a73c32f85baac7e0a860e584195f00c87d0d41": "db4c2850b00c617fe7952bb2eda365b9",
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
"Brick-Home/.git/objects/da/398ad6f350fd52267c448ba07f799070986c24": "b2e47a7f329a9b61b230961fded6e42b",
"Brick-Home/.git/objects/da/b69648cc6c4fce2f90e616f36a50b0f9ed0d53": "ba32840451869aa0512cd9d7a9b1ac6d",
"Brick-Home/.git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "561d04eb65f955d114e3388465614e21",
"Brick-Home/.git/objects/e1/e34bf345091b1e3a59dbbc588dc72f4904860e": "e828711a788e3ddd57e3f3ae91d3475c",
"Brick-Home/.git/objects/e5/8d26cb01b02f1d21b57b5c88556df8c9472b90": "302e8ce93a55487f59859c978cd14eb7",
"Brick-Home/.git/objects/e8/d87e09ace6c58da08da7926a42e3056cf74d5f": "fd49b45c99328384dc0674d799a66a59",
"Brick-Home/.git/objects/eb/1e72b5b77f91c38720a6d2f330a13531726d89": "6c0baea592d902e1ad396845d171d996",
"Brick-Home/.git/objects/eb/90d18d33e905b6951f823d447e19d615862193": "0e67e88345e176e7951d9ce650a93cc5",
"Brick-Home/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
"Brick-Home/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
"Brick-Home/.git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "66a93bdb624bc8a34dbe3c3330302d4d",
"Brick-Home/.git/objects/fa/fe3bad4191f274a7c0f59c9a469073dd262629": "5c1cd737e736bb01d71a98c834f0c2f1",
"Brick-Home/.git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "5683090fd9e290a9ba6fa0dd1a01142c",
"Brick-Home/.git/objects/pack/pack-aaec7346036924a09bc8b12e8ec888072176d5c1.idx": "cca10c7de5fcd5cc11090830890ab402",
"Brick-Home/.git/objects/pack/pack-aaec7346036924a09bc8b12e8ec888072176d5c1.pack": "8bf4dc75cf8781ef03966d46d4b4e1c6",
"Brick-Home/.git/packed-refs": "84eef82bde4b48990e92457b2e546efa",
"Brick-Home/.git/refs/heads/main": "fb5d82c0df3ced801ec02a834e1bf503",
"Brick-Home/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"Brick-Home/.git/refs/remotes/origin/main": "fb5d82c0df3ced801ec02a834e1bf503",
"Brick-Home/assets/AssetManifest.bin": "c71f0ac73f57e519c1ec0d7303bae99f",
"Brick-Home/assets/AssetManifest.bin.json": "1763974dd8119f82c8b500b2d02a9de1",
"Brick-Home/assets/AssetManifest.json": "290d9470b102c527a66b0fec7cb76d8a",
"Brick-Home/assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"Brick-Home/assets/assets/images/134.jpeg": "078fa3bfe704401e92f5c02006718081",
"Brick-Home/assets/assets/images/2.png": "b71b1e866074a46ace69f60d83a8ae5d",
"Brick-Home/assets/assets/images/2071.jpg": "5f7b648f6b496e811acd6271a9e847ad",
"Brick-Home/assets/assets/images/3.png": "1657eb18c7adb431d11905ec6fb131d5",
"Brick-Home/assets/assets/images/4.png": "3145290c35c974a53e865a441f80e186",
"Brick-Home/assets/assets/images/5.png": "92ed69845b0c5afe60ecef976eb36a00",
"Brick-Home/assets/assets/images/6.png": "1423fe96ef411101097f32acc4d7ecd1",
"Brick-Home/assets/assets/images/7.png": "5d4465fffaa99f6a78024cc2d3c4759d",
"Brick-Home/assets/assets/images/8.png": "9242bf59ae50ca21aec5aa123bea1632",
"Brick-Home/assets/assets/images/home_banner_1.jpg": "a8e6579ca95d242596d68311ccf79a6a",
"Brick-Home/assets/assets/images/home_banner_1.png": "32a571584bb3ea01f740a9d6836ad366",
"Brick-Home/assets/assets/images/logo.png": "69bb17fd2c88918cddd9c7f29e3711cc",
"Brick-Home/assets/assets/images/real_bg_1.png": "247814d388aea06744d95c7297273596",
"Brick-Home/assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"Brick-Home/assets/assets/nodatafound.png": "248ef50c0361053ebe7269460031a4dc",
"Brick-Home/assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"Brick-Home/assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"Brick-Home/assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"Brick-Home/assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"Brick-Home/assets/FontManifest.json": "1ee00d31df7d0b30bfafc1cf4922abf8",
"Brick-Home/assets/fonts/MaterialIcons-Regular.otf": "49f0e1edf3782ead7bc741c40f233ca3",
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
"Brick-Home/flutter_bootstrap.js": "594f7fb41b45aacf19278f25173731ad",
"Brick-Home/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Brick-Home/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Brick-Home/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Brick-Home/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"Brick-Home/index.html": "be8b64ddc18c338a1c8b738c98641bc4",
"Brick-Home/logo.png": "69bb17fd2c88918cddd9c7f29e3711cc",
"Brick-Home/main.dart.js": "a328f20bdec71430bb0a16ffc1dfce22",
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
"flutter_bootstrap.js": "c44a35e53d451c9b321afa6fc4ce5b1b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7af781b2adc25b0e14115ea9e00a16be",
"/": "7af781b2adc25b0e14115ea9e00a16be",
"logo.png": "69bb17fd2c88918cddd9c7f29e3711cc",
"main.dart.js": "b86c41fe6617980dd65f4a2c0fef747e",
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
