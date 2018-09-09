Ext.define('Sandbox.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    logout: function () {
        Sandbox.controller.LoginController.logout().then(() => {
            console.info('fire logout event');
            this.fireViewEvent('logout');
            this.getView().close();
        });
    }
});
