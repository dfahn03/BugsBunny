(function(t){function e(e){for(var a,n,c=e[0],i=e[1],l=e[2],d=0,m=[];d<c.length;d++)n=c[d],r[n]&&m.push(r[n][0]),r[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,c=1;c<s.length;c++){var i=s[c];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/'/BugsBunny/'/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),r=s.n(a);r.a},2698:function(t,e,s){t.exports=s.p+"img/carrot-1.008ea421.png"},"2e1c":function(t,e,s){"use strict";var a=s("3625"),r=s.n(a);r.a},3625:function(t,e,s){},"3f2f":function(t,e,s){"use strict";var a=s("ff6f"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],n=(s("034f"),s("2877")),c={},i=Object(n["a"])(c,r,o,!1,null,null,null),l=i.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container"},[t._m(0),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showForm,expression:"showForm"}],staticClass:"row"},[a("bug-form")],1),a("div",{staticClass:"col-12 mb-5"},[0==t.showForm?a("button",{staticClass:"btn btn-success",on:{click:function(e){t.showForm=!t.showForm}}},[t._v("Add "),a("img",{attrs:{src:s("2698"),alt:"Carrot"}})]):1==t.showForm?a("button",{staticClass:"btn btn-success",on:{click:function(e){t.showForm=!t.showForm}}},[t._v("Cancel "),a("img",{attrs:{src:s("2698"),alt:"Carrot"}})]):t._e()]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-9 mt-2"},[a("bug-list")],1)])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col mb-5 mt-2"},[s("h1",{staticClass:"text-white"},[s("strong",[t._v("Bugs")])])])])}],p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bug-list row"},[s("div",{staticClass:"col-11"},[s("table",{staticClass:"table table-hover"},[t._m(0),s("tbody",t._l(t.bugs,function(e){return s("tr",{staticClass:"table-secondary",on:{click:function(s){return t.openBug(e._id)}}},[s("th",{attrs:{scope:"row"}},[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.creator))]),0==e.closed?s("td",[t._v("Active "),s("i",{staticClass:"fas fa-book-open"})]):1==e.closed?s("td",[t._v("Closed "),s("i",{staticClass:"far fa-times-circle"})]):t._e(),s("td",[t._v("\n            "+t._s(new Date(e.createdAt).toLocaleDateString("en-US",{year:"numeric",day:"numeric",month:"short"}))+"\n          ")])])}),0)]),t._m(1)])])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticClass:"table-primary bg-title"},[s("th",{attrs:{scope:"col"}},[t._v("Title")]),s("th",{attrs:{scope:"col"}},[t._v("Reported By")]),s("th",{attrs:{scope:"col"}},[t._v("Status")]),s("th",{attrs:{scope:"col"}},[t._v("Date Created")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{staticClass:"pagination pagination-sm"},[s("li",{staticClass:"page-item disabled"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("«")])]),s("li",{staticClass:"page-item active"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("4")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("5")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("»")])])])])}],h={name:"BugList",data(){return{}},mounted(){this.$store.dispatch("getBugs")},computed:{bugs(){return this.$store.state.bugs}},methods:{openBug(t){z.push({name:"BugDetails",params:{id:t}})}}},f=h,v=(s("e0c0"),Object(n["a"])(f,p,g,!1,null,null,null)),b=v.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 bug-form d-flex justify-content-center align-items-center"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.createBug(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control form-control-sm m-1",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creator,expression:"creator"}],staticClass:"form-control form-control-sm m-1",attrs:{type:"text",placeholder:"Reported By"},domProps:{value:t.creator},on:{input:function(e){e.target.composing||(t.creator=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control form-control-lg m-1",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),s("button",{staticClass:"btn btn-primary mt-1 mb-2",attrs:{type:"submit"}},[t._v("Eh, what's up, doc?")])])])])},C=[],w={name:"BugForm",data(){return{title:"",creator:"",description:""}},methods:{createBug(){let t={title:this.title,creator:this.creator,description:this.description};this.$store.dispatch("createBug",t),this.title="",this.creator="",this.description=""}}},y=w,B=(s("3f2f"),Object(n["a"])(y,_,C,!1,null,"597c7dd8",null)),x=B.exports,$={name:"home",data(){return{showForm:!1}},mounted(){this.$store.dispatch("getBugs")},components:{BugList:b,BugForm:x}},N=$,k=(s("cccb"),Object(n["a"])(N,d,m,!1,null,null,null)),F=k.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container bug-details"},[1==t.bug.closed?a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1):t._e(),t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-5"},[a("div",{staticClass:"card text-center"},[0==t.bug.closed?a("td",{staticClass:"card-header"},[t._v("Active "),a("i",{staticClass:"fas fa-book-open"})]):1==t.bug.closed?a("td",{staticClass:"card-header"},[t._v("Closed "),a("i",{staticClass:"far fa-times-circle"})]):t._e(),a("div",{staticClass:"card-header"},[t._v("@"+t._s(t.bug.creator))]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.bug.title))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.bug.description))]),a("button",{staticClass:"btn btn-danger m-2",attrs:{disabled:t.bug.closed},on:{click:function(e){return t.closeBug(t.bug)}}},[t._v("Close "),a("img",{attrs:{src:s("2698"),alt:"Carrot"}})])]),a("div",{staticClass:"card-footer text-muted"},[t._v("Created:\n          "+t._s(new Date(t.bug.createdAt).toLocaleDateString("en-US",{year:"numeric",day:"numeric",month:"short"}))+"\n        ")])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showForm,expression:"showForm"}],staticClass:"row"},[a("note-form")],1),a("div",{staticClass:"row"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.bug.closed,expression:"bug.closed == false"}],staticClass:"col-12 mt-3 mb-3 d-flex justify-content-center align-items-center"},[0==t.showForm?a("button",{staticClass:"btn btn-success",attrs:{disabled:t.bug.closed},on:{click:function(e){t.showForm=!t.showForm}}},[t._v("Add "),a("i",{staticClass:"far fa-comment"})]):1==t.showForm?a("button",{staticClass:"btn btn-success",on:{click:function(e){t.showForm=!t.showForm}}},[t._v("Cancel "),a("i",{staticClass:"far fa-comment"})]):t._e()])]),a("div",{staticClass:"row"},[a("note-list")],1)])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mt-3"},[s("h1",{staticClass:"text-white"},[t._v("Bug Details")])])])}],S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 note-form d-flex justify-content-center align-items-center"},[s("form",[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creator,expression:"creator"}],staticClass:"form-control form-control-sm m-1",attrs:{type:"text",placeholder:"Who Might You Be?"},domProps:{value:t.creator},on:{input:function(e){e.target.composing||(t.creator=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control form-control-lg m-1",attrs:{type:"text",placeholder:"Note"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),s("button",{staticClass:"btn btn-primary mt-1 mb-2",attrs:{type:"submit"}},[t._v("Eh, what's up, doc?")])])])])},O=[],E={name:"NoteForm",data(){return{creator:"",content:"",flagged:"pending",bug:this.$route.params.id}},createNote(){let t={creator:this.creator,content:this.content,flagged:"pending",bug:this.$route.params.id};this.$store.dispatch("createNote",t),this.creator="",this.content=""}},P=E,L=Object(n["a"])(P,S,O,!1,null,null,null),A=L.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col note-list"},[s("table",{staticClass:"table table-hover"},[t._m(0),s("tbody",t._l(t.notes,function(e){return s("tr",{key:e._id,staticClass:"table-secondary"},[s("td",[t._v(t._s(e.creator))]),s("td",[t._v(t._s(e.content))]),"pending"==e.flagged?s("td",[t._v("Pending")]):"completed"==e.flagged?s("td",[t._v("Completed")]):s("td",[t._v("Rejected")]),s("td",[t._v("\n          "+t._s(new Date(e.createdAt).toLocaleDateString("en-US",{year:"numeric",day:"numeric",month:"short"}))+"\n        ")]),s("td",[t._v("\n          "+t._s(new Date(e.updatedAt).toLocaleDateString("en-US",{year:"numeric",day:"numeric",month:"short"}))+"\n        ")]),s("td",{staticClass:"d-flex"},[s("button",{staticClass:"btn btn-success btn-small"},[t._v("Completed")]),s("button",{staticClass:"btn btn-danger btn-small ml-1",on:{click:function(s){return t.deleteNote(e)}}},[t._v("Rejected")])])])}),0)])])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticClass:"table-primary bg-title"},[s("th",{attrs:{scope:"col"}},[t._v("Created By")]),s("th",{attrs:{scope:"col"}},[t._v("Note")]),s("th",{attrs:{scope:"col"}},[t._v("Status")]),s("th",{attrs:{scope:"col"}},[t._v("Date Created")]),s("th",{attrs:{scope:"col"}},[t._v("Date Updated")]),s("th",{attrs:{scope:"col"}},[t._v("Change Status")])])])}],M={name:"NoteList",data(){return{}},mounted(){this.$store.dispatch("getNotes")},computed:{notes(){return this.$store.state.notes},bug(){return this.$store.state.bug}},method(t){this.$store.dispatch("deleteNote",t)}},R=M,I=Object(n["a"])(R,T,U,!1,null,null,null),J=I.exports,H={name:"BugDetails",props:["id"],mounted(){this.$store.dispatch("getBugById",this.$route.params.id),this.$store.dispatch("getNotes",this.$route.params.id)},data(){return{showForm:!1}},components:{NoteList:J,NoteForm:A},computed:{bug(){return this.$store.state.bug},notes(){return this.$store.state.notes}},methods:{closeBug(t){this.$store.dispatch("closeBug",t)}}},W=H,Y=(s("2e1c"),Object(n["a"])(W,j,D,!1,null,"2f5e918f",null)),q=Y.exports;a["a"].use(u["a"]);var z=new u["a"]({routes:[{path:"/",name:"home",component:F},{path:"/bugs/:id",name:"BugDetails",props:!0,component:q}]}),G=s("2f62"),K=s("bc3a"),Q=s.n(K);let V=Q.a.create({baseURL:"https://bcw-sandbox.herokuapp.com/api/DallinTest"});a["a"].use(G["a"]);var X=new G["a"].Store({state:{bugs:[],bug:{},notes:[]},mutations:{setBugs(t,e){t.bugs=e},setBug(t,e){t.bug=e},setNotes(t,e){t.notes=e}},actions:{async getBugs({commit:t,dispatch:e}){try{let e=await V.get("/bugs");t("setBugs",e.data.results)}catch(s){console.error(s)}},async getBugById({commit:t,dispatch:e},s){try{let e=await V.get("/bugs/"+s);t("setBug",e.data.results)}catch(a){console.error(a)}},async createBug({commit:t,dispatch:e},s){try{await V.post("/bugs",s);e("getBugs")}catch(a){console.error(a)}},async editBug({commit:t,dispatch:e},s){try{let e=await V.put("/bugs/"+s.id,s);t("setBug",e.data.results)}catch(a){console.error(a)}},async closeBug({commit:t,dispatch:e},s){try{let r=await V.delete("bugs/"+s._id);t("setBug",r.data.results),e("getNotes")}catch(a){console.error(a)}},async getNotes({commit:t,dispatch:e},s){try{let e=await V.get("/bugs/"+s+"/notes");t("setNotes",e.data.results)}catch(a){console.error(a)}},async createNote({commit:t,dispatch:e},s){try{await V.post("/bugs/"+s.bug+"/notes",s);e("getNotes",s.bug)}catch(a){console.error(a)}},async deleteNote({commit:t,dispatch:e},s){try{await V.delete("bugs/"+s.bug+"/notes/"+s._id,s);e("getNotes",s.bug)}catch(a){console.error(a)}}}});a["a"].config.productionTip=!1,new a["a"]({router:z,store:X,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,s){},"69f2":function(t,e,s){},cccb:function(t,e,s){"use strict";var a=s("d563"),r=s.n(a);r.a},d563:function(t,e,s){},e0c0:function(t,e,s){"use strict";var a=s("69f2"),r=s.n(a);r.a},ff6f:function(t,e,s){}});
//# sourceMappingURL=app.db93e199.js.map