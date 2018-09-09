Ext.define('Sandbox.model.Base', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'}
    ],
    idProperty: 'id',
    schema: {
        proxy: {
            startParam: 'offset',
            limitParam: 'limit',
        },
    }
});
