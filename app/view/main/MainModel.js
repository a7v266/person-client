Ext.define('Sandbox.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    formulas: {
        username: function (get) {
            return Sandbox.controller.LoginController.getUsername();
        }
    }
});