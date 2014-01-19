define([

        // Core dependencies
        'jquery', 'lodash', 'box2d',

        // Application configuration
        'config',

        // Models
        'vehicle'

        // Controllers
        'keyboardController', 'soundController'

    ], function($, _, box2d, config, KeyboardController, SoundController) {
        'use strict';

        /**
         * Function that adds eventlisteners to the window object
         */
        var addBinding = function() {
            window.addEventListener('keyup', KeyboardController.onKeyUp, false);
            window.addEventListener('keydown', KeyboardController.onKeyDown, false);
        };

        /**
         * Function that initializes the application
         */
        var init = function() {

            // Initialize the sound controller
            SoundController.init();
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
