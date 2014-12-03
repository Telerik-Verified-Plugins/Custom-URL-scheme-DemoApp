// This function needs to be a first class citizen, so place it at the root of a .js file, or bind it to the window object.
// Also, if you need to access Cordova functions inside this function, make sure 'deviceready' has fired
function handleOpenURL(url) {
    // wrapping in a little timeout, so it doesn't interfere with other app setup stuff
    setTimeout(function() {
        alert("App launch URL:\n" + url);
    }, 300);
};

(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({
        composeEmail : function() {
            // Change the 'mycoolapp' bit here if you're using a different URL scheme
            window.location = "mailto:?subject=Custom URL scheme demo&body=<a href='mycoolapp://my/path?foo=bar'>link</a>"
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);
