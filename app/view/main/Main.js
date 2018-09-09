Ext.define('Sandbox.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    required: [
        'Sandbox.view.main.MainModel',
        'Sandbox.view.main.MainController',
        'Sandbox.view.client.ClientList',
        'Sandbox.view.contract.ContractList'
    ],
    viewModel: 'main',
    controller: 'main',
    tabBarHeaderPosition: 1,
    header: {
        title: {
            bind: 'Песочница',
            padding: '0 30 0 0',
            flex: 0
        }
    },
    tabBar: {
        flex: 1
    },
    items: [
        {title: 'Клиенты', xtype: 'clientlist'},
        {title: 'Контракты', xtype: 'contractlist'}
    ],
    tools: [{
        type: 'close',
        tooltip: 'Выйти из приложения',
        handler: 'logout'
    }]
});
