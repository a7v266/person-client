Ext.define('Sandbox.store.Contract', {
    extend: 'Ext.data.Store',
    model: 'Sandbox.model.Contract',
    alias: 'store.contract',
    pageSize: 20,
    autoLoad: true
});