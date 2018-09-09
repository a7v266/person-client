Ext.define('Sandbox.model.Contract', {
    extend: 'Sandbox.model.Base',
    requires: [
        'Sandbox.data.field.LocalDate'
    ],
    fields: [
        {name: 'contractNumber', type: 'string'},
        {name: 'contractDate', type: 'localdate'},
        {name: 'contractStatus', reference: 'Sandbox.model.ContractStatus'},
        {name: 'client', reference: 'Sandbox.model.Client'}
    ],
    proxy: {
        url: '/api/contract'
    }
});