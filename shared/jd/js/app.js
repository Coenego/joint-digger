require.config({
    'baseUrl': 'shared',
    'paths': {

        // Core
        'bootstrap': 'vendor/js/bootstrap/dist/js/bootstrap.min',
        'box2d': 'vendor/js/box2d-html5/package/box2d-html5',
        'jquery': 'vendor/js/jquery/jquery.min',
        'lodash': 'vendor/js/lodash/dist/lodash.underscore.min',

        // Config
        'config': 'jd/js/app/config'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

requirejs(['jd/js/app/main']);
