Ext.define('Sandbox.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onSpecialKey: function (field, event) {
        if (event.getKey() === event.ENTER) {
            this.doLogin();
        }
        event.stopEvent();
    },

    onLoginClick: function () {
        this.doLogin();
    },

    doLogin: function () {
        var form = this.lookup('form');
        if (form.isValid()) {
            var values = form.getValues();
            Sandbox.controller.LoginController.login(values.username, values.password)
                .then(() => {
                    this.fireViewEvent('login');
                    this.getView().close();
                });
        }
    }
});