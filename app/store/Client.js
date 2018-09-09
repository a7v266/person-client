Ext.define('Sandbox.store.Client', {
    extend: 'Ext.data.Store',
    model: 'Sandbox.model.Client',
    alias: 'store.client',
    pageSize: 20,
    autoLoad: true
});