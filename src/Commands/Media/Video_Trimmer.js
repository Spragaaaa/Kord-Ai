function a0_0x21f4(_0x431654,_0x2f6957){const _0x367e39=a0_0x367e();return a0_0x21f4=function(_0x21f447,_0x8c1465){_0x21f447=_0x21f447-0xa9;let _0x4d5b57=_0x367e39[_0x21f447];return _0x4d5b57;},a0_0x21f4(_0x431654,_0x2f6957);}const a0_0x51c593=a0_0x21f4;(function(_0x3b3d94,_0x59a8c2){const _0x1557d4=a0_0x21f4,_0x3b298b=_0x3b3d94();while(!![]){try{const _0x37c088=-parseInt(_0x1557d4(0xb6))/0x1+parseInt(_0x1557d4(0xc8))/0x2+parseInt(_0x1557d4(0xca))/0x3*(parseInt(_0x1557d4(0xc3))/0x4)+parseInt(_0x1557d4(0xad))/0x5*(parseInt(_0x1557d4(0xb8))/0x6)+-parseInt(_0x1557d4(0xb0))/0x7*(-parseInt(_0x1557d4(0xb9))/0x8)+-parseInt(_0x1557d4(0xb7))/0x9*(parseInt(_0x1557d4(0xc9))/0xa)+-parseInt(_0x1557d4(0xae))/0xb*(-parseInt(_0x1557d4(0xbe))/0xc);if(_0x37c088===_0x59a8c2)break;else _0x3b298b['push'](_0x3b298b['shift']());}catch(_0x26ca46){_0x3b298b['push'](_0x3b298b['shift']());}}}(a0_0x367e,0xd526d));function a0_0x367e(){const _0x180963=['662624DEhsdQ','length','highestvideo','❌\x20Invalid\x20YouTube\x20URL.','trimvideo','59994TnrFnk','10WnEasO','21BXetBz','_trimmed.mp4','❌\x20An\x20error\x20occurred\x20while\x20trimming\x20the\x20video.','video/mp4','title','Media','Trimmed:\x20','✅\x20Video\x20trimmed\x20and\x20sent\x20successfully!','end','error','unlinkSync','replace','✂️\x20Usage:\x20!trimvideo\x20<YouTube\x20URL>\x20<start\x20time>\x20<end\x20time>','./temp','Trim\x20a\x20YouTube\x20video\x20to\x20a\x20specific\x20duration','2409895woueMe','1121054cSyRTh','⏳\x20Downloading\x20and\x20trimming\x20video...','7hslqsJ','finish','.mp4','join','setStartTime','readFileSync','1071533kVBLCy','13455846XXkycR','12aMaIhW','3766696nYfUpe','vtrim','mkdirSync','reply','fluent-ffmpeg','96UHdQQG','validateURL','run','output','setDuration'];a0_0x367e=function(){return _0x180963;};return a0_0x367e();}const ffmpeg=require(a0_0x51c593(0xbd)),fs=require('fs'),path=require('path'),ytdl=require('ytdl-core');module['exports']={'usage':[a0_0x51c593(0xc7),a0_0x51c593(0xba)],'desc':a0_0x51c593(0xac),'commandType':a0_0x51c593(0xcf),'isGroupOnly':![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':'✂️',async 'execute'(_0x52276c,_0x17af26,_0x31b003){const _0x28284c=a0_0x51c593;try{if(_0x31b003[_0x28284c(0xc4)]!==0x3)return await kord[_0x28284c(0xbc)](_0x17af26,_0x28284c(0xaa));const [_0x283209,_0x528184,_0x56899c]=_0x31b003;if(!ytdl[_0x28284c(0xbf)](_0x283209))return await kord[_0x28284c(0xbc)](_0x17af26,_0x28284c(0xc6));await kord['reply'](_0x17af26,_0x28284c(0xaf));const _0x2c0755=await ytdl['getInfo'](_0x283209),_0x553e1a=_0x2c0755['videoDetails'][_0x28284c(0xce)][_0x28284c(0xa9)](/[^\w\s]/gi,''),_0x4e59d1=path[_0x28284c(0xb3)](_0x28284c(0xab));!fs['existsSync'](_0x4e59d1)&&fs[_0x28284c(0xbb)](_0x4e59d1);const _0x2d9eec=path['join'](_0x4e59d1,_0x553e1a+'_input.mp4'),_0x4c7f59=path[_0x28284c(0xb3)](_0x4e59d1,_0x553e1a+_0x28284c(0xcb));await new Promise((_0x2ae32b,_0x2a61a7)=>{const _0x229313=_0x28284c;ytdl(_0x283209,{'quality':_0x229313(0xc5)})['pipe'](fs['createWriteStream'](_0x2d9eec))['on'](_0x229313(0xb1),_0x2ae32b)['on']('error',_0x2a61a7);}),await new Promise((_0xb9a88,_0x492a98)=>{const _0x1ad3e4=_0x28284c;ffmpeg(_0x2d9eec)[_0x1ad3e4(0xb4)](_0x528184)[_0x1ad3e4(0xc2)](_0x56899c)[_0x1ad3e4(0xc1)](_0x4c7f59)['on'](_0x1ad3e4(0xd2),_0xb9a88)['on'](_0x1ad3e4(0xd3),_0x492a98)[_0x1ad3e4(0xc0)]();}),await kord['sendVideo'](_0x17af26,fs[_0x28284c(0xb5)](_0x4c7f59),_0x28284c(0xcd),_0x28284c(0xd0)+_0x553e1a+_0x28284c(0xb2)),fs[_0x28284c(0xd4)](_0x2d9eec),fs[_0x28284c(0xd4)](_0x4c7f59),await kord[_0x28284c(0xbc)](_0x17af26,_0x28284c(0xd1));}catch(_0x517ba4){console[_0x28284c(0xd3)](_0x517ba4),await kord[_0x28284c(0xbc)](_0x17af26,_0x28284c(0xcc));}}};