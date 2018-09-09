Ext.define('Sandbox.data.field.LocalDate', {
    extend: 'Ext.data.field.Date',
    alias: 'data.field.localdate',
    dateFormat: 'Y-m-d',

    convert: function (value, record) {
        if (Ext.isDate(value)) {
            return value;
        }
        if (Ext.isString(value)) {
            return Ext.Date.parse(value, this.dateFormat)
        }
    },

    serialize: function (value, record) {
        if (Ext.isDate(value)) {
            return Ext.Date.format(value, this.dateFormat)
        }
    }
});