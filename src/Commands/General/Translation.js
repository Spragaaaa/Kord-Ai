const a0_0xfa26f=a0_0x99cf;function a0_0x99cf(_0x2a26df,_0x41328f){const _0x4197ec=a0_0x4197();return a0_0x99cf=function(_0x99cfe3,_0x1b5218){_0x99cfe3=_0x99cfe3-0x1cb;let _0x593663=_0x4197ec[_0x99cfe3];return _0x593663;},a0_0x99cf(_0x2a26df,_0x41328f);}(function(_0x461333,_0x54b57f){const _0x47b214=a0_0x99cf,_0x28fc31=_0x461333();while(!![]){try{const _0x1b54b9=parseInt(_0x47b214(0x1e2))/0x1+parseInt(_0x47b214(0x1e4))/0x2*(parseInt(_0x47b214(0x1cb))/0x3)+parseInt(_0x47b214(0x1cd))/0x4*(parseInt(_0x47b214(0x1d6))/0x5)+-parseInt(_0x47b214(0x1d0))/0x6*(parseInt(_0x47b214(0x1d4))/0x7)+-parseInt(_0x47b214(0x1d1))/0x8+parseInt(_0x47b214(0x1d2))/0x9*(parseInt(_0x47b214(0x1dd))/0xa)+-parseInt(_0x47b214(0x1d5))/0xb;if(_0x1b54b9===_0x54b57f)break;else _0x28fc31['push'](_0x28fc31['shift']());}catch(_0xe70d6b){_0x28fc31['push'](_0x28fc31['shift']());}}}(a0_0x4197,0xc1913));const translate=require(a0_0xfa26f(0x1e0)),iso6391=require(a0_0xfa26f(0x1d3));module['exports']={'usage':[a0_0xfa26f(0x1de),a0_0xfa26f(0x1d9)],'desc':'Translates\x20the\x20quoted\x20message.\x20Detects\x20source\x20language\x20if\x20not\x20specified.','commandType':'General','isGroupOnly':![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':'🌐',async 'execute'(_0x1d5759,_0x398811,_0x5143fa){const _0x5f7925=a0_0xfa26f;try{const _0x196b5c=await kord['getQuotedText'](_0x398811);if(!_0x196b5c)return kord[_0x5f7925(0x1e3)](_0x398811,_0x5f7925(0x1cf));let _0x277c21=_0x5143fa[0x0]?.['toLowerCase'](),_0xffb3b4='';if(!_0x277c21){const _0x4e0754=await translate(_0x196b5c);_0xffb3b4=iso6391['getName'](_0x4e0754[_0x5f7925(0x1d8)]['language'][_0x5f7925(0x1db)]),_0x277c21='en';}else{if(!iso6391[_0x5f7925(0x1df)](_0x277c21))return kord['reply'](_0x398811,'❌\x20Invalid\x20language\x20code.\x20Use\x20ISO\x20639-1\x20codes\x20(e.g.,\x20\x27en\x27,\x20\x27es\x27,\x20\x27fr\x27).');}const _0x19ee71=await translate(_0x196b5c,{'to':_0x277c21}),_0x52b159=iso6391['getName'](_0x277c21),_0x1375ec=_0x5f7925(0x1cc)+(_0xffb3b4||_0x5f7925(0x1e5))+'):*\x20'+_0x196b5c+'\x0a\x0a*Translation\x20('+_0x52b159+_0x5f7925(0x1da)+_0x19ee71[_0x5f7925(0x1e1)]+'\x0a';await kord['reply'](_0x398811,_0x1375ec);}catch(_0x387a31){console[_0x5f7925(0x1ce)](_0x5f7925(0x1dc),_0x387a31),_0x387a31[_0x5f7925(0x1d7)]===0x1ad?await kord[_0x5f7925(0x1e3)](_0x398811,'❌\x20Translation\x20rate\x20limit\x20exceeded.\x20Try\x20again\x20later.'):await kord[_0x5f7925(0x1e3)](_0x398811,'❌\x20An\x20error\x20occurred\x20during\x20translation.\x20Please\x20try\x20again.');}}};function a0_0x4197(){const _0x4929a2=['from','translate','):*\x20','iso','Translation\x20error:','319720oxNyWT','trt','validate','@iamtraction/google-translate','text','1013162BLDRNm','reply','2tAifNR','auto-detected','914481MHnWZG','\x0a*Original\x20(','64EtmJfs','error','❌\x20No\x20quoted\x20message\x20to\x20translate.','78euIBTL','11062592SrFFUe','378iyXOxM','iso-639-1','122486POxqDF','12612512Bnruge','277790UzFZEu','code'];a0_0x4197=function(){return _0x4929a2;};return a0_0x4197();}