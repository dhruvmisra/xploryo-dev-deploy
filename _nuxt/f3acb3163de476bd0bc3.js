(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{234:function(t,e,n){var content=n(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("25136dd1",content,!0,{sourceMap:!1})},235:function(t,e,n){var content=n(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("e7a8d258",content,!0,{sourceMap:!1})},236:function(t,e,n){"use strict";var o={props:{question:Object,isAdmin:{type:Boolean,default:!1}},data:function(){return{questionLiked:!1}},methods:{likeQuestion:function(){0==this.questionLiked?(this.question.likes++,this.questionLiked=!0):(this.question.likes--,this.questionLiked=!1)}}},r=(n(241),n(12)),c={components:{QuestionCard:Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question card border-0"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row m-0"},[n("div",{staticClass:"profile row m-0"},[n("div",{staticClass:"profile-photo rounded-circle"}),t._v(" "),n("div",{staticClass:"profile-info ml-3"},[n("h5",{staticClass:"m-0"},[t._v(t._s(t.question.user.name))]),t._v(" "),n("small",{staticClass:"text-muted"},[t._v(t._s(t._f("time")(t.question.timeStamp)))])])]),t._v(" "),n("div",{staticClass:"likes ml-auto",class:{liked:t.questionLiked},on:{click:t.likeQuestion}},[n("span",[t._v(t._s(t.question.likes))]),t._v(" "),n("i",{staticClass:"far fa-thumbs-up fa-lg",class:{fas:t.questionLiked}})])]),t._v(" "),n("div",{staticClass:"question-text"},[n("p",[t._v(t._s(t.question.question))])])]),t._v(" "),n("div",{staticClass:"replies card-footer m-0"},[n("p",{staticClass:"text-center m-0"},[t._v(" "+t._s(t.isAdmin?"Reply":"View Replies")+"  ("+t._s(t.question.replies.length)+")")])])])},[],!1,null,"22b63eb3",null).exports},props:{questions:Array,isAdmin:{type:Boolean,default:!1}}},l=(n(243),Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-12 col-md-10 col-lg-8 mx-auto"},[n("transition-group",{attrs:{name:"fade"}},t._l(t.questions,function(e){return n("QuestionCard",{key:e.questionId,staticClass:"fade-item",attrs:{question:e,isAdmin:t.isAdmin}})}),1)],1)},[],!1,null,"5143e0b4",null));e.a=l.exports},241:function(t,e,n){"use strict";var o=n(234);n.n(o).a},242:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,".question[data-v-22b63eb3]{margin:20px 0;box-shadow:0 1px 4px rgba(0,0,0,.25)}.profile[data-v-22b63eb3]{display:flex;align-items:center}.profile-photo[data-v-22b63eb3]{width:4em;height:4em;background-color:#eaf3ff}.profile-info h5[data-v-22b63eb3]{font-weight:700}.likes[data-v-22b63eb3]{display:flex;align-items:center;margin:10px;border:1px solid rgba(0,0,0,.2);border-radius:20px}.likes span[data-v-22b63eb3]{padding:0 10px;color:var(--lightblue)}.likes i[data-v-22b63eb3]{padding:0 10px;cursor:pointer;color:rgba(0,0,0,.2)}.liked i[data-v-22b63eb3]{color:orange}.question-text[data-v-22b63eb3]{padding-top:25px;font-size:1.1em}.replies[data-v-22b63eb3]{background-color:#f1f8fa;cursor:pointer}",""])},243:function(t,e,n){"use strict";var o=n(235);n.n(o).a},244:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,".fade-item[data-v-5143e0b4]{transition:all .5s}.fade-enter[data-v-5143e0b4],.fade-leave-to[data-v-5143e0b4]{opacity:0;transform:translateY(30px)}.fade-leave-active[data-v-5143e0b4]{position:absolute}",""])},245:function(t,e,n){var content=n(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("2f8b4dc7",content,!0,{sourceMap:!1})},250:function(t,e,n){"use strict";var o=n(236),r={props:{questions:Array,isAdmin:{type:Boolean,default:!1}},components:{QuestionsGrid:o.a},computed:{popularQuestions:function(){return this.questions.sort(function(a,b){return b.likes-a.likes}),this.questions}}},c=n(12),component=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("QuestionsGrid",{attrs:{questions:this.popularQuestions,isAdmin:this.isAdmin}})},[],!1,null,null,null);e.a=component.exports},251:function(t,e,n){"use strict";var o=n(236),r={props:{questions:Array,isAdmin:{type:Boolean,default:!1}},components:{QuestionsGrid:o.a},methods:{},created:function(){},computed:{recentQuestions:function(){return this.questions.sort(function(a,b){return b.timeStamp-a.timeStamp}),this.questions}}},c=n(12),component=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("QuestionsGrid",{attrs:{questions:this.recentQuestions,isAdmin:this.isAdmin}})},[],!1,null,null,null);e.a=component.exports},252:function(t,e,n){"use strict";var o=n(236),r={props:{questions:Array,isAdmin:{type:Boolean,default:!1}},components:{QuestionsGrid:o.a},data:function(){return{userId:this.$store.getters.user.userId}},computed:{myQuestions:function(){for(var t=[],i=0;i<this.questions.length;i++)this.questions[i].user.userId==this.userId&&t.push(this.questions[i]);return t.sort(function(a,b){return b.timeStamp-a.timeStamp}),t}}},c=n(12),component=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("QuestionsGrid",{attrs:{questions:this.myQuestions,isAdmin:this.isAdmin}})},[],!1,null,null,null);e.a=component.exports},262:function(t,e,n){"use strict";var o=n(245);n.n(o).a},263:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,".nav-item[data-v-54d3a8dd]{width:30%;text-align:center;cursor:pointer;padding:10px 0;border-radius:var(--radius);border:1px solid rgba(34,15,89,.5);transition:background-color .2s ease-out}.nav-item.active[data-v-54d3a8dd]{background-color:var(--pink);color:#fff;border:none}.spinner-border[data-v-54d3a8dd]{width:3em;height:3em;color:rgba(89,28,175,.5)}.ask-bar[data-v-54d3a8dd]{position:fixed;bottom:0;left:20%;width:60%}.btn-ask[data-v-54d3a8dd]{background-color:var(--pink);color:#fff}.btn-ask[data-v-54d3a8dd]:hover{background-color:#b12049;color:#fff}@media (max-width:768px){.ask-bar[data-v-54d3a8dd]{left:0;width:100%}}",""])},281:function(t,e,n){"use strict";n.r(e);n(13);var o=n(250),r=n(251),c=n(252),l=n(42),d={components:{PopularQuestions:o.a,RecentQuestions:r.a,MyQuestions:c.a},data:function(){return{loading:!0,category:"PopularQuestions",questions:[],asking:!1,questionAsked:""}},created:function(){this.getQuestions()},methods:{getQuestions:function(){var t=this;l.a.collection("/events/e147156/questions").onSnapshot(function(e){var n=[];e.forEach(function(t){n.push(t.data())}),t.questions=n,t.loading=!1})},sendQuestion:function(){var t=this.$store.getters.user.userId,e=this.$store.getters.user.name,n=this.$store.getters.event.eventId,code=Math.floor(9e5*Math.random()+1e5);l.a.collection("/events/e"+n+"/questions").doc("q"+code).set({archive:!1,user:{userId:t,name:e},likes:0,question:this.questionAsked,replies:[],review:!1,timeStamp:Date.now(),questionId:code}).then(function(){console.log("Document successfully written!")}).catch(function(t){console.error("Error writing document: ",t)})}}},f=(n(262),n(12)),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center my-4"},[t._v("Questions")]),t._v(" "),n("div",{staticClass:"col-sm-12 col-md-10 col-lg-8 mx-auto"},[n("ul",{staticClass:"nav nav-pills m-0 justify-content-around"},[n("li",{staticClass:"nav-item",class:{active:"PopularQuestions"==t.category},on:{click:function(e){t.category="PopularQuestions"}}},[t._v("\n        Popular\n      ")]),t._v(" "),n("li",{staticClass:"nav-item",class:{active:"RecentQuestions"==t.category},on:{click:function(e){t.category="RecentQuestions"}}},[t._v("\n        Recent\n      ")]),t._v(" "),n("li",{staticClass:"nav-item",class:{active:"MyQuestions"==t.category},on:{click:function(e){t.category="MyQuestions"}}},[t._v("\n        My\n      ")])])]),t._v(" "),t.loading?n("div",{staticClass:"spinner-border d-block mx-auto my-5",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])]):n(t.category,{tag:"component",staticClass:"mb-5 pb-5",attrs:{questions:t.questions}}),t._v(" "),n("div",{staticClass:"ask-bar card mx-auto"},[n("div",{staticClass:"card-body row m-0 py-4"},[t.asking?n("form",{staticClass:"col-12 p-0"},[n("div",{staticClass:"form-group m-0"},[t.asking?n("input",{directives:[{name:"model",rawName:"v-model",value:t.questionAsked,expression:"questionAsked"}],staticClass:"form-control mb-3",attrs:{type:"text",placeholder:"Question",required:""},domProps:{value:t.questionAsked},on:{input:function(e){e.target.composing||(t.questionAsked=e.target.value)}}}):t._e(),t._v(" "),t.asking?n("button",{staticClass:"d-block btn btn-ask w-100 py-2 mx-auto",on:{click:function(e){return e.preventDefault(),t.sendQuestion(e)}}},[t._v("Send")]):t._e()])]):t._e(),t._v(" "),t.asking?t._e():n("button",{staticClass:"d-block btn btn-ask w-100 py-2 mx-auto",on:{click:function(e){t.asking=!t.asking}}},[t._v("Ask a question")])])])],1)},[],!1,null,"54d3a8dd",null);e.default=component.exports}}]);