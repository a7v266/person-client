Ext.define('Sandbox.view.contract.ContractListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.contractlist',
    stores: {
        contractList: {
            type:'contract'
        }
    }
});