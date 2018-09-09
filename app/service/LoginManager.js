Ext.define('Sandbox.service.LoginManager', {
    singleton: true,

    isLoggedIn: function () {
        return !!this.getProfile();
    },

    getUsername: function () {
        var profile = this.getProfile();
        if (profile) {
            return profile['username'];
        }
    },

    getProfile: function () {
        let profile = localStorage.getItem('profile');
        if (profile) {
            return Ext.decode(profile);
        }
        return null;
    },

    saveProfile: function (profile) {
        localStorage.setItem('profile', profile);
    },

    removeProfile: function () {
        localStorage.removeItem('profile');
    },

    login: function (username, password) {
        var deferred = new Ext.Deferred();
        Ext.Ajax.request({
            url: '/api/login',
            method: 'POST',
            jsonData: {
                'username': username,
                'password': password
            },
            success: function (response) {
                console.info('login success');
                Sandbox.service.LoginManager.saveProfile(response.responseText);
                deferred.resolve(response, response);
            },
            failure: function (response) {
                console.info('login failure');
                Sandbox.service.LoginManager.removeProfile();
                deferred.reject(response, response);
            }
        });
        return deferred.promise;
    },

    logout: function () {
        var deferred = new Ext.Deferred();
        Ext.Ajax.request({
            url: '/api/logout',
            method: 'POST',
            success: function (response) {
                console.info('logout success');
                Sandbox.service.LoginManager.removeProfile();
                deferred.resolve(response, response);
            },
            failure: function (response) {
                console.info('logout failure');
                deferred.reject(response, response);
            }
        });
        return deferred.promise;
    }
});