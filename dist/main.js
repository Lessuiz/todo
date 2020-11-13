(()=>{"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n){e(1,arguments);var r=t(n);return!isNaN(r)}var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var i,o={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function c(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(c))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(c))return n}(d),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}const d={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:o,formatRelative:function(e,t,n,r){return u[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(i.matchPattern);if(!a)return null;var o=a[0],u=n.match(i.parsePattern);if(!u)return null;var s=i.valueCallback?i.valueCallback(u[0]):u[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(o.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function l(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function h(n,r){e(2,arguments);var a=t(n).getTime(),i=l(r);return new Date(a+i)}function m(t,n){e(2,arguments);var r=l(n);return h(t,-r)}function f(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const g=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return f("yy"===t?r%100:r,t.length)},w=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):f(n+1,2)},p=function(e,t){return f(e.getUTCDate(),t.length)},v=function(e,t){return f(e.getUTCHours()%12||12,t.length)},b=function(e,t){return f(e.getUTCHours(),t.length)},y=function(e,t){return f(e.getUTCMinutes(),t.length)},C=function(e,t){return f(e.getUTCSeconds(),t.length)},T=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return f(Math.floor(r*Math.pow(10,n-3)),t.length)};var M=864e5;function x(n){e(1,arguments);var r=1,a=t(n),i=a.getUTCDay(),o=(i<r?7:0)+i-r;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function k(n){e(1,arguments);var r=t(n),a=r.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=x(i),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var s=x(u);return r.getTime()>=o.getTime()?a+1:r.getTime()>=s.getTime()?a:a-1}function D(t){e(1,arguments);var n=k(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=x(r);return a}var E=6048e5;function S(n,r){e(1,arguments);var a=r||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:l(o),s=null==a.weekStartsOn?u:l(a.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=t(n),d=c.getUTCDay(),h=(d<s?7:0)+d-s;return c.setUTCDate(c.getUTCDate()-h),c.setUTCHours(0,0,0,0),c}function P(n,r){e(1,arguments);var a=t(n,r),i=a.getUTCFullYear(),o=r||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:l(s),d=null==o.firstWeekContainsDate?c:l(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(i+1,0,d),h.setUTCHours(0,0,0,0);var m=S(h,r),f=new Date(0);f.setUTCFullYear(i,0,d),f.setUTCHours(0,0,0,0);var g=S(f,r);return a.getTime()>=m.getTime()?i+1:a.getTime()>=g.getTime()?i:i-1}function U(t,n){e(1,arguments);var r=n||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:l(i),u=null==r.firstWeekContainsDate?o:l(r.firstWeekContainsDate),s=P(t,n),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var d=S(c,n);return d}var q=6048e5;function L(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+f(i,2)}function W(e,t){return e%60==0?(e>0?"-":"+")+f(Math.abs(e)/60,2):Y(e,t)}function Y(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+f(Math.floor(a/60),2)+n+f(a%60,2)}const j={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return g(e,t)},Y:function(e,t,n,r){var a=P(e,r),i=a>0?a:1-a;return"YY"===t?f(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):f(i,t.length)},R:function(e,t){return f(k(e),t.length)},u:function(e,t){return f(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return f(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return f(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return w(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return f(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(n,r,a,i){var o=function(n,r){e(1,arguments);var a=t(n),i=S(a,r).getTime()-U(a,r).getTime();return Math.round(i/q)+1}(n,i);return"wo"===r?a.ordinalNumber(o,{unit:"week"}):f(o,r.length)},I:function(n,r,a){var i=function(n){e(1,arguments);var r=t(n),a=x(r).getTime()-D(r).getTime();return Math.round(a/E)+1}(n);return"Io"===r?a.ordinalNumber(i,{unit:"week"}):f(i,r.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):p(e,t)},D:function(n,r,a){var i=function(n){e(1,arguments);var r=t(n),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var i=r.getTime(),o=a-i;return Math.floor(o/M)+1}(n);return"Do"===r?a.ordinalNumber(i,{unit:"dayOfYear"}):f(i,r.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return f(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return f(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return f(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return v(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):b(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):f(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):f(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):y(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):C(e,t)},S:function(e,t){return T(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return W(a);case"XXXX":case"XX":return Y(a);case"XXXXX":case"XXX":default:return Y(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return W(a);case"xxxx":case"xx":return Y(a);case"xxxxx":case"xxx":default:return Y(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+L(a,":");case"OOOO":default:return"GMT"+Y(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+L(a,":");case"zzzz":default:return"GMT"+Y(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return f(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return f((r._originalDate||e).getTime(),t.length)}};function O(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function N(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const H={p:N,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return O(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",O(a,t)).replace("{{time}}",N(i,t))}};var z=6e4;function A(e){return e.getTime()%z}function X(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var r=n>0?(z+A(t))%z:A(t);return n*z+r}var F=["D","DD"],Q=["YY","YYYY"];function G(e){return-1!==F.indexOf(e)}function B(e){return-1!==Q.indexOf(e)}function R(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,I=/^'([^]*?)'?$/,V=/''/g,$=/[a-zA-Z]/;function K(e){return e.match(I)[1].replace(V,"'")}class Z{constructor(e,t,n){this.title=e,this.desc=t,this.due=n,this.done=!1,this.tasks=[]}get finished(){return this.done}set finished(e){this.done=e}get projectTitle(){return this.title}get projectDesc(){return this.desc}get dueDate(){return this.due}get projectTasks(){return this.tasks}addTask(e){return this.tasks.push(e),this.tasks}}function ee(e){let t=document.querySelector(".project-list");t.innerHTML="",e.forEach(((n,r)=>{let a=document.createElement("div");a.classList.add("project"),a.setAttribute("data-project-index",r);let i=document.createElement("i");i.classList.add("fa",n.finished?"fa-check-circle-o":"fa-circle-o","project-status"),i.addEventListener("click",(()=>{n.finished=!n.finished,ee(e)})),a.appendChild(i);let o=document.createElement("p");o.classList.add("project-name"),o.textContent=n.projectTitle,a.appendChild(o);let u=document.createElement("p");u.classList.add("due-date"),u.textContent=n.dueDate,a.appendChild(u);let s=document.createElement("i");s.classList.add("fa","fa-trash-o","delete-project"),s.addEventListener("click",(()=>{confirm(`Do you want to delete "${n.projectTitle}"?`)&&(e.splice(r,1),ee(e))})),a.appendChild(s),t.appendChild(a)}))}class te{constructor(e,t){this.text=e,this.date=t}get noteText(){return this.text}get noteDate(){return this.date}}const ne=document.querySelector(".new-project");let re=[];ne.addEventListener("click",(()=>{!function(e){let t=document.querySelector(".tasks");t.innerHTML="";let n=document.querySelector(".selected");n&&n.classList.remove("selected");let r=document.createElement("div");r.classList.add("project-title-div");let a=document.createElement("p");a.textContent="New "+e,a.classList.add("project-title"),r.appendChild(a),t.appendChild(r);let i=document.createElement("form");i.autocomplete="off",i.name="creation-form",i.setAttribute("data-form-type",e),i.classList.add("form");let o=document.createElement("label");o.setAttribute("for","title"),o.textContent=e+" name";let u=document.createElement("input");u.type="text",u.id="title",u.name="title",o.appendChild(u),i.appendChild(o);let s=document.createElement("label");s.setAttribute("for","desc"),s.textContent="Description (optional)";let c=document.createElement("textarea");c.setAttribute("rows","10"),c.setAttribute("name","desc"),c.id="desc",u.name="desc",s.appendChild(c),i.appendChild(s);{let e=document.createElement("label");e.setAttribute("for","due"),e.textContent="Due-date (optional)";let t=document.createElement("input");t.type="date",t.name="due",t.id="due",e.appendChild(t),i.appendChild(e)}let d=document.createElement("input");d.type="button",d.value="Create "+e,d.id="create",i.appendChild(d),t.appendChild(i)}("Project"),document.querySelector("#create").addEventListener("click",(()=>{""!=document.forms["creation-form"].title.value?(re.push(function(){let e=document.querySelector("#title").value,t=document.querySelector("#desc").value,n=document.querySelector("#due").value;return n=n.replace(/-/g,"/"),new Z(e,t,n)}()),ee(re)):alert("Title must be filled")}))})),document.querySelector(".all-tasks").addEventListener("click",(()=>{!function(e,t=!1){let n=document.querySelector(".tasks");n.textContent="";let r=document.querySelector(".selected");if(r&&r.classList.remove("selected"),document.querySelector(".all-tasks").classList.add("selected"),0===e.length){let e=document.createElement("div");e.classList.add("no-tasks-div");let t=document.createElement("p");t.textContent="There are no tasks left :)",t.classList.add("no-tasks"),e.appendChild(t),n.appendChild(e)}}(function(e){let t=[];return e.forEach((e=>{t.concat(e.projectTasks)})),t}(re))}));const ae=document.querySelector("#new-note-form");document.querySelector(".new-note").addEventListener("click",(()=>{ae.hidden=!ae.hidden}));const ie=document.querySelector("#note-text-input"),oe=document.querySelector("#create-note"),ue=document.querySelector("#note-list"),se=[];function ce(e){ue.innerHTML="",e.forEach(((e,t)=>{let n=document.createElement("div");n.classList.add("note"),n.setAttribute("data-index",t);let r=document.createElement("p");r.textContent=e.noteText,n.appendChild(r);let a=document.createElement("div");a.classList.add("note-control");let i=document.createElement("i");i.classList.add("fa","fa-trash-o","delete-note"),i.setAttribute("data-delete-index",t),i.addEventListener("click",(e=>{confirm("Do you want to delete the note?")&&(se.splice(e.target.getAttribute("data-delete-index"),1),ce(se))})),a.appendChild(i);let o=document.createElement("p");o.classList.add("note-created-at"),o.textContent=e.noteDate,a.appendChild(o),n.appendChild(a),ue.appendChild(n)}))}oe.addEventListener("click",(()=>{let r=ie.value;if(""!=r){ie.value="",ae.hidden=!0;let a=new te(r,function(r,a,i){e(2,arguments);var o=String(a),u=i||{},s=u.locale||d,c=s.options&&s.options.firstWeekContainsDate,h=null==c?1:l(c),f=null==u.firstWeekContainsDate?h:l(u.firstWeekContainsDate);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=s.options&&s.options.weekStartsOn,w=null==g?0:l(g),p=null==u.weekStartsOn?w:l(u.weekStartsOn);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var v=t(r);if(!n(v))throw new RangeError("Invalid time value");var b=X(v),y=m(v,b),C={firstWeekContainsDate:f,weekStartsOn:p,locale:s,_originalDate:v};return o.match(_).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,H[t])(e,s.formatLong,C):e})).join("").match(J).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return K(e);var n=j[t];if(n)return!u.useAdditionalWeekYearTokens&&B(e)&&R(e,a,r),!u.useAdditionalDayOfYearTokens&&G(e)&&R(e,a,r),n(y,e,s.localize,C);if(t.match($))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("")}(new Date,"dd/MM/yy HH:mm"));se.unshift(a),ce(se)}else alert("The note can't be empty")}))})();