Ext.define('MyExtGenApp.Application', {
    extend: 'Ext.app.Application',
    name: 'MyExtGenApp',
    requires: ['MyExtGenApp.*'],
    defaultToken: 'homeview',

    removeSplash: function () {
        Ext.getBody().removeCls('launching')
        var elem = document.getElementById("splash")
        elem.parentNode.removeChild(elem)
    },

    launch: function () {
        this.removeSplash()
        var whichView = 'mainview'
        // Ext.Viewport.add([{xtype: whichView}])
        const panel = Ext.create('Ext.panel.Panel', {
            layout: 'fit',
            renderTo: Ext.Element.get('extjs_app'),
            items: [{xtype: whichView}]
        });
        Ext.Viewport.add(panel);
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});