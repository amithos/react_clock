(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),l=n.n(c),r=n(1),i=n(2),s=n(4),u=n(3),m=(n(12),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={date:(new Date).toLocaleTimeString()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){e.setState({date:(new Date).toLocaleTimeString()}),console.log(e.state.date)}),1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.log("The Clock was renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return o.a.createElement("span",null,this.state.date,".")}}]),n}(o.a.Component)),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isClockVisible:!1,clockName:0},e.showClock=function(){e.setState({isClockVisible:!0})},e.hideClock=function(){e.setState({isClockVisible:!1})},e.setRandomName=function(){e.setState({clockName:Math.floor(5*Math.random())})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.isClockVisible;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"React clock"),o.a.createElement("p",null,"Current time:"," ",e&&o.a.createElement(m,{name:this.state.clockName})),o.a.createElement("button",{type:"button",onClick:this.showClock},"Show Clock"),o.a.createElement("button",{type:"button",onClick:this.hideClock},"Hide Clock"),o.a.createElement("button",{type:"button",onClick:this.setRandomName},"Set random name"))}}]),n}(o.a.Component);l.a.render(o.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.b72f68f9.chunk.js.map