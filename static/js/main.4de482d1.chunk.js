(this.webpackJsonpCrazyPandaVillage=this.webpackJsonpCrazyPandaVillage||[]).push([[0],{110:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return k}));var r=n(11),a=n(4),i=n(1),c=n.n(i),o=n(24),s=n(38),u=n(5),l=n(187),p=n(42),b=new o.e.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),d=new o.e.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.length>3&&void 0!==l[3]?l[3]:"recent",i=l.length>4&&void 0!==l[4]&&l[4],o=!1,s={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(u,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(o||!i){e.next=7;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,s=n&&n.value[0],o||(s?s.err?(console.log("REST error for",t,s),o=!0,l(s.err)):s.confirmations?(console.log("REST confirmation for",t,s),o=!0,u(s)):console.log("REST no confirmations for",t,s):console.log("REST null result for",t,s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,y(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return s=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),o=!0,console.log("Returning status",s),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:o.e.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:o.e.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new o.e.TransactionInstruction({keys:i,programId:p.b,data:e.from([])})},m=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,i,s,u,l,p,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new o.c(r,t,{preflightCommitment:"recent"}),e.next=3,o.b.fetchIdl(b,a);case 3:return i=e.sent,s=new o.b(i,b,a),e.next=7,s.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),p=u.itemsRedeemed.toNumber(),d=l-p,e.abrupt("return",{id:n,program:s,state:{itemsAvailable:l,itemsRedeemed:p,itemsRemaining:d,isSoldOut:0===d,isActive:u.data.goLiveDate.toNumber()<(new Date).getTime()/1e3&&(!u.endSettings||(u.endSettings.endSettingType.date?u.endSettings.number.toNumber()>(new Date).getTime()/1e3:p<u.endSettings.number.toNumber())),goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.e.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer(),e.from("edition")],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.e.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.e.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var a,i,b,f,m,k,y,w,j,O,S,T,P,A,M,R,E,K;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.e.Keypair.generate(),e.next=3,Object(p.c)(a.publicKey,n);case 3:if(i=e.sent[0],!t.state.tokenMint){e.next=10;break}return e.next=7,Object(p.c)(t.state.tokenMint,n);case 7:e.t0=e.sent[0],e.next=11;break;case 10:e.t0=n;case 11:return b=e.t0,f=t.id,m=[],k=[a],y=[],e.t1=o.e.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=s.a.span,e.next=22,t.program.provider.connection.getMinimumBalanceForRentExemption(s.a.span);case 22:if(e.t5=e.sent,e.t6=s.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=s.c.createInitMintInstruction(s.b,a.publicKey,0,n,n),e.t10=g(i,n,n,a.publicKey),e.t11=s.c.createMintToInstruction(s.b,a.publicKey,i,n,[],1),w=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=45;break}return e.t12=m,e.next=34,Object(p.e)(n,t.state.gatekeeper.gatekeeperNetwork);case 34:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=45;break}return m.push({pubkey:p.a,isWritable:!1,isSigner:!1}),e.t15=m,e.next=42,Object(p.d)(t.state.gatekeeper.gatekeeperNetwork);case 42:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 45:if(!t.state.whitelistMintSettings){e.next=60;break}return j=new o.e.PublicKey(t.state.whitelistMintSettings.mint),e.next=49,Object(p.c)(j,n);case 49:if(O=e.sent[0],m.push({pubkey:O,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=60;break}return S=o.e.Keypair.generate(),m.push({pubkey:j,isWritable:!0,isSigner:!1}),m.push({pubkey:S.publicKey,isWritable:!1,isSigner:!0}),k.push(S),e.next=58,t.program.provider.connection.getAccountInfo(O);case 58:e.sent&&(w.push(s.c.createApproveInstruction(s.b,O,S.publicKey,n,[],1)),y.push(s.c.createRevokeInstruction(s.b,O,n,[])));case 60:return t.state.tokenMint&&(T=o.e.Keypair.generate(),k.push(T),m.push({pubkey:b,isWritable:!0,isSigner:!1}),m.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),w.push(s.c.createApproveInstruction(s.b,b,T.publicKey,n,[],t.state.price.toNumber())),y.push(s.c.createRevokeInstruction(s.b,b,n,[]))),e.next=63,v(a.publicKey);case 63:return P=e.sent,e.next=66,h(a.publicKey);case 66:return A=e.sent,e.next=69,x(f);case 69:return M=e.sent,R=Object(r.a)(M,2),E=R[0],K=R[1],e.t18=w,e.next=76,t.program.instruction.mintNft(K,{accounts:{candyMachine:f,candyMachineCreator:E,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:P,masterEdition:A,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:d,tokenProgram:s.b,systemProgram:u.SystemProgram.programId,rent:o.e.SYSVAR_RENT_PUBKEY,clock:o.e.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:o.e.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:o.e.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:m.length>0?m:void 0});case 76:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=78,e.next=81,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[w,y],[k,[]]);case 81:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 84:e.prev=84,e.t20=e.catch(78),console.log(e.t20);case 87:return e.abrupt("return",[]);case 88:case"end":return e.stop()}}),e,null,[[78,84]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(16).Buffer)},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(19),i=n(4),c=n(1),o=n.n(c),s=n(5),u=n(101);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(i.a)(o.a.mark((function e(t,n,i,c){var l,p,b,f,g,m,h,v,x,k,y,w,j,O,S=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=S.length>4&&void 0!==S[4]?S[4]:r.Parallel,p=S.length>5&&void 0!==S[5]?S[5]:"singleGossip",b=S.length>6&&void 0!==S[6]?S[6]:function(e,t){},f=S.length>7&&void 0!==S[7]?S[7]:function(e,t){return!1},g=S.length>8?S[8]:void 0,n.publicKey){e.next=7;break}throw new u.f;case 7:if(m=[],g){e.next=12;break}return e.next=11,t.getRecentBlockhash(p);case 11:g=e.sent;case 12:h=function(e){var t=i[e],r=c[e];if(0===t.length)return"continue";var o=new s.Transaction;t.forEach((function(e){return o.add(e)})),o.recentBlockhash=g.blockhash,o.setSigners.apply(o,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&o.partialSign.apply(o,Object(a.a)(r)),m.push(o)},v=0;case 14:if(!(v<i.length)){e.next=21;break}if("continue"!==h(v)){e.next=18;break}return e.abrupt("continue",18);case 18:v++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(m);case 23:x=e.sent,k=[],y={breakEarly:!1,i:0},console.log("Signed txns length",x.length,"vs handed in length",i.length),w=o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=d({connection:t,signedTransaction:x[n]})).then((function(e){var t=e.txid;e.slot;b(t,n)})).catch((function(e){f(x[n],n),l===r.StopOnFailure&&(y.breakEarly=!0,y.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!y.breakEarly){e.next=19;break}return console.log("Died on ",y.i),e.t1=y.i,e.next=16,Promise.all(k);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:k.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),j=0;case 29:if(!(j<x.length)){e.next=37;break}return e.delegateYield(w(j),"t0",31);case 31:if("object"!==typeof(O=e.t0)){e.next=34;break}return e.abrupt("return",O.v);case 34:j++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(k);case 40:return e.t1=x.length,e.next=43,Promise.all(k);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),p=function(){return(new Date).getTime()/1e3},b=15e3;function d(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(o.a.mark((function e(t){var n,r,a,c,s,u,l,d,f,m,v,k,y;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,c=void 0===a?b:a,s=n.serialize(),u=p(),l=0,e.next=6,r.sendRawTransaction(s,{skipPreflight:!0});case 6:return d=e.sent,console.log("Started awaiting confirmation for",d),f=!1,Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(p()-u<c)){e.next=6;break}return r.sendRawTransaction(s,{skipPreflight:!0}),e.next=4,x(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,h(d,c,r,"recent",!0);case 13:if(m=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!m.err){e.next=19;break}throw console.error(m.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===m||void 0===m?void 0:m.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return v=null,e.prev=28,e.next=31,g(r,n,"single");case 31:v=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!v||!v.err){e.next=47;break}if(!v.logs){e.next=46;break}k=v.logs.length-1;case 39:if(!(k>=0)){e.next=46;break}if(!(y=v.logs[k]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+y.slice("Program log: ".length));case 43:--k,e.next=39;break;case 46:throw new Error(JSON.stringify(v.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",d,p()-u),e.abrupt("return",{txid:d,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function g(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(o.a.mark((function e(t,n,r){var a,i,c,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),c=i.toString("base64"),s=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",s);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n){return v.apply(this,arguments)}function v(){return v=Object(i.a)(o.a.mark((function e(t,n,r){var a,c,s,u,l,p=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>3&&void 0!==p[3]?p[3]:"recent",c=p.length>4&&void 0!==p[4]&&p[4],s=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(i.a)(o.a.mark((function e(p,b){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),p(u))}),a)}catch(d){s=!0,console.error("WS error in setup",t,d)}case 2:if(s||!c){e.next=8;break}return Object(i.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,p(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function x(e){return new Promise((function(t){return setTimeout(t,e)}))}},207:function(e,t,n){},208:function(e,t,n){},210:function(e,t){},213:function(e,t){},225:function(e,t){},236:function(e,t){},237:function(e,t){},258:function(e,t){},261:function(e,t){},267:function(e,t){},278:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(30),c=n.n(i),o=(n(207),n(208),n(21)),s=n(4),u=n(11),l=n(61),p=n(1),b=n.n(p),d=n(62),f=n(320),g=n(327),m=n(314),h=n(324),v=n(5),x=n(178),k=n(135),y=n(110),w=n(312),j=n(318),O=n(90),S=n(8),T=n(7),P=n(13),A=n(14),M=n(24),R=n(15);function E(e){return new M.a(new Date(e).getTime()/1e3)}var K,D,C=!1,W=(E("2 Jan 2022 00:00:00 GMT"),a.a.Component,{enabled:!1,startDate:E("1 Jan 2022 00:00:00 GMT"),endDate:E("8 Jan 2022 00:00:00 GMT"),countdown:!1,title:"White List",desc:void 0,enableCustomHTML:!1}),_=(a.a.Component,{startDate:E("7 Jan 2022 00:00:00 GMT"),endDate:void 0,countdown:!1,title:"Public Sale",desc:"Sale is now live. Mint your NFT below",enableCustomHTML:!1}),N=(a.a.Component,n(42)),B=Object(d.a)(w.a)(K||(K=Object(l.a)(["\n  width: 195px;\n  font-size: 16px;\n  position: relative;\n  z-index: 11;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  vertical-align: top;\n  font-family: inherit;\n  font-size: 20px;\n  text-align: center;\n  font-weight: 700;\n  text-transform: uppercase;\n  height: 50px;\n  background: #FF8126;\n  border-radius: 55px;\n  border: none;\n  padding: 0 20px;\n  -webkit-transition: .2s;\n  -o-transition: .2s;\n  transition: .2s;\n  cursor: pointer;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n  position: relative;\n  background: #FB7F03;\n  color: #23272A;\n\n"]))),I=function(e){var t,n,a,i,c=e.onMint,o=e.candyMachine,l=e.isMinting,p=Object(O.c)(),d=p.requestGatewayToken,f=p.gatewayStatus,g=Object(r.useState)(!1),m=Object(u.a)(g,2),h=m[0],v=m[1],x=null===(t=Object(N.f)(W.startDate))||void 0===t?void 0:t.getTime(),k=null===(n=Object(N.f)(W.endDate))||void 0===n?void 0:n.getTime(),y=null===(a=Object(N.f)(_.startDate))||void 0===a?void 0:a.getTime(),w=null===(i=Object(N.f)(_.endDate))||void 0===i?void 0:i.getTime();function S(){return!!(W.enabled&&x&&k&&Date.now()>x&&Date.now()<k)}var T=S();function P(){return y&&w?Date.now()>y&&Date.now()<w:y?Date.now()>y:void 0}console.log("is Whitelist Sale Active? "+S());var A=P();return console.log("is public sale live? "+P()),console.log(null===o||void 0===o?void 0:o.state.isSoldOut,l,T||A,!(null!==o&&void 0!==o&&o.state.isActive)),Object(r.useEffect)((function(){f===O.b.ACTIVE&&h&&(console.log("Minting"),c(),v(!1))}),[f,h,v,c]),Object(R.jsx)(B,{className:"minting-button",disabled:(null===o||void 0===o?void 0:o.state.isSoldOut)||l||C||!(T||A),onClick:Object(s.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v(!0),null===o||void 0===o||!o.state.isActive||null===o||void 0===o||!o.state.gatekeeper){e.next=15;break}if(console.log("gatekeeper active"),f!==O.b.ACTIVE){e.next=8;break}console.log(f+O.b.ACTIVE),v(!0),e.next=13;break;case 8:return console.log("requeting token"),e.next=11,d();case 11:t=e.sent,console.log(t);case 13:e.next=18;break;case 15:return e.next=17,c();case 17:v(!1);case 18:case"end":return e.stop()}}),e)}))),variant:"contained",children:Object(R.jsx)("div",{className:"mint-button-text",children:null!==o&&void 0!==o&&o.state.isSoldOut?"SOLD OUT":l?Object(R.jsx)(j.a,{}):C?"Mint Paused":"MINT"})})},L=(n(319),n(315),n(153),n(310)),F=n(332);Object(L.a)((function(e){return Object(F.a)({root:{display:"flex",padding:e.spacing(0),"& > *":{margin:e.spacing(.5),marginRight:0,width:e.spacing(6),height:e.spacing(6),display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontSize:10}},done:{display:"flex",margin:e.spacing(1),marginRight:0,padding:e.spacing(1),flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontWeight:"bold",fontSize:18},item:{fontWeight:"bold",fontSize:18}})}));!function(e){e[e.AnticipationPhase=0]="AnticipationPhase",e[e.SetPrice=1]="SetPrice",e[e.GracePeriod=2]="GracePeriod",e[e.Lottery=3]="Lottery",e[e.RaffleFinished=4]="RaffleFinished",e[e.WaitForCM=5]="WaitForCM",e[e.Phase4=6]="Phase4",e[e.MintOff=7]="MintOff",e[e.WhiteListMint=8]="WhiteListMint",e[e.PublicMint=9]="PublicMint",e[e.Welcome=10]="Welcome",e[e.Panic=11]="Panic"}(D||(D={}));var z,U,V=Object(d.a)(k.a)(z||(z=Object(l.a)(["\n  width: 195px;\n  font-size: 16px;\n  position: relative;\n  z-index: 11;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  vertical-align: top;\n  font-family: inherit;\n  font-size: 20px;\n  text-align: center;\n  font-weight: 700;\n  text-transform: uppercase;\n  height: 50px;\n  border-radius: 55px;\n  border: none;\n  padding: 0 20px;\n  -webkit-transition: .2s;\n  -o-transition: .2s;\n  transition: .2s;\n  cursor: pointer;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n  position: relative;\n  background: #FB7F03;\n  color: #23272A;\n"]))),Y=d.a.div(U||(U=Object(l.a)(["\n"]))),H=function(e){var t,n,a=e.rpcHost,i=Object(r.useState)(0),c=Object(u.a)(i,2),l=c[0],p=c[1],d=Object(r.useState)(!1),k=Object(u.a)(d,2),w=k[0],j=k[1],S=Object(r.useState)(null),T=Object(u.a)(S,2),P=T[0],A=T[1],M=Object(r.useState)(null),E=Object(u.a)(M,2),K=(E[0],E[1]),B=Object(r.useState)(),L=Object(u.a)(B,2),F=L[0],z=L[1],U=Object(r.useState)(),H=Object(u.a)(U,2),G=H[0],J=H[1],q=Object(r.useState)(null),Z=Object(u.a)(q,2),X=(Z[0],Z[1]),Q=Object(x.b)(),$=Object(r.useMemo)((function(){if(Q&&Q.publicKey&&Q.signAllTransactions&&Q.signTransaction)return{publicKey:Q.publicKey,signAllTransactions:Q.signAllTransactions,signTransaction:Q.signTransaction}}),[Q]),ee=Object(r.useState)({open:!1,message:"",severity:void 0}),te=Object(u.a)(ee,2),ne=te[0],re=te[1],ae=function(){var t=Object(s.a)(b.a.mark((function t(){var n,r,a,i,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,j(!0),null===(n=document.getElementById("#identity"))||void 0===n||n.click(),!(Q.connected&&null!==G&&void 0!==G&&G.program&&Q.publicKey)){t.next=13;break}return t.next=6,Object(y.d)(G,Q.publicKey);case 6:if(a=t.sent[0],i={err:!0},!a){t.next=12;break}return t.next=11,Object(y.b)(a,e.txTimeout,e.connection,"singleGossip",!0);case 11:i=t.sent;case 12:null!==(r=i)&&void 0!==r&&r.err?re({open:!0,message:"Mint failed! Please try again!",severity:"error"}):(re({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}),A(P+1),l&&l>0&&p(l-1));case 13:t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",window.location.reload()):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")):c="Transaction Timeout! Please try again.",re({open:!0,message:c,severity:"error"});case 20:return t.prev=20,j(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[0,15,20,23]])})));return function(){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){Object(s.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if($){t.next=3;break}return console.log("anchor wallet not found"),t.abrupt("return");case 3:if(console.log("wallet connected"),$.publicKey&&z($.publicKey),!e.candyMachineId){t.next=20;break}return t.prev=6,t.next=9,Object(y.c)($,e.candyMachineId,e.connection);case 9:return n=t.sent,t.next=12,J(n);case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(6),console.log("Problem getting candy machine state"),console.log(t.t0);case 18:t.next=21;break;case 20:console.log("No candy machine detected in configuration.");case 21:case"end":return t.stop()}}),t,null,[[6,14]])})))()}),[$,e.candyMachineId,e.connection]),Object(r.useEffect)((function(){function t(){return(t=Object(s.a)(b.a.mark((function t(){var n,r,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!F||null===G||void 0===G||null===(n=G.state.whitelistMintSettings)||void 0===n||!n.mint){t.next=11;break}return t.prev=1,t.next=4,e.connection.getParsedTokenAccountsByOwner(F,{mint:null===G||void 0===G||null===(r=G.state.whitelistMintSettings)||void 0===r?void 0:r.mint});case 4:a=t.sent,p(a.value[0].account.data.parsed.info.tokenAmount.amount),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),p(0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),null!==G&&void 0!==G&&G.state.itemsAvailable&&K(null===G||void 0===G?void 0:G.state.itemsAvailable),null==(null===G||void 0===G?void 0:G.state.itemsRedeemed)?A(0):A(null===G||void 0===G?void 0:G.state.itemsRedeemed),null!==G&&void 0!==G&&G.state.price&&X((null===G||void 0===G?void 0:G.state.price.toNumber())/1e9)}),[G,F,e.connection]);!function(e){var t,n,r,a=(new Date).getTime(),i=null===(t=Object(N.f)(W.startDate))||void 0===t?void 0:t.getTime(),c=null===(n=Object(N.f)(W.endDate))||void 0===n?void 0:n.getTime(),o=null===(r=Object(N.f)(_.startDate))||void 0===r?void 0:r.getTime();!0===C?D.Panic:o&&a>o?D.PublicMint:W.enabled&&i&&c&&a>i&&a<c?D.WhiteListMint:D.Welcome}();return Object(R.jsxs)(f.a,{children:[Object(R.jsx)(f.a,{maxWidth:"xs",style:{position:"relative"},children:Object(R.jsx)(m.a,{style:{padding:"0px",border:"none",borderRadius:"55px"},children:Object(R.jsx)("div",{children:Object(R.jsx)(R.Fragment,{children:Q.connected?Object(R.jsx)(Y,{children:null!==G&&void 0!==G&&G.state.isActive&&null!==G&&void 0!==G&&G.state.gatekeeper&&Q.publicKey&&Q.signTransaction?Object(R.jsx)(O.a,{wallet:{publicKey:Q.publicKey||new v.PublicKey(y.a),signTransaction:Q.signTransaction},gatekeeperNetwork:null===G||void 0===G||null===(t=G.state)||void 0===t||null===(n=t.gatekeeper)||void 0===n?void 0:n.gatekeeperNetwork,clusterUrl:a,options:{autoShowModal:!1},children:Object(R.jsx)(I,{candyMachine:G,isMinting:w,onMint:ae})}):Object(R.jsx)(I,{candyMachine:G,isMinting:w,onMint:ae})}):Object(R.jsxs)(V,{children:["Connect",""]})})})})}),Object(R.jsx)(g.a,{open:ne.open,autoHideDuration:6e3,onClose:function(){return re(Object(o.a)(Object(o.a)({},ne),{},{open:!1}))},children:Object(R.jsx)(h.a,{onClose:function(){return re(Object(o.a)(Object(o.a)({},ne),{},{open:!1}))},severity:ne.severity,children:ne.message})})]})},G=n(328),J=n(329),q=n(325),Z=n(330),X=n(331),Q=n(326),$=n(192),ee=n(323),te=Object($.a)({palette:{type:"dark"}}),ne=new M.e.PublicKey("DMoARJHkMdicPoVYjWvnFSuk6jVJPUwZphRvWPgDntEF"),re="https://api.mainnet-beta.solana.com",ae=new M.e.Connection(re),ie=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CANDY_MACHINE_ID:"DMoARJHkMdicPoVYjWvnFSuk6jVJPUwZphRvWPgDntEF",REACT_APP_SOLANA_NETWORK:"mainnet-beta",REACT_APP_SOLANA_RPC_HOST:"https://api.mainnet-beta.solana.com"}).REACT_APP_CANDY_START_DATE,10),ce=function(){var e=Object(r.useMemo)((function(){return Object(v.clusterApiUrl)("mainnet-beta")}),[]),t=Object(r.useMemo)((function(){return[Object(G.a)(),Object(J.a)(),Object(q.a)(),Object(Z.a)()]}),[]);return Object(R.jsx)("div",{children:Object(R.jsx)("div",{className:"content-wrapper",children:Object(R.jsx)("header",{className:"card",id:"link1",children:Object(R.jsx)("div",{children:Object(R.jsx)(ee.a,{theme:te,children:Object(R.jsx)(X.a,{endpoint:e,children:Object(R.jsx)(Q.a,{wallets:t,autoConnect:!0,children:Object(R.jsx)(k.b,{children:Object(R.jsx)(H,{candyMachineId:ne,connection:ae,startDate:ie,txTimeout:3e4,rpcHost:re})})})})})})})})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,333)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(ce,{})}),document.getElementById("root")),oe()},42:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return d}));var r=n(4),a=n(1),i=n.n(a),c=n(24),o=n(38),s=(n(5),new c.e.PublicKey("faircnAB9k59Y4TXmLabBULeuTLgV7TkGMGNkjnA15j"),function(e){if(e)return new Date(1e3*e.toNumber())}),u=(new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),new c.e.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")),l=new c.e.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),p=function(){var e=Object(r.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),o.b.toBuffer(),t.toBuffer()],u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(i.a.mark((function t(n,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(16).Buffer)}},[[278,1,2]]]);
//# sourceMappingURL=main.4de482d1.chunk.js.map