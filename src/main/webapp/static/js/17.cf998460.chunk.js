(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{575:function(e,n,t){},576:function(e,n,t){var o=t(577);"string"==typeof o&&(o=[[e.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(49)(o,s);o.locals&&(e.exports=o.locals)},577:function(e,n,t){(e.exports=t(48)(!1)).push([e.i,".C404Container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n",""])},696:function(e,n,t){"use strict";t.r(n);t(355);var o=t(360),s=(t(75),t(575),t(4)),g=t.n(s),a=t(5),v=t.n(a),r=t(10),i=t.n(r),c=t(12),l=t.n(c),p=t(8),u=t.n(p),f=t(11),d=t.n(f),x=t(1),m=t.n(x),h=t(9),k=t(39),C=t(78),b=t(13),_=t.n(b);function y(){}var w,E=function(e){function n(e){i()(this,n);var t=u()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleClose=function(e){e.preventDefault();var n=h.findDOMNode(t);n.style.height=n.offsetHeight+"px",n.style.height=n.offsetHeight+"px",t.setState({closing:!1}),(t.props.onClose||y)(e)},t.animationEnd=function(){t.setState({closed:!0,closing:!0}),(t.props.afterClose||y)()},t.state={closing:!0,closed:!1},t}return d()(n,e),l()(n,[{key:"render",value:function(){var e,n=this.props,t=n.closable,o=n.description,s=n.type,a=n.prefixCls,r=void 0===a?"ant-alert":a,i=n.message,c=n.closeText,l=n.showIcon,p=n.banner,u=n.className,f=void 0===u?"":u,d=n.style,m=n.iconType;if(l=!(!p||void 0!==l)||l,s=p&&void 0===s?"warning":s||"info",!m){switch(s){case"success":m="check-circle";break;case"info":m="info-circle";break;case"error":m="cross-circle";break;case"warning":m="exclamation-circle";break;default:m="default"}o&&(m+="-o")}var h=_()(r,(e={},v()(e,r+"-"+s,!0),v()(e,r+"-close",!this.state.closing),v()(e,r+"-with-description",!!o),v()(e,r+"-no-icon",!l),v()(e,r+"-banner",!!p),e),f);c&&(t=!0);var b,y=t?x.createElement("a",{onClick:this.handleClose,className:r+"-close-icon"},c||x.createElement(C.a,{type:"cross"})):null,w=(b=this.props,Object.keys(b).reduce(function(e,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(e[n]=b[n]),e},{}));return this.state.closed?null:x.createElement(k.a,{component:"",showProp:"data-show",transitionName:r+"-slide-up",onEnd:this.animationEnd},x.createElement("div",g()({"data-show":this.state.closing,className:h,style:d},w),l?x.createElement(C.a,{className:r+"-icon",type:m}):null,x.createElement("span",{className:r+"-message"},i),x.createElement("span",{className:r+"-description"},o),y))}}]),n}(x.Component),N=t(6),O=(t(576),w=function(e,n){return(w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}w(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),j=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return O(n,e),n.prototype.render=function(){return m.a.createElement("div",{className:"C404Container"},m.a.createElement(E,{message:"404 Not Found",description:m.a.createElement(o.a,{onClick:function(){N.Control.go("/")}},"返回首页"),type:"warning",showIcon:!0}))},n}(m.a.Component);n.default=j}}]);