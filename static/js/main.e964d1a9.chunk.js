(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(22),a(2)),i=a(3),s=a(5),u=a(4),m=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{style:{fontFamily:"Times New Roman",fontSize:60,textDecoration:"underline red"}},"Employee Directory"))}}]),a}(n.Component);var h=function(e){var t=e.handleSearchChange;return r.a.createElement("div",null,r.a.createElement("form",{className:"form-block",style:{marginTop:30,width:1500}},r.a.createElement("input",{className:"search",placeholder:"look through employees...",style:{width:1e3,height:40,marginRight:10,border:"solid 2px"},type:"search",onChange:function(e){return t(e)}})))};var d=function(e){var t=e.handleSearchChange;return r.a.createElement("div",{className:"navbar-flex"},r.a.createElement(h,{handleSearchChange:t}))};var f=function(e){var t=e.users;return r.a.createElement("tbody",null,void 0!==t[0].name?t.map((function(e){var t=e.picture,a=e.name,n=e.phone,l=e.email,c=e.location,o=e.login;return r.a.createElement("tr",{key:o.uuid},r.a.createElement("td",null,r.a.createElement("img",{src:t.medium})),r.a.createElement("td",null,a.first),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,c.city))})):r.a.createElement(r.a.Fragment,null))};var v=function(e){var t=e.users,a=e.headings;return console.log("here is heading: ",a),console.log("here is users: ",t),r.a.createElement("div",{className:"jumbotron-flex"},r.a.createElement("table",{className:"table table-responsive"},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map((function(e){var t=e.name,a=e.width;return r.a.createElement("th",{key:t,style:{width:a,border:"solid 1px"}},t)})))),r.a.createElement(f,{users:t})))},p=a(16),E=a.n(p),g=function(){return E.a.get("https://randomuser.me/api/?results=200&nat=us")},b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],filterUsers:[{}]},e.headings=[{name:"image",width:"10%"},{name:"name",width:"10%"},{name:"phone",width:"10%"},{name:"email",width:"10%"},{name:"location",width:"10%"}],e.handleSearchChange=function(t){var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));console.log(n),e.setState({filterUsers:n})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){e.setState({users:t.data.results,filterUsers:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement("table",{className:"table table-responsive"},r.a.createElement(d,{handleSearchChange:this.handleSearchChange}),r.a.createElement(v,{headings:this.headings,users:this.state.filterUsers}))}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(b,null))}}]),a}(n.Component);var w=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(m,null),r.a.createElement(y,null))};var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null,r.a.createElement(m,null),r.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.e964d1a9.chunk.js.map