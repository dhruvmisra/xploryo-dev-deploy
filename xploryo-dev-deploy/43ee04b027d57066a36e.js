(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{292:function(t,e,n){"use strict";n.r(e);var o={layout:"auth",middleware:["auth-entered"],data:function(){return{eventCode:null}},methods:{onSubmit:function(){this.$store.dispatch("enterEvent",this.eventCode)}}},r=n(11),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"text-white text-center py-5"},[t._v("XPLORYO")]),t._v(" "),n("h2",{staticClass:"text-white text-center mb-4"},[t._v("Event Selection")]),t._v(" "),n("div",{staticClass:"form card col-sm-10 col-md-6 col-lg-4 mx-auto"},[n("div",{staticClass:"card-body text-center"},[n("label",[t._v("Create an Event")]),t._v(" "),n("AppButton",{staticClass:"w-100",on:{click:function(e){return t.$router.push("/admin/create")}}},[t._v("Create")]),t._v(" "),n("form",{staticClass:"py-3",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("h4",{staticClass:"text-center my-3"},[t._v("OR")]),t._v(" "),n("div",{staticClass:"form-group text-center"},[n("label",{attrs:{for:"event-code"}},[t._v("Join an Event")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.eventCode,expression:"eventCode"}],staticClass:"form-control",attrs:{type:"number",id:"event-code",placeholder:"#",required:""},domProps:{value:t.eventCode},on:{input:function(e){e.target.composing||(t.eventCode=e.target.value)}}})]),t._v(" "),n("AppButton",{staticClass:"w-100"},[t._v("Enter")])],1)],1)])])},[],!1,null,"3389006c",null);e.default=component.exports}}]);