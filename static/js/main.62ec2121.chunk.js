(this.webpackJsonpneedlewebapp=this.webpackJsonpneedlewebapp||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(23),a(2)),u=a(3),i=a(5),s=a(4),h=(a(7),a(17),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),fetch("http://51.81.32.218:4000/databaseTest?gauge=".concat(e.state.value)).then((function(e){return e.json()})).then((function(t){e.props.saveData(t)})).catch(console.log)},e.handleChange=function(t){e.setState({value:t.target.value})},e.state={value:""},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Needle Search Tool"),r.a.createElement("label",null,"Gauge:",r.a.createElement("input",{type:"number",value:this.state.value,onChange:this.handleChange})),r.a.createElement("button",null,"Find product"))}}]),a}(n.Component)),m=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"renderTableData",value:function(){return this.props.data.map((function(e,t){var a=e.referenceID,n=e.gauge,l=e.length,c=e.volume;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,"08290-",a),r.a.createElement("td",null,n,"G"),r.a.createElement("td",null,l," inch"),r.a.createElement("td",null,c," milliliters"))}))}},{key:"renderTableHeader",value:function(){var e=this,t=[];return Object.keys(this.props.data[0]).map((function(a){t.push(r.a.createElement("th",{key:e.props.data.referenceID},a))})),t}},{key:"render",value:function(){return r.a.createElement("table",{className:"syringes"},r.a.createElement("tbody",null,r.a.createElement("tr",null,this.props.data&&this.props.data[0]&&this.renderTableHeader()),this.renderTableData()))}}]),a}(r.a.Component),d=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).saveData=function(t){e.setState({syringes:t})},e.state={syringes:[],value:""},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{saveData:this.saveData}),r.a.createElement(m,{data:this.state.syringes}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.62ec2121.chunk.js.map