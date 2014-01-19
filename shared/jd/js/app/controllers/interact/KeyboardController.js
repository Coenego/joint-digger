define([

        // Application configuration
        'config'

    ], function(config) {
        'use strict';

        // Object that stores the pressed keys
        var _pressed = {};

        /**
         * Constructor
         */
        function KeyboardController() {
            return this;
        };

        /**
         * Function that returns whether a key is being pressed or not
         *
         * @param  {Number}   keyCode    The code of the pressed key
         * @return {Boolean}
         */
        KeyboardController.isKeyDown = function(keyCode) {
            return _pressed[keyCode];
        };

        /**
         * Function that adds a key to the collection
         *
         * @param  {Event}  event    The dispatched event
         */
        KeyboardController.onKeyDown = function(event) {
            _pressed[event.keyCode] = true;
        };

        /**
         * Function that removes a key from the collection
         *
         * @param  {Event}  event    The dispatched event
         */
        KeyboardController.onKeyUp = function(event) {
            delete _pressed[event.keyCode];
        };

        return KeyboardController;
    }
);
