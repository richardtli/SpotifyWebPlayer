(this["webpackJsonpweb-playback-sdk-sample-app"]=this["webpackJsonpweb-playback-sdk-sample-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(11),o=n.n(c),s=n(9),i=n(12),u=n(3),l=n(0);var b=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("a",{className:"btn-spotify",href:"https://myspotifyserver.onrender.com/auth/login",children:"Login with Spotify"})})})},d=(n(18),n(10)),j=n(5),h={name:"",album:{images:[{url:""}]},artists:[{name:""}]},m="";var p=function(e){var t=Object(a.useState)([!1,!1,h]),n=Object(u.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(void 0),s=Object(u.a)(o,2),i=s[0],b=s[1];return Object(a.useEffect)((function(){var t=document.createElement("script");t.src="https://sdk.scdn.co/spotify-player.js",t.async=!0,document.body.appendChild(t),window.onSpotifyWebPlaybackSDKReady=function(){var t=new window.Spotify.Player({name:"Spotify Visualizer",getOAuthToken:function(t){t(e.token)},volume:1});b(t),t.addListener("ready",(function(e){var t=e.device_id;console.log("Ready with Device ID",t)})),t.addListener("not_ready",(function(e){var t=e.device_id;console.log("Device ID has gone offline",t)})),t.addListener("player_state_changed",(function(e){e&&t.getCurrentState().then((function(e){c(e?[e.paused,!0,e.track_window.current_track]:[e.paused,!1,e.track_window.current_track])}))})),t.connect()}}),[]),r[1]?(m!=r[2].name&&(e.songChange(r[2].album.images[2].url),m=r[2].name),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("img",{src:r[2].album.images[2].url,className:"now-playing__cover",alt:""}),Object(l.jsx)("div",{className:"player",children:Object(l.jsxs)("div",{className:"player-buttons",children:[Object(l.jsx)("div",{className:"btn-spotify",onClick:function(){i.previousTrack()},children:Object(l.jsx)(j.c,{})}),Object(l.jsx)("div",{className:"btn-spotify",onClick:function(){i.togglePlay()},children:r[0]?Object(l.jsx)(j.b,{}):Object(l.jsx)(j.a,{})}),Object(l.jsx)("div",{className:"btn-spotify",onClick:function(){i.nextTrack()},children:Object(l.jsx)(j.d,{})})]})})]})})):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"main-wrapper",children:Object(l.jsx)("b",{children:'Transfer playback in your Spotify app to "Spotify Vizualizer".'})})})})},f=n(6);var g,v,O,x,y,k,w=function(e){return Object(l.jsx)("span",{className:"bubble",style:{top:"".concat(e.top,"vh"),animationDuration:"".concat(e.animationDuration,"s"),scale:"".concat(e.scale),backgroundColor:"".concat(e.backgroundColor),boxShadow:"0 0 0 calc(var(--w)/4) ".concat(e.backgroundColor,"51,\n            0 0 calc(var(--w)* 2) ").concat(e.backgroundColor,",\n            0 0 calc(var(--w)* 4) ").concat(e.backgroundColor)}})},N=[];for(var M=0;M<200;M++)g=40*Math.random()+10,N.push(Object(l.jsx)(w,{top:120*Math.random()-10,animationDuration:500/g,scale:(v=g,O=10,x=50,y=.5,k=3,(v-O)*(k-y)/(x-O)+y),backgroundColor:"green"},M));var _=N;var C=function(e){var t=_.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{props:Object(f.a)(Object(f.a)({},t.props),{},{backgroundColor:e.colorsArray[Math.floor(Math.random()*e.colorsArray.length)]})})}));return Object(l.jsx)("div",{className:"bubblesContainer",children:t})};var A=function(e){var t=r.a.useState(["red"]),n=Object(u.a)(t,2),a=n[0],c=n[1],o=function e(t,n){if(4===n||0===t.length){var a=t.reduce((function(e,t){return e.r+=t.r,e.g+=t.g,e.b+=t.b,e}),{r:0,g:0,b:0});return a.r=Math.round(a.r/t.length),a.g=Math.round(a.g/t.length),a.b=Math.round(a.b/t.length),[a]}var r=function(e){var t=Number.MAX_VALUE,n=Number.MAX_VALUE,a=Number.MAX_VALUE,r=Number.MIN_VALUE,c=Number.MIN_VALUE,o=Number.MIN_VALUE;e.forEach((function(e){t=Math.min(t,e.r),n=Math.min(n,e.g),a=Math.min(a,e.b),r=Math.max(r,e.r),c=Math.max(c,e.g),o=Math.max(o,e.b)}));var s=r-t,i=c-n,u=o-a,l=Math.max(s,i,u);return l===s?"r":l===i?"g":"b"}(t);t.sort((function(e,t){return e[r]-t[r]}));var c=t.length/2;return[].concat(Object(d.a)(e(t.slice(0,c),n+1)),Object(d.a)(e(t.slice(c+1),n+1)))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{token:e.token,songChange:function(e){var t=new Image;t.crossOrigin="Anonymous",t.onload=function(){var e=document.createElement("canvas");e.width=500,e.height=500;var n=e.getContext("2d");n.drawImage(t,0,0);var a=function(e){for(var t=[],n=0;n<e.length;n+=4){var a={r:e[n],g:e[n+1],b:e[n+2]};t.push(a)}return t}(n.getImageData(0,0,e.width,e.height).data),r=o(a,0),s=function(e){var t=function(e){return.2126*e.r+.7152*e.g+.0722*e.b};return e.sort((function(e,n){return t(n)-t(e)}))}(r).map((function(e){return function(e){var t=function(e){var t=e.toString(16);return 1==t.length?"0"+t:t};return("#"+t(e.r)+t(e.g)+t(e.b)).toUpperCase()}(e)}));c(s)},t.src=e}}),Object(l.jsx)(C,{colorsArray:a})]})};var S=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(Object(s.a)().mark((function e(){var t,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.access_token);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsx)(l.Fragment,{children:""===n?Object(l.jsx)(b,{}):Object(l.jsx)(A,{token:n})})};n(19);o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.f2b34b18.chunk.js.map