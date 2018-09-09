Ext.define('Sandbox.view.client.ClientList', {
    extend: 'Ext.grid.Panel',
    xtype: 'clientlist',
    viewModel: 'clientlist',
    controller: 'clientlist',
    title: 'Клиенты',
    tbar: [
        '->',
        {text: 'Обновить', iconCls: 'pictos pictos-refresh', handler: 'onClientListRefresh'}
    ],
    bind: '{clientList}',
    viewConfig: {
        emptyText: 'Ни одного клиента не найдено'
    },
    columns: [{
        text: 'Клиент',
        dataIndex: 'clientName',
        align: 'left',
        flex: 1
    }, {
        text: 'Тип',
        dataIndex: 'clientType',
        align: 'left',
        flex: 1
    }, {
        text: 'ИНН',
        dataIndex: 'inn',
        align: 'left',
        flex: 1
    }, {
        text: 'КПП',
        dataIndex: 'kpp',
        align: 'left',
        flex: 1
    }]
});