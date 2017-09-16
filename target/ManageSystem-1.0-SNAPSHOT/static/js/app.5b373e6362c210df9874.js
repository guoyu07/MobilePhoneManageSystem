webpackJsonp([33],{131:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var u=t(207),i=o(u),a=t(133),s=o(a);e.default={name:"app",components:{ElCol:s.default,Navigator:i.default}}},132:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var u=t(90),i=o(u),a=t(54),s=t(22),r=t(23),l=o(r),c=t(87);e.default={data:function(){return{menus:[],loading:!0}},computed:(0,i.default)({isSignIn:function(){return this.username}},(0,a.mapGetters)(["username"])),watch:{username:function(n,e){!e&&n&&this.getMenus()}},methods:(0,i.default)({handleOpen:function(n,e){console.log(n,e)},handleClose:function(n,e){console.log(n,e)},signOut:function(){var n=c.backEndUrl+"/auth/sign_out.do",e=this;l.default.get(n,{params:{}}).then(function(n){n.data.status===c.SUCCESS?((0,s.deleteToken)(),e.setUsername(null),e.$router.push("/sign_in")):e.$message.error(n.data.msg)})},getMenus:function(){this.loading=!0;var n=c.backEndUrl+"/menu/get_menus.do",e=this;l.default.get(n,{params:{}}).then(function(n){n.data.status===c.SUCCESS?(e.menus=n.data.data,e.loading=!1):e.$message.error(n.data.msg)})}},(0,a.mapMutations)({setUsername:"SET_USERNAME"})),mounted:function(){this.setUsername((0,s.getLoginUser)()),this.getMenus()}}},134:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var u=t(83),i=o(u),a=t(2),s=o(a),r=t(86),l=o(r),c=t(81),f=o(c),d=t(82),p=o(d),h=t(84),m=o(h);t(85);var _=t(23),g=o(_),v=t(22);s.default.use(m.default),s.default.config.productionTip=!1,g.default.interceptors.request.use(function(n){var e=(0,v.getToken)();return e&&(n.headers.Authorization=e),n},function(n){return i.default.reject(n)}),g.default.interceptors.response.use(function(n){return n},function(n){if(console.log(n.response),n&&n.response)switch(n.response.status){case 400:n.message="请求错误";break;case 401:n.message="身份未验证，请先登录",console.log(p.default),p.default._mutations.SET_USERNAME[0](""),f.default.push("/sign_in");break;case 403:n.message="抱歉，您的权限不足！";break;case 404:n.message="请求地址出错: "+n.response.config.url;break;case 408:n.message="请求超时";break;case 500:n.message="服务器内部错误";break;case 501:n.message="服务未实现";break;case 502:n.message="网关错误";break;case 503:n.message="服务不可用";break;case 504:n.message="网关超时";break;case 505:n.message="HTTP版本不受支持"}return m.default.Message.error(n.message),i.default.reject(n.message)}),new s.default({el:"#app",router:f.default,store:p.default,template:"<App/>",components:{App:l.default}})},135:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.username=function(n){return n.username},e.signInInfo=function(n){return n.signInInfo}},136:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SET_SIGN_IN_INFO="SET_SIGN_IN_INFO",e.SET_USERNAME="SET_USERNAME"},137:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,u=t(92),i=function(n){return n&&n.__esModule?n:{default:n}}(u),a=t(136),s=function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}(a),r=(o={},(0,i.default)(o,s.SET_USERNAME,function(n,e){n.username=e}),(0,i.default)(o,s.SET_SIGN_IN_INFO,function(n,e){n.signInInfo=e}),o);e.default=r},138:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={username:"",signInInfo:{}};e.default=o},203:function(n,e){},204:function(n,e){},207:function(n,e,t){function o(n){t(204)}var u=t(51)(t(132),t(209),o,"data-v-2fa71d7e",null);n.exports=u.exports},208:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("el-row",[t("el-col",{attrs:{span:5}},[t("navigator")],1),n._v(" "),t("el-col",{attrs:{span:19}},[t("router-view")],1)],1)],1)},staticRenderFns:[]}},209:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"navigator"},[t("el-menu",{staticClass:"navigator-menu",attrs:{"default-active":"2",router:!0,theme:"dark"},on:{open:n.handleOpen,close:n.handleClose}},[t("router-link",{staticClass:"title",attrs:{tag:"p",to:"/"}},[n._v("手机进销存管理系统")]),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!n.isSignIn,expression:"!isSignIn"}],staticClass:"sign_in-sign_up-sign_out"},[t("router-link",{attrs:{to:"/sign_in",tag:"span"}},[n._v("登录")]),n._v(" "),t("span",[n._v(" / ")]),n._v(" "),t("router-link",{attrs:{to:"/sign_up",tag:"span"}},[n._v("注册")])],1),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:n.isSignIn,expression:"isSignIn"}],staticClass:"sign_in-sign_up-sign_out"},[t("router-link",{attrs:{to:"/user_info",tag:"span"}},[n._v(n._s(n.username))]),n._v(" "),t("span",[n._v(" / ")]),n._v(" "),t("span",{on:{click:n.signOut}},[n._v("注销")])],1),n._v(" "),n._l(n.menus,function(e,o){return t("el-submenu",{directives:[{name:"loading",rawName:"v-loading.body",value:n.loading,expression:"loading",modifiers:{body:!0}}],key:o,attrs:{index:e.name||""}},[t("template",{attrs:{slot:"title"},slot:"title"},[n._v(n._s(e.name))]),n._v(" "),n._l(e.children,function(o,u){return"PARENT"===e.type?t("el-menu-item",{key:u,attrs:{index:o.path?"/"+o.path:""}},[n._v("\n        "+n._s(o.name)+"\n      ")]):n._e()})],2)})],2)],1)},staticRenderFns:[]}},22:function(n,e,t){"use strict";function o(n){localStorage.setItem(f,n)}function u(){return localStorage.getItem(f)}function i(){}function a(){localStorage.removeItem(f)}function s(){return c.default.getCookie(d)}function r(n){c.default.setCookie(d,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.setToken=o,e.getToken=u,e.TokenUtil=i,e.deleteToken=a,e.getLoginUser=s,e.setLoginUser=r;var l=t(91),c=function(n){return n&&n.__esModule?n:{default:n}}(l),f="__token__",d="__loginUser__";i.parseUserId=function(n){return n?n.split("#")[0]:""},i.parseUuid=function(n){return n?n.split("#")[1]:""},i.stringifyToken=function(n){return n&&n.userId&&n.credentials?n.userId+"#"+n.credentials:""}},81:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var u=t(2),i=o(u),a=t(210),s=o(a),r=function(n){t.e(14).then(t.bind(null,218)).then(function(e){n(e)})},l=function(n){t.e(25).then(t.bind(null,216)).then(function(e){n(e)})},c=function(n){t.e(30).then(t.bind(null,219)).then(function(e){n(e)})},f=function(n){t.e(31).then(t.bind(null,217)).then(function(e){n(e)})},d=function(n){t.e(6).then(t.bind(null,247)).then(function(e){n(e)})},p=function(n){t.e(8).then(t.bind(null,245)).then(function(e){n(e)})},h=function(n){t.e(5).then(t.bind(null,239)).then(function(e){n(e)})},m=function(n){t.e(15).then(t.bind(null,242)).then(function(e){n(e)})},_=function(n){t.e(4).then(t.bind(null,241)).then(function(e){n(e)})},g=function(n){t.e(26).then(t.bind(null,244)).then(function(e){n(e)})},v=function(n){t.e(27).then(t.bind(null,243)).then(function(e){n(e)})},b=function(n){t.e(28).then(t.bind(null,226)).then(function(e){n(e)})},k=function(n){t.e(29).then(t.bind(null,225)).then(function(e){n(e)})},S=function(n){t.e(20).then(t.bind(null,228)).then(function(e){n(e)})},E=function(n){t.e(12).then(t.bind(null,227)).then(function(e){n(e)})},M=function(n){t.e(1).then(t.bind(null,240)).then(function(e){n(e)})},I=function(n){t.e(17).then(t.bind(null,235)).then(function(e){n(e)})},T=function(n){t.e(9).then(t.bind(null,236)).then(function(e){n(e)})},U=function(n){t.e(18).then(t.bind(null,233)).then(function(e){n(e)})},y=function(n){t.e(10).then(t.bind(null,234)).then(function(e){n(e)})},C=function(n){t.e(19).then(t.bind(null,231)).then(function(e){n(e)})},O=function(n){t.e(11).then(t.bind(null,232)).then(function(e){n(e)})},w=function(n){t.e(22).then(t.bind(null,223)).then(function(e){n(e)})},N=function(n){t.e(23).then(t.bind(null,222)).then(function(e){n(e)})},j=function(n){t.e(21).then(t.bind(null,224)).then(function(e){n(e)})},P=function(n){t.e(7).then(t.bind(null,229)).then(function(e){n(e)})},x=function(n){t.e(3).then(t.bind(null,230)).then(function(e){n(e)})},R=function(n){t.e(24).then(t.bind(null,220)).then(function(e){n(e)})},A=function(n){t.e(13).then(t.bind(null,221)).then(function(e){n(e)})},$=function(n){t.e(0).then(t.bind(null,238)).then(function(e){n(e)})},F=function(n){t.e(2).then(t.bind(null,237)).then(function(e){n(e)})},G=function(n){t.e(16).then(t.bind(null,246)).then(function(e){n(e)})};i.default.use(s.default),e.default=new s.default({mode:"hash",routes:[{path:"/sign_in",component:r},{path:"/home",alias:"/",component:l},{path:"/sign_up",component:c},{path:"/404",alias:"*",component:f},{path:"/user_manage",component:d,children:[{path:":id",component:p}]},{path:"/auth_manage",component:h},{path:"/menu_manage",component:m,children:[{path:":id",component:_}]},{path:"/role_manage",component:g,children:[{path:":id",component:v}]},{path:"/dept_manage",component:b,children:[{path:":id",component:k}]},{path:"/employee_manage",component:S,children:[{path:":id",component:E}]},{path:"/log_manage",component:M},{path:"/supplier_type",component:I,children:[{path:":id",component:T}]},{path:"/supplier",component:U,children:[{path:":id",component:y}]},{path:"/rebate_type",component:C,children:[{path:":id",component:O}]},{path:"/color",component:w},{path:"/brand",component:N},{path:"/config",component:j},{path:"/mobile_model",component:P,children:[{path:":id",component:x}]},{path:"/account",component:R,children:[{path:":id",component:A}]},{path:"/mobile_inbound",component:$},{path:"/inbound_list",component:F},{path:"/user_info",component:G}]})},82:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var u=t(2),i=o(u),a=t(54),s=o(a),r=t(135),l=function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}(r),c=t(138),f=o(c),d=t(137),p=o(d),h=t(212);o(h);i.default.use(s.default);e.default=new s.default.Store({getters:l,state:f.default,mutations:p.default,strict:!1,plugins:[]})},85:function(n,e){},86:function(n,e,t){function o(n){t(203)}var u=t(51)(t(131),t(208),o,null,null);n.exports=u.exports},87:function(n,e,t){"use strict";function o(n,e,t){var o=(0,u.getToken)();if(!o)return t&&t(),null;var i=s+"/user/validate_token.do";return a.default.get(i,{params:{token:o}}).then(function(o){o&&o.data.status!==r?(t&&t(),n.$message.warning(o.data.msg)):e&&e()}).catch(function(n){t&&t(),console.log(n)}),o}Object.defineProperty(e,"__esModule",{value:!0}),e.SUCCESS=e.backEndUrl=void 0,e.validateToken=o;var u=t(22),i=t(23),a=function(n){return n&&n.__esModule?n:{default:n}}(i),s=e.backEndUrl="http://localhost:8080",r=e.SUCCESS=0},91:function(n,e,t){"use strict";function o(){}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o,o.setCookie=function(n,e){var t=new Date;t.setTime(t.getTime()+2592e6),document.cookie=n+"="+encodeURI(e)+";expires="+t.toUTCString()+";path=/"},o.getCookie=function(n){var e=void 0,t=new RegExp("(^| )"+n+"=([^;]*)(;|$)");return(e=document.cookie.match(t))?decodeURI(e[2]):null},o.deleteCookie=function(n){var e=new Date;e.setTime(e.getTime()-1);var t=o.getCookie(n);null!==t&&(document.cookie=n+"="+t+";expires="+e.toUTCString()+";path=/")}}},[134]);
//# sourceMappingURL=app.5b373e6362c210df9874.js.map