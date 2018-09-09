Ext.define('Sandbox.model.Client', {
    extend: 'Sandbox.model.Base',
    fields: [
        {name: 'clientName', type: 'string'},
        {name: 'clientType', reference: 'Sandbox.model.ClientType'},
        {name: 'inn', type: 'string'},
        {name: 'kpp', type: 'string'}
    ],
    proxy: {
        url: '/api/client'
    }
});