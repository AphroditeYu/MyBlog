(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71d367fc"],{"013f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"base"},[t("div",{staticClass:"loginAndRegist"},[t("div",{staticClass:"loginArea"},[t("transition",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInUp","leave-active-class":"animate__zoomOut",appear:""}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"title"},[e._v(" LOGIN ")])]),t("transition",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInUp","leave-active-class":"animate__zoomOut",appear:""}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"pwdArea"},[t("div",{staticStyle:{flex:"1","justify-content":"center",display:"flex","align-items":"center"}},[t("el-input",{staticClass:"username",staticStyle:{width:"165px"},attrs:{placeholder:"用户名"},model:{value:e.loginUser.name,callback:function(t){e.$set(e.loginUser,"name",t)},expression:"loginUser.name"}})],1),t("div",{staticStyle:{flex:"1","justify-content":"center",display:"flex","align-items":"center"}},[t("el-input",{staticStyle:{width:"165px"},attrs:{placeholder:"密码","show-password":""},model:{value:e.loginUser.password,callback:function(t){e.$set(e.loginUser,"password",t)},expression:"loginUser.password"}})],1)])]),t("transition",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInUp","leave-active-class":"animate__zoomOut",appear:""}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"btnArea"},[t("el-button",{staticStyle:{"background-color":"#d98b87","letter-spacing":"5px"},attrs:{type:"success",round:""},on:{click:e.UserLogin}},[e._v("登录")])],1)])],1),t("div",{staticClass:"registArea"},[t("transition",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInUp","leave-active-class":"animate__zoomOut",appear:""}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}],staticClass:"rigestTitle"},[e._v(" 管理员注册 ")])]),t("transition",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInUp","leave-active-class":"animate__zoomOut",appear:""}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}],staticClass:"registForm"},[t("div",{staticStyle:{flex:"1",display:"flex","justify-content":"center","align-items":"center"}},[e._v(" 用   户   名: "),t("el-input",{staticStyle:{width:"165px","margin-left":"10px"},attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.regUser.regUsername,callback:function(t){e.$set(e.regUser,"regUsername",t)},expression:"regUser.regUsername"}})],1),t("div",{staticStyle:{flex:"1",display:"flex","justify-content":"center","align-items":"center"}},[e._v(" 密          码: "),t("el-input",{staticStyle:{width:"165px","margin-left":"10px"},attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.regUser.regPwd,callback:function(t){e.$set(e.regUser,"regPwd",t)},expression:"regUser.regPwd"}})],1),t("div",{staticStyle:{flex:"1",display:"flex","justify-content":"center","align-items":"center"}},[e._v(" 确 认 密 码: "),t("el-input",{staticStyle:{width:"165px","margin-left":"10px"},attrs:{placeholder:"请再次输入密码","show-password":""},model:{value:e.regUser.regRePwd,callback:function(t){e.$set(e.regUser,"regRePwd",t)},expression:"regUser.regRePwd"}})],1),t("div",{staticStyle:{flex:"1",display:"flex","align-items":"center"}},[e._v(" 管理员审核: "),[t("el-select",{staticStyle:{width:"100px","margin-left":"10px"},attrs:{id:"elselect",filterable:"",placeholder:"请选择"},model:{value:e.regUser.selectValue,callback:function(t){e.$set(e.regUser,"selectValue",t)},expression:"regUser.selectValue"}},e._l(e.admins,(function(e){return t("el-option",{key:e.id,attrs:{label:e.nickname,value:e.id}})})),1)]],2)])]),t("transition",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInUp","leave-active-class":"animate__zoomOut",appear:""}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}],staticClass:"registBtn"},[t("el-button",{staticStyle:{"background-color":"#d98b87","letter-spacing":"5px"},attrs:{type:"success",round:""},on:{click:e.userRegister}},[e._v("注册")])],1)])],1),t("div",{ref:"showInfoView",staticClass:"showInfo",style:{borderTopRightRadius:e.styleObj.bordertoprightradius,borderBottomRightRadius:e.styleObj.borderbottomrightradius,borderTopLeftRadius:e.styleObj.bordertopleftradius,borderBottomLeftRadius:e.styleObj.borderbottomleftradius,right:e.styleObj.rightDis},attrs:{id:"aaa"}},[t("transition",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInUp","leave-active-class":"animate__zoomOut",appear:""}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",width:"100%",height:"100%"}},[t("div",{staticStyle:{flex:"2"}},[t("el-button",{staticStyle:{"background-color":"#d98b87",border:"1px solid #ffffff","margin-top":"330px"},attrs:{type:"success",round:""},on:{click:e.changeToRegiest}},[e._v("还没有账户？点击注册")])],1)])]),t("transition",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInUp","leave-active-class":"animate__zoomOut",appear:""}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}],staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",width:"100%",height:"100%"}},[t("div",{staticStyle:{flex:"2"}},[t("el-button",{staticStyle:{"background-color":"#d98b87",border:"1px solid #ffffff","margin-top":"330px"},attrs:{type:"success",round:""},on:{click:e.changeToLogin}},[e._v("已有账户？点击登录")])],1)])])],1)])])},i=[],r=(s("77ed"),s("bc3a"),{name:"Login",data(){return{loginUser:{name:"",password:""},admins:[{id:"选项一",nickname:"大傻"},{id:"选项二",nickname:"二傻"},{id:"选项三",nickname:"三傻"}],regUser:{regUsername:"",regRePwd:"",regPwd:"",selectValue:""},styleObj:{bordertoprightradius:"15px",borderbottomrightradius:"15px",bordertopleftradius:"0px",borderbottomleftradius:"0px",rightDis:"0px"},isShow:!0}},created(){this.loadInfoOfAdmin()},methods:{changeToRegiest(){this.styleObj.bordertoprightradius="0px",this.styleObj.borderbottomrightradius="0px",this.styleObj.bordertopleftradius="15px",this.styleObj.borderbottomleftradius="15px",this.styleObj.rightDis="50%",this.isShow=!this.isShow},changeToLogin(){this.styleObj.bordertoprightradius="15px",this.styleObj.borderbottomrightradius="15px",this.styleObj.bordertopleftradius="0px",this.styleObj.borderbottomleftradius="0px",this.styleObj.rightDis="0px",this.isShow=!this.isShow},UserLogin(){this.request.post("http://localhost:9090/user/login",this.loginUser).then(e=>{"200"==e.code?(localStorage.setItem("user",JSON.stringify(e.data)),this.$message.success("登陆成功！"),this.$router.push("/manage")):"400"==e.code?this.$message.warning(e.msg):"401"==e.code?this.$message.error(e.msg):this.$message.error("用户名或密码错误！")})},loadInfoOfAdmin(){this.request.get("http://localhost:9090/user/listOfAdmin").then(e=>{if("200"==e.code)return this.admins=e.data,!0})},userRegister(){if(""===this.regUser.regUsername)return this.$message.error("用户名不能为空！"),!1;if(this.regUser.regPwd!=this.regUser.regRePwd)return this.$message.error("两次密码输入不同，请检查后重新注册！"),!1;if(""===this.regUser.selectValue)return this.$message.error("未选择审核员!"),!1;{let e={};e.name=this.regUser.regUsername,e.password=this.regUser.regPwd,e.auditor=this.regUser.selectValue,this.request.post("http://localhost:9090/user/register",e).then(e=>{"200"===e.code&&(this.$message.success("申请成功，请耐心等待管理员审核！"),this.regUser={regUsername:"",regRePwd:"",regPwd:"",selectValue:""},this.changeToLogin()),"400"!==e.code||this.$message.error(e.msg)})}}}}),n=r,o=(s("82ea"),s("2877")),l=Object(o["a"])(n,a,i,!1,null,null,null);t["default"]=l.exports},"82ea":function(e,t,s){"use strict";s("89ce")},"89ce":function(e,t,s){}}]);
//# sourceMappingURL=chunk-71d367fc.19fbdf98.js.map