Ext.define('Sandbox.model.ContractStatus', {
    extend: 'Sandbox.model.Base',
    fields: [
        {name: 'title', type: 'string'}
    ],
    proxy: {
        url: '/api/contract-status'
    }
});