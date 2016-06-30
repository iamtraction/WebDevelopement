// Asynchronously load non-critical css
//Created by @snkrsnkampa
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("//example.com/style.css"), //replace the url with the url of your css
loadCSS("//example.com/style2.css"); //similarly you can add multiple css files
