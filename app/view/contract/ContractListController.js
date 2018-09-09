Ext.define('Sandbox.view.contract.ContractListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contractlist',

    onRefreshContractList: function (source) {
        this.getViewModel().getStore('contractList').load();
    },
});