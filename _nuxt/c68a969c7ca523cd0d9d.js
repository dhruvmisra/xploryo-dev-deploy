(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{259:function(t,e,o){var content=o(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("8e555d78",content,!0,{sourceMap:!1})},281:function(t,e,o){"use strict";var n=o(259);o.n(n).a},282:function(t,e,o){(t.exports=o(18)(!1)).push([t.i,".question[data-v-c9edf344]{margin:20px 0;box-shadow:0 1px 4px rgba(0,0,0,.25)}.profile[data-v-c9edf344]{display:flex;align-items:center}.profile-photo[data-v-c9edf344]{width:4em;height:4em;background-color:#eaf3ff}.profile-info h5[data-v-c9edf344]{font-weight:700}.question-text[data-v-c9edf344]{padding-top:25px;font-size:1.1em}",""])},295:function(t,e,o){"use strict";o.r(e);var n=o(29),r={layout:"admin",data:function(){return{question:{user:{name:"loading"}},reply:""}},mounted:function(){var t=this;n.a.collection("/events/e147156/questions").doc("q"+this.$route.params.questionId).get().then(function(e){t.question=e.data()})},methods:{onSubmit:function(){var t={questionId:this.question.questionId,reply:this.reply};this.$store.dispatch("replyToQuestion",t)}}},l=(o(281),o(11)),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"question card border-0"},[o("div",{staticClass:"card-body"},[o("div",{staticClass:"row m-0"},[o("div",{staticClass:"profile row m-0"},[o("div",{staticClass:"profile-photo rounded-circle"}),t._v(" "),o("div",{staticClass:"profile-info ml-3"},[o("h5",{staticClass:"m-0"},[t._v(t._s(t.question.user.name))]),t._v(" "),o("small",{staticClass:"text-muted"},[t._v(t._s(t._f("time")(t.question.timeStamp)))])])])]),t._v(" "),o("div",{staticClass:"question-text"},[o("p",[t._v(t._s(t.question.question))])])]),t._v(" "),o("div",{staticClass:"replies card-footer m-0"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reply,expression:"reply"}],staticClass:"form-control",attrs:{name:"reply",id:"reply",cols:"30",rows:"5",placeholder:"Reply to this question",required:""},domProps:{value:t.reply},on:{input:function(e){e.target.composing||(t.reply=e.target.value)}}}),t._v(" "),o("AppButton",{staticClass:"d-block my-3 ml-auto",attrs:{btnStyle:"btn-accent2"}},[t._v("Reply")])],1)])])])},[],!1,null,"c9edf344",null);e.default=component.exports}}]);