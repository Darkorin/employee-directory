(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l);a(22),a(23);var s=function(){return r.a.createElement("h1",{className:"jumbotron text-center"},"Employee Directory")},c=a(12),i=a(13),m=a(16),u=a(15);var p=function(e){var t=e.employee;return r.a.createElement("ul",{className:"card-text",style:{listStyleType:"none"}},r.a.createElement("li",null,"email: ",t.email),r.a.createElement("li",null,"phone: ",t.phone))};var f=function(e){return r.a.createElement("div",{className:"row"},e.employees.filter((function(t){return"".concat(t.name.first," ").concat(t.name.last).includes(e.filter)})).map((function(e,t){return r.a.createElement("div",{className:"card col-4",key:t},r.a.createElement("img",{className:"card-img-top",src:e.picture.large}),r.a.createElement("h5",{className:"card-title text-center"},"".concat(e.name.last,", ").concat(e.name.first)),r.a.createElement(p,{employee:e}))})))};var y=function(e){return r.a.createElement("div",{className:"col-6"},r.a.createElement("label",{className:"col-2"},"Sort By:"),r.a.createElement("select",{className:"col-4",name:"sort",id:"sort",onChange:e.setSort},r.a.createElement("option",{value:"laz"},"Last Name A-Z"),r.a.createElement("option",{value:"lza"},"Last Name Z-A"),r.a.createElement("option",{value:"faz"},"First Name A-Z"),r.a.createElement("option",{value:"fza"},"First Name Z-A")))};var v=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"}),r.a.createElement("input",{id:"search",type:"search",className:"col-3",onChange:e.setFilter,placeholder:"Name Search"}),r.a.createElement(y,{setSort:e.setSort}))},h=a(14),E=a.n(h),d=function(){return E.a.get("https://randomuser.me/api/?results=200&nat=us")},S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],filterBy:""},e.findEmployees=function(){d().then((function(t){e.setState({employees:t.data.results}),e.setSort({target:{value:"laz"}})})).catch((function(e){return console.log(e)}))},e.setSort=function(t){var a="",n=function(e,t){var n=e.name[a].toLowerCase(),r=t.name[a].toLowerCase(),l=0;return n>r?l=1:n<r&&(l=-1),l};"laz"===t.target.value&&(a="last",e.setState({employees:e.state.employees.sort(n)})),"lza"===t.target.value&&(a="last",e.setState({employees:e.state.employees.sort(n)}),e.setState({employees:e.state.employees.reverse()})),"faz"===t.target.value&&(a="first",e.setState({employees:e.state.employees.sort(n)})),"fza"===t.target.value&&(a="first",e.setState({employees:e.state.employees.sort(n)}),e.setState({employees:e.state.employees.reverse()}))},e.setFilter=function(t){e.setState({filterBy:t.target.value})},e.reset=function(){e.setState({filterBy:""}),e.setSort({target:{value:"laz"}})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.findEmployees()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{reset:this.reset,setSort:this.setSort,setFilter:this.setFilter}),r.a.createElement(f,{filter:this.state.filterBy,employees:this.state.employees}))}}]),a}(n.Component);var g=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(s,null),r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.ed2e61c0.chunk.js.map