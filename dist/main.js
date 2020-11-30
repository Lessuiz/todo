(()=>{"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n){e(1,arguments);var a=t(n);return!isNaN(a)}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function r(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var i,o={date:r({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:r({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,c=r.width?String(r.width):e.defaultWidth;a=e.values[c]||e.values[s]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function u(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],s=a.match(o);if(!s)return null;var c,u=s[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(d),c=e.valueCallback?e.valueCallback(c):c,{value:c=r.valueCallback?r.valueCallback(c):c,rest:a.slice(u.length)}}}const d={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:o,formatRelative:function(e,t,n,a){return s[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(i.matchPattern);if(!r)return null;var o=r[0],s=n.match(i.parsePattern);if(!s)return null;var c=i.valueCallback?i.valueCallback(s[0]):s[0];return{value:c=a.valueCallback?a.valueCallback(c):c,rest:n.slice(o.length)}}),era:u({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:u({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:u({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:u({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function l(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function h(n,a){e(2,arguments);var r=t(n).getTime(),i=l(a);return new Date(r+i)}function m(t,n){e(2,arguments);var a=l(n);return h(t,-a)}function f(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}const g=function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return f("yy"===t?a%100:a,t.length)},w=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):f(n+1,2)},p=function(e,t){return f(e.getUTCDate(),t.length)},v=function(e,t){return f(e.getUTCHours()%12||12,t.length)},y=function(e,t){return f(e.getUTCHours(),t.length)},b=function(e,t){return f(e.getUTCMinutes(),t.length)},T=function(e,t){return f(e.getUTCSeconds(),t.length)},C=function(e,t){var n=t.length,a=e.getUTCMilliseconds();return f(Math.floor(a*Math.pow(10,n-3)),t.length)};var k=864e5;function x(n){e(1,arguments);var a=1,r=t(n),i=r.getUTCDay(),o=(i<a?7:0)+i-a;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function M(n){e(1,arguments);var a=t(n),r=a.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var o=x(i),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var c=x(s);return a.getTime()>=o.getTime()?r+1:a.getTime()>=c.getTime()?r:r-1}function E(t){e(1,arguments);var n=M(t),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var r=x(a);return r}var S=6048e5;function D(n,a){e(1,arguments);var r=a||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:l(o),c=null==r.weekStartsOn?s:l(r.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=t(n),d=u.getUTCDay(),h=(d<c?7:0)+d-c;return u.setUTCDate(u.getUTCDate()-h),u.setUTCHours(0,0,0,0),u}function L(n,a){e(1,arguments);var r=t(n,a),i=r.getUTCFullYear(),o=a||{},s=o.locale,c=s&&s.options&&s.options.firstWeekContainsDate,u=null==c?1:l(c),d=null==o.firstWeekContainsDate?u:l(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(i+1,0,d),h.setUTCHours(0,0,0,0);var m=D(h,a),f=new Date(0);f.setUTCFullYear(i,0,d),f.setUTCHours(0,0,0,0);var g=D(f,a);return r.getTime()>=m.getTime()?i+1:r.getTime()>=g.getTime()?i:i-1}function P(t,n){e(1,arguments);var a=n||{},r=a.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:l(i),s=null==a.firstWeekContainsDate?o:l(a.firstWeekContainsDate),c=L(t,n),u=new Date(0);u.setUTCFullYear(c,0,s),u.setUTCHours(0,0,0,0);var d=D(u,n);return d}var q=6048e5;function U(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=t||"";return n+String(r)+o+f(i,2)}function W(e,t){return e%60==0?(e>0?"-":"+")+f(Math.abs(e)/60,2):j(e,t)}function j(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+f(Math.floor(r/60),2)+n+f(r%60,2)}const Y={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return g(e,t)},Y:function(e,t,n,a){var r=L(e,a),i=r>0?r:1-r;return"YY"===t?f(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):f(i,t.length)},R:function(e,t){return f(M(e),t.length)},u:function(e,t){return f(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return f(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return f(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return w(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return f(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(n,a,r,i){var o=function(n,a){e(1,arguments);var r=t(n),i=D(r,a).getTime()-P(r,a).getTime();return Math.round(i/q)+1}(n,i);return"wo"===a?r.ordinalNumber(o,{unit:"week"}):f(o,a.length)},I:function(n,a,r){var i=function(n){e(1,arguments);var a=t(n),r=x(a).getTime()-E(a).getTime();return Math.round(r/S)+1}(n);return"Io"===a?r.ordinalNumber(i,{unit:"week"}):f(i,a.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):p(e,t)},D:function(n,a,r){var i=function(n){e(1,arguments);var a=t(n),r=a.getTime();a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0);var i=a.getTime(),o=r-i;return Math.floor(o/k)+1}(n);return"Do"===a?r.ordinalNumber(i,{unit:"dayOfYear"}):f(i,a.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return f(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return f(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return f(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return v(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):y(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):f(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):f(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):b(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):T(e,t)},S:function(e,t){return C(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return W(r);case"XXXX":case"XX":return j(r);case"XXXXX":case"XXX":default:return j(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return W(r);case"xxxx":case"xx":return j(r);case"xxxxx":case"xxx":default:return j(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+U(r,":");case"OOOO":default:return"GMT"+j(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+U(r,":");case"zzzz":default:return"GMT"+j(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return f(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return f((a._originalDate||e).getTime(),t.length)}};function O(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function N(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const A={p:N,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return O(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",O(r,t)).replace("{{time}}",N(i,t))}};var H=6e4;function z(e){return e.getTime()%H}function X(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var a=n>0?(H+z(t))%H:z(t);return n*H+a}var F=["D","DD"],Q=["YY","YYYY"];function G(e){return-1!==F.indexOf(e)}function B(e){return-1!==Q.indexOf(e)}function R(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,_=/^'([^]*?)'?$/,I=/''/g,V=/[a-zA-Z]/;function K(e){return e.match(_)[1].replace(I,"'")}function Z(e){let t=document.querySelector(".tasks");t.innerHTML="";let n=document.createElement("div");n.classList.add("project-title-div");let a=document.createElement("p");a.classList.add("new-item-header"),a.textContent=`New ${e}`,a.classList.add("project-title"),n.appendChild(a),t.appendChild(n);let r=document.createElement("form");r.autocomplete="off",r.name="creation-form",r.setAttribute("data-form-type",e),r.classList.add("form"),r.onsubmit=()=>!1;let i=document.createElement("label");i.setAttribute("for","title"),i.textContent=`${e} name`;let o=document.createElement("input");o.type="text",o.id="title",o.name="title",i.appendChild(o),r.appendChild(i);let s=document.createElement("label");s.setAttribute("for","desc"),s.textContent="Description (optional)";let c=document.createElement("textarea");if(c.setAttribute("rows","10"),c.setAttribute("name","desc"),c.id="desc",o.name="desc",s.appendChild(c),r.appendChild(s),"Project"===e){let e=document.createElement("label");e.setAttribute("for","due"),e.textContent="Due-date (optional)";let t=document.createElement("input");t.type="date",t.name="due",t.id="due",e.appendChild(t),r.appendChild(e)}let u=document.createElement("input");u.type="button",u.value=`Create ${e}`,u.id="create",r.appendChild(u),t.appendChild(r)}function ee(){return""!=document.forms["creation-form"].title.value}class te{constructor(e,t,n){this.title=e,this.desc=t,this.due=n,this.done=!1,this.tasks=[]}get finished(){return this.done}deleteTask(e){this.tasks.splice(e,1)}set finished(e){this.done=e}get projectTitle(){return this.title}get projectDesc(){return this.desc}get dueDate(){return this.due}get projectTasks(){return this.tasks}addTask(e){return this.tasks.push(e),this.tasks}}function ne(e){let t=document.querySelector(".project-list");t.innerHTML="",e.forEach(((n,a)=>{let r=document.createElement("div");r.classList.add("project"),r.setAttribute("data-project-index",a);let i=document.createElement("i");i.classList.add("fa",n.finished?"fa-check-circle-o":"fa-circle-o","project-status"),i.addEventListener("click",(e=>{n.finished=!n.finished,n.finished?i.classList.replace("fa-circle-o","fa-check-circle-o"):i.classList.replace("fa-check-circle-o","fa-circle-o")})),r.appendChild(i);let o=document.createElement("p");o.classList.add("project-name"),o.textContent=n.projectTitle,r.appendChild(o);let s=document.createElement("p");s.classList.add("due-date"),s.textContent=n.dueDate,r.appendChild(s);let c=document.createElement("i");c.classList.add("fa","fa-trash-o","delete-project"),c.addEventListener("click",(t=>{confirm(`Do you want to delete "${n.projectTitle}"?`)&&(e.splice(a,1),ne(e))})),r.appendChild(c),t.appendChild(r)}))}class ae{constructor(e,t,n){this.title=e,this.desc=t,this.parent=n,this.done=!1}set taskTitle(e){this.title=e}get finished(){return this.done}set finished(e){this.done=e}get taskTitle(){return this.title}get taskDesc(){return this.desc}get parentProject(){return this.parent}}function re(e,t=!1){let n=document.querySelector(".tasks");n.textContent="";let a=document.createElement("div");a.classList.add("project-title-div");let r=document.createElement("p");if(r.classList.add("project-title"),r.textContent=t?t.projectTitle:"All Tasks",a.appendChild(r),n.appendChild(a),t&&function(e,t){let n=document.createElement("div");n.classList.add("new-task-button"),n.textContent="New Task",n.addEventListener("click",(()=>{Z("Task");let n=document.querySelector("#create");console.log(t),n.addEventListener("click",(()=>{ee()?(t.addTask(function(e){let t=document.querySelector("#title").value,n=document.querySelector("#desc").value;return new ae(t,n,void 0)}()),re(e,t)):alert("Title must be filled")}))})),document.querySelector(".tasks").appendChild(n)}(e,t),0===e.length){let e=document.createElement("div");e.classList.add("no-tasks-div");let t=document.createElement("p");t.textContent="There are no tasks left :)",t.classList.add("no-tasks"),e.appendChild(t),n.appendChild(e)}else e.forEach(((a,r)=>{let i=document.createElement("div");i.classList.add("task"),i.setAttribute("data-task-index",r);let o=document.createElement("i");o.classList.add("fa",a.finished?"fa-check-circle-o":"fa-circle-o","task-status"),o.addEventListener("click",(e=>{a.finished=!a.finished,a.finished?o.classList.replace("fa-circle-o","fa-check-circle-o"):o.classList.replace("fa-check-circle-o","fa-circle-o")})),i.appendChild(o);let s=document.createElement("p");s.classList.add("task-name"),s.textContent=a.taskTitle,i.appendChild(s);let c=document.createElement("i");c.classList.add("fa","fa-pencil","edit-task"),c.addEventListener("click",(()=>{Z("Task"),function(e){document.querySelector(".new-item-header").textContent="Edit Task";let t=document.querySelector("#title");console.log(e),t.value=e.taskTitle,document.querySelector("#desc").value=e.taskDesc}(a),document.querySelector("#create").addEventListener("click",(()=>{a.taskTitle=document.querySelector("#title").value,re(e,t)}))}));let u=document.createElement("i");u.classList.add("fa","fa-trash","delete-task"),u.addEventListener("click",(()=>{confirm("Do you want to delete this task?")&&(t.deleteTask(r),re(e,t))})),i.appendChild(c),i.appendChild(u),n.appendChild(i)}))}class ie{constructor(e,t){this.text=e,this.date=t}get noteText(){return this.text}get noteDate(){return this.date}}const oe=document.querySelector(".new-project");function se(e=!1){let t=document.querySelector(".selected");console.log(t),t&&t.classList.remove("selected"),e&&e.classList.add("selected")}let ce=[];oe.addEventListener("click",(()=>{se(),Z("Project"),document.querySelector("#create").addEventListener("click",(()=>{if(ee()){let e=function(){let e=document.querySelector("#title").value,t=document.querySelector("#desc").value,n=document.querySelector("#due").value;return n=n.replace(/-/g,"/"),new te(e,t,n)}();ce.push(e),ne(ce),se(document.querySelector(".project-list").lastChild),re(e.projectTasks,e)}else alert("Title must be filled");document.querySelectorAll(".project").forEach(((e,t)=>{e.addEventListener("click",(n=>{se(e),re(ce[t].projectTasks,ce[t])}))}))}))}));let ue=document.querySelector(".all-tasks");ue.addEventListener("click",(e=>{se(ue),re(function(e){let t=[];return e.forEach((e=>{t=t.concat(e.projectTasks)})),t}(ce))}));const de=document.querySelector("#new-note-form");document.querySelector(".new-note").addEventListener("click",(()=>{de.hidden=!de.hidden}));const le=document.querySelector("#note-text-input"),he=document.querySelector("#create-note"),me=document.querySelector("#note-list"),fe=[];function ge(e){me.innerHTML="",e.forEach(((e,t)=>{let n=document.createElement("div");n.classList.add("note"),n.setAttribute("data-index",t);let a=document.createElement("p");a.textContent=e.noteText,n.appendChild(a);let r=document.createElement("div");r.classList.add("note-control");let i=document.createElement("i");i.classList.add("fa","fa-trash-o","delete-note"),i.setAttribute("data-delete-index",t),i.addEventListener("click",(e=>{confirm("Do you want to delete the note?")&&(fe.splice(e.target.getAttribute("data-delete-index"),1),ge(fe))})),r.appendChild(i);let o=document.createElement("p");o.classList.add("note-created-at"),o.textContent=e.noteDate,r.appendChild(o),n.appendChild(r),me.appendChild(n)}))}he.addEventListener("click",(()=>{let a=le.value;if(""!=a){le.value="",de.hidden=!0;let r=new ie(a,function(a,r,i){e(2,arguments);var o=String(r),s=i||{},c=s.locale||d,u=c.options&&c.options.firstWeekContainsDate,h=null==u?1:l(u),f=null==s.firstWeekContainsDate?h:l(s.firstWeekContainsDate);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=c.options&&c.options.weekStartsOn,w=null==g?0:l(g),p=null==s.weekStartsOn?w:l(s.weekStartsOn);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var v=t(a);if(!n(v))throw new RangeError("Invalid time value");var y=X(v),b=m(v,y),T={firstWeekContainsDate:f,weekStartsOn:p,locale:c,_originalDate:v};return o.match($).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,A[t])(e,c.formatLong,T):e})).join("").match(J).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return K(e);var n=Y[t];if(n)return!s.useAdditionalWeekYearTokens&&B(e)&&R(e,r,a),!s.useAdditionalDayOfYearTokens&&G(e)&&R(e,r,a),n(b,e,c.localize,T);if(t.match(V))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("")}(new Date,"dd/MM/yy HH:mm"));fe.unshift(r),ge(fe)}else alert("The note can't be empty")}))})();