webpackJsonp([1],{"9M+g":function(t,e){},CuRo:function(t,e){},Jmt5:function(t,e){},K7LT:function(t,e){},LUj8:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("j1ja"),a("Jmt5"),a("9M+g");var o=a("7+uW"),r={props:["data"],methods:{openTab(t){var e=new Image;e.src=t,window.open("").document.write(e.outerHTML)}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-between"},t._l(t.data,function(e){return a("div",{key:e.header,staticClass:"col-xl-4 col-lg-12",staticStyle:{"margin-bottom":"10px"}},[a("b-card",{staticClass:"text-center feature-box",attrs:{header:e.header}},[""!=e.text?a("div",{staticClass:"b-card-body",domProps:{innerHTML:t._s(e.text)}}):t._e(),t._v(" "),void 0!==e.img?a("div",{staticClass:"b-card-body"},[a("img",{directives:[{name:"b-modal",rawName:"v-b-modal",value:e.header,expression:"item.header"}],staticClass:"img-fluid",staticStyle:{cursor:"pointer"},attrs:{center:"",src:e.img}}),t._v(" "),a("b-modal",{attrs:{"hide-footer":"","hide-header":"",id:e.header,centered:""}},[a("img",{staticClass:"img-fluid",attrs:{center:"",fluid:"",src:e.img_big}})])],1):t._e()])],1)}),0)},staticRenderFns:[]},n=a("VU/8")(r,s,!1,null,null,null).exports,i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("b-tabs",{staticClass:"card nav-fill col-lg-12 m-3",attrs:{pills:""}},t._l(t.data,function(e,o){return a("b-tab",{key:o,staticClass:"p-1",attrs:{title:e.title}},[a("div",{staticClass:"card-body row",attrs:{id:"{tab.title}-standard"}},t._l(e.items,function(e,o){return a("div",{key:o,staticClass:"link  col-md-4"},[void 0!==e.src?a("b-embed",{attrs:{type:"iframe",src:e.src,allowfullscreen:""}}):t._e(),t._v(" "),a("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.title))]),t._v(" "),a("p",{domProps:{innerHTML:t._s(e.text)}})],1)}),0)])}),1)],1)},staticRenderFns:[]},l=a("VU/8")({props:["data"]},i,!1,null,null,null).exports,c=a("2Fkr"),d={props:{data:{type:Object,default:()=>{}},members:{type:Array,default:()=>[]}},components:{"twitter-timeline":c.Timeline},data:()=>({options:{theme:"light",tweetLimit:"3",chrome:["nofooter","noscrollbar"]}})},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.data&&!t.members.length?a("div",{staticClass:"row justify-content-between no-gutters"},[a("div",{staticClass:"col-md-5 col-lg-4 order-1 textblock-left p-3"},[a("h1",{domProps:{innerHTML:t._s(t.data.header)}})]),t._v(" "),"Examples"!=t.data.header?a("div",{staticClass:"col order-2 textblock-right ml-1 p-3"},[a("div",{domProps:{innerHTML:t._s(t.data.text)}})]):a("div",{staticClass:"col order-2 block-text textblock-right ml-1 p-3",domProps:{innerHTML:t._s(t.data.text)}}),t._v(" "),1==t.data.twitter?a("div",{staticClass:"col-md-12 col-lg-3 order-3 textblock-right ml-1 p-3",staticStyle:{"max-height":"700px",overflow:"scroll"}},[a("twitter-timeline",{staticClass:"p-xs-5 p-lg-0",attrs:{id:"robotframework","widget-class":"twitterprofile",sourceType:"profile",options:t.options}})],1):t._e()]):t._e(),t._v(" "),t.members.length?a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 pl-5 pr-5 row"},[a("div",{domProps:{innerHTML:t._s(t.data.membersText)}})]),t._v(" "),a("div",{staticClass:"col-sm-12 pl-5 pr-5 row"},t._l(t.members,function(t,e){return a("div",{key:e,staticClass:"col-lg-1 col-3 p-0"},[a("div",{staticClass:"text-center p-1 mb-0",staticStyle:{height:"100px","background-color":"#fff",display:"flex","flex-direction":"column","justify-content":"center"}},[a("div",[a("a",{attrs:{href:t.href,target:"blank"}},[a("img",{staticClass:"img-fluid pb-2 user-image",attrs:{src:t.img}})])])])])}),0)]):t._e()])},staticRenderFns:[]},u=a("VU/8")(d,b,!1,null,null,null).exports,h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.data,function(e,o){return a("div",{key:o,staticClass:"col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-5 pr-lg-1 pl-lg-3 pl-md-5 pl-sm-3 p-xs-1"},[a("div",{staticClass:"text-center p-3 mb-3",staticStyle:{height:"130px","background-color":"#fff"}},[a("a",{attrs:{href:e.href}},[a("img",{staticClass:"img-fluid pb-2 user-image",attrs:{src:e.img}})])]),t._v(" "),a("div",{staticClass:"card-body"},[a("p",{domProps:{innerHTML:t._s(e.text)}})])])}),0)},staticRenderFns:[]},p=a("VU/8")({props:["data"]},h,!1,null,null,null).exports,m={props:["data"],computed:{withImg(){return this.data[0].items.filter(({img:t})=>t)},withoutImg(){return this.data[0].items.filter(({img:t})=>!t)}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("b-tabs",{staticClass:"nav-fill col-lg-12 m-3 mt-5 mb-5",attrs:{pills:""}},[a("div",{staticClass:"card-body row",attrs:{id:"{tab.title}-standard"}},t._l(t.withImg,function(e,o){return a("div",{key:o,staticClass:"link col-md-6 row"},[a("div",{staticClass:"col-2 p-0"},[a("a",{attrs:{href:e.href}},[a("img",{staticStyle:{width:"100%"},attrs:{src:e.img}})])]),t._v(" "),a("div",{staticClass:"col-10 flex-column justify-content-center d-flex"},[a("div",[a("a",{staticClass:"title-big",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.title))]),t._v(" "),a("p",{domProps:{innerHTML:t._s(e.text)}})])])])}),0)])],1)},staticRenderFns:[]};var g=a("VU/8")(m,v,!1,function(t){a("K7LT")},"data-v-6b27ad54",null).exports,w={components:{TextBlock:u},data:()=>({tabText:"",data:{header:"Examples",text:""},tabIndex:0,items:[{text:"<p> New up-to-date keyword design make Browser library intuitive to use and fast to design. </p>"},{text:"<p> The Browser class can also be used directly from Python. You can design you own Robot Framework Libraries by using Browser internally or create your own Python based Test with a framework like PyTest. </p> <p> It is designed to support the user as much as possible within a Python IDE with typehints, enum types and code completion. </p>"}]}),created:function(){this.changeTabText(this.tabIndex)},methods:{changeTabText(t){this.data.text=this.items[t].text}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"examples"}},[a("text-block",{attrs:{data:t.data}}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 order-md-2 order-lg-1"},[a("b-tabs",{staticClass:"nav-fill card ",attrs:{cards:"",pills:""},on:{input:function(e){return t.changeTabText(t.tabIndex)}},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[a("b-tab",{attrs:{title:"Testing with Robot Framework"}},[a("pre",{staticClass:"highlight"},[t._v("               "),a("div",{staticStyle:{color:"#bbbbbb","background-color":"#002b36","font-family":"Menlo, Monaco, 'Courier New', monospace","font-weight":"normal","line-height":"18px","white-space":"pre"}},[a("div",[a("span",{staticStyle:{color:"#cb4b16"}},[t._v("*** Settings ***")])]),a("div",[a("span",{staticStyle:{color:"#93a1a1","font-weight":"bold"}},[t._v("Library")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("   ")]),a("span",{staticStyle:{color:"#6c71c4"}},[t._v("Browser")])]),a("br"),a("div",[a("span",{staticStyle:{color:"#cb4b16"}},[t._v("*** Test Cases ***")])]),a("div",[a("span",{staticStyle:{color:"#268bd2"}},[t._v("Example Test")])]),a("div",[a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("    New Page")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v("    https://playwright.dev")])]),a("div",[a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("    Get Text")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v("    h1    ==    🎭 Playwright")])])]),t._v("\n           ")])]),t._v(" "),a("b-tab",{attrs:{title:"Testing with Python"}},[a("pre",{staticClass:"highlight"},[t._v("              "),a("div",{staticStyle:{color:"#bbbbbb","background-color":"#002b36","font-family":"Menlo, Monaco, 'Courier New', monospace","font-weight":"normal","line-height":"18px","white-space":"pre"}},[a("div",[a("span",{staticStyle:{color:"#859900"}},[t._v("from")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(" Browser ")]),a("span",{staticStyle:{color:"#859900"}},[t._v("import")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(" Browser")])]),a("div",[a("span",{staticStyle:{color:"#859900"}},[t._v("from")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(" Browser.utils.data_types ")]),a("span",{staticStyle:{color:"#859900"}},[t._v("import")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(" SupportedBrowsers")])]),a("br"),a("div",[a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("b ")]),a("span",{staticStyle:{color:"#859900"}},[t._v("=")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(" Browser(timeout")]),a("span",{staticStyle:{color:"#859900"}},[t._v("=")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v('"20 s"')]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(", retry_assertions_for")]),a("span",{staticStyle:{color:"#859900"}},[t._v("=")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v('"500 ms"')]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(")")])]),a("div",[a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("b.new_browser(browser")]),a("span",{staticStyle:{color:"#859900"}},[t._v("=")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("SupportedBrowsers.chromium)")])]),a("div",[a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("b.new_context(")])]),a("div",[a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("    acceptDownloads")]),a("span",{staticStyle:{color:"#859900"}},[t._v("=")]),a("span",{staticStyle:{color:"#b58900"}},[t._v("True")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(",")])]),a("div",[a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("    viewport")]),a("span",{staticStyle:{color:"#859900"}},[t._v("=")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("{")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v('"width"')]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(": ")]),a("span",{staticStyle:{color:"#d33682"}},[t._v("1920")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(", ")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v('"height"')]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(": ")]),a("span",{staticStyle:{color:"#d33682"}},[t._v("1080")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("},")])]),a("div",[a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("    httpCredentials")]),a("span",{staticStyle:{color:"#859900"}},[t._v("=")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("{")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v('"username"')]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(": ")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v('"admin"')]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(", ")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v('"password"')]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(": ")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v('"123456"')]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("},")])]),a("div",[a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(")")])]),a("div",[a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("b.new_page(")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v('"https://playwright.dev"')]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(")")])]),a("div",[a("span",{staticStyle:{color:"#859900"}},[t._v("assert")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(" b.get_text(")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v('"h1"')]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(") ")]),a("span",{staticStyle:{color:"#859900"}},[t._v("==")]),a("span",{staticStyle:{color:"#bbbbbb"}},[t._v(" ")]),a("span",{staticStyle:{color:"#2aa198"}},[t._v('"🎭 Playwright"')])]),a("div",[a("span",{staticStyle:{color:"#bbbbbb"}},[t._v("b.close_browser()")])]),a("br")]),t._v("\n           ")])])],1)],1)])],1)},staticRenderFns:[]},A={components:{FeatureBox:n,TextBlock:u,TabBox:l,UserBox:p,CommunityBlock:g,Examples:a("VU/8")(w,f,!1,null,null,null).exports},props:["page"]},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:t.page.title.toLowerCase()}},[0===Object.keys(t.page.data).length&&t.page.data.constructor===Object?a("examples"):t._e(),t._v(" "),1==t.page.feature_box?a("feature-box",{attrs:{data:t.page.data.text}}):t._e(),t._v(" "),1==t.page.text_block?a("text-block",{attrs:{data:t.page.data.text,members:t.page.member_box?t.page.data.members:[]}}):t._e(),t._v(" "),1==t.page.tab_box?a("tab-box",{attrs:{data:t.page.data.tabs}}):t._e(),t._v(" "),1==t.page.user_box?a("user-box",{attrs:{data:t.page.data.users}}):t._e(),t._v(" "),t.page.community_block?a("community-block",{attrs:{data:t.page.data.items}}):t._e()],1)},staticRenderFns:[]},y=a("VU/8")(A,x,!1,null,null,null).exports,C=a("EFqf"),I=a.n(C);const k=I()("\n\nWe are looking for a technical writer. This project is part of the [Google Season of Docs](https://developers.google.com/season-of-docs) initiative.  \n\nIf you are interested in becoming the technical writer or have any questions regarding the project, please do not hesitate to contact us:  \n\nMiikka Solmela  \nExecutive Director, Robot Framework Foundation  \nexecutive.director@robotframework.org \n"),E=I()("Robot Framework is a generic open source automation framework. It can be used for test automation and robotic process automation (RPA). Robot Framework is open and extensible – it can be integrated with virtually any other tool to create powerful and flexible automation solutions.  \n\nRobot Framework is supported by the Robot Framework Foundation. Robot Framework Foundation is a non-profit consortium that fosters the growth of Robot Framework. It was founded by companies with a common interest to ensure the development of Robot Framework now and in the future.  \n\nRobot Framework was initially developed at Nokia Networks around 2005. When Nokia decided to drop the development, the Foundation was established by a group of user companies who believed in the tool and wanted to continue the funding. Hence, in 2015 the Foundation took over the development and maintenance and the number of Foundation members has grown from the original 7 to 50+ as of today. Moreover, we have a vibrant community in Slack and hundreds of thousands of users all over the globe. \n\nOur [User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html) is one of the main resources and during the past 12 months some 500 thousand people have visited that page. Unfortunately, the current User Guide is not up to par and we would need help to update it in order to better serve our community and the people who use our great tool.\n"),S=I()('\n\nThere are few issues with the current [User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html).  \n\n\n#### Content\nThe content could be modernized. Some of the examples, although still correct, are from the very early days of the project.  \n\n#### Structure and writing style\nThe structure is now a mix of technical guide (manual) and a quick start guide with examples. We have created a separate ["Docs" site](https://docs.robotframework.org/docs) for examples and more hands-on material and we would see fit to move the examples from the User Guide there, making the User Guide a more of a technical manual. Overall, we see that the User Guide structure should be revised and possibly re-organized and the document re-written at least partly.  \n\n#### Documentation platform\n\nThe User Guide is currently hosted as a static HTML page under GitHub pages. Part of the overall\nUser Guide modernization project is moving it to a dedicated documentation platform that natively\nsupports search, glossary, showing documentation for different Robot Framework versions, and so on.\nAlternatives include [Docusaurus](https://docusaurus.io), that we use with the aforementioned\n[Guides](https://docs.robotframework.org/docs), and [Read the Docs](https://readthedocs.org/),\nthat is used with the [API documentation](https://robot-framework.readthedocs.io).\n\nDeciding the documentation platform needs to be done in collaboration with the Robot Framework\ncore development team that will use the said platform in their daily work afterwards.\nA part of this is making sure that the latest documentation is automatically build after changes.\nSetting the platform and needed integrations can be considered a separate project and the technical\nwriter does not need to be responsible on it.\n\n#### Visuals\nThe User Guide should be more visually appealing. The User Guide can be a bit off-putting for new users just learning about the tool and landing on the page. Part of the project is making the visuals more appealing and the overall document more approachable.  \n\n#### Conclusion\n\nAll of the above mentioned changes would help us to better serve the Robot Framework users, whether beginners or advanced, to find what they are looking for and solve their Robot Framework issues. '),_=I()("The update and restructure Robot Framework User Guide project will:\n\n- audit the existing User Guide and evaluate to what extent we need new content and how to improve the current content\n- write new content and update existing content of the User Guide for the relevant parts identified  \n- evaluate and change the structure of the User Guide \n- bring the new User Guide onto the selected documentation platform\n\nIn the project team, we will have a project manager, community members, our webmaster and our main developer to support the technical writer.  \n\nWe estimate it takes 6 months to complete the project. \n\n\n#### Measuring your project's success\n\nOverall, the project is successful if we have a clearly structured updated User Guide in a visually appealing format with a clear distinction between the User Guide and Docs.  \n\nIn order to know if people like the new User Guide, we should conduct a community survey or add questions about it in our bi-annual survey.  \n\nMoreover, one indication of a successful project could be the reduction of the bounce rate on the User Guide page, which is currently 36%. Some of this comes from factors outside of the project scope, but part of the bounce rate can be due to the structure, visuals and other attributes of the current User Guide, which does not invite people to stay on the page.  \n\n#### Timeline\n\nThe project itself will take approximately six months to complete. Once the technical writer is hired, we'll spend a few weeks on the orientation, then move onto the audit phase, and then spend a few months on creating the new User Guide content and lastly getting that into Docusaurus.  \n\n| Tentative dates | Action Items |\n| --- | --- |\n| May | Orientation |\n| June - August | Audit existing documentation and create friction log |\n| September - October | Create User Guide |\n| November | Project completion |"),R=I()("\n| Budget item | Amount | Running Total | Notes/justifications |\n| --- | --- | --- | --- |\n| Technical writer audit, update, test, and publish new User Guide | 10500.00 | 10500.00 | Let's hope this is enough. |\n| Web development | 1500.00 | 12000.00 | Our webmaster's work to have help with Docusaurus |\n| Main developer | 1500.00 | 13500.00 | Our main developer to give introduction to the current Docs;  help with the new ones |\n| Project implementation in Docusaurus | 1500.00 | 15000.00 | Getting the new updated User Guide to Docusaurus |\n| TOTAL |  | 15000.00 | USD  |"),F=I()("The main developer, who will also be part of the work group, has written the current User Guide and can help with any questions and also can provide an introduction to the topic as well as other help with the current documentation and transition to the new format.  \n\nMoreover, one of the work group members is the main author of our Docs, and is also available to help to transform and implement the updated User Guide content to Docusaurus platform. Lastly, project management and administration is provided by the Executive Director of the Robot Framework Foundation.  ");var j={components:{PageBlock:y},data:()=>({pages:[{title:"Info",text_block:!0,tab_box:!1,member_box:!1,feature_box:!1,data:{text:{twitter:!1,header:"Info",text:k}}},{title:"About Us",text_block:!0,tab_box:!1,member_box:!1,feature_box:!1,data:{text:{twitter:!1,header:"About Us",text:E}}},{title:"Project",text_block:!0,tab_box:!1,member_box:!1,feature_box:!1,data:{text:{twitter:!1,header:"Project Issues",text:S}}},{title:"Project Scope",text_block:!0,tab_box:!1,member_box:!1,feature_box:!1,data:{text:{twitter:!1,header:"Project Scope",text:_}}},{title:"Project Budget",text_block:!0,tab_box:!1,member_box:!1,feature_box:!1,data:{text:{twitter:!1,header:"Project Budget",text:R}}},{title:"Additional Information",text_block:!0,tab_box:!1,member_box:!1,feature_box:!1,data:{text:{twitter:!1,header:"Additional Information",text:F}}}]})},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-2"},[e("navigation-vertical",{attrs:{pages:this.pages}})],1),this._v(" "),e("div",{ref:"content",staticClass:"col-md-10",staticStyle:{position:"relative",height:"100vh","overflow-y":"scroll","overflow-x":"hidden","-webkit-overflow-scrolling":"touch"},attrs:{id:"scroller"}},[e("app-header"),this._v(" "),this._l(this.pages.filter(function(t){return t.data}),function(t,a){return e("page-block",{key:a,staticClass:"pl-md-5 px-lg-2 p-sm-3 py-2 p-xs-1",attrs:{page:t,index:a}})})],2)])},staticRenderFns:[]},M=a("VU/8")(j,T,!1,null,null,null).exports,U={data:()=>({}),mounted(){}},G={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("section",{staticClass:"header"},[e("div",{staticClass:"main-header-container w-50"},[e("h1",{staticClass:"main-header"},[this._v("RBTFRMWRK MANUAL")])])])])}]},B=a("VU/8")(U,G,!1,null,null,null).exports,Q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("a",{staticClass:"row-header",staticStyle:{position:"absolute",right:"1rem",color:"#eee"},attrs:{href:"/privacypolicy"}},[this._v("Privacy Policy")])])}]},Y=a("VU/8")(null,Q,!1,null,null,null).exports,O={props:["pages"],methods:{onActivate(t){ga("send","event","componentView",t)}},created(){this.$root.$on("bv::scrollspy::activate",this.onActivate)}},P={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("b-nav",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy:scroller.50",arg:"scroller",modifiers:{50:!0}}],staticClass:"col-sm-3 col-md-2 d-none d-md-block sidebar",attrs:{tag:"nav",toggleable:"md",vertical:"",id:"navigation"}},[o("b-navbar-brand",{staticStyle:{"text-transform":"uppercase"}},[o("b-img",{staticClass:"img-fluid",attrs:{src:a("OKDN"),alt:"Robot Frameworkg logo"}})],1),t._v(" "),t._l(t.pages.filter(function(t){return!t.hide_from_nav}),function(e){return o("b-nav-item",{key:e.title,attrs:{target:e.url?"_blank":"_self",href:e.url?e.url:"#"+e.title.toLowerCase()}},["Foundation"===e.title?o("div",{staticStyle:{"margin-top":"1rem"}}):t._e(),t._v("\r\n        "+t._s(e.title)+"\r\n        "),e.url?o("span",{staticStyle:{"margin-left":"-5px"}},[o("img",{attrs:{src:a("xHCj")}})]):t._e()])})],2),t._v(" "),o("b-navbar",{staticClass:"d-md-none",attrs:{toggleable:"md",fixed:"top",type:"dark",id:"navigation-collapsed"}},[o("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),o("b-navbar-brand",{staticClass:"p-0 m-0 d-block d-md-none",attrs:{href:"#"}},[t._v("\r\n    ROBOT FRAMEWORK "),o("b-img",{staticStyle:{height:"30px"},attrs:{src:a("OKDN"),alt:"Robot Frameworkg logo"}})],1),t._v(" "),o("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[o("b-navbar-nav",{staticClass:"align-middle",staticStyle:{"margin-top":"1rem"}},t._l(t.pages.filter(function(t){return!t.hide_from_nav}),function(e){return o("b-nav-item",{key:e.title,staticStyle:{"font-size":"1rem"},attrs:{target:e.url?"_blank":"_self",href:e.url?e.url:"#"+e.title.toLowerCase()}},["Foundation"===e.title?o("div",{staticStyle:{"margin-top":"1rem"}}):t._e(),t._v("\r\n          "+t._s(e.title)+"\r\n          "),e.url?o("span",{staticStyle:{"margin-left":"-5px"}},[o("img",{attrs:{src:a("xHCj")}})]):t._e()])}),1)],1)],1)],1)},staticRenderFns:[]},Z=a("VU/8")(O,P,!1,null,null,null).exports,K=a("Tqaz");o.default.use(K.a),a("CuRo"),a("LUj8"),o.default.config.productionTip=!1,o.default.component("app-header",B),o.default.component("navigation-vertical",Z),o.default.component("app-footer",Y),new o.default({el:"#app",template:"<App/>",components:{App:M}})},OKDN:function(t,e){t.exports="data:image/png;base64,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ERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAqP4+8RtmQ/8sfH2LW19EeAfN183f+fZV2YHshmFiCHeCrlfwedwmX8CM6R4hbrX2N5AzEts3Zr7x2kUco7q3cO5lY2LQIV0F+iBezj3XZprEaNwC1SNPnFZPSXVlcAUJ1LI3LoztyJGwa5Rrbm7iimhvgR4I7/zKGSXIkahZigYvwaWicAuAQqZT2auzKWIUSF3hXLVdXmTmTZPaXmjCDi7OxGjQHPwqQIy0lD+CHxAn3BVdmHuRIyqfHBRGSURkwAFfBZzgpRjuxJxc3edpgSouYol8K7YyPcCdyVi5CYB7xVYL58lMHv2ncLekIgLK5jCDUagCjZS5oG8iZhf68hEYFQEvIl4VMVTsiJAAt5EvFZZRaAjgW3H88yf5k3EtXniCtAKgbWVQIbG4UrE+JWzGkDoMhF4jQB/59iFuRJxU5E/XFRGScQmsIo9QarxPYr4FvDcfL2TqhFGNs+yeWpzkbY7EaM4FPCNi+ooiRgE2B+XMQbONaY7ERMkhMzVeJULquY1TeC8udGbDvKY4FyKuAFwju3mGBg61z0BCtjdzd2tiJu77Snacum+NZXgawS2OOE9emL52oklvu9WxCwGhQznivweXsNl4yOwRMpv0QfuVuC2lK5F3CbJAsLf4DXFvITXcJlfAmukdgt/g7qfw2vsu7VRfO50Wz0Uk3djt3fkNk9tx0VgFCvxuEqqbMdGQCIeW8WVrzsCErG7kiqhsRGQiMdWceXrjoBE7K6kSmhsBCTisVVc+bojIBG7K6kSGhsBiXhsFVe+7ghIxO5KqoTGRkAiHlvFla87AhKxu5IqobERkIjHVnHl646AROyupEpobARSibgaG1jlKwIgMEtBIZWIf02RjOYQAWMEfkkRTyoRn6VIRnOIgDECSfo+lYgr/AHwuTHACkcEohFAv19g8Em0CXYGTiViTvkRiSVJaic/7YpAcgLo8wqTXqWamCLeJJqMAr6TkBPR1jRZCDT9/RmTJ1uwKOK/E2Y7xVwSckLgmiodgUbAd5iRfZ7MKOJtstm+TyQhJwau6eITyCVgZLZJ+Ti9S1JC3qWh/aIJZBQwudUn/BdB/MNtBttgzlN8lGzqp4EMqWpKjwQyC5h/HOFnrsS01fdN8n+1IidHrglDEcgsYKbxoNtWxF9CJdZjHAm5BzRdkpeAAQETwFf+0z5OT7D/Fw9ktA3m1qN1xgJo6m4EjAj44VGaET+sxM3XpMtuKUQ7SytyNLQaOBQBIwJmOp/anB5WYr5AcBU237if2bQiZy6Apj9MwJCAt4jwTbP4fl+JGTIO1Njccj+zaUXOXABN/5SAIQEzuE+tgPnix0rMF02g99it+DqzaUXOXABN/52AMQFvIOC3u7Vpvzv9cKxR9/nuCRn3tSJnhK+pvxMwJuAtonqiz0ciZtgQ8vrQiXwvg0nIGaBryu8EjAmYQV1Cn3xC7WZIYAG3YvcIZNItcp0lAsMJsN/g7DsrNu+VFaJfWMkAcUjIvaqoi44lgF7zIeA2cSS0gFsxCbktjLZRCKDRfQm4pYTEFlZUjDgk5LYw2gYlgN7yKeCWEhJcwK2YhNwWRtsgBNDYvgXcUkKiCysqRhwSclsYbQcRQC+NQ8AtJSS8gFsxCbktjLa9CKCRxyXglhISX1hRMeKQkNvCaHsUAfTOOAXcUgKABdyKUchVG5u2IvAaAfTLFM6+sWLz12KO8j6yX1ghgDj+gl/DqyjJalAXBNgf8AXcks2HwH30CxB9BgKJBa4bFESfeV+5hj+atn3lHL09PgIVUqZbsnP8KOVySECDRczJjQp5CBddKwIpCAwWMIMMImIOJCGTgkwEOhMIImDOFkzEHExCJgWZCLxKIJiAOVNQEXNACZkUZCLwLIGgAuYswUXMQSVkUpCJwBMCwQXMGaKImANLyKQgE4EfBKIImKNHEzEHl5BJQSYCP0UTMNlGFTEnkJBJQTZiAlEFTK7RRcxJJGRSkI2QQHQBk2kSEXMiCZkUZCMikETA5JlMxJxMQiYF2QgIJBMwWSYVMSeUkElB5phAUgGTY3IRc1IJmRRkDgkkFzAZZhExJ5aQSUHmiEAWAZNfNhFzcgmZFGQOCGQTMNllFTEDkJBJQVYwgawCJrfsImYQEjIpyAokkF3AZGZCxAxEQiYFWUEETAiYvJ78VcRcEE9OTs4x922u+TWvCBxBwIyAGbOZlbgFiBV5jv2PcP0VxBaKtlYI8HPbKOCVlYAYhzkRMygIeYoNP4CPW5kIWCCwRhAUcG0hmN0YzDxO7wYFUBv4WxzjIzbvfjIRyEWgxsQU7ymc++bM5Eq8Swmr8gSvz+BX8AouE4EUBDaY5BOEu0wx2ZA5zIt4N7nmMZuCfgef7b6nfREYSGCL6yncL/CV1VX3UI5FiXg/AYi6wjG6TASGEKhLEu1+ov8HNJr5BA1F6okAAAAASUVORK5CYII="},xHCj:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDIwdjIwSDB6Ii8+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xOSAxOUg1VjVoN1YzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3oiLz48L3N2Zz4NCg=="}},["NHnr"]);