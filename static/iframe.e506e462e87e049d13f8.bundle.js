(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{427:function(e,n,t){"use strict";var i=t(56),r=t.n(i),o=t(8),a=t.n(o),l=t(4),s=t.n(l),d=t(7),u=t.n(d),c=t(13),h=t.n(c),m=t(14),p=t.n(m),f=t(15),g=t.n(f),b=t(10),y=t.n(b),w=t(5),v=t.n(w),_=t(1),z=t.n(_),R=t(428),S=t.n(R),E=function(e){function n(){var e,t;s()(this,n);for(var i=arguments.length,r=Array(i),o=0;o<i;o++)r[o]=arguments[o];return t=h()(this,(e=p()(n)).call.apply(e,[this].concat(r))),v()(y()(y()(t)),"_root",void 0),v()(y()(y()(t)),"_parentNode",void 0),v()(y()(y()(t)),"_elementResizeDetector",void 0),v()(y()(y()(t)),"state",{width:t.props.defaultHeight||0,height:t.props.defaultHeight||0}),v()(y()(y()(t)),"_handleResize",function(e){t.setState({width:e.clientWidth,height:e.clientHeight})}),t}return g()(n,e),u()(n,[{key:"componentDidMount",value:function(){this._root&&this._root.parentNode&&this._root.parentNode instanceof this._root.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._root.parentNode,this._parentNode.style.overflow="hidden",this._elementResizeDetector=S()({strategy:"scroll"}),this._elementResizeDetector.listenTo(this._parentNode,this._handleResize),this._handleResize(this._parentNode))}},{key:"componentWillUnmount",value:function(){this._elementResizeDetector&&this._parentNode&&this._elementResizeDetector.removeListener(this._parentNode,this._handleResize)}},{key:"_renderContent",value:function(){var e=this.props,n=e.children,t=e.disableHeight,i=e.disableWidth,r=e.onResize,o=this.state,a=o.width,l=o.height;if("function"==typeof n){var s={};return t||(s.height=l),i||(s.width=a),r(s),n(s)}}},{key:"render",value:function(){var e=this,n=this.props,t=n.style,i=n.className;return z.a.createElement("div",r()({style:a()({},{width:0,height:0,overflow:"visible"},t),className:i},{ref:function(n){return e._root=n}}),this._renderContent())}}]),n}(z.a.Component);v()(E,"defaultProps",{disableHeight:!1,disableWidth:!1,onResize:function(){},style:{}}),n.a=E,E.__docgenInfo={description:"",methods:[{name:"_handleResize",docblock:null,modifiers:[],params:[{name:"element",type:{name:"HTMLElement",alias:"HTMLElement"}}],returns:null},{name:"_renderContent",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SizeMe",props:{disableHeight:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"Disable dynamic :height property"},disableWidth:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"Disable dynamic :width property"},onResize:{defaultValue:{value:"() => {}",computed:!1},required:!1,flowType:{name:"signature",type:"function",raw:"Size => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{\r\n    height: ?number,\r\n    width: ?number,\r\n}",signature:{properties:[{key:"height",value:{name:"number",nullable:!0,required:!0}},{key:"width",value:{name:"number",nullable:!0,required:!0}}]}}}],return:{name:"void"}}},description:"Callback to be invoked on-resize"},style:{defaultValue:{value:"{}",computed:!1},required:!1,flowType:{name:"Object",nullable:!0},description:"Optional inline style"},children:{required:!0,flowType:{name:"signature",type:"function",raw:"Size => React.Element<*>",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{\r\n    height: ?number,\r\n    width: ?number,\r\n}",signature:{properties:[{key:"height",value:{name:"number",nullable:!0,required:!0}},{key:"width",value:{name:"number",nullable:!0,required:!0}}]}}}],return:{name:"ReactElement",raw:"React.Element<*>",elements:[{name:"unknown"}]}}},description:"Function responsible for rendering children."},className:{required:!1,flowType:{name:"string"},description:"Optional custom CSS class name to attach to root AutoSizer element."},defaultHeight:{required:!1,flowType:{name:"number"},description:"Default height to use for initial render; useful for SSR"},defaultWidth:{required:!1,flowType:{name:"number"},description:"Default width to use for initial render; useful for SSR"},nonce:{required:!1,flowType:{name:"string"},description:"Nonce of the inlined stylesheet for Content Security Policy"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\index.js"]={name:"SizeMe",docgenInfo:E.__docgenInfo,path:"src\\index.js"})},429:function(e,n,t){t(164),t(430),e.exports=t(431)},431:function(e,n,t){"use strict";t.r(n),function(e){var n=t(162);t(444);Object(n.configure)(function(){t(449)},e)}.call(this,t(263)(e))},444:function(e,n,t){var i=t(445);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(447)(i,r);i.locals&&(e.exports=i.locals)},445:function(e,n,t){(e.exports=t(446)(!1)).push([e.i,"html {\n    height: 100%;\n}\nbody {\n    height: 100%;\n    margin: 0;\n}\n\n#root{\n    height: 100%;\n}\n\n.container{\n    width: 100%;\n    height: 100%;\n    border: 10px solid #137CBD;\n    box-sizing: border-box;\n}\n\n.inner{\n    border: 5px solid #DB3737;\n    box-sizing: border-box;\n    padding: 5px;\n}\n",""])},449:function(e,n,t){"use strict";t.r(n),function(e){var n=t(1),i=t.n(n),r=t(162),o=t(427);Object(r.storiesOf)("SizeMe",e).add("resize",function(){return i.a.createElement("div",{className:"container"},i.a.createElement(o.a,null,function(e){var n=e.width,t=e.height;return i.a.createElement("div",{className:"inner",style:{width:n,height:t}},i.a.createElement("p",null,"Try to change window size!"),i.a.createElement("div",null,"Width: ",i.a.createElement("strong",null,n)),i.a.createElement("div",null,"Height: ",i.a.createElement("strong",null,t)))}))})}.call(this,t(263)(e))}},[[429,2,4]]]);
//# sourceMappingURL=iframe.e506e462e87e049d13f8.bundle.js.map