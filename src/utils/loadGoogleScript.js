// utils/loadGoogleScript.ts
export var loadGoogleScript = function () {
    var scriptId = 'google-client-script';
    return new Promise(function (resolve, reject) {
        if (document.getElementById(scriptId)) {
            resolve();
            return;
        }
        var script = Object.assign(document.createElement('script'), {
            id: scriptId,
            src: 'https://accounts.google.com/gsi/client',
            async: true,
            defer: true,
            onload: function () { return resolve(); },
            onerror: function () { return reject(new Error('❌ Failed to load Google Identity script')); },
        });
        document.head.appendChild(script);
    });
};
