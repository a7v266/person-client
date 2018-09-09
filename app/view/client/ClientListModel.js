Ext.define('Sandbox.view.client.ClientListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.clientlist',
    stores: {
        clientList: {
            type: 'client'
        }
    }
});