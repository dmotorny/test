var $ = require('jquery');

var str = require('./constant');

var App = function() {
    console.log(str);
    $('body').html('<h1>hello</h1>');
}

var app = new App();