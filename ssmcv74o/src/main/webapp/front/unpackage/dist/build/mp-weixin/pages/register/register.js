(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"06df":function(e,n,t){},"10db":function(e,n,t){"use strict";(function(e){t("04d3");r(t("66fd"));var n=r(t("ef2c"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"13aa":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,i){try{var o=e[a](i),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,u)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var i=e.apply(n,t);function o(e){a(i,r,u,o,s,"next",e)}function s(e){a(i,r,u,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{xueshengxingbieOptions:[],xueshengxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var n=this;return i(r.default.mark((function t(){var u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],u=e.getStorageSync("loginTable"),n.tableName=u,"xuesheng"==n.tableName&&(n.xueshengxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.xueshengxingbieOptions[0]),n.styleChange();case 5:case"end":return t.stop()}}),t)})))()},methods:{xueshengxingbieChange:function(e){this.xueshengxingbieIndex=e.target.value,this.ruleForm.xingbie=this.xueshengxingbieOptions[this.xueshengxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.xuehao||"xuesheng"!=e.tableName){n.next=3;break}return e.$utils.msg("学号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"xuesheng"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if("xuesheng"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=9;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 9:if("xuesheng"!=e.tableName||!e.ruleForm.shoujihaoma||e.$validate.isMobile(e.ruleForm.shoujihaoma)){n.next=12;break}return e.$utils.msg("手机号码应输入手机格式"),n.abrupt("return");case 12:if("xuesheng"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=15;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 15:return n.next=17,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 17:e.$utils.msgBack("注册成功");case 19:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])},"42f3":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"4f9b":function(e,n,t){"use strict";var r=t("76fd"),u=t.n(r);u.a},"76fd":function(e,n,t){},"889f":function(e,n,t){"use strict";t.r(n);var r=t("13aa"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},ef2c:function(e,n,t){"use strict";t.r(n);var r=t("42f3"),u=t("889f");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("ff82"),t("4f9b");var i,o=t("f0c5"),s=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"0830079b",null,!1,r["a"],i);n["default"]=s.exports},ff82:function(e,n,t){"use strict";var r=t("06df"),u=t.n(r);u.a}},[["10db","common/runtime","common/vendor"]]]);