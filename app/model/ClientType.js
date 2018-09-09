Ext.define('Sandbox.model.ClientType', {
    extend: 'Sandbox.model.Base',
    fields: [
        {name: 'title', type: 'string'}
    ],
    proxy: {
        url: '/api/client-type'
    }
});