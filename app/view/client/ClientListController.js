Ext.define('Sandbox.view.person.ClientListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clientlist',
    onClientListRefresh: function (source) {
        this.getView().getStore('clientlist').load();
    }
});