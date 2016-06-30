//Asynchronously load third-party JavaScripts in your site.
//Created by @snkrsnkampa
(function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'https://example.com/script.js';
    s.parentNode.insertBefore(g, s);
}(document, 'script'));
