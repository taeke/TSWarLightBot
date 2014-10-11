﻿/**
 * Warlight AI Game Bot
 *
 * Oktober 2014
 *
 * Based on Niko van Meurs javascript bot from http://theaigames.com/competitions/warlight-ai-challenge/getting-started
 *
 * @authors Marcel van de Kamp and Taeke van der Veen
 * @License MIT License (http://opensource.org/Licenses/MIT)
 */

/**
 * interface for the main class of the app. Handles reading from and writing to the console.
 */

interface IBot {
    /**
      * Main entry point of the app.
      */
    run: () => void;

    /**
     * Handle a incoming command from the game engine.
     */
    handleLine: (data: string) => void;

    /**
     * Handle a close command from the game engine.
     */
    handleClose: () => void;
}

export = IBot;