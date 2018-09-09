Ext.define('Sandbox.view.contract.ContractList', {
    extend: 'Ext.grid.Panel',
    xtype: 'contractlist',
    viewModel: 'contractlist',
    controller: 'contractlist',
    title: 'Контракты',
    tbar: [
        '->',
        {xtype: 'button', text: 'Обновить', iconCls: 'pictos pictos-refresh', handler: 'onRefreshContractList'}
    ],
    bind: '{contractList}',
    viewConfig: {
        emptyText: 'Ни одного контракта не найдено'
    },
    columns: [
        {
            text: 'Номер контракта',
            dataIndex: 'contractNumber',
            align: 'left',
            flex: 1
        },
        {
            text: 'Дата контракта',
            dataIndex: 'contractDate',
            align: 'left',
            xtype: 'datecolumn',
            format: 'd.m.Y',
            flex: 1
        },
        {
            text: 'Статус',
            dataIndex: 'contractStatus',
            align: 'left',
            flex: 1
        },
        {
            text: 'Клиент',
            dataIndex: 'client',
            align: 'left',
            flex: 1
        }
    ]
});