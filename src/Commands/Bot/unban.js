const a0_0x151888=a0_0x44ca;(function(_0x297b81,_0x5b17ac){const _0x16b206=a0_0x44ca,_0x5e3083=_0x297b81();while(!![]){try{const _0xa94aa8=-parseInt(_0x16b206(0x79))/0x1+-parseInt(_0x16b206(0x8e))/0x2*(parseInt(_0x16b206(0x8f))/0x3)+-parseInt(_0x16b206(0x76))/0x4+-parseInt(_0x16b206(0x8a))/0x5+parseInt(_0x16b206(0x7c))/0x6*(parseInt(_0x16b206(0x80))/0x7)+-parseInt(_0x16b206(0x7a))/0x8+parseInt(_0x16b206(0x77))/0x9;if(_0xa94aa8===_0x5b17ac)break;else _0x5e3083['push'](_0x5e3083['shift']());}catch(_0x5e888f){_0x5e3083['push'](_0x5e3083['shift']());}}}(a0_0x1c7e,0xaa0f7));const fs=require('fs'),path=require('path'),banListPath=path[a0_0x151888(0x84)](__dirname,'..','..','Database',a0_0x151888(0x78));function a0_0x1c7e(){const _0x3e6247=['21280bNoQOP','existsSync','extendedTextMessage','message','join','User\x20@','stringify','key','\x20has\x20been\x20unbanned\x20and\x20can\x20now\x20use\x20the\x20bot.','remoteJid','4973045DBQNpK','This\x20user\x20is\x20not\x20banned.','contextInfo','sendMessage','146heQAio','22476nGZBmo','indexOf','split','Unban\x20a\x20user,\x20allowing\x20them\x20to\x20use\x20the\x20bot\x20again.','2388056VIrtgb','35493813xzRVyE','banList.json','964061JcWKPm','7309680pwrJCk','@s.whatsapp.net','1518CWjEhB','utf8','exports','replace'];a0_0x1c7e=function(){return _0x3e6247;};return a0_0x1c7e();}function a0_0x44ca(_0x5196b0,_0x221ef2){const _0x1c7ea2=a0_0x1c7e();return a0_0x44ca=function(_0x44ca21,_0x162a4b){_0x44ca21=_0x44ca21-0x75;let _0x34b3e9=_0x1c7ea2[_0x44ca21];return _0x34b3e9;},a0_0x44ca(_0x5196b0,_0x221ef2);}let bannedUsers=[];fs[a0_0x151888(0x81)](banListPath)&&(bannedUsers=JSON['parse'](fs['readFileSync'](banListPath,a0_0x151888(0x7d))));function saveBanList(){const _0x2a7964=a0_0x151888;fs['writeFileSync'](banListPath,JSON[_0x2a7964(0x86)](bannedUsers,null,0x2));}module[a0_0x151888(0x7e)]={'usage':['unban'],'description':a0_0x151888(0x75),'isGroupOnly':![],'isGroupAdminOnly':![],'isOwnerOnly':!![],'execute':async(_0x399689,_0x58b9bb,_0x28ff3a)=>{const _0xbd9c40=a0_0x151888;let _0x38613f;if(_0x58b9bb[_0xbd9c40(0x83)][_0xbd9c40(0x82)]&&_0x58b9bb[_0xbd9c40(0x83)][_0xbd9c40(0x82)][_0xbd9c40(0x8c)]['participant'])_0x38613f=_0x58b9bb[_0xbd9c40(0x83)][_0xbd9c40(0x82)][_0xbd9c40(0x8c)]['participant'];else _0x28ff3a[0x0]&&(_0x38613f=_0x28ff3a[0x0][_0xbd9c40(0x7f)](/[^\d]/g,'')+_0xbd9c40(0x7b));if(!_0x38613f){await _0x399689[_0xbd9c40(0x8d)](_0x58b9bb[_0xbd9c40(0x87)]['remoteJid'],{'text':'Please\x20specify\x20a\x20user\x20to\x20unban\x20or\x20reply\x20to\x20their\x20message.'},{'quoted':_0x58b9bb});return;}const _0x20fc11=bannedUsers[_0xbd9c40(0x90)](_0x38613f);if(_0x20fc11===-0x1){await _0x399689[_0xbd9c40(0x8d)](_0x58b9bb[_0xbd9c40(0x87)]['remoteJid'],{'text':_0xbd9c40(0x8b)},{'quoted':_0x58b9bb});return;}bannedUsers['splice'](_0x20fc11,0x1),saveBanList(),await _0x399689['sendMessage'](_0x58b9bb[_0xbd9c40(0x87)][_0xbd9c40(0x89)],{'text':_0xbd9c40(0x85)+_0x38613f[_0xbd9c40(0x91)]('@')[0x0]+_0xbd9c40(0x88),'mentions':[_0x38613f]},{'quoted':_0x58b9bb});}};