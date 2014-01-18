require.config({
    'baseUrl': 'shared',
    'paths': {

        // Core
        'bootstrap': 'vendor/js/bootstrap/dist/js/bootstrap.min',
        'box2d': 'vendor/js/box2dweb/Box2dWeb-2.1.a.3',
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
