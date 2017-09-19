webpackJsonp([24],{219:function(e,t,a){function o(e){a(351)}var n=a(51)(a(270),a(386),o,"data-v-606949f3",null);e.exports=n.exports},249:function(e,t,a){e.exports={default:a(250),__esModule:!0}},250:function(e,t,a){var o=a(6),n=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},251:function(e,t,a){"use strict";function o(e,t){var a=void 0;return function(){for(var o=this,n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];a&&clearTimeout(a),a=setTimeout(function(){e.apply(o,r)},t)}}function n(e,t){t=t>0&&t<=20?t:2,e=parseFloat((e+"").replace(/[^\d.-]/g,"")).toFixed(t)+"";for(var a=e.split(".")[0].split("").reverse(),o=e.split(".")[1],n="",r=0;r<a.length;r++)n+=a[r]+((r+1)%3==0&&r+1!==a.length?",":"");return n.split("").reverse().join("")+"."+o}function r(){var e=(0,s.getToken)();if(!e)return!1;var t=l.TokenUtil.parseUuid(e);return"-"===t.charAt(t.length-1)}Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=o,t.formatMoney=n,t.isSuperAdmin=r;var s=a(22),l=a(22)},270:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(249),r=o(n),s=a(23),l=o(s),i=a(87);a(251);t.default={data:function(){return{addForm:{name:""},colors:[],loading:!0}},watch:{$route:"getColors"},methods:{getColors:function(){this.loading=!0;var e=this,t=i.backEndUrl+"/color/get_colors.do";l.default.post(t,{},{headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){t.data.status===i.SUCCESS?(e.colors=t.data.data,e.loading=!1):e.$message.error(t.data.msg)})},addColor:function(){if(!this.addForm.name)return!1;var e=this,t=i.backEndUrl+"/color/add_color.do";l.default.post(t,(0,r.default)({name:e.addForm.name}),{headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){t.data.status===i.SUCCESS?(e.$message.success("添加成功"),e.getColors()):e.$message.error(t.data.msg)})},deleteColor:function(e){var t=this,a=i.backEndUrl+"/color/delete_color.do";this.$confirm("此操作将永久删除颜色, 是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"danger"}).then(function(){l.default.post(a,(0,r.default)({name:e.name}),{headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){e.data.status===i.SUCCESS?(t.getColors(),t.$message({type:"success",message:"删除成功!"})):t.$message({type:"error",message:e.data.msg})})}).catch(function(){})}},mounted:function(){this.getColors()}}},318:function(e,t,a){t=e.exports=a(214)(!0),t.push([e.i,".form2[data-v-606949f3]{margin:100px 0}.el-table .deleted-row[data-v-606949f3]{background-color:rgba(255,73,73,.56)}.recover[data-v-606949f3]{float:right;margin:10px 40px 10px 0}.add[data-v-606949f3]{float:left;margin:10px 40px 10px 10px}h1[data-v-606949f3],h2[data-v-606949f3],h3[data-v-606949f3]{margin:30px}","",{version:3,sources:["D:/Documents/webstormworkspace/ManageSystem/src/components/base_config/Color.vue"],names:[],mappings:"AAGA,wBACE,cAAgB,CACjB,AACD,wCACE,oCAA0C,CAC3C,AACD,0BACE,YAAa,AACb,uBAAyB,CAC1B,AACD,sBACE,WAAY,AACZ,0BAA4B,CAC7B,AACD,4DACE,WAAa,CACd",file:"Color.vue",sourcesContent:["\n.color-manage[data-v-606949f3] {\n}\n.form2[data-v-606949f3] {\n  margin: 100px 0;\n}\n.el-table .deleted-row[data-v-606949f3] {\n  background-color: rgba(255, 73, 73, 0.56);\n}\n.recover[data-v-606949f3] {\n  float: right;\n  margin: 10px 40px 10px 0;\n}\n.add[data-v-606949f3] {\n  float: left;\n  margin: 10px 40px 10px 10px;\n}\nh1[data-v-606949f3], h2[data-v-606949f3], h3[data-v-606949f3] {\n  margin: 30px;\n}\n"],sourceRoot:""}])},351:function(e,t,a){var o=a(318);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(215)("83565e16",o,!0)},386:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"color-manage"},[a("h2",[e._v("颜色管理")]),e._v(" "),a("el-form",{attrs:{inline:!0,model:e.addForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"颜色",prop:"name"}},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.addForm.name=t},expression:"addForm.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"medium"},on:{click:e.addColor}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 添加新颜色")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.colors,align:"left","default-sort":{prop:"id",order:"ascending"}}},[a("el-table-column",{staticClass:"column",attrs:{prop:"name",sortable:"",label:"颜色"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{plain:!0,type:"danger",icon:"delete",size:"small"},on:{click:function(a){e.deleteColor(t.row)}}})]}}])})],1),e._v(" "),a("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=24.d526af0996e94e2725c3.js.map