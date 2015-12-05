require.config({
    baseUrl: "assets/js",
    paths: {
        jquery: "ui/jquery.min",
        bootstrap: "ui/bootstrap.min",
        jquery_appear: "ui/jquery.appear.min",
        jquery_countTo: "ui/jquery.countTo.min",
        jquery_placeholder: "ui/jquery.placeholder.min",
        jquery_scrollLock: "ui/jquery.scrollLock.min",
        jquery_slimscroll: "ui/jquery.slimscroll.min",
        js_cookie: "ui/js.cookie.min"
    }
});
var app = {
    load_base_ui: function () {
        require([
            'jquery',
            'bootstrap',
            'jquery',
            'jquery_appear',
            'jquery_countTo',
            'jquery_placeholder',
            'jquery_scrollLock',
            'jquery_slimscroll',
            'js_cookie'
        ], function () {
            console.log('ui dependencies loaded succesfully!');
            require(['ui/app'], function () {
                console.log("ui script loaded succesfully!");
            });
        });
    },
    init:function(){
        this.load_base_ui();
    }
};
app.init();