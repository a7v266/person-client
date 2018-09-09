Ext.define('Sandbox.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    controller: 'login',
    title: 'Вход в приложение',
    autoShow: true,
    closable: false,
    resizable: false,
    items: {
        xtype: 'form',
        reference: 'form',
        bodyPadding: 10,
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Логин',
            allowBlank: false,
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false,
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }],
        buttons: [
            {
                text: 'Войти',
                formBind: true,
                listeners: {
                    click: 'onLoginClick'
                }
            }]
    }
});