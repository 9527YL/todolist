(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){e.exports=n(185)},114:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),i=n(4),s=n.n(i),o=n(91),r=n(92),c=n(104),u=n(93),p=n(40),d=n(103),h=(n(112),n(188)),m=n(187),g=n(10),y=n(94),D={inputValue:"write Something",unDone:{checked:"",name:"unDone",display:"none",list:[]},Done:{checked:"true",name:"done",display:"none",list:[]}},f=Object(y.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;if("changInput"===t.type){var n=JSON.parse(JSON.stringify(e));return n.inputValue=t.value,console.log(t.value),console.log(n.inputValue),n}if("addItem"===t.type&&""!==e.inputValue){var a=JSON.parse(JSON.stringify(e));return a.unDone.list.push(a.inputValue),a.inputValue="",0!==a.unDone.list.length&&(a.unDone.display="block"),a}if("deleItem"===t.type){if("unDone"===t.name){var l=JSON.parse(JSON.stringify(e));return l.unDone.list.splice(t.index,1),0==l.unDone.list.length&&(l.unDone.display="none"),l}var i=JSON.parse(JSON.stringify(e));return console.log(t),i.Done.list.splice(t.index,1),0==i.Done.list.length&&(i.Done.display="none"),i}if("toUndone"===t.type){console.log(t);var s=JSON.parse(JSON.stringify(e));return s.unDone.list.splice(t.index,1),s.Done.list.push(t.ele),s.Done.display="block",0==s.unDone.list.length&&(s.unDone.display="none"),s}if("toDone"===t.type){console.log(t);var o=JSON.parse(JSON.stringify(e));return o.Done.list.splice(t.index,1),o.unDone.list.push(t.ele),o.unDone.display="block",0==o.Done.list.length&&(o.Done.display="none"),o}return e},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),v=(n(114),function(e){function t(){var e;return Object(o.a)(this,t),e=Object(c.a)(this,Object(u.a)(t).call(this)),console.log(f.getState()),e.state=f.getState(),e.changeInputValue=e.changeInputValue.bind(Object(p.a)(e)),e.storeChange=e.storeChange.bind(Object(p.a)(e)),f.subscribe(e.storeChange),e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{position:"relative"}},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"top"},l.a.createElement("span",{className:"title"},"ToDoList"),l.a.createElement(h.a,{placeholder:this.state.inputValue,style:{width:"300px",marginRight:"10px"},onChange:this.changeInputValue,value:this.state.inputValue,onKeyDown:this.enterDown.bind(this)}))),l.a.createElement("div",{className:"list"},l.a.createElement("h2",null," ",l.a.createElement("span",{className:"left"},"\u6b63\u5728\u8fdb\u884c")," ",l.a.createElement("span",null," ",this.state.unDone.list.length)),l.a.createElement("div",{style:{marginTop:"10px",width:"600px"}},l.a.createElement(m.a,{id:"1",className:"left",style:{display:this.state.unDone.display,background:"#fff",width:"400px"},bordered:!0,dataSource:this.state.unDone.list,renderItem:function(t,n){return l.a.createElement(m.a.Item,null,l.a.createElement("input",{type:"checkbox",onClick:e.toUndone.bind(e,n,t),checked:e.state.unDone.checked}),l.a.createElement("span",{style:{marginLeft:"10px",marginRight:"10px"}},t),l.a.createElement(g.a,{type:"minus-circle",className:"right",onClick:e.deleItem.bind(e,n,e.state.unDone.name)}))}}))),l.a.createElement("div",{className:"list"},l.a.createElement("h2",null," \u5df2\u7ecf\u5b8c\u6210 ",l.a.createElement("span",null," ",this.state.Done.list.length)),l.a.createElement("div",{style:{marginTop:"10px",width:"600px"}},l.a.createElement(m.a,{id:"2",className:"left",style:{display:this.state.Done.display,background:"#fff",width:"400px"},bordered:!0,dataSource:this.state.Done.list,renderItem:function(t,n){return l.a.createElement(m.a.Item,null,l.a.createElement("input",{type:"checkbox",onClick:e.toDone.bind(e,n,t),checked:e.state.Done.checked}),l.a.createElement("span",{style:{marginLeft:"10px",marginRight:"10px"}},t),l.a.createElement(g.a,{type:"minus-circle",onClick:e.deleItem.bind(e,n,e.state.Done.name)}))}}))))}},{key:"changeInputValue",value:function(e){var t={type:"changInput",value:e.target.value};f.dispatch(t)}},{key:"storeChange",value:function(){this.setState(f.getState())}},{key:"enterDown",value:function(e){if(13==e.keyCode){f.dispatch({type:"addItem"})}}},{key:"deleItem",value:function(e,t){var n={type:"deleItem",index:e,name:t};f.dispatch(n)}},{key:"toUndone",value:function(e,t){var n={type:"toUndone",index:e,ele:t};f.dispatch(n)}},{key:"toDone",value:function(e,t){var n={type:"toDone",index:e,ele:t};f.dispatch(n)}}]),t}(a.Component));n(184);s.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.1d253c1e.chunk.js.map