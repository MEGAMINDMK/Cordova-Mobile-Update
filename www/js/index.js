var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        addCheckAppUpdateInfo();
    }
};

function addCheckAppUpdateInfo() {
    $('version').innerHTML = AppVersion.build;
}

function checkAppUpdate() {
   var updateUrl = "https://url.com/version.xml";
    window.AppUpdate.checkAppUpdate(onSuccess, onFail, updateUrl);
    function onFail() {console.log('fail', JSON.stringify(arguments), arguments);}
    function onSuccess() {
        console.log('success', JSON.stringify(arguments), arguments);
    }
}

function $(id) {
    return document.getElementById(id);
}

app.initialize();

