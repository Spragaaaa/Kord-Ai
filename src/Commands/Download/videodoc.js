const a0_0x5b4b45=a0_0x2a57;(function(_0x255135,_0xf0c0){const _0x213265=a0_0x2a57,_0x27e9=_0x255135();while(!![]){try{const _0x55d206=-parseInt(_0x213265(0x1fb))/0x1*(-parseInt(_0x213265(0x1e4))/0x2)+parseInt(_0x213265(0x1d7))/0x3+-parseInt(_0x213265(0x1dd))/0x4+-parseInt(_0x213265(0x1f6))/0x5+parseInt(_0x213265(0x1e1))/0x6+-parseInt(_0x213265(0x1e7))/0x7*(parseInt(_0x213265(0x1e3))/0x8)+-parseInt(_0x213265(0x206))/0x9*(-parseInt(_0x213265(0x1f4))/0xa);if(_0x55d206===_0xf0c0)break;else _0x27e9['push'](_0x27e9['shift']());}catch(_0x7c7cdb){_0x27e9['push'](_0x27e9['shift']());}}}(a0_0x3258,0x83ce7));function a0_0x2a57(_0xb38948,_0x525594){const _0x325813=a0_0x3258();return a0_0x2a57=function(_0x2a57e6,_0x2bf33c){_0x2a57e6=_0x2a57e6-0x1d3;let _0x2a0cf7=_0x325813[_0x2a57e6];return _0x2a0cf7;},a0_0x2a57(_0xb38948,_0x525594);}function a0_0x3258(){const _0x1af205=['Search\x20for\x20YouTube\x20videos\x20and\x20download\x20them.','youtubedl-core','GET','includes','🌐\x20Hmm,\x20having\x20trouble\x20connecting\x20to\x20the\x20internet.\x20Please\x20try\x20again\x20later.','unlink','error','ytmp4','5154057ifiapN','reply','finish','react','404','2933646jnqFKJ','🤖\x20Oops!\x20Something\x20unexpected\x20happened.\x20We\x27ll\x20look\x20into\x20it.','path','Download','now','log','3365060EZlJbk','gifted-dls','pipe','video/mp4','2670528uDnKMq','videos','63760KewaOF','1344GQaVTV','video_','search','14qoAmQY','kord','Error\x20during\x20execution:','videoo','join','mkdirSync','stream','message','exports','processing','\x0a>\x20©\x20ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ\x20ʙʏ\x20ᴋᴏʀᴅ\x20ɪɴᴄ³²¹™','data','yt-search','10oLUGiy','network','3049915LlCPZj','download_url','😕\x20Oops!\x20No\x20videos\x20found\x20for\x20that\x20query.','createWriteStream','noResults','17QwklRR','url','length'];a0_0x3258=function(){return _0x1af205;};return a0_0x3258();}const ytdl=require(a0_0x5b4b45(0x1ff)),yts=require(a0_0x5b4b45(0x1f3)),fs=require('fs'),path=require(a0_0x5b4b45(0x1d9)),gifted=require(a0_0x5b4b45(0x1de)),axios=require('axios'),emojis={'search':'🔍','processing':'🔄','done':'✅','error':'❌','warning':'⚠️','noResults':'😕'};module[a0_0x5b4b45(0x1ef)]={'usage':[a0_0x5b4b45(0x1ea)],'desc':a0_0x5b4b45(0x1fe),'commandType':a0_0x5b4b45(0x1da),'isGroupOnly':![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':'📺',async 'execute'(_0x445822,_0xdb2cb3,_0x1529c3){const _0x29c745=a0_0x5b4b45;try{const _0x661ff0=_0x1529c3[_0x29c745(0x1eb)]('\x20');await global[_0x29c745(0x1e8)][_0x29c745(0x1d5)](_0xdb2cb3,emojis[_0x29c745(0x1e6)]);if(!_0x661ff0)return await global[_0x29c745(0x1e8)][_0x29c745(0x1d3)](_0xdb2cb3,'🔗\x20Please\x20provide\x20a\x20YouTube\x20search\x20query.');const _0x53288f=await yts(_0x661ff0);if(_0x53288f[_0x29c745(0x1e2)][_0x29c745(0x1fd)]===0x0)return await global[_0x29c745(0x1e8)][_0x29c745(0x1d5)](_0xdb2cb3,emojis[_0x29c745(0x1fa)]),await global['kord'][_0x29c745(0x1d3)](_0xdb2cb3,_0x29c745(0x1f8));const _0x445b79=_0x53288f[_0x29c745(0x1e2)][0x0],_0x3dc247=_0x445b79[_0x29c745(0x1fc)];await global['kord']['react'](_0xdb2cb3,emojis[_0x29c745(0x1f0)]);const _0x215318=await gifted[_0x29c745(0x205)](_0x3dc247);if(!_0x215318||!_0x215318[_0x29c745(0x1f7)])throw new Error('Download\x20URL\x20not\x20found');const _0x21cd30=path['join'](__dirname,'../../temp');!fs['existsSync'](_0x21cd30)&&fs[_0x29c745(0x1ec)](_0x21cd30,{'recursive':!![]});const _0x47d09f=path[_0x29c745(0x1eb)](_0x21cd30,_0x29c745(0x1e5)+Date[_0x29c745(0x1db)]()+'.mp4'),_0x38092e=await axios({'method':_0x29c745(0x200),'url':_0x215318[_0x29c745(0x1f7)],'responseType':_0x29c745(0x1ed)}),_0x487aea=fs[_0x29c745(0x1f9)](_0x47d09f);_0x38092e[_0x29c745(0x1f2)][_0x29c745(0x1df)](_0x487aea),await new Promise((_0x5a85ee,_0x5e3493)=>{const _0x277e1b=_0x29c745;_0x487aea['on'](_0x277e1b(0x1d4),_0x5a85ee),_0x487aea['on'](_0x277e1b(0x204),_0x5e3493);});const _0x5826b7=_0x29c745(0x1f1);await global['kord']['sendDocument'](_0xdb2cb3,await fs['readFile'](_0x47d09f),_0x29c745(0x1e0),_0x29c745(0x1e5)+Date[_0x29c745(0x1db)]()+'.mp4',_0x5826b7),await fs[_0x29c745(0x203)](_0x47d09f),await global[_0x29c745(0x1e8)]['react'](_0xdb2cb3,emojis['done']);}catch(_0x46061f){await global['kord'][_0x29c745(0x1d5)](_0xdb2cb3,emojis['error']),console[_0x29c745(0x1dc)](_0x29c745(0x1e9),_0x46061f);if(_0x46061f[_0x29c745(0x1ee)]['includes'](_0x29c745(0x1f5)))await global[_0x29c745(0x1e8)]['reply'](_0xdb2cb3,_0x29c745(0x202));else _0x46061f['message'][_0x29c745(0x201)](_0x29c745(0x1d6))?await global['kord'][_0x29c745(0x1d3)](_0xdb2cb3,'🚫🔗\x20The\x20video\x20is\x20no\x20longer\x20available.\x20Please\x20check\x20the\x20URL\x20and\x20try\x20again.'):await global['kord']['reply'](_0xdb2cb3,_0x29c745(0x1d8));}}};