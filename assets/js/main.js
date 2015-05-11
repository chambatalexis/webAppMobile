require.config({
    paths: {
        jquery: 'vendor/jquery/jquery', // -> vendor/jquery/jquery.js
        underscore : 'vendor/underscore/underscore', // -> vendor/underscore/underscore/js
        backbone: 'vendor/backbone/backbone', // -> vendor/backbone/backbone.js
        text: 'vendor/require/text', // -> vendor/backbone/backbone.js
        bootstrap:  "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min"  

    },
    shim: {
        'backbone': {
            deps: ['underscore','jquery'],
            export: 'Backbone'
        },
        'underscore': {
            export: '_'
        },
        'jquery': {
            export: '$'
        }
        "bootstrap" : deps :['jquery'] }
    },
    urlArgs: "_=" + (new Date()).getTime()
});


require(
[
    'app'
] , function(App){
    // console.log(app);
    App.initialize();
});
require(['jquery', 'bootstrap'], function($){

    // DOM ready
    $(function(){

        // Twitter Bootstrap 3 carousel plugin
        $("#element").carousel();
    });
});