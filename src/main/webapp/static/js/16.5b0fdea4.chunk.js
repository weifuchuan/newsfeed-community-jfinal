(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{361:function(e,t,n){"use strict";n(356);var o=n(357),r=(n(373),n(377)),i=n(7),a=n(15),l=n(1),c=n.n(l),s=n(6),u=(n(363),n(3));function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d,p=(d=function(e,t){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;0<=l;l--)(r=e[l])&&(a=(i<3?r(a):3<i?r(t,n,a):r(t,n))||a);return 3<i&&a&&Object.defineProperty(t,n,a),a},b=function(i,a,l,c){return new(l||(l=Promise))(function(e,t){function n(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){t.done?e(t.value):new l(function(e){e(t.value)}).then(n,o)}r((c=c.apply(i,a||[])).next())})},h=function(n,o){var r,i,a,e,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,i=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(a=0<(a=l.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){l.label=t[1];break}if(6===t[0]&&l.label<a[1]){l.label=a[1],a=t;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(t);break}a[2]&&l.ops.pop(),l.trys.pop();continue}t=o.call(n,l)}catch(e){t=[6,e],i=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.visible=!1,e.logout=function(){return b(e,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return[4,Object(i.a)("/logout")];case 1:return e.sent(),window.location.reload(),[2]}})})},e}return p(e,t),e.prototype.render=function(){var t=this;return c.a.createElement("div",{className:"Container",ref:this.props.containerRef},c.a.createElement("div",null,c.a.createElement("div",{className:"navbar"},c.a.createElement("div",null,c.a.createElement("span",{onClick:function(){return s.Control.go("/")}},"随便写的社区")),c.a.createElement("div",null,c.a.createElement(r.a,{placement:"bottomRight",title:c.a.createElement("span",{style:{padding:"0.5em"}},this.props.store.me.username),content:c.a.createElement("div",{className:"my-operations"},c.a.createElement("div",{onClick:function(){return s.Control.go("/my"),t.visible=!1}},c.a.createElement("span",null,"我的主页")),c.a.createElement("div",{onClick:function(){return s.Control.go("/message"),t.visible=!1}},c.a.createElement("span",null,"我的私信")),c.a.createElement("div",{onClick:this.logout},c.a.createElement("span",null,"退出登录"))),trigger:"click",visible:this.visible,onVisibleChange:function(e){return t.visible=e}},c.a.createElement("div",{onClick:function(){return t.visible=!0}},c.a.createElement(o.a,{className:"avatar",shape:"square",size:"large",src:this.props.store.me.avatar}))))),this.props.children))},m([u.m],e.prototype,"visible",void 0),e=m([Object(a.b)("store"),a.c],e)}(c.a.Component);t.a=y},363:function(e,t,n){"use strict";var o=n(364);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(49)(o,r);o.locals&&(e.exports=o.locals)},364:function(e,t,n){(e.exports=n(48)(!1)).push([e.i,".Container {\n  width: 100%;\n  height: 100%;\n  background-color: #EAEAEF;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: auto; }\n  .Container > div:first-child {\n    padding: 0.5em;\n    position: relative; }\n    @media (max-width: 640px) {\n      .Container > div:first-child {\n        width: 100%; } }\n    @media (min-width: 641px) and (max-width: 1024px) {\n      .Container > div:first-child {\n        width: 80%; } }\n    @media (min-width: 1025px) {\n      .Container > div:first-child {\n        width: 60%; } }\n    .Container > div:first-child .navbar {\n      -webkit-box-shadow: 0px 0px 0.5em #535353;\n              box-shadow: 0px 0px 0.5em #535353;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background-color: #fff;\n      border-radius: 0.5em;\n      padding: 1em;\n      margin: 1em 0 1em; }\n      .Container > div:first-child .navbar > div:first-child > span {\n        font-size: 1.5em;\n        font-weight: bold;\n        cursor: pointer; }\n      .Container > div:first-child .navbar > div:nth-child(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n        .Container > div:first-child .navbar > div:nth-child(2) .avatar {\n          cursor: pointer; }\n\n.my-operations > div {\n  padding: 0.5em;\n  cursor: pointer; }\n\n.my-operations > div:hover {\n  background-color: #EAEAEF; }\n",""])},366:function(e,t,n){"use strict";n(75),n(379),n(355)},379:function(e,t,n){},423:function(e,t,n){"use strict";var o=n(3),i=n(34),a=n(7);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;0<=l;l--)(r=e[l])&&(a=(i<3?r(a):3<i?r(t,n,a):r(t,n))||a);return 3<i&&a&&Object.defineProperty(t,n,a),a},s=function(i,a,l,c){return new(l||(l=Promise))(function(e,t){function n(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){t.done?e(t.value):new l(function(e){e(t.value)}).then(n,o)}r((c=c.apply(i,a||[])).next())})},u=function(n,o){var r,i,a,e,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,i=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(a=0<(a=l.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){l.label=t[1];break}if(6===t[0]&&l.label<a[1]){l.label=a[1],a=t;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(t);break}a[2]&&l.ops.pop(),l.trys.pop();continue}t=o.call(n,l)}catch(e){t=[6,e],i=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},r=function(){function r(){this.id=0,this.content="",this.fromId=0,this.toId=0,this.createAt=0}return r.from=function(e){var t=new r;for(var n in e)t[n]=e[n];return t},r.paginate=function(n,o){return void 0===o&&(o=1),s(this,void 0,Promise,function(){var t;return u(this,function(e){switch(e.label){case 0:return[4,Object(a.c)("/message",{toId:n,p:o})];case 1:return[2,{messages:(t=e.sent().data).messages.map(r.from),totalPage:t.totalPage,pageNumber:t.pageNumber}]}})})},r.send=function(n,o,r){return s(this,void 0,Promise,function(){var t;return u(this,function(e){switch(e.label){case 0:return[4,Object(a.c)("/message/send",{toId:n,content:o,createAt:r})];case 1:return"ok"===(t=e.sent().data).state?[2,i.a.ok().set("id",t.id)]:[2,i.a.fail().set("msg","发送失败")]}})})},r.list=function(){return s(this,void 0,Promise,function(){var t;return u(this,function(e){switch(e.label){case 0:return[4,Object(a.a)("/message/list")];case 1:if("ok"===(t=e.sent().data).state)return[2,i.a.ok().set("list",t.list.map(r.from))];throw"error"}})})},l([o.m],r.prototype,"id",void 0),l([o.m],r.prototype,"content",void 0),l([o.m],r.prototype,"fromId",void 0),l([o.m],r.prototype,"toId",void 0),l([o.m],r.prototype,"createAt",void 0),l([o.m],r.prototype,"username",void 0),l([o.m],r.prototype,"avatar",void 0),r}();t.a=r},573:function(e,t,n){var o=n(574);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(49)(o,r);o.locals&&(e.exports=o.locals)},574:function(e,t,n){(e.exports=n(48)(!1)).push([e.i,".SendMessageContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 1em;\n  -webkit-box-shadow: 0px 0px 0.5em #535353;\n          box-shadow: 0px 0px 0.5em #535353;\n  background-color: #fff;\n  border-radius: 0.5em;\n  margin: 0 0 1em; }\n  .SendMessageContainer .msg-editor-panel {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 0 1em; }\n    .SendMessageContainer .msg-editor-panel > :nth-child(1) {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n    .SendMessageContainer .msg-editor-panel > :nth-child(2) {\n      margin-left: 1em; }\n  .SendMessageContainer .item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .SendMessageContainer .item > :nth-child(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-bottom: 1em; }\n      .SendMessageContainer .item > :nth-child(1) > :nth-child(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .SendMessageContainer .item > :nth-child(1) > :nth-child(1) > :nth-child(2) {\n          margin-left: 0.5em; }\n\n.operationBtns {\n  position: fixed;\n  right: 2em;\n  bottom: 2em;\n  z-index: 100;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n",""])},695:function(e,t,n){"use strict";n.r(t);n(241);var o=n(77),r=(n(401),n(400)),i=(n(355),n(360)),a=(n(356),n(357)),l=(n(240),n(76)),c=n(361),s=n(80),u=n(423),f=n(3),d=n(15),p=n(1),m=n.n(p),b=(n(573),n(0)),h=n.n(b);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var v,g=(v=function(e,t){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}v(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),x=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":y(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;0<=l;l--)(r=e[l])&&(a=(i<3?r(a):3<i?r(t,n,a):r(t,n))||a);return 3<i&&a&&Object.defineProperty(t,n,a),a},w=function(i,a,l,c){return new(l||(l=Promise))(function(e,t){function n(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){t.done?e(t.value):new l(function(e){e(t.value)}).then(n,o)}r((c=c.apply(i,a||[])).next())})},k=function(n,o){var r,i,a,e,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,i=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(a=0<(a=l.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){l.label=t[1];break}if(6===t[0]&&l.label<a[1]){l.label=a[1],a=t;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(t);break}a[2]&&l.ops.pop(),l.trys.pop();continue}t=o.call(n,l)}catch(e){t=[6,e],i=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};h.a.locale("zh-cn");var E=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.account=new s.a,e.loading=!1,e.messages=[],e.pageNumber=1,e.totalPage=1,e.editor=null,e.container=null,e.send=function(){return w(e,void 0,void 0,function(){var t,n,o,r;return k(this,function(e){switch(e.label){case 0:return""===(t=this.editor.innerHTML).trim()?[2]:(this.loading=!0,n=(new Date).getTime(),[4,u.a.send(this.account.id,t,n)]);case 1:return(o=e.sent()).isOk?((r=new u.a).id=o.get("id"),r.content=t,r.fromId=this.props.store.me.id,r.toId=this.account.id,r.createAt=n,this.messages.unshift(r),this.editor.innerHTML="",l.a.success("发送成功")):l.a.error("发送失败"),this.loading=!1,[2]}})})},e.toPage=function(a){return w(e,void 0,void 0,function(){var t,n,o,r,i=this;return k(this,function(e){switch(e.label){case 0:return this.loading=!0,[4,u.a.paginate(this.account.id,a)];case 1:return t=e.sent(),n=t.messages,o=t.pageNumber,r=t.totalPage,Object(f.n)(function(){i.messages=Object(f.m)(n),i.pageNumber=o,i.totalPage=r,i.loading=!1}),this.container.scrollTo({top:0}),[2]}})})},e.fetchById=function(n){return w(e,void 0,void 0,function(){var t;return k(this,function(e){switch(e.label){case 0:return this.loading=!0,t=this,[4,s.a.getById(n)];case 1:return t.account=e.sent(),this.loading=!1,[2]}})})},e}return g(e,t),e.prototype.render=function(){var n=this;return m.a.createElement(c.a,{containerRef:function(e){return n.container=e}},m.a.createElement("div",{className:"SendMessageContainer"},m.a.createElement("h3",{style:{fontSize:"1.5em",textAlign:"center",verticalAlign:"center"}},"与 ",m.a.createElement(a.a,{size:"default",src:this.account.avatar,shape:"square"}),m.a.createElement("span",{style:{fontWeight:"bold"}},this.account.username)," 的私信"),m.a.createElement("div",{style:{borderTop:"solid #aaa 1px",margin:"1em 0"}}),m.a.createElement("div",{className:"msg-editor-panel"},m.a.createElement("div",{contentEditable:!0,style:{maxHeight:"10em",padding:"0.5em",border:"solid 2px #aaa",overflow:"auto"},ref:function(e){return n.editor=e}}),m.a.createElement(i.a,{onClick:this.send,type:"primary"},"发送")),m.a.createElement("div",{style:{borderTop:"solid #aaa 1px",margin:"1em 0"}}),m.a.createElement("div",null,this.messages.map(function(e,t){return m.a.createElement(m.a.Fragment,{key:t},m.a.createElement("div",{className:"item"},m.a.createElement("div",null,e.fromId===n.props.store.me.id?m.a.createElement("div",null,m.a.createElement(a.a,{size:"default",src:n.props.store.me.avatar,shape:"square"}),m.a.createElement("span",{style:{fontWeight:"bold",fontSize:"1.2em"}},n.props.store.me.username)):m.a.createElement("div",null,m.a.createElement(a.a,{size:"default",src:n.account.avatar,shape:"square"}),m.a.createElement("span",{style:{fontWeight:"bold",fontSize:"1.2em"}},n.account.username)),m.a.createElement("span",null,h()(e.createAt).format("YYYY-MM-DD HH:mm"))),m.a.createElement("div",{style:{fontSize:"1.5em"},dangerouslySetInnerHTML:{__html:e.content}})),t===n.messages.length-1?null:m.a.createElement("div",{style:{borderTop:"solid #aaa 1px",margin:"1em 0"}}))})),m.a.createElement("div",{style:{borderTop:"solid #aaa 1px",margin:"1em 0"}}),this.totalPage<2?null:m.a.createElement(r.a,{showQuickJumper:!0,current:this.pageNumber,pageSize:1,total:this.totalPage,onChange:this.toPage})),m.a.createElement(o.a,{spinning:this.loading,size:"large",style:{position:"fixed",top:"50vh",left:"50vw",zIndex:1e3}}),m.a.createElement("div",{className:"operationBtns"},m.a.createElement(i.a,{type:"primary",shape:"circle",icon:"reload",size:"large",onClick:function(){return n.toPage(1)}})))},e.prototype.componentDidMount=function(){var e=this;this.fetchById(Number.parseInt(this.props.params.id)).then(function(){return w(e,void 0,void 0,function(){return k(this,function(e){switch(e.label){case 0:return[4,this.toPage(1)];case 1:return e.sent(),[2]}})})}).catch(function(e){return l.a.error(e)})},x([f.m],e.prototype,"account",void 0),x([f.m],e.prototype,"loading",void 0),x([f.m],e.prototype,"messages",void 0),x([f.m],e.prototype,"pageNumber",void 0),x([f.m],e.prototype,"totalPage",void 0),e=x([Object(d.b)("store"),d.c],e)}(m.a.Component);t.default=E}}]);