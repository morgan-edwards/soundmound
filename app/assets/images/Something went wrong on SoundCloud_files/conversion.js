(function(){var h=this,k=function(a){return"string"==typeof a},aa=Date.now||function(){return+new Date};var m=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};var ba=m("0.20"),ca=m("0.0"),da=m("0.0"),ea=m("1.0"),fa=m("0.2"),ha=m("0.0"),ia=m("0.0");var ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(k(a))return k(b)&&1==b.length?a.indexOf(b,0):-1;for(var d=0;d<a.length;d++)if(d in a&&a[d]===b)return d;return-1},ka=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var d=a.length,c=[],e=0,f=k(a)?a.split(""):a,g=0;g<d;g++)if(g in f){var l=f[g];b.call(void 0,l,g,a)&&(c[e++]=l)}return c},la=Array.prototype.map?function(a,b,d){return Array.prototype.map.call(a,
b,d)}:function(a,b,d){for(var c=a.length,e=Array(c),f=k(a)?a.split(""):a,g=0;g<c;g++)g in f&&(e[g]=b.call(d,f[g],g,a));return e},ma=function(a){return Array.prototype.concat.apply([],arguments)};var p=function(a){var b=[],d=0,c;for(c in a)b[d++]=a[c];return b};var q=function(a){q[" "](a);return a};q[" "]=function(){};var na=function(){if(!h.crypto)return Math.random();try{var a=new Uint32Array(1);h.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},r=function(a,b){if(a)for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(void 0,a[d],d,a)};var oa=/^true$/.test("false"),pa=/^true$/.test("true"),qa=/^true$/.test("true");var t=null,sa=function(){var a=p(ra);this.o={};this.c={};a=a||[];for(var b=0,d=a.length;b<d;++b)this.c[a[b]]=""},u=function(){if(null===t){t="";try{var a="";try{a=h.top.location.hash}catch(d){a=h.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);t=b?b[1]:""}}catch(d){}}return t},w=function(a,b,d){var c=v;if(d?c.c.hasOwnProperty(d)&&""==c.c[d]:1){var e;e=(e=u())?(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))?e[0]:null:null;if(e)a=e;else a:{if(!(1E-4>Math.random())&&(e=Math.random(),e<b)){e=
na();a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(d?c.c.hasOwnProperty(d)&&(c.c[d]=a):c.o[a]=!0)}},x=function(a){var b=v;return b.c.hasOwnProperty(a)?b.c[a]:""},ta=function(){var a=v,b=[];r(a.o,function(a,c){b.push(c)});r(a.c,function(a){""!=a&&b.push(a)});return b};var ra={h:2,i:4,g:8,j:10,f:11,l:12},y={h:{b:"376635470",a:"376635471"},i:{b:"659234980",a:"659234981"},g:{b:"659238990",a:"659238991"},j:{b:"659328990",a:"659328991"},f:{b:"33826044",a:"33826045"},l:{b:"659428990",a:"659428991"}},v=null,ua=function(){var a=ma.apply([],la(p(y),function(a){return p(a)},void 0)),b=ka(u().split(","),function(b){return""!=b&&!(0<=ja(a,b))});return 0<b.length?"&debug_experiment_id="+b.join(","):""};var va=/^UA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*(?:%3BUA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*)*$/,wa=/^[\w-]+(?:\.[\w-]+)*$/,z=/^\d+\.fls\.doubleclick\.net$/,xa=/;gac=([^;?]+)/,ya=/;gclaw=([^;?]+)/,A=function(a,b){if(z.test(a.location.host)){if((b=a.location.href.match(ya))&&2==b.length&&b[1].match(wa))return b[1]}else{var d=(b||"_gcl")+"_aw";b=[];a=a.cookie.split(";");d=new RegExp("^\\s*"+d+"=\\s*(.*?)\\s*$");for(var c=0;c<a.length;c++){var e=a[c].match(d);e&&b.push(e[1])}a=[];if(b&&0!=b.length)for(d=0;d<b.length;d++)c=
b[d].split("."),3==c.length&&"GCL"==c[0]&&c[1]&&a.push(c[2]);if(0<a.length)return a.join(".")}return""};var za=function(a,b,d){a=B(a,!0);if(a[b])return!1;a[b]=[];a[b][0]=d;return!0},B=function(a,b){var d=a.GooglebQhCsO;d||(d={},b&&(a.GooglebQhCsO=d));return d};var C=null,D=null,Aa=function(a){for(var b=[],d=0,c=0;c<a.length;c++){var e=a.charCodeAt(c);255<e&&(b[d++]=e&255,e>>=8);b[d++]=e}if(!C)for(C={},D={},a=0;65>a;a++)C[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),D[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a);a=D;d=[];for(c=0;c<b.length;c+=3){var f=b[c],g=(e=c+1<b.length)?b[c+1]:0,l=c+2<b.length,n=l?b[c+2]:0,Ha=f>>2;f=(f&3)<<4|g>>4;g=(g&15)<<2|n>>6;n&=63;l||(n=64,e||(g=64));d.push(a[Ha],
a[f],a[g],a[n])}return d.join("")};var E=function(a,b,d,c){for(var e=d.length;0<=(b=a.indexOf(d,b))&&b<c;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1},F=/#|$/,G=function(a,b){var d=a.search(F),c=E(a,0,b,d);if(0>c)return null;var e=a.indexOf("&",c);if(0>e||e>d)e=d;c+=b.length+1;return decodeURIComponent(a.substr(c,e-c).replace(/\+/g," "))},Ba=/[?&]($|#)/,H=function(a,b,d){for(var c=a.search(F),e=0,f,g=[];0<=(f=E(a,e,b,c));)g.push(a.substring(e,f)),e=Math.min(a.indexOf("&",
f)+1||c,c);g.push(a.substr(e));a=g.join("").replace(Ba,"$1");d=null!=d?"="+encodeURIComponent(String(d)):"";(b+=d)?(d=a.indexOf("#"),0>d&&(d=a.length),c=a.indexOf("?"),0>c||c>d?(c=d,e=""):e=a.substring(c+1,d),d=[a.substr(0,c),e,a.substr(d)],a=d[1],d[1]=b?a?a+"&"+b:b:a,b=d[0]+(d[1]?"?"+d[1]:"")+d[2]):b=a;return b};var I=function(a,b,d,c){var e=G(d,"fmt");if(c){var f=G(d,"random"),g=G(d,"label")||"";if(!f)return!1;f=Aa(decodeURIComponent(g.replace(/\+/g," "))+":"+decodeURIComponent(f.replace(/\+/g," "))).replace(/[.]*$/,"");if(!za(a,f,c))return!1}e&&4!=e&&(d=H(d,"rfmt",e));d=H(d,"fmt",4);e=b.createElement("script");e.src=d;e.onload=function(){a.google_noFurtherRedirects&&c&&c.call&&(a.google_noFurtherRedirects=null,c())};b.getElementsByTagName("script")[0].parentElement.appendChild(e);return!0};var J="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_evaluemrc google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_remarketing_only google_remarketing_for_search google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_disable_merchant_reported_conversions".split(" "),
K=["google_conversion_first_time","google_conversion_snippets"],L=function(a){return null!=a?encodeURIComponent(a.toString()):""},M=function(a){if(null!=a){a=a.toString().substring(0,512);var b=a.indexOf("#");return-1==b?a:a.substring(0,b)}return""},N=function(a,b){b=L(b);return""!=b&&(a=L(a),""!=a)?"&".concat(a,"=",b):""},O=function(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")},Ca=function(a){if((a=a.google_custom_params)&&
"object"==typeof a&&"function"!=typeof a.join){var b=[];for(g in a)if(Object.prototype.hasOwnProperty.call(a,g)){var d=a[g];if(d&&"function"==typeof d.join){for(var c=[],e=0;e<d.length;++e){var f=O(d[e]);null!=f&&c.push(f)}d=0==c.length?null:c.join(",")}else d=O(d);(c=O(g))&&null!=d&&b.push(c+"="+d)}var g=b.join(";")}else g="";return""==g?"":"&".concat("data=",encodeURIComponent(g))},Da=function(a){if(null!=a){a=a.toString();if(2==a.length)return N("hl",a);if(5==a.length)return N("hl",a.substring(0,
2))+N("gl",a.substring(3,5))}return""};function P(a){return"number"!=typeof a&&"string"!=typeof a?"":L(a.toString())}
var Ea=function(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],d=0,c=a.length;d<c;d++){var e=a[d],f=[];e&&(f.push(P(e.value)),f.push(P(e.quantity)),f.push(P(e.item_id)),f.push(P(e.adwords_grouping)),f.push(P(e.sku)),b.push("("+f.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""},Fa=function(a,b){if(b.google_read_gcl_cookie_opt_out||b.google_remarketing_only||b.google_conversion_domain)return"";var d="";if(b.google_gcl_cookie_prefix&&/^[a-zA-Z0-9_]+$/.test(b.google_gcl_cookie_prefix))return d=
A(a,b.google_gcl_cookie_prefix),N("gclaw",d);(b=A(a))&&(d=N("gclaw",b));if(z.test(a.location.host))var c=(c=a.location.href.match(xa))&&2==c.length&&c[1].match(va)?decodeURIComponent(c[1]):"";else{b=[];a=a.cookie.split(";");for(var e=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,f=0;f<a.length;f++){var g=a[f].match(e);g&&b.push({m:g[1],value:g[2]})}a={};if(b&&b.length)for(e=0;e<b.length;e++)f=b[e].value.split("."),"1"==f[0]&&3==f.length&&f[1]&&(a[b[e].m]||(a[b[e].m]=[]),a[b[e].m].push({timestamp:f[1],s:f[2]}));
b=[];for(c in a){e=[];f=a[c];for(g=0;g<f.length;g++)e.push(f[g].s);b.push(c+":"+e.join(","))}c=0<b.length?b.join(";"):""}return d+(c?N("gac",c):"")},Ga=function(a,b,d){var c=[];if(a){var e=a.screen;e&&(c.push(N("u_h",e.height)),c.push(N("u_w",e.width)),c.push(N("u_ah",e.availHeight)),c.push(N("u_aw",e.availWidth)),c.push(N("u_cd",e.colorDepth)));a.history&&c.push(N("u_his",a.history.length))}d&&"function"==typeof d.getTimezoneOffset&&c.push(N("u_tz",-d.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&
c.push(N("u_java",b.javaEnabled())),b.plugins&&c.push(N("u_nplug",b.plugins.length)),b.mimeTypes&&c.push(N("u_nmime",b.mimeTypes.length)));return c.join("")};function Ia(a){a=a?a.title:"";if(void 0==a||""==a)return"";var b=function(a){try{return decodeURIComponent(a),!0}catch(e){return!1}};a=encodeURIComponent(a);for(var d=256;!b(a.substr(0,d));)d--;return"&tiba="+a.substr(0,d)}
var Q=function(a,b,d,c){var e="";if(b){if(a.top==a)var f=0;else{var g=a.location.ancestorOrigins;if(g)f=g[g.length-1]==a.location.origin?1:2;else{g=a.top;try{var l;if(l=!!g&&null!=g.location.href)c:{try{q(g.foo);l=!0;break c}catch(n){}l=!1}f=l}catch(n){f=!1}f=f?1:2}}a=d?d:1==f?a.top.location.href:a.location.href;e+=N("frm",f);e+=N("url",M(a));e+=N("ref",M(c||b.referrer))}return e},R=function(a,b){return!(oa||b&&Ja.test(navigator.userAgent))||a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?
"https:":"http:"},S=function(a){return a.google_remarketing_only?"googleads.g.doubleclick.net":a.google_conversion_domain||"www.googleadservices.com"},T=function(a,b,d){d=S(d);return R(a,/www[.]googleadservices[.]com/i.test(d))+"//"+d+b},Ka=function(a,b,d,c){var e="/?";"landing"==c.google_conversion_type&&(e="/extclk?");e=[c.google_remarketing_only?"/pagead/viewthroughconversion/":"/pagead/conversion/",L(c.google_conversion_id),e,"random=",L(c.google_conversion_time)].join("");e=T(a,e,c);a=[N("cv",
c.google_conversion_js_version),N("fst",c.google_conversion_first_time),N("num",c.google_conversion_snippets),N("fmt",c.google_conversion_format),N("userId",c.google_user_id),N("value",c.google_conversion_value),N("evaluemrc",c.google_conversion_evaluemrc),N("currency_code",c.google_conversion_currency),N("label",c.google_conversion_label),N("oid",c.google_conversion_order_id),N("bg",c.google_conversion_color),Da(c.google_conversion_language),N("guid","ON"),N("disvt",c.google_disable_viewthrough),
N("eid",ta().join()),Ga(a,b,c.google_conversion_date),Ca(c),N("gtm",c.google_gtm),Fa(d,c),Q(a,d,c.google_conversion_page_url,c.google_conversion_referrer_url),c.google_remarketing_for_search&&!c.google_conversion_domain?"&srr=n":"",Ia(d)].join("")+ua();c.google_remarketing_only||c.google_conversion_domain?c=a:(U(c)&&!c.google_basket_transaction_type&&(c.google_basket_transaction_type="mrc"),b=[N("mid",c.google_conversion_merchant_id),N("fcntr",c.google_basket_feed_country),N("flng",c.google_basket_feed_language),
N("dscnt",c.google_basket_discount),N("bttype",c.google_basket_transaction_type)].join(""),c=[a,b,Ea(c)].join(""),c=2E3<c.length?[a,N("item","elngth")].join(""):c);return e+c},V=function(a,b,d,c,e,f,g){return'<iframe name="'+a+'"'+(g?' id="'+g+'"':"")+' title="'+b+'" width="'+c+'" height="'+e+'"'+(d?' src="'+d+'"':"")+' frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true"'+(f?' style="display:none"':"")+' scrolling="no"></iframe>'},La=function(a){return{ar:1,
bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a]?a+".html":"en_US.html"},Ja=/Android ([01]\.|2\.[01])/i,Ma=function(a,b){if(!b.google_remarketing_only||!b.google_enable_display_cookie_match||!v||x(2)!=y.h.a)return"";a=R(a,!1)+"//bid.g.doubleclick.net/xbbe/pixel?d=KAE";return V("google_cookie_match_frame","Google cookie match frame",
a,1,1,!0,null)};function Na(a,b){return'<img height="1" width="1" border="0" alt="" src="'+a.replace("gen204Type",b)+'" style="display:none" />'}
var Oa=function(a){if(v&&x(4)==y.i.a){var b=Math.floor(1E9*Math.random()),d=R(a,!1)+"//pagead2.googlesyndication.com/pagead/gen_204?id=beacon-api-web-survey&type=gen204Type";d+=N("random",b);d+=N("time",aa());if(a.navigator&&a.navigator.sendBeacon){try{var c=d.replace("gen204Type","send-beacon");a.navigator.sendBeacon(c,"")}catch(e){}return Na(d,"img")}return Na(d,"beacon-undefined")}return""},Qa=function(a,b,d,c){var e="";c.google_remarketing_only&&c.google_enable_display_cookie_match&&(v&&w([y.h.b,
y.h.a],ba,2),e=Ma(a,c));3==c.google_conversion_format&&c.google_remarketing_only&&!c.google_conversion_domain&&(v&&w([y.g.b,y.g.a],da,8),v&&w([y.g.a],ea,8));c.google_remarketing_only||c.google_conversion_domain||(1==c.google_conversion_format||2==c.google_conversion_format||3==c.google_conversion_format)&&v&&w([y.j.b,y.j.a],ia,10);c.google_remarketing_only||c.google_conversion_domain||v&&w([y.l.b,y.l.a],ha,12);v&&w([y.i.b,y.i.a],ca,4);-1!=S(c).indexOf("googletraveladservices.com")&&v&&w([y.f.b,y.f.a],
fa,11);var f=Ka(a,b,d,c);b=function(a,b,c,d){return'<img height="'+c+'" width="'+b+'" border="0" alt="" src="'+a+'"'+(d?' style="display:none"':"")+" />"};if(0==c.google_conversion_format&&null==c.google_conversion_domain)return'<a href="'+(R(a,!1)+"//services.google.com/sitestats/"+La(c.google_conversion_language)+"?cid="+L(c.google_conversion_id))+'" target="_blank">'+b(f,135,27,!1)+"</a>"+e;if(1<c.google_conversion_snippets||3==c.google_conversion_format){var g=f;null==c.google_conversion_domain&&
(g=3==c.google_conversion_format?f:H(f,"fmt",3));if(Pa(a,d,c,g))return e;a=b(g,1,1,!0)+e+Oa(a);v&&x(11)==y.f.a&&-1!=S(c).indexOf("googletraveladservices.com")&&(a+=b(g.replace(/googletraveladservices\.com/,"google.com"),1,1,!0));return a}g=null;!c.google_conversion_domain&&Pa(a,d,c,f)&&(g="goog_conv_iframe",f="");c=V("google_conversion_frame","Google conversion frame",f,2==c.google_conversion_format?200:300,2==c.google_conversion_format?26:13,!1,g)+e;f&&v&&x(11)==y.f.a&&(c+=b(H(f.replace(/googletraveladservices\.com/,
"google.com"),"fmt",3),1,1,!0));return c};function Ra(){return new Image}function Pa(a,b,d,c){if(d.google_conversion_domain)return!1;if(!d.google_remarketing_only||v&&x(8)===y.g.a||d.google_remarketing_only&&!d.google_conversion_domain&&qa)try{return I(a,b,c,null)}catch(e){}return!1}
var Sa=function(a,b){var d=a.opt_image_generator&&a.opt_image_generator.call;b+=N("async","1");var c=Ra;d&&(c=a.opt_image_generator);a=c();a.src=b;a.onload=function(){}},Ta=function(a,b,d){var c=Math.floor(1E9*Math.random());c=[L(d.google_conversion_id),"/?random=",c].join("");c=R(a,!1)+"//www.google.com/ads/user-lists/"+c;a=[N("label",d.google_conversion_label),N("fmt","3"),Q(a,b,d.google_conversion_page_url,d.google_conversion_referrer_url)].join("");Sa(d,c+a)},Ua=function(a,b){for(var d=document.createElement("iframe"),
c=[],e=[],f=0;f<b.google_conversion_items.length;f++){var g=b.google_conversion_items[f];g&&g.quantity&&(g.sku||g.item_id)&&(c.push(g.sku||g.item_id),e.push(g.quantity))}f="";null!=b.google_conversion_language&&(g=b.google_conversion_language.toString(),5==g.length&&(f="&mrc_language="+g.substring(0,2)+"&mrc_country="+g.substring(3,5)));a=R(a,!1)+"//www.google.com/ads/mrc";d.src=a+"?sku="+c.join(",")+"&qty="+e.join(",")+"&oid="+b.google_conversion_order_id+"&mcid="+b.google_conversion_merchant_id+
f;d.style.width="1px";d.style.height="1px";d.style.display="none";return d},U=function(a){return!a.google_disable_merchant_reported_conversions&&!!a.google_conversion_merchant_id&&!!a.google_conversion_order_id&&!!a.google_conversion_items},Va=function(a){if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets=
"number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version="8";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=3);!1!==a.google_enable_display_cookie_match&&(a.google_enable_display_cookie_match=!0);v=new sa;
pa&&(a.google_remarketing_for_search=!1);return!0},Wa=function(a){for(var b=0;b<J.length;b++)a[J[b]]=null},Xa=function(a){for(var b={},d=0;d<J.length;d++)b[J[d]]=a[J[d]];for(d=0;d<K.length;d++)b[K[d]]=a[K[d]];return b},Ya=function(a){var b=document.getElementsByTagName("head")[0];b||(b=document.createElement("head"),document.getElementsByTagName("html")[0].insertBefore(b,document.getElementsByTagName("body")[0]));var d=document.createElement("script");d.src=T(window,"/pagead/conversion_debug_overlay.js",
a);b.appendChild(d)};var Za=function(a,b,d){a.addEventListener?a.addEventListener(b,d,void 0):a.attachEvent&&a.attachEvent("on"+b,d)};var $a=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0},ab=function(a){var b;a.visibilityState?b="visibilitychange":a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState&&(b="webkitvisibilitychange");return b},bb=function(a,b){if(3==$a(b))return!1;a();return!0},cb=function(a,b){if(!bb(a,b)){var d=!1,c=ab(b),e=function(){if(!d&&bb(a,b)){d=!0;var f=e;b.removeEventListener?b.removeEventListener(c,
f,void 0):b.detachEvent&&b.detachEvent("on"+c,f)}};c&&Za(b,c,e)}};var db=function(a,b,d){for(var c=d.length+1,e=function(){--c;if(0>=c){var d=B(a,!1),e=d[b];e&&(delete d[b],(d=e[0])&&d.call&&d())}},f=function(a,b){var c=new Image;c.onload=a;c.src=b},g=0;g<d.length;g++){var l=d[g],n=G(l,"fmt");switch(parseInt(n,10)){case 1:case 2:(n=a.document.getElementById("goog_conv_iframe"))&&!n.src?(n.onload=e,n.src=l):f(e,l);break;case 4:I(a,a.document,l,e);break;default:f(e,l)}}e()},W=["GooglemKTybQhCsO"],X=h;W[0]in X||!X.execScript||X.execScript("var "+W[0]);
for(var Y;W.length&&(Y=W.shift());){var Z;if(Z=!W.length)Z=void 0!==db;Z?X[Y]=db:X[Y]&&X[Y]!==Object.prototype[Y]?X=X[Y]:X=X[Y]={}}
(function(a,b,d){if(a)if(null!=/[\?&;]google_debug/.exec(document.URL))Ya(a);else{try{if(Va(a))if(3==$a(d)){var c=Xa(a),e="google_conversion_"+Math.floor(1E9*Math.random());d.write('<span id="'+e+'"></span>');cb(function(){try{var f=d.getElementById(e);f&&(f.innerHTML=Qa(a,b,d,c),c.google_remarketing_for_search&&!c.google_conversion_domain&&Ta(a,d,c))}catch(g){}},d)}else d.write(Qa(a,b,d,a)),a.google_remarketing_for_search&&!a.google_conversion_domain&&Ta(a,d,a);U(a)&&d.documentElement.appendChild(Ua(a,
a))}catch(f){}Wa(a)}})(window,navigator,document);}).call(this);