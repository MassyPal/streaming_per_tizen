(function () {
    'use strict';

    window.addEventListener('load', function () {
        console.log('Streaming per Tizen avviata');
    });

    document.addEventListener('tizenhwkey', function (event) {
        if (event.keyName === 'back') {
            if (window.tizen && tizen.application && tizen.application.getCurrentApplication) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (error) {
                    console.warn('Impossibile chiudere l\'app:', error);
                }
            }
        }
    });
}());
