(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/8Du":function(t,e,s){"use strict";s("QWBl"),s("yq1k"),s("FZtP");var a={props:{record:{},showtags:!1,pathPrefix:"",border:{type:Boolean,default:!0}},computed:{path:function(){return this.pathPrefix?this.pathPrefix+"/"+this.record.id:this.record.path},memberships:function(){var t=[],e=this.record.memberships;return e?(e.forEach((function(e){["foundation","tech","cloud"].includes(e.title)&&t.push(e)})),t):[]}},methods:{displaytags:function(){return this.showtags},img:function(t){return t?t.src?t.src:t:""}}},r=(s("6hgi"),s("KHd+")),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!t.border}},[s("g-link",{staticClass:"post-card-image-link",attrs:{to:t.path}},[s("g-image",{staticClass:"post-card-image",attrs:{src:t.img(t.record.image),alt:t.record.title}})],1),s("div",[s("g-link",{attrs:{to:t.path}},[s("h2",{staticClass:"post-card-title mt-3"},[t._v(t._s(t.record.title||t.record.name))]),s("p",{staticClass:"post-card-excerpt text-gray-700"},[t._v(t._s(t.record.excerpt))]),s("section",{staticClass:"flex flex-wrap post-tags container mx-auto relative py-1"},t._l(t.memberships,(function(e){return s("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-1 px-2 mr-1 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full mb-2",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)]),s("div",{staticClass:"w-full post-card-meta pt-2"},[s("div",{staticClass:"avatars"},[s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"flex justify-between items-center"},[s("ul",{staticClass:"list-none flex author-list m-0"},t._l(t.record.authors,(function(e){return s("li",{key:e.id,staticClass:"author-list-item"},[s("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.name,expression:"author.name"}],attrs:{to:e.path}},[s("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.img(e.image),alt:e.name}})],1)],1)})),0)]),s("div",{staticClass:"flex flex-col text-xs leading-none uppercase"},[s("p",[s("g-link",{attrs:{to:t.path}},[s("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))])])],1),s("p",[s("g-link",{attrs:{to:t.path}},[s("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.startDate))])]),t._v("\n              "+t._s(t.record.status)+"\n            ")],1)])]),t.displaytags()?s("section",{staticClass:"post-tags container mx-auto relative py-3"},t._l(t.record.tags,(function(e){return s("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1):t._e()])])],1)],1)}),[],!1,null,"70773613",null);e.a=i.exports},"/eEC":function(t,e,s){},"6hgi":function(t,e,s){"use strict";s("/eEC")},LQbr:function(t,e,s){"use strict";s("dfpL")},RY4b:function(t,e,s){"use strict";s.r(e);var a={components:{PostListItem:s("/8Du").a},metaInfo:function(){return{title:this.$page.news.title}}},r=(s("LQbr"),s("KHd+")),i=null,n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[s("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden pt-20"},[s("div",{staticClass:"pt-8"},[s("section",{staticClass:"post-header container mx-auto px-0 mb-4 border-b"},[s("h1",{staticClass:"text-5xl font-medium leading-none mt-0"},[t._v("\n          "+t._s(t.$page.news.title)+"\n        ")]),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-2xl pt-4 pb-10 text-gray-700",domProps:{innerHTML:t._s(t.$page.news.excerpt)}})]),s("section",{staticClass:"post-author-list mb-10 mx-0"},[s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"flex justify-between items-center"},[s("ul",{staticClass:"list-none flex author-list m-0"},t._l(t.$page.news.authors,(function(t){return s("li",{key:t.id,staticClass:"author-list-item"},[s("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.name,expression:"author.name"}],attrs:{to:t.path}},[s("g-image",{staticClass:"h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.image,alt:t.name}})],1)],1)})),0)]),s("div",{staticClass:"pl-3 flex flex-col text-xs leading-none uppercase"},[s("p",t._l(t.$page.news.authors,(function(e,a){return s("span",{key:e.id},[s("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.name,expression:"author.name"}],staticClass:"hover:underline",attrs:{to:e.path}},[t._v(t._s(e.name))]),a<t.$page.news.authors.length-1?s("span",[t._v(",")]):t._e()],1)})),0),s("p",{staticClass:"text-gray-700"},[s("g-link",{attrs:{to:t.$page.news.path}},[s("time",{attrs:{datetime:t.$page.news.datetime}},[t._v(t._s(t.$page.news.humanTime))])]),s("g-link",{attrs:{to:t.$page.news.path}},[s("time",{attrs:{datetime:t.$page.news.datetime}},[t._v(t._s(t.$page.news.startDate))])])],1)])])])]),s("section",{staticClass:"post-image mx-auto w-full"},[s("g-image",{attrs:{src:t.$page.news.image}})],1),s("div",{staticClass:"py-12"},[s("section",{staticClass:"post-content container mx-auto relative font-serif text-gray-700"},[s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-content-text text-xl",domProps:{innerHTML:t._s(t.$page.news.content)}})]),s("section",{staticClass:"post-tags container mx-auto relative py-10"},t._l(t.$page.news.tags,(function(e){return s("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)])]),s("section",{staticClass:"post-related text-gray-700 pt-10 border-b border-b-gray-900"},[s("div",{staticClass:"container mx-auto"},[s("div",{staticClass:"flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4"},[t.$page.previous?s("PostListItem",{attrs:{record:t.$page.previous,border:!1}}):t._e(),t.$page.next?s("PostListItem",{attrs:{record:t.$page.next,border:!1}}):t._e()],1)])])])}),[],!1,null,"1e6b086c",null);"function"==typeof i&&i(n);e.default=n.exports},dfpL:function(t,e,s){}}]);