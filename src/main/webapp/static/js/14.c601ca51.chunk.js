(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{361:function(e,t,n){"use strict";n(356);var o=n(357),r=(n(373),n(377)),i=n(7),a=n(15),l=n(1),s=n.n(l),c=n(6),u=(n(363),n(3));function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f,d=(f=function(e,t){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":p(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;0<=l;l--)(r=e[l])&&(a=(i<3?r(a):3<i?r(t,n,a):r(t,n))||a);return 3<i&&a&&Object.defineProperty(t,n,a),a},h=function(i,a,l,s){return new(l||(l=Promise))(function(e,t){function n(e){try{r(s.next(e))}catch(e){t(e)}}function o(e){try{r(s.throw(e))}catch(e){t(e)}}function r(t){t.done?e(t.value):new l(function(e){e(t.value)}).then(n,o)}r((s=s.apply(i,a||[])).next())})},y=function(n,o){var r,i,a,e,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,i=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(a=0<(a=l.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){l.label=t[1];break}if(6===t[0]&&l.label<a[1]){l.label=a[1],a=t;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(t);break}a[2]&&l.ops.pop(),l.trys.pop();continue}t=o.call(n,l)}catch(e){t=[6,e],i=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.visible=!1,e.logout=function(){return h(e,void 0,void 0,function(){return y(this,function(e){switch(e.label){case 0:return[4,Object(i.a)("/logout")];case 1:return e.sent(),window.location.reload(),[2]}})})},e}return d(e,t),e.prototype.render=function(){var t=this;return s.a.createElement("div",{className:"Container",ref:this.props.containerRef},s.a.createElement("div",null,s.a.createElement("div",{className:"navbar"},s.a.createElement("div",null,s.a.createElement("span",{onClick:function(){return c.Control.go("/")}},"随便写的社区")),s.a.createElement("div",null,s.a.createElement(r.a,{placement:"bottomRight",title:s.a.createElement("span",{style:{padding:"0.5em"}},this.props.store.me.username),content:s.a.createElement("div",{className:"my-operations"},s.a.createElement("div",{onClick:function(){return c.Control.go("/my"),t.visible=!1}},s.a.createElement("span",null,"我的主页")),s.a.createElement("div",{onClick:function(){return c.Control.go("/message"),t.visible=!1}},s.a.createElement("span",null,"我的私信")),s.a.createElement("div",{onClick:this.logout},s.a.createElement("span",null,"退出登录"))),trigger:"click",visible:this.visible,onVisibleChange:function(e){return t.visible=e}},s.a.createElement("div",{onClick:function(){return t.visible=!0}},s.a.createElement(o.a,{className:"avatar",shape:"square",size:"large",src:this.props.store.me.avatar}))))),this.props.children))},m([u.m],e.prototype,"visible",void 0),e=m([Object(a.b)("store"),a.c],e)}(s.a.Component);t.a=b},363:function(e,t,n){"use strict";var o=n(364);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(49)(o,r);o.locals&&(e.exports=o.locals)},364:function(e,t,n){(e.exports=n(48)(!1)).push([e.i,".Container {\n  width: 100%;\n  height: 100%;\n  background-color: #EAEAEF;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: auto; }\n  .Container > div:first-child {\n    padding: 0.5em;\n    position: relative; }\n    @media (max-width: 640px) {\n      .Container > div:first-child {\n        width: 100%; } }\n    @media (min-width: 641px) and (max-width: 1024px) {\n      .Container > div:first-child {\n        width: 80%; } }\n    @media (min-width: 1025px) {\n      .Container > div:first-child {\n        width: 60%; } }\n    .Container > div:first-child .navbar {\n      -webkit-box-shadow: 0px 0px 0.5em #535353;\n              box-shadow: 0px 0px 0.5em #535353;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background-color: #fff;\n      border-radius: 0.5em;\n      padding: 1em;\n      margin: 1em 0 1em; }\n      .Container > div:first-child .navbar > div:first-child > span {\n        font-size: 1.5em;\n        font-weight: bold;\n        cursor: pointer; }\n      .Container > div:first-child .navbar > div:nth-child(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n        .Container > div:first-child .navbar > div:nth-child(2) .avatar {\n          cursor: pointer; }\n\n.my-operations > div {\n  padding: 0.5em;\n  cursor: pointer; }\n\n.my-operations > div:hover {\n  background-color: #EAEAEF; }\n",""])},415:function(e,t,n){"use strict";var o=n(416);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(49)(o,r);o.locals&&(e.exports=o.locals)},416:function(e,t,n){(e.exports=n(48)(!1)).push([e.i,".operationBtns {\n  position: fixed;\n  right: 2em;\n  bottom: 2em;\n  z-index: 100;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n",""])},417:function(e,t,n){"use strict";var o=n(418);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(49)(o,r);o.locals&&(e.exports=o.locals)},418:function(e,t,n){(e.exports=n(48)(!1)).push([e.i,".NewsfeedItem {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 1em;\n  -webkit-box-shadow: 0px 0px 0.5em #535353;\n          box-shadow: 0px 0px 0.5em #535353;\n  background-color: #fff;\n  border-radius: 0.5em;\n  padding: 1em;\n  margin: 0 0 1em; }\n  .NewsfeedItem > :nth-child(1) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0.5em;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .NewsfeedItem > :nth-child(1) > div:first-child {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer; }\n  .NewsfeedItem > :nth-child(2) {\n    padding: 0.5em; }\n  .NewsfeedItem > :nth-child(3) {\n    background-color: #EAEAEF;\n    padding: 0.5em; }\n  .NewsfeedItem .follow-account {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n",""])},419:function(e,t,n){"use strict";var o=n(420);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(49)(o,r);o.locals&&(e.exports=o.locals)},420:function(e,t,n){(e.exports=n(48)(!1)).push([e.i,".fc-modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000000;\n  background-color: rgba(0, 0, 0, 0.5); }\n  .fc-modal .shadow {\n    -webkit-box-shadow: 0px 0px 20px #333333;\n    box-shadow: 0px 0px 20px #333333; }\n  .fc-modal .close-x {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 30px;\n    height: 30px;\n    color: #aaaaaa;\n    font-size: 30px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    z-index: 100000000; }\n",""])},421:function(e,t,n){"use strict";var o=n(422);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(49)(o,r);o.locals&&(e.exports=o.locals)},422:function(e,t,n){(e.exports=n(48)(!1)).push([e.i,".UserInfo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 1em;\n  -webkit-box-shadow: 0px 0px 0.5em #535353;\n          box-shadow: 0px 0px 0.5em #535353;\n  background-color: #fff;\n  border-radius: 0.5em;\n  padding: 1em;\n  margin: 0 0 1em; }\n  .UserInfo > :nth-child(2) {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-left: 1em;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .UserInfo > :nth-child(2) > :nth-child(1) > :nth-child(2) {\n      color: #312f2f;\n      margin-left: 1em; }\n    .UserInfo > :nth-child(2) .no-me {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n      .UserInfo > :nth-child(2) .no-me > button {\n        margin-top: 0.5em; }\n    .UserInfo > :nth-child(2) .is-me {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n      .UserInfo > :nth-child(2) .is-me > button {\n        margin-top: 0.5em; }\n\n.follow-account-in-modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.5em;\n  cursor: pointer;\n  width: 100%; }\n\n.follow-account-in-modal:hover {\n  background-color: #EAEAEF; }\n",""])},438:function(e,t,n){"use strict";n(355);var a=n(360),i=(n(241),n(77)),o=(n(401),n(400)),s=n(1),l=n.n(s),r=(n(415),n(15)),c=n(361),u=n(3),p=n(7);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;0<=l;l--)(r=e[l])&&(a=(i<3?r(a):3<i?r(t,n,a):r(t,n))||a);return 3<i&&a&&Object.defineProperty(t,n,a),a},m=function(i,a,l,s){return new(l||(l=Promise))(function(e,t){function n(e){try{r(s.next(e))}catch(e){t(e)}}function o(e){try{r(s.throw(e))}catch(e){t(e)}}function r(t){t.done?e(t.value):new l(function(e){e(t.value)}).then(n,o)}r((s=s.apply(i,a||[])).next())})},h=function(n,o){var r,i,a,e,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,i=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(a=0<(a=l.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){l.label=t[1];break}if(6===t[0]&&l.label<a[1]){l.label=a[1],a=t;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(t);break}a[2]&&l.ops.pop(),l.trys.pop();continue}t=o.call(n,l)}catch(e){t=[6,e],i=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},y=function(){function l(){this.id=0,this.accountId=0,this.refType=0,this.refId=0,this.createAt=0,this.avatar="",this.username=""}return l.from=function(e){var t=new l;for(var n in e)t[n]=e[n];return t},l.paginate=function(i,a){return void 0===a&&(a=1),m(this,void 0,Promise,function(){var t,n,o,r;return h(this,function(e){switch(e.label){case 0:return[4,Object(p.c)("/newsfeed",{accountId:i,p:a})];case 1:if("ok"===(t=e.sent().data).state)return n=t.newsfeeds.map(l.from),o=t.pageNumber,r=t.totalPage,[2,{newsfeeds:n,pageNumber:o,totalPage:r}];throw"fail"}})})},d([u.m],l.prototype,"id",void 0),d([u.m],l.prototype,"accountId",void 0),d([u.m],l.prototype,"refType",void 0),d([u.m],l.prototype,"refId",void 0),d([u.m],l.prototype,"refParentType",void 0),d([u.m],l.prototype,"refParentId",void 0),d([u.m],l.prototype,"createAt",void 0),d([u.m],l.prototype,"avatar",void 0),d([u.m],l.prototype,"username",void 0),d([u.m],l.prototype,"title",void 0),d([u.m],l.prototype,"toUsername",void 0),d([u.m],l.prototype,"toAvatar",void 0),d([u.m],l.prototype,"content",void 0),l}(),b=(n(356),n(357)),v=(n(417),n(0)),w=n.n(v),g=n(6);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E,k=(E=function(e,t){return(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}E(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),O=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":x(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;0<=l;l--)(r=e[l])&&(a=(i<3?r(a):3<i?r(t,n,a):r(t,n))||a);return 3<i&&a&&Object.defineProperty(t,n,a),a};w.a.locale("zh-cn");var C,j=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return k(t,e),t.prototype.render=function(){var e=this,t=this.props.newsfeed,n=null,o=null;switch(t.refType){case 0:n=l.a.createElement("div",null,l.a.createElement("b",null,"发布帖子：")),o=l.a.createElement("div",{style:{cursor:"pointer",color:"blue"},onClick:function(){return g.Control.go("/post/"+t.refId)}},l.a.createElement("span",null,t.title));break;case 2:n=l.a.createElement("div",null,l.a.createElement("b",null,"关注用户：")),o=l.a.createElement("div",{className:"follow-account",style:{cursor:"pointer",color:"blue"},onClick:function(){return g.Control.go("/user/"+t.refId)}},l.a.createElement(b.a,{src:t.toAvatar,size:"small",shape:"square"}),l.a.createElement("span",{style:{marginLeft:"0.5em"}},t.toUsername));break;case 1:n=l.a.createElement("div",null,l.a.createElement("b",null,"评论："),t.content),o=l.a.createElement("div",{style:{cursor:"pointer",color:"blue"},onClick:function(){return g.Control.go("/post/"+t.refParentId)}},l.a.createElement("span",null,t.title))}return l.a.createElement("div",{className:"NewsfeedItem"},l.a.createElement("div",null,l.a.createElement("div",{onClick:function(){return t.accountId===e.props.store.me.id?g.Control.go("/my"):g.Control.go("/user/"+t.accountId)}},l.a.createElement(b.a,{src:t.avatar,size:"default",shape:"square"}),l.a.createElement("span",{style:{marginLeft:"0.5em"}},t.username)),l.a.createElement("span",null,w()(t.createAt).format("YYYY-MM-DD HH:mm"))),l.a.createElement("div",null,n),l.a.createElement("div",null,o))},t=O([Object(r.b)("store"),r.c],t)}(l.a.Component),P=(n(366),n(378)),S=(n(240),n(76)),I=n(80),_=(n(419),n(9)),N=n.n(_),R=(C=function(e,t){return(C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}C(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),A=function(){return(A=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},F=function(n){function l(e){var t=n.call(this,e)||this;return t.state={display:"none"},t.show=t.show.bind(t),t.hide=t.hide.bind(t),t}return R(l,n),l.prototype.show=function(){this.setState(function(e){return A({},e,{display:"flex"})})},l.prototype.hide=function(){this.setState(function(e){return A({},e,{display:"none"})})},l.prototype.render=function(){var t=this;return s.createElement("div",{className:"fc-modal",style:{display:this.state.display},onClick:function(e){e.preventDefault(),e.stopPropagation(),t.hide()}},s.createElement("div",{className:"shadow",style:{width:this.props.width,height:this.props.height,backgroundColor:"#ffffff",borderRadius:"0.5em",position:"relative",overflow:"auto"},onClick:function(e){e.preventDefault(),e.stopPropagation()}},s.createElement("div",{className:"close-x",onClick:function(e){e.preventDefault(),e.stopPropagation(),t.hide()}},s.createElement("a",null,"×")),this.props.children))},l.show=function(e,t,n){var o=window.document,r=o.getElementById("snaudbhsjcbyuwebsjdbsfnfjkf");r||((r=o.createElement("div")).id="snaudbhsjcbyuwebsjdbsfnfjkf",o.getElementsByTagName("body")[0].appendChild(r));var i=this,a=s.createElement(l,{width:t,height:n,ref:function(e){return i.modal=e}},e);return N.a.render(a,r,function(){i.modal.show()}),function(){return i.modal.hide()}},l}(s.Component);n(421);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var L,T=(L=function(e,t){return(L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}L(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),U=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":D(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;0<=l;l--)(r=e[l])&&(a=(i<3?r(a):3<i?r(t,n,a):r(t,n))||a);return 3<i&&a&&Object.defineProperty(t,n,a),a},M=function(i,a,l,s){return new(l||(l=Promise))(function(e,t){function n(e){try{r(s.next(e))}catch(e){t(e)}}function o(e){try{r(s.throw(e))}catch(e){t(e)}}function r(t){t.done?e(t.value):new l(function(e){e(t.value)}).then(n,o)}r((s=s.apply(i,a||[])).next())})},z=function(n,o){var r,i,a,e,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,i=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(a=0<(a=l.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){l.label=t[1];break}if(6===t[0]&&l.label<a[1]){l.label=a[1],a=t;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(t);break}a[2]&&l.ops.pop(),l.trys.pop();continue}t=o.call(n,l)}catch(e){t=[6,e],i=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};w.a.locale("zh-cn");var B=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.changeAvatar=function(){return M(t,void 0,void 0,function(){var n,o,t,i;return z(this,function(e){return n=this.props.store.me,o=this.props.store,t=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fileInput=null,e.state={avatar:"",loading:!1},e}return T(e,t),e.prototype.render=function(){var r=this;return l.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",padding:"1em",alignItems:"center",justifyContent:"center"}},l.a.createElement("img",{style:{backgroundColor:"#EAEAEF",width:"200px",height:"200px"},src:this.state.avatar}),l.a.createElement(a.a,{style:{marginTop:"1em"},disabled:this.state.loading,onClick:function(){r.fileInput.dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0,view:window}))}},"选择图片"),l.a.createElement(a.a,{type:"primary",style:{marginTop:"1em"},disabled:""===this.state.avatar,onClick:function(){return M(r,void 0,void 0,function(){return z(this,function(e){switch(e.label){case 0:this.setState({loading:!0}),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,n.changeAvatar(this.state.avatar)];case 2:return e.sent(),o.emitUpdateMyNewsfeed(),i(),[3,4];case 3:return e.sent(),S.a.error("上传失败"),[3,4];case 4:return this.setState({loading:!1}),[2]}})})},loading:this.state.loading},"上传新头像"),l.a.createElement("input",{type:"file",style:{visibility:"hidden"},accept:"image/*",ref:function(e){return r.fileInput=e},onChange:function(e){var t=r.fileInput.files;if(t&&0<t.length){var n=t.item(0),o=new FileReader;o.onloadend=function(){r.setState({avatar:o.result.toString()})},o.readAsDataURL(n)}}}))},e}(l.a.Component),i=F.show(l.a.createElement(t,null),"70vw","80vh"),[2]})})},t.changeUsername=function(){var n=t.props.store.me,o=t.props.store,e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={username:"",loading:!1},e}return T(e,t),e.prototype.render=function(){var t=this;return l.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",padding:"1em",alignItems:"center",justifyContent:"center"}},l.a.createElement(P.a,{value:this.state.username,placeholder:"新昵称",onChange:function(e){return t.setState({username:e.target.value.replace(/\s/,"-")})}}),l.a.createElement(a.a,{type:"primary",style:{marginTop:"1em"},disabled:""===this.state.username.trim(),onClick:function(){return M(t,void 0,void 0,function(){return z(this,function(e){switch(e.label){case 0:this.setState({loading:!0}),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,n.changeUsername(this.state.username)];case 2:return e.sent(),o.emitUpdateMyNewsfeed(),r(),[3,4];case 3:return e.sent(),S.a.error("更新失败"),[3,4];case 4:return this.setState({loading:!1}),[2]}})})},loading:this.state.loading},"更新昵称"))},e}(l.a.Component),r=F.show(l.a.createElement(e,null),"70vw","80vh")},t.changePassword=function(){var n=t.props.store.me,e=(t.props.store,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={newPassword:"",oldPassword:"",loading:!1},e}return T(e,t),e.prototype.render=function(){var t=this;return l.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",padding:"1em",alignItems:"center",justifyContent:"center"}},l.a.createElement(P.a,{value:this.state.oldPassword,placeholder:"原密码",onChange:function(e){return t.setState({oldPassword:e.target.value.trim()})}}),l.a.createElement(P.a,{value:this.state.newPassword,style:{marginTop:"1em"},placeholder:"新密码",onChange:function(e){return t.setState({newPassword:e.target.value.trim()})}}),l.a.createElement(a.a,{type:"primary",style:{marginTop:"1em"},disabled:""===this.state.oldPassword.trim()||""===this.state.oldPassword.trim(),onClick:function(){return M(t,void 0,void 0,function(){return z(this,function(e){switch(e.label){case 0:this.setState({loading:!0}),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,n.changePassword(this.state.newPassword,this.state.oldPassword)];case 2:return e.sent(),o(),[3,4];case 3:return e.sent(),S.a.error("更新失败"),[3,4];case 4:return this.setState({loading:!1}),[2]}})})},loading:this.state.loading},"更新密码"))},e}(l.a.Component)),o=F.show(l.a.createElement(e,null),"70vw","80vh")},t.clickFollow=function(){return M(t,void 0,void 0,function(){var t,n;return z(this,function(e){switch(e.label){case 0:if(t=this.props.account,n=this.props.store.me,t.relations.get(this.props.store.me.id)!==I.a.NO_RELATION&&t.relations.get(this.props.store.me.id)!==I.a.FOLLOW)return[3,5];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,n.follow(t.id)];case 2:return e.sent(),t.relations.get(this.props.store.me.id)===I.a.FOLLOW?t.relations.set(this.props.store.me.id,I.a.FRIEND):t.relations.set(this.props.store.me.id,I.a.FANS),[3,4];case 3:return e.sent(),S.a.error("关注失败"),[3,4];case 4:return[3,8];case 5:return e.trys.push([5,7,,8]),[4,n.unfollow(t.id)];case 6:return e.sent(),t.relations.get(this.props.store.me.id)===I.a.FRIEND?t.relations.set(this.props.store.me.id,I.a.FANS):t.relations.set(this.props.store.me.id,I.a.NO_RELATION),[3,8];case 7:return e.sent(),S.a.error("关注失败"),[3,8];case 8:return[2]}})})},t.sendMessage=function(){g.Control.go("/send-message/"+t.props.account.id)},t.openFollowOrFansList=function(r){return function(){var n=t.props.account,e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={list:[],loading:!1},e}return T(e,t),e.prototype.render=function(){return l.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",padding:"2em",alignItems:"center",justifyContent:"center",overflow:"auto",position:"relative"}},this.state.list.map(function(e){return l.a.createElement("div",{className:"follow-account-in-modal",key:e.id,onClick:function(){return g.Control.go("/user/"+e.id),o()}},l.a.createElement("div",null,l.a.createElement(b.a,{src:e.avatar,shape:"square"}),l.a.createElement("span",{style:{fontWeight:"bold",marginLeft:"1em"}},e.username)),l.a.createElement("span",null,w()(e.createAt).format("YYYY-MM-DD HH:mm")))}),l.a.createElement(i.a,{spinning:this.state.loading,style:{position:"absolute",left:"48%",top:"48%"}}))},e.prototype.componentDidMount=function(){return M(this,void 0,void 0,function(){var t;return z(this,function(e){switch(e.label){case 0:return this.setState({loading:!0}),"fans"!==r?[3,2]:[4,n.fansList()];case 1:return t=e.sent(),[3,4];case 2:return[4,n.followList()];case 3:t=e.sent(),e.label=4;case 4:return this.setState({list:t,loading:!1}),[2]}})})},e}(l.a.Component),o=F.show(l.a.createElement(e,null),"70vw","80vh")}},t}return T(t,e),t.prototype.render=function(){var e=this.props.account,t=null,n=null;return e.id===this.props.store.me.id?t=l.a.createElement("div",{className:"is-me"},l.a.createElement(a.a,{onClick:this.changeAvatar},"修改头像"),l.a.createElement("div",{style:{width:"0.5em"}}),l.a.createElement(a.a,{onClick:this.changeUsername},"修改昵称"),l.a.createElement("div",{style:{width:"0.5em"}}),l.a.createElement(a.a,{onClick:this.changePassword},"修改密码"),l.a.createElement("div",{style:{width:"0.5em"}}),l.a.createElement(a.a,{onClick:this.openFollowOrFansList("follow")},"我的关注"),l.a.createElement("div",{style:{width:"0.5em"}}),l.a.createElement(a.a,{onClick:this.openFollowOrFansList("fans")},"我的粉丝")):(t=l.a.createElement("div",{className:"no-me"},l.a.createElement(a.a,{onClick:this.clickFollow},e.relations.get(this.props.store.me.id)===I.a.NO_RELATION||e.relations.get(this.props.store.me.id)===I.a.FOLLOW?"+关注":"取消关注"),l.a.createElement("div",{style:{width:"0.5em"}}),l.a.createElement(a.a,{type:"primary",onClick:this.sendMessage},"发私信"),l.a.createElement("div",{style:{width:"0.5em"}}),l.a.createElement(a.a,{onClick:this.openFollowOrFansList("follow")},l.a.createElement("b",null,e.username),"的关注"),l.a.createElement("div",{style:{width:"0.5em"}}),l.a.createElement(a.a,{onClick:this.openFollowOrFansList("fans")},l.a.createElement("b",null,e.username),"的粉丝")),n=l.a.createElement("span",null,e.relations.get(this.props.store.me.id)===I.a.NO_RELATION?"":e.relations.get(this.props.store.me.id)===I.a.FOLLOW?"(我的粉丝)":e.relations.get(this.props.store.me.id)===I.a.FANS?"(我关注了)":e.relations.get(this.props.store.me.id)===I.a.FRIEND?"(互相关注)":"")),l.a.createElement("div",{className:"UserInfo"},l.a.createElement("div",null,l.a.createElement(b.a,{shape:"square",size:84,src:e.avatar})),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("span",{style:{fontSize:"2em"}},e.username),n),t))},t=U([Object(r.b)("store"),r.c],t)}(l.a.Component);function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var W,q=(W=function(e,t){return(W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}W(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),G=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":Y(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;0<=l;l--)(r=e[l])&&(a=(i<3?r(a):3<i?r(t,n,a):r(t,n))||a);return 3<i&&a&&Object.defineProperty(t,n,a),a},H=function(i,a,l,s){return new(l||(l=Promise))(function(e,t){function n(e){try{r(s.next(e))}catch(e){t(e)}}function o(e){try{r(s.throw(e))}catch(e){t(e)}}function r(t){t.done?e(t.value):new l(function(e){e(t.value)}).then(n,o)}r((s=s.apply(i,a||[])).next())})},J=function(n,o){var r,i,a,e,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,i=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(a=0<(a=l.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){l.label=t[1];break}if(6===t[0]&&l.label<a[1]){l.label=a[1],a=t;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(t);break}a[2]&&l.ops.pop(),l.trys.pop();continue}t=o.call(n,l)}catch(e){t=[6,e],i=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},Q=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.newsfeeds=[],e.pageNumber=1,e.totalPage=1,e.loading=!1,e.container=null,e.lastAccountId=0,e.toPage=function(a){return H(e,void 0,void 0,function(){var t,n,o,r,i=this;return J(this,function(e){switch(e.label){case 0:return this.loading=!0,[4,y.paginate(this.props.account.id,a)];case 1:return t=e.sent(),n=t.newsfeeds,o=t.pageNumber,r=t.totalPage,this.lastAccountId=this.props.account.id,Object(u.n)(function(){i.newsfeeds=Object(u.m)(n),i.pageNumber=o,i.totalPage=r,i.loading=!1}),this.container&&this.container.scrollTo({top:0}),[2]}})})},e.closes=[],e.refresh=function(){e.toPage(1)},e}return q(e,t),e.prototype.render=function(){var t=this,e=this.props.account;return l.a.createElement(c.a,{containerRef:function(e){return t.container=e}},l.a.createElement(B,{account:e}),l.a.createElement("div",{style:{padding:"1em",boxShadow:"0px 0px 0.5em #535353",backgroundColor:"#fff",borderRadius:"0.5em",margin:"0 0 1em",textAlign:"center"}},l.a.createElement("span",{style:{fontSize:"1.5em"}},this.props.store.me.id===e.id?"我":e.username,"的动态")),this.newsfeeds.map(function(e){return l.a.createElement(j,{newsfeed:e,key:e.id})}),this.totalPage<2?null:l.a.createElement(o.a,{showQuickJumper:!0,current:this.pageNumber,pageSize:1,total:this.totalPage,onChange:this.toPage}),l.a.createElement(i.a,{size:"large",spinning:this.loading,style:{position:"fixed",left:"50vw",top:"50vh"}}),l.a.createElement("div",{className:"operationBtns"},l.a.createElement(a.a,{type:"primary",shape:"circle",icon:"reload",size:"large",onClick:function(){return t.toPage(1)}})))},e.prototype.componentDidMount=function(){var e=this;this.closes.push(Object(u.e)(function(){e.props.account.id!==e.lastAccountId&&e.toPage(1)})),this.props.store.onUpdateMyNewsfeed(this.refresh)},e.prototype.componentWillUnmount=function(){this.closes.forEach(function(e){return e()}),this.props.store.offUpdateMyNewsfeed(this.refresh)},G([u.m],e.prototype,"newsfeeds",void 0),G([u.m],e.prototype,"pageNumber",void 0),G([u.m],e.prototype,"totalPage",void 0),G([u.m],e.prototype,"loading",void 0),e=G([Object(r.b)("store"),r.c],e)}(l.a.Component);t.a=Q},569:function(e,t,n){var o=n(570);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(49)(o,r);o.locals&&(e.exports=o.locals)},570:function(e,t,n){(e.exports=n(48)(!1)).push([e.i,"",""])},693:function(e,t,n){"use strict";n.r(t);n(240);var i=n(76),o=n(438),r=n(15),a=n(1),l=n.n(a),s=(n(569),n(80)),c=n(3);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p,f=(p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;0<=l;l--)(r=e[l])&&(a=(i<3?r(a):3<i?r(t,n,a):r(t,n))||a);return 3<i&&a&&Object.defineProperty(t,n,a),a},m=function(i,a,l,s){return new(l||(l=Promise))(function(e,t){function n(e){try{r(s.next(e))}catch(e){t(e)}}function o(e){try{r(s.throw(e))}catch(e){t(e)}}function r(t){t.done?e(t.value):new l(function(e){e(t.value)}).then(n,o)}r((s=s.apply(i,a||[])).next())})},h=function(n,o){var r,i,a,e,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,i=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(a=0<(a=l.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){l.label=t[1];break}if(6===t[0]&&l.label<a[1]){l.label=a[1],a=t;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(t);break}a[2]&&l.ops.pop(),l.trys.pop();continue}t=o.call(n,l)}catch(e){t=[6,e],i=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={self:e},e.realMounted=!1,e.account=new s.a,e.fetchById=function(r){return m(e,void 0,void 0,function(){var t,n,o=this;return h(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.a.getById(r,this.props.store.me.id)];case 1:return t=e.sent(),Object(c.n)(function(){for(var e in t)o.account[e]=t[e]}),this.realMounted=!0,[3,3];case 2:return n=e.sent(),i.a.error(n),[3,3];case 3:return[2]}})})},e}return f(e,t),e.prototype.render=function(){return l.a.createElement(o.a,{account:this.account})},e.prototype.componentDidMount=function(){this.fetchById(Number.parseInt(this.props.params.id))},e.prototype.componentWillUnmount=function(){this.realMounted=!1},e.getDerivedStateFromProps=function(e,t){if(e.params.id){var n=Number.parseInt(e.params.id);t.self.realMounted&&n!==t.self.account.id&&(t.self.realMounted=!1,t.self.fetchById(n))}return null},d([c.m],e.prototype,"account",void 0),e=d([Object(r.b)("store"),r.c],e)}(l.a.Component);t.default=y}}]);