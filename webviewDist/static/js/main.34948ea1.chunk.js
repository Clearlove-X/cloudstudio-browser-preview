(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,M,t){e.exports=t(57)},27:function(e,M,t){},28:function(e,M,t){},53:function(e,M,t){},54:function(e,M,t){},56:function(e,M,t){},57:function(e,M,t){"use strict";t.r(M);var a=t(0),n=t(18),N=t(21),i=t(2),c=t(3),j=t(5),I=t(4),D=t(1),g=t(6),s=(t(27),t(28),function(e){function M(e){return Object(i.a)(this,M),Object(j.a)(this,Object(I.a)(M).call(this,e))}return Object(g.a)(M,e),Object(c.a)(M,[{key:"render",value:function(){return a.createElement("div",{className:"loading-bar"},a.createElement("div",{className:"bar",style:this.getBarStyle()},a.createElement("div",{className:"peg"})))}},{key:"getBarStyle",value:function(){var e=this.props.percent;return{display:e>0?"block":"none",width:"".concat(e,"%")}}}]),M}(a.Component)),u=t(19),r=t.n(u),o=(t(53),t(54),function(e){function M(e){var t;return Object(i.a)(this,M),(t=Object(j.a)(this,Object(I.a)(M).call(this,e))).ref=void 0,t.state={hasChanged:!1,isFocused:!1,url:e.url,urlSelectionStart:0,urlSelectionEnd:0},t.handleChange=t.handleChange.bind(Object(D.a)(t)),t.handleFocus=t.handleFocus.bind(Object(D.a)(t)),t.handleBlur=t.handleBlur.bind(Object(D.a)(t)),t.handleKeyDown=t.handleKeyDown.bind(Object(D.a)(t)),t.setRef=t.setRef.bind(Object(D.a)(t)),t}return Object(g.a)(M,e),Object(c.a)(M,[{key:"componentWillReceiveProps",value:function(e){e.url===this.state.url||this.state.hasChanged||this.setState({url:e.url})}},{key:"setUrl",value:function(e){var M=null;if(this.state.urlSelectionStart&&this.state.urlSelectionEnd){var t=this.state.url,a=t.slice(0,this.state.urlSelectionStart),n=t.slice(this.state.urlSelectionEnd);M=(a+e).length,e=a+e+n}else if(this.state.urlSelectionStart){var N=this.state.url,i=N.slice(0,this.state.urlSelectionStart),c=N.slice(this.state.urlSelectionStart);M=(i+e).length,e=i+e+c}e!==this.state.url&&(this.setState({url:e,hasChanged:!0,isFocused:!0}),this.ref&&M&&(this.ref.focus(),this.ref.setSelectionRange(M,M)))}},{key:"render",value:function(){var e=["urlbar"];return this.state.isFocused&&e.push("focused"),a.createElement("div",{className:e.join(" ")},a.createElement("input",{type:"text",ref:this.setRef,value:this.state.url,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:this.handleChange,onKeyDown:this.handleKeyDown}))}},{key:"setRef",value:function(e){this.ref=e}},{key:"handleChange",value:function(e){this.setState({url:e.target.value,hasChanged:!0})}},{key:"handleFocus",value:function(e){this.selectUrl(e.target)}},{key:"selectUrl",value:function(e){!e&&this.ref&&(e=this.ref),e&&(e.select(),this.setState({isFocused:!0}))}},{key:"handleBlur",value:function(e){this.setState({isFocused:!1})}},{key:"enterUrl",value:function(){var e=this.state.url;e.match(/^(https?|about|chrome|file):/)||(e="https://"+this.state.url),e.match(/(\/|\\)$/)&&(e=e.slice(0,-1)),this.setState({hasChanged:!1}),this.props.onUrlChanged(e)}},{key:"handleKeyDown",value:function(e){13===e.keyCode&&this.enterUrl()}}]),M}(a.Component)),l={backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDI3IDIzNC42MjVIMTY3LjI5NmwxMTkuNzAyLTExOS43MDJMMjU2IDg1IDg1IDI1NmwxNzEgMTcxIDI5LjkyMi0yOS45MjQtMTE4LjYyNi0xMTkuNzAxSDQyN3YtNDIuNzV6Ii8+PC9zdmc+)"},A={backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNODUgMjc3LjM3NWgyNTkuNzA0TDIyNS4wMDIgMzk3LjA3NyAyNTYgNDI3bDE3MS0xNzFMMjU2IDg1bC0yOS45MjIgMjkuOTI0IDExOC42MjYgMTE5LjcwMUg4NXY0Mi43NXoiLz48L3N2Zz4=)"},T={backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjU2IDM4OGMtNzIuNTk3IDAtMTMyLTU5LjQwNS0xMzItMTMyIDAtNzIuNjAxIDU5LjQwMy0xMzIgMTMyLTEzMiAzNi4zIDAgNjkuMjk5IDE1LjQgOTIuNDA2IDM5LjYwMUwyNzggMjM0aDE1NFY4MGwtNTEuNjk4IDUxLjcwMkMzNDguNDA2IDk5Ljc5OCAzMDQuNDA2IDgwIDI1NiA4MGMtOTYuNzk3IDAtMTc2IDc5LjIwMy0xNzYgMTc2czc4LjA5NCAxNzYgMTc2IDE3NmM4MS4wNDUgMCAxNDguMjg3LTU0LjEzNCAxNjkuNDAxLTEyOEgzNzguODVjLTE4Ljc0NSA0OS41NjEtNjcuMTM4IDg0LTEyMi44NSA4NHoiLz48L3N2Zz4=)"},y={backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB0PSIxNTcyOTQ4MTI0NjQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNjgiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4Ij48cGF0aCBkPSJNNTEyIDBDMjI5LjIzMzc3OCAwIDAgMjI5LjIzMzc3OCAwIDUxMnMyMjkuMjMzNzc4IDUxMiA1MTIgNTEyIDUxMi0yMjkuMjMzNzc4IDUxMi01MTJBNTEyIDUxMiAwIDAgMCA1MTIgMHogbTAgOTM4LjY2NjY2N0MyNzYuMzY2MjIyIDkzOC42NjY2NjcgODUuMzMzMzMzIDc0Ny42MzM3NzggODUuMzMzMzMzIDUxMiA4NS4zMzMzMzMgMjc2LjM2NjIyMiAyNzYuMzY2MjIyIDg1LjMzMzMzMyA1MTIgODUuMzMzMzMzYzIzNS42MzM3NzggMCA0MjYuNjY2NjY3IDE5MS4wMzI4ODkgNDI2LjY2NjY2NyA0MjYuNjY2NjY3YTQyNi42NjY2NjcgNDI2LjY2NjY2NyAwIDAgMS00MjYuNjY2NjY3IDQyNi42NjY2Njd6IG0wLTcxNy42NTMzMzRhMTcwLjY2NjY2NyAxNzAuNjY2NjY3IDAgMCAwLTE3MC42NjY2NjcgMTcwLjY2NjY2NyA0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAwIDg1LjMzMzMzNCAwIDg1LjMzMzMzMyA4NS4zMzMzMzMgMCAxIDEgODUuMzMzMzMzIDg1LjMzMzMzMyA0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAwLTQyLjY2NjY2NyA0Mi42NjY2Njd2MTExLjM2YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDAgODUuMzMzMzM0IDB2LTc0LjI0QTE3MC42NjY2NjcgMTcwLjY2NjY2NyAwIDAgMCA1MTIgMjIxLjAxMzMzM3ogbS00Mi42NjY2NjcgNTQyLjI5MzMzNGE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAwIDg1LjMzMzMzNCAwIDQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDAtODUuMzMzMzM0IDB6IiBmaWxsPSIjMDAwMDAwIiBwLWlkPSIyMjY5Ii8+PC9zdmc+)"},z={backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB0PSIxNTcyOTQ4MjEwNTA3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3MDIiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4Ij48cGF0aCBkPSJNMTUyLjA3NTI2NCAxMjMuNTExODA4YzEwMS43MTY5OTIgMCAyMDMuNDM1MDA4IDAgMzA1LjE1MiAwIDMxLjAzMTI5NiAzLjA3MzAyNCAyMy41NTIgNTcuNjk2MjU2IDIzLjU1MiA5My4xODQgMCA2My43NDI5NzYgMCAxMDUuNzU1NjQ4IDAgMTY4Ljk2IDAgMzYuNzIxNjY0IDYuOTE1MDcyIDgxLjcyOTUzNi0xNy40MDggOTIuMTYtMTUuODQwMjU2IDYuNzkzMjE2LTU4LjM1MTYxNiAyLjA0OC03OC44NDggMi4wNDgtNTYuMjcxODcyIDAtMTAyLjAxMjkyOCAwLTE2MS43OTIgMC0zNy40MDA1NzYgMC04OC40Njk1MDQgOC45MjcyMzItOTQuMjA4LTIzLjU1MiAwLTEwMy4wODMwMDggMC0yMDYuMTY0OTkyIDAtMzA5LjI0OEMxMzIuNzA1MjggMTM1LjU0NDgzMiAxNDAuMDYxNjk2IDEyNy4yMDAyNTYgMTUyLjA3NTI2NCAxMjMuNTExODA4ek0xOTQuMDU5MjY0IDE5My4xNDM4MDhjMCA3My4zODcwMDggMCAxNDYuNzcyOTkyIDAgMjIwLjE2IDczLjM4NzAwOCAwIDE0Ni43NzI5OTIgMCAyMjAuMTYgMCAwLTc0LjQxMTAwOCAwLTE0OC44MjA5OTIgMC0yMjMuMjMyLTczLjA0NDk5MiAwLTE0Ni4wOTEwMDggMC0yMTkuMTM2IDBDMTkzLjg5MDMwNCAxOTAuMjQzODQgMTkzLjk3MTIgMTkxLjY5MDc1MiAxOTQuMDU5MjY0IDE5My4xNDM4MDh6IiBwLWlkPSIzNzAzIi8+PHBhdGggZD0iTTU2MS42NzUyNjQgMTIzLjUxMTgwOGMxMDEuNzE2OTkyIDAgMjAzLjQzNTAwOCAwIDMwNS4xNTIgMCAxMi40NDc3NDQgNC42MTgyNCAyMS4wMDEyMTYgMTMuMTMyOCAyMy41NTIgMjcuNjQ4IDAgMTAwLjM1MiAwIDIwMC43MDUwMjQgMCAzMDEuMDU2LTIuNzkyNDQ4IDEyLjUxMDIwOC05LjMyNDU0NCAyMy4xOTY2NzItMjEuNTA0IDI2LjYyNC0xOS45MDQ1MTIgNS42MDAyNTYtNTIuOTc3NjY0IDEuMDI0LTc2LjggMS4wMjQtNTYuMTI3NDg4IDAtMTAyLjE0OTEyIDAtMTU2LjY3MiAwLTIzLjYyNjc1MiAwLTU4LjY0MjQzMiA0Ljk3NjY0LTc3LjgyNC0xLjAyNC0yNy4wNzc2MzItOC40NzE1NTItMTkuNDU2LTYxLjMyOTQwOC0xOS40NTYtOTguMzA0IDAtNDkuMTE1MTM2IDAtMTA2LjQ0NTgyNCAwLTE1Ny42OTZDNTM4LjEyMzI2NCAxODAuMTQ4MjI0IDUyOC43NTI2NCAxMjkuNDc2NjA4IDU2MS42NzUyNjQgMTIzLjUxMTgwOHpNNjAzLjY1OTI2NCAxOTMuMTQzODA4YzAgNzMuMzg3MDA4IDAgMTQ2Ljc3Mjk5MiAwIDIyMC4xNiA3My4zODcwMDggMCAxNDYuNzcyOTkyIDAgMjIwLjE2IDAgMC03NC40MTEwMDggMC0xNDguODIwOTkyIDAtMjIzLjIzMi03My4wNDQ5OTIgMC0xNDYuMDkxMDA4IDAtMjE5LjEzNiAwQzYwMy40OTAzMDQgMTkwLjI0Mzg0IDYwMy41NzEyIDE5MS42OTA3NTIgNjAzLjY1OTI2NCAxOTMuMTQzODA4eiIgcC1pZD0iMzcwNCIvPjxwYXRoIGQ9Ik0yOTQuNDExMjY0IDI1Ny42NTU4MDhjMzAuNjYxNjMyLTUuNzg2NjI0IDU0Ljc3NDc4NCAxNC45MzA5NDQgNTUuMjk2IDQzLjAwOCAwLjY4NzEwNCAzNy4wMjU3OTItMzcuMTI5MjE2IDU3LjM2NTUwNC02Ni41NiA0MS45ODRDMjQ5LjQ3NzEyIDMyNS4wNTAzNjggMjUxLjY5MzA1NiAyNjUuNzE3NzYgMjk0LjQxMTI2NCAyNTcuNjU1ODA4eiIgcC1pZD0iMzcwNSIvPjxwYXRoIGQ9Ik03MDQuMDExMjY0IDI1Ny42NTU4MDhjNzIuMjIzNzQ0LTEzLjQ5MzI0OCA3MC44MzkyOTYgMTAwLjg4NjUyOCAwIDg5LjA4OEM2NTguOTI5NjY0IDMzOS4yMzU4NCA2NTcuNDc0NTYgMjY2LjM1MDU5MiA3MDQuMDExMjY0IDI1Ny42NTU4MDh6IiBwLWlkPSIzNzA2Ii8+PHBhdGggZD0iTTQ1NS4xNzkyNjQgODk1LjYwNzgwOGMtMTAwLjY5Mjk5MiAwLTIwMS4zODU5ODQgMC0zMDIuMDggMC0xMi41NDA5MjgtMy44NDMwNzItMjEuMDEyNDgtMTEuNzU1NTItMjQuNTc2LTI0LjU3NiAwLTEwMi43NDA5OTIgMC0yMDUuNDgzMDA4IDAtMzA4LjIyNCAyLjk4MjkxMi05LjAxOTM5MiA5Ljg2ODI4OC0xOS41NDIwMTYgMjAuNDgtMjIuNTI4IDIwLjA0NDgtNS42NDAxOTIgNTIuNzg3Mi0xLjAyNCA3Ni44LTEuMDI0IDU1LjE4OTUwNCAwIDEwNS4xODQyNTYgMCAxNTYuNjcyIDAgMjMuMTU0Njg4IDAgNTYuODUyNDgtNS4xNjgxMjggNzcuODI0IDEuMDI0IDI4LjM3MTk2OCA4LjM3NjMyIDIwLjQ4IDYwLjM3NjA2NCAyMC40OCA5Ny4yOCAwIDU2LjcyOTYgMCAxMDUuMTIxNzkyIDAgMTYyLjgxNkM0ODAuNzc5MjY0IDg0MC4yMDYzMzYgNDg5LjM1NjI4OCA4OTIuMDUxNDU2IDQ1NS4xNzkyNjQgODk1LjYwNzgwOHpNMTk0LjA1OTI2NCA2MDguODg3ODA4YzAgNzMuMzg4MDMyIDAgMTQ2Ljc3Mjk5MiAwIDIyMC4xNiA3My4zODcwMDggMCAxNDYuNzcyOTkyIDAgMjIwLjE2IDAgMC03NC40MTEwMDggMC0xNDguODIwOTkyIDAtMjIzLjIzMi03My4wNDQ5OTIgMC0xNDYuMDkxMDA4IDAtMjE5LjEzNiAwQzE5My44OTAzMDQgNjA1Ljk4Nzg0IDE5My45NzEyIDYwNy40MzQ3NTIgMTk0LjA1OTI2NCA2MDguODg3ODA4eiIgcC1pZD0iMzcwNyIvPjxwYXRoIGQ9Ik04OTAuMzc5MjY0IDU2Ni45MDM4MDhjMCAyOC42NzIgMCA1Ny4zNDQgMCA4Ni4wMTYtMi4zODg5OTIgMjkuMDE0MDE2LTAuMzQyMDE2IDYyLjQ2Mjk3Ni0xLjAyNCA5My4xODQtNzIuNzA0IDAtMTQ1LjQwOCAwLTIxOC4xMTIgMCAwLTE2LjcyNDk5MiAwLTMzLjQ1MTAwOCAwLTUwLjE3Ni0yMC40ODEwMjQtMi4zODc5NjgtNDUuMzk1OTY4LTAuMzQyMDE2LTY3LjU4NC0xLjAyNC0yLjM4ODk5MiA2NC44NTQwMTYtMC4zNDA5OTIgMTM0LjE0Mjk3Ni0xLjAyNCAyMDAuNzA0LTEzLjMxMiAwLTI2LjYyNCAwLTM5LjkzNiAwLTM0LjMzNzc5Mi02Ljg4MjMwNC0yNC41NzYtNTguNDA3OTM2LTI0LjU3Ni05OS4zMjggMC01Ny4wNzg3ODQgMC0xMDQuMDQyNDk2IDAtMTU4LjcyIDAtMjMuODY1MzQ0LTQuODMwMjA4LTU5LjY0Mjg4IDEuMDI0LTc4Ljg0OCA2Ljk4NDcwNC0yMi45MTMwMjQgMzcuMjc0NjI0LTE5LjQ1NiA2Ny41ODQtMTkuNDU2IDUxLjI0MDk2IDAgOTYuODkxOTA0IDAgMTQ4LjQ4IDAgMCA0NS4zOTY5OTIgMCA5MC43OTUwMDggMCAxMzYuMTkyIDIyLjg2ODk5MiAwIDQ1LjczOTAwOCAwIDY4LjYwOCAwIDAuNjgxOTg0LTQ1LjA1Ni0xLjM2NDk5Mi05Mi44NDE5ODQgMS4wMjQtMTM2LjE5MkM4NTcuODU4MDQ4IDUzNy4zMDIwMTYgODg4LjQzOTgwOCA1MzcuNzgzMjk2IDg5MC4zNzkyNjQgNTY2LjkwMzgwOHoiIHAtaWQ9IjM3MDgiLz48cGF0aCBkPSJNMjk5LjUzMTI2NCA2NzIuMzc1ODA4YzMyLjc0MDM1Mi0zLjYyMzkzNiA1OS44MDQ2NzIgMjcuODQxNTM2IDQ3LjEwNCA2Mi40NjQtMTcuNjA0NjA4IDQ3Ljk4OTc2LTEwMS43Nzg0MzIgMjkuOTUzMDI0LTg2LjAxNi0zMC43MkMyNjQuOTc2Mzg0IDY4Ny4zNDg3MzYgMjc3LjU2MTM0NCA2NzQuODA3ODA4IDI5OS41MzEyNjQgNjcyLjM3NTgwOHoiIHAtaWQ9IjM3MDkiLz48cGF0aCBkPSJNNzQ0Ljk3MTI2NCA4OTUuNjA3ODA4Yy0yNC41NzYgMC00OS4xNTIgMC03My43MjggMCAwLjY4MTk4NC0yNi4yODQwMzItMS4zNjM5NjgtNTUuMjk0OTc2IDEuMDI0LTc5Ljg3MiAyNC4yMzUwMDggMCA0OC40Njg5OTIgMCA3Mi43MDQgMEM3NDQuOTcxMjY0IDg0Mi4zNTk4MDggNzQ0Ljk3MTI2NCA4NjguOTgzODA4IDc0NC45NzEyNjQgODk1LjYwNzgwOHoiIHAtaWQ9IjM3MTAiLz48cGF0aCBkPSJNODkwLjM3OTI2NCA4MTUuNzM1ODA4YzAgMTcuNDA4IDAgMzQuODE2IDAgNTIuMjI0LTIuODQ2NzIgMTQuNTYxMjgtMTEuMzYxMjggMjMuNDU0NzItMjQuNTc2IDI3LjY0OC0xNy40MDggMC0zNC44MTYgMC01Mi4yMjQgMCAwLjY4MTk4NC0yNi4yODQwMzItMS4zNjM5NjgtNTUuMjk0OTc2IDEuMDI0LTc5Ljg3MkM4MzkuODYyMjcyIDgxNS43MzU4MDggODY1LjEyMDI1NiA4MTUuNzM1ODA4IDg5MC4zNzkyNjQgODE1LjczNTgwOHoiIHAtaWQ9IjM3MTEiLz48L3N2Zz4=)"},d=function(e){function M(e){var t;return Object(i.a)(this,M),(t=Object(j.a)(this,Object(I.a)(M).call(this,e))).handleBack=t.handleBack.bind(Object(D.a)(t)),t.handleForward=t.handleForward.bind(Object(D.a)(t)),t.handleRefresh=t.handleRefresh.bind(Object(D.a)(t)),t.handleUrlChange=t.handleUrlChange.bind(Object(D.a)(t)),t.handleDoc=t.handleDoc.bind(Object(D.a)(t)),t}return Object(g.a)(M,e),Object(c.a)(M,[{key:"render",value:function(){var e=this;return a.createElement("div",{className:"toolbar"},a.createElement("div",{className:"inner"},a.createElement("button",{className:"backward",title:"backward",style:l,onClick:this.handleBack,disabled:!this.props.canGoBack},"Backward"),a.createElement("button",{className:"forward",title:"forward",style:A,onClick:this.handleForward,disabled:!this.props.canGoForward},"Forward"),a.createElement("button",{className:"refresh",title:"refresh",style:T,onClick:this.handleRefresh},"Refresh"),a.createElement(o,{url:this.props.url,onUrlChanged:this.handleUrlChange,onActionInvoked:this.props.onActionInvoked}),a.createElement("button",{className:"doc",title:"doc",style:y,onClick:this.handleDoc},"doc"),a.createElement("button",{className:"QR-code",style:z,onMouseEnter:function(){return e.handleQRCodeMouseMove()}},a.createElement("div",{className:"QR-code-canvas"},a.createElement("canvas",{id:"canvas"})))))}},{key:"renderCanvasQRCode",value:function(e){var M=document.getElementById("canvas");M&&(r.a.toCanvas(M,e),M.setAttribute("style","height: 100px;width: 100px;"))}},{key:"handleQRCodeMouseMove",value:function(){this.renderCanvasQRCode(this.props.url)}},{key:"handleDoc",value:function(){this.props.onActionInvoked("openDoc",{url:"https://cloudstudio.net/docs/guide/preview.html"})}},{key:"handleUrlChange",value:function(e){this.props.onActionInvoked("urlChange",{url:e})}},{key:"handleBack",value:function(){this.props.onActionInvoked("backward",{})}},{key:"handleForward",value:function(){this.props.onActionInvoked("forward",{})}},{key:"handleRefresh",value:function(){this.props.onActionInvoked("refresh",{})}}]),M}(a.Component),h=t(20),L=function(){function e(){Object(i.a)(this,e),this.enabled=!0}return Object(c.a)(e,[{key:"enable",value:function(){this.enabled=!0}},{key:"disable",value:function(){this.enabled=!1}},{key:"log",value:function(){var e;this.enabled&&(e=console).log.apply(e,arguments)}}]),e}(),O=function(e){function M(){var e;return Object(i.a)(this,M),(e=Object(j.a)(this,Object(I.a)(M).call(this))).lastId=void 0,e.vscode=void 0,e.callbacks=void 0,e.logger=void 0,e.lastId=0,e.callbacks=new Map,e.logger=new L,window.addEventListener("message",function(M){e.onMessage(M)}),e}return Object(g.a)(M,e),Object(c.a)(M,[{key:"send",value:function(e){var M=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=++this.lastId;if(this.logger.log("SEND \u25ba ",e,t),!this.vscode)try{this.vscode=acquireVsCodeApi()}catch(n){this.vscode=null}return this.vscode&&this.vscode.postMessage({callbackId:a,params:t,type:e}),new Promise(function(t,n){M.callbacks.set(a,{resolve:t,reject:n,error:new Error,method:e})})}},{key:"onMessage",value:function(e){var M=e.data;if(M)if(M.callbackId){this.logger.log("\u25c0 RECV callbackId: ".concat(M.callbackId));var t=this.callbacks.get(M.callbackId);t&&(this.callbacks.delete(M.callbackId),M.error?t.reject(M.error,t.method,M):t.resolve(M.result))}else this.logger.log("\u25c0 RECV method: ".concat(M.method)),this.emit(M.method,M.result)}},{key:"enableVerboseLogging",value:function(e){e?this.logger.enable():this.logger.disable()}}]),M}(h.EventEmitter2),w=function(e){function M(e){var t;return Object(i.a)(this,M),(t=Object(j.a)(this,Object(I.a)(M).call(this,e))).connection=new O,t.state={url:"about:blank",historyList:[],currentIndex:0,loadingPercent:0,history:{canGoBack:!1,canGoForward:!1}},t.onToolbarActionInvoked=t.onToolbarActionInvoked.bind(Object(D.a)(t)),t}return Object(g.a)(M,e),Object(c.a)(M,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){var M=document.querySelector("#webviewIframe"),t=M?M.dataset.defaulturl:"";e.handleUrlChange({url:t})})}},{key:"render",value:function(){return a.createElement("div",{className:"App"},a.createElement(d,{url:this.state.url,onActionInvoked:this.onToolbarActionInvoked,canGoBack:this.state.history.canGoBack,canGoForward:this.state.history.canGoForward}),this.state.loadingPercent<100&&a.createElement(s,{percent:this.state.loadingPercent}))}},{key:"onToolbarActionInvoked",value:function(e,M){switch(e){case"forward":this.handleForward();break;case"backward":this.handleBackward();break;case"refresh":this.handleRefresh();break;case"urlChange":this.handleUrlChange(M);break;case"openDoc":this.connection.send("Page.openDoc",{url:M.url})}}},{key:"handleLoadingBar",value:function(){var e=this,M=setInterval(function(){e.state.loadingPercent>=100?clearInterval(M):e.setState({loadingPercent:e.state.loadingPercent+20})},50)}},{key:"handleForward",value:function(){this.handleLoadingBar();var e=this.state.currentIndex+1;this.connection.send("Page.changeUrl",{url:this.state.historyList[e]}),document.getElementById("webviewIframe")&&(document.getElementById("webviewIframe").src=this.state.historyList[e],document.getElementById("openInBrowser").href=this.state.historyList[e]),this.setState({url:this.state.historyList[e],currentIndex:e,loadingPercent:0,history:{canGoBack:0!==e,canGoForward:e!==this.state.historyList.length-1}})}},{key:"handleBackward",value:function(){this.handleLoadingBar();var e=this.state.currentIndex-1;this.connection.send("Page.changeUrl",{url:this.state.historyList[e]}),document.getElementById("webviewIframe")&&(document.getElementById("webviewIframe").src=this.state.historyList[e],document.getElementById("openInBrowser").href=this.state.historyList[e]),this.setState({url:this.state.historyList[e],currentIndex:e,loadingPercent:0,history:{canGoBack:0!==e,canGoForward:e!==this.state.historyList.length-1}})}},{key:"handleRefresh",value:function(){this.handleLoadingBar(),this.connection.send("Page.changeUrl",{url:this.state.url}),document.getElementById("webviewIframe")&&(document.getElementById("webviewIframe").src=this.state.url,document.getElementById("openInBrowser").href=this.state.url),this.setState({loadingPercent:0})}},{key:"handleUrlChange",value:function(e){this.handleLoadingBar();var M=Object(N.a)(this.state.historyList);console.log("url info: > ",e),e.url!==M[M.length-1]&&M.push(e.url),this.connection.send("Page.changeUrl",{url:e.url}),document.getElementById("webviewIframe")&&(document.getElementById("webviewIframe").src=e.url,document.getElementById("openInBrowser").href=e.url),this.setState({historyList:M,url:e.url,loadingPercent:0,currentIndex:M.length-1,history:{canGoBack:M.length-1!==0,canGoForward:!1}})}}]),M}(a.Component);t(56);n.render(a.createElement(w,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.34948ea1.chunk.js.map