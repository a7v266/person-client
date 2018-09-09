Ext.define('Sandbox.Application', {
    extend: 'Ext.app.Application',
    name: 'Sandbox',
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    requires: [
        'Ext.window.Toast',
        'Sandbox.view.main.Main',
        'Sandbox.view.login.Login'
    ],

    launch: function () {

        Ext.Ajax.on('beforerequest', function (connection, options) {
            let profile = Sandbox.controller.LoginController.getProfile();
            if (profile) {
                options.headers = options.headers || {};
                options.headers['X-Auth-Token'] = profile.token;
            }
        });

        Ext.Ajax.on('requestcomplete', function (connection, response, options) {
            if (Ext.isObject(options)) {
                if (options.method === 'POST') {
                    Ext.toast({
                        title: 'Успех',
                        html: 'Запрос успешно выполнен',
                        align: 'br',
                        bodyPadding: 10
                    });
                }
            }
        });

        Ext.Ajax.on('requestexception', function (connection, response, options) {
            let title = 'Ошибка';
            let html = 'Возникла какая-то ошибка';
            if (Ext.isObject(response)) {
                switch (response.status) {
                    case 0:
                        html = 'Отсутствует соединение с сервером';
                        break;
                    case 401:
                        html = 'Доступ запрещен';
                        Sandbox.controller.LoginController.removeProfile();
                        Sandbox.getApplication().getMainView().close();
                        Sandbox.getApplication().showLogin();
                        break;
                    default:
                        try {
                            let errorCollector = Ext.decode(response.responseText);
                            if (Ext.isObject(errorCollector)) {
                                if (Ext.isString(errorCollector.title)) {
                                    title = errorCollector.title;
                                }
                                if (Ext.isArray(errorCollector.errors)) {
                                    html = errorCollector.errors.join('<br>')
                                }
                            }
                        } catch (exception) {
                        }
                }
            }
            Ext.toast({
                title: title,
                html: html,
                align: 'br',
                bodyPadding: 10,
                width: 300
            });
        });

        if (Ext.fly('initialLoader')) {
            Ext.fly('initialLoader').destroy();
        }

        if (Sandbox.controller.LoginController.isLoggedIn()) {
            this.showApplication();
        } else {
            this.showLogin();
        }
    },

    showLogin: function () {
        Ext.create({xtype: 'login'}).on('login', 'onLogin', this);
    },

    showApplication: function () {
        this.setMainView({xtype: 'main'});
        this.getMainView().on('logout', 'onLogout', this);
    },

    onLogin: function () {
        this.showApplication();
    },

    onLogout: function () {
        this.showLogin();
    },
});
