(this.webpackJsonpsir_visualization=this.webpackJsonpsir_visualization||[]).push([[0],{190:function(e,t,i){"use strict";i.r(t);var n,a=i(0),o=i.n(a),s=i(23),r=i.n(s),c=i(14),l=i(11),d=i(17),h=i(16),j=i(6),b=i(13),u=i(2),p=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(c.a)(this,i);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).canvasRef=o.a.createRef(),e.countInfectedNeighbours=function(t,i,n){for(var a=e.props,o=a.widthPoints,s=a.heightPoints,r=0,c=n-1;c<n+2;c++)for(var l=i-1;l<i+2;l++)c===i&&l===n||c<0||l<0||c>=s||l>=o||1===t[c][l]&&r++;return r},e.paintRect=function(t,i,n,a){var o=e.props.rectSize;a.fillStyle=e.getColorFromState(n[i][t]),a.fillRect(o*t,o*i,o,o)},e.getNewStateForPoint=function(t,i,n){if(2===t[n][i])return 2;if(1===t[n][i])return Math.random()<e.props.gamma?2:1;var a=e.countInfectedNeighbours(t,i,n);return Math.random()<a*e.props.betta/8?1:0},e.getColorFromState=function(t){var i=e.props,n=i.infectedColor,a=i.susceptibleColor,o=i.removedColor;return 1===t?n:2===t?o:a},e.emptyField=function(){for(var t=e.props,i=t.widthPoints,n=t.heightPoints,a=Array(n),o=0;o<n;o++)a[o]=Array(i).fill(0);return a},e.evolve=function(t,i){for(var n=e.props,a=n.widthPoints,o=n.heightPoints,s=e.emptyField(),r=0;r<o;r++)for(var c=0;c<a;c++)s[r][c]=e.getNewStateForPoint(t,c,r),s[r][c]!==t[r][c]&&e.paintRect(c,r,s,i);return s},e.tick=function(){var t=e.getCanvasContext(),i=(new Date).getTime();n=e.evolve(n,t),console.log("time for evolution: ".concat((new Date).getTime()-i," ms"))},e.addSeed=function(t,i){n[i][t]=1,e.paintRect(t,i,n,e.getCanvasContext())},e.reset=function(){var t=e.props,i=t.widthPoints,a=t.heightPoints,o=t.rectSize;n=e.emptyField(),e.getCanvasContext().clearRect(0,0,i*o,a*o)},e.getCanvasContext=function(){return e.canvasRef.current.getContext("2d")},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){n=this.emptyField()}},{key:"render",value:function(){var e=this.props,t=e.classes,i=e.widthPoints,n=e.heightPoints,a=e.rectSize,o=e.susceptibleColor;return Object(u.jsx)("div",{className:t.root,style:{width:i*a,height:n*a},children:Object(u.jsx)("canvas",{ref:this.canvasRef,className:t.canvas,style:{backgroundColor:o,transform:"scale(".concat(this.props.zoom,")"),width:i*a,height:n*a},width:i*a,height:n*a})})}}]),i}(a.Component),m=Object(j.a)((function(e){return{root:{position:"relative",overflow:"hidden"},canvas:{position:"absolute"}}}))(p),v=i(185),f=i(189),x=i(186),O=i(187),g=i(25),y=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.classes;return Object(u.jsx)(v.a,{className:e.root,children:Object(u.jsx)(f.a,{p:1,className:e.expandable,children:Object(u.jsxs)(x.a,{container:!0,direction:"row",spacing:1,children:[Object(u.jsx)(x.a,{item:!0,xs:12,children:Object(u.jsx)(O.a,{variant:"subtitle2",children:"Help"})}),Object(u.jsx)(x.a,{item:!0,xs:12,children:Object(u.jsxs)(O.a,{variant:"caption",children:["This is a simplified discrete representation of the epidemiological ",Object(u.jsx)("a",{href:"https://en.m.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SIR_model",children:"SIR model"}),"."]})}),Object(u.jsxs)(x.a,{item:!0,xs:12,children:[Object(u.jsx)(O.a,{variant:"subtitle2",children:"Navigation"}),Object(u.jsx)(O.a,{variant:"caption",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Press ",Object(u.jsx)("span",{className:e.key,children:"Enter"})," to move to the next day. First infection will appear in the center of the screen on ",Object(u.jsx)("b",{children:"day 1"}),"."]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{className:e.key,children:"Scroll"})," to zoom in and out of the visualization."]}),Object(u.jsxs)("li",{children:["Use ",Object(u.jsx)("b",{children:"control panel on the right"})," to adjust simulation parameters."]}),Object(u.jsxs)("li",{children:["Hover over the ",Object(u.jsx)("b",{children:"graph icon in the left bottom conner"})," to view number of susceptible/infected/removed individuals over time."]})]})})]}),Object(u.jsx)(x.a,{item:!0,xs:12,children:Object(u.jsx)(O.a,{variant:"subtitle2",children:"Legend"})}),Object(u.jsx)(x.a,{item:!0,xs:12,children:Object(u.jsxs)(O.a,{variant:"caption",children:[Object(u.jsx)("span",{className:e.legend,style:{backgroundColor:this.props.susceptibleColor}}),"Susceptible individuals."]})}),Object(u.jsx)(x.a,{item:!0,xs:12,children:Object(u.jsxs)(O.a,{variant:"caption",children:[Object(u.jsx)("span",{className:e.legend,style:{backgroundColor:this.props.infectedColor}}),"Infected individuals."]})}),Object(u.jsx)(x.a,{item:!0,xs:12,children:Object(u.jsxs)(O.a,{variant:"caption",children:[Object(u.jsx)("span",{className:e.legend,style:{backgroundColor:this.props.removedColor}}),"Removed (deceased or immune) individuals."]})})]})})})}}]),i}(a.Component),C=Object(j.a)((function(e){return{root:{maxWidth:256},key:{backgroundColor:g.a[300],borderRadius:2,borderWidth:2,borderColor:g.a[300],borderStyle:"solid",paddingX:8,paddingY:2},expandable:{maxHeight:20,transition:"max-height 300ms ease-out","&:hover":{maxHeight:490}},legend:{width:12,height:12,borderColor:g.a[700],borderWidth:1,borderStyle:"solid",borderRadius:2,display:"inline-block",marginRight:6}}}))(y),w=i(191),S=i(188),k=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this,t=this.props.classes;return Object(u.jsx)(v.a,{className:t.root,children:Object(u.jsx)(f.a,{p:1,children:Object(u.jsxs)(x.a,{container:!0,direction:"row",justify:"center",spacing:1,children:[Object(u.jsx)(x.a,{item:!0,xs:12,children:Object(u.jsxs)(O.a,{variant:"subtitle2",children:["Control panel ",Object(u.jsxs)("span",{className:t.day,children:["Day ",this.props.day]})]})}),Object(u.jsx)(x.a,{item:!0,xs:12}),Object(u.jsxs)(x.a,{item:!0,xs:12,children:[Object(u.jsxs)(O.a,{variant:"body2",children:["\u03b2 ",Object(u.jsx)("small",{children:" - probability of being infected after a contact with an infectious individual"})]}),Object(u.jsx)(f.a,{pt:4,children:Object(u.jsx)(w.a,{value:this.props.betta,min:0,max:1,step:.01,onChange:function(t,i){return e.props.onChangeBetta(i)},valueLabelDisplay:"on"})})]}),Object(u.jsx)(x.a,{item:!0,xs:12}),Object(u.jsxs)(x.a,{item:!0,xs:12,children:[Object(u.jsxs)(O.a,{variant:"body2",children:["\u03b3 ",Object(u.jsx)("small",{children:' - probability of being "removed" (either dying or becoming non-susceptible)'})]}),Object(u.jsx)(f.a,{pt:4,children:Object(u.jsx)(w.a,{value:this.props.gamma,min:0,max:1,step:.01,onChange:function(t,i){return e.props.onChangeGamma(i)},valueLabelDisplay:"on"})})]}),Object(u.jsx)(x.a,{item:!0,xs:12}),Object(u.jsx)(x.a,{item:!0,xs:12,children:Object(u.jsx)(O.a,{variant:"caption",children:"TODO: table of sample values for covid, vaccinated population, flue etc."})}),Object(u.jsx)(x.a,{item:!0,xs:12}),Object(u.jsx)(x.a,{item:!0,children:Object(u.jsx)(S.a,{size:"small",variant:"raised",onClick:this.props.onReset,color:"secondary",children:"Reset simulation"})})]})})})}}]),i}(a.Component),R=Object(j.a)((function(e){return{root:{width:256},day:{float:"right"}}}))(k),P=b.a.grey[200],N=b.a.red[400],z=b.a.blue[400],M=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).fieldRef=o.a.createRef(),e.state={seedCalled:!1,day:0,zoom:1,widthPoints:null,heightPoints:null,betta:.8,gamma:.2},e.iterateWithSeed=function(t){if(13===t.keyCode){var i=e.fieldRef.current;if(!e.state.seedCalled){var n=document.body.clientWidth,a=document.body.clientHeight,o=Math.ceil(n/3/2),s=Math.ceil(a/3/2);i.addSeed(o,s),e.setState({seedCalled:!0})}i.tick(),e.setState((function(e){return{day:e.day+1}}))}},e.onScroll=function(t){var i=e.state.zoom-t.deltaY/1e3;i=Math.min(3,Math.max(1,i)),e.setState({zoom:i})},e.onChangeBetta=function(t){return e.setState({betta:t})},e.onChangeGamma=function(t){return e.setState({gamma:t})},e.onReset=function(){e.setState({seedCalled:!1,day:0},e.fieldRef.current.reset)},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.iterateWithSeed);var e=document.body.clientWidth,t=document.body.clientHeight,i=Math.ceil(e/3),n=Math.ceil(t/3);this.setState({widthPoints:i,heightPoints:n})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.iterateWithSeed)}},{key:"render",value:function(){var e=this.props.classes;return Object(u.jsxs)("div",{className:e.root,onKeyDown:this.iterateWithSeed,onWheel:this.onScroll,children:[Object(u.jsx)("div",{className:e.fieldContainer,children:null==this.state.widthPoints?null:Object(u.jsx)(m,{ref:this.fieldRef,widthPoints:this.state.widthPoints,heightPoints:this.state.heightPoints,rectSize:3,susceptibleColor:P,infectedColor:N,removedColor:z,betta:this.state.betta,gamma:this.state.gamma,zoom:this.state.zoom})}),Object(u.jsx)("div",{className:e.helpCardContainer,children:Object(u.jsx)(C,{susceptibleColor:P,infectedColor:N,removedColor:z})}),Object(u.jsx)("div",{className:e.controlPanelContainer,children:Object(u.jsx)(R,{betta:this.state.betta,gamma:this.state.gamma,day:this.state.day,onChangeBetta:this.onChangeBetta,onChangeGamma:this.onChangeGamma,onReset:this.onReset})})]})}}]),i}(a.Component),W=Object(j.a)((function(e){return{root:{overflow:"hidden",height:"100vh",width:"100vw",position:"relative"},fieldContainer:{position:"absolute",top:0,left:0},helpCardContainer:{position:"absolute",top:16,left:16,opacity:.6,transition:"opacity 200ms ease-in-out","&:hover":{opacity:1}},controlPanelContainer:{position:"absolute",right:16,top:16,opacity:.6,transition:"opacity 200ms ease-in-out","&:hover":{opacity:1}}}}))(M);r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(W,{})}),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.91587d88.chunk.js.map