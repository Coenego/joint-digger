define([

        // Core dependencies
        'jquery', 'lodash', 'box2d',

        // Application configuration
        'config',

        // Controllers
        'keyboardController'

    ], function($, _, box2d, config, KeyboardController) {
        'use strict';

        /**
         * Function that adds eventlisteners to the window object
         */
        var addBinding = function() {
            window.addEventListener('keyup', KeyboardController.onKeyUp, false);
            window.addEventListener('keydown', KeyboardController.onKeyDown, false);
        };

        /**
         * Function that initializes application
         */
        var init = function() {

        };

        /**
         * Initialization
         */
        $(function() {
            addBinding();
            init();
        });
    }
);
