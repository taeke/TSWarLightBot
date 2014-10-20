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
'use strict';

import ICommand = require('./interface/ICommand');
import ICommandAnswer = require('./../interface/ICommandAnswer');
import ICommandData = require('./../interface/ICommandData');

/**
 * Handles pick_starting_regions command from the game engine. Request for the bot to return his place armies moves and request for the bot to 
 * return his attack and/or transfer moves.
 */
class Pick_starting_regions implements ICommand {
    /**
     * Gets the answer from the bot for the pick_starting_regions command.
     * @param data {ICommandData} - Information about the command.
     * @returns {ICommandData} - The command answer.
     * Example: 
     * getCommandAnswer({
     *     line: 'pick_starting_regions 2000', 
     *     command: CommandEnum.pick_starting_regions,
     *     subCommand: undefined,
     *     data: ['2000']
     * });
     * 
     * Example return:
     * {
     *     succes: true,
     *     value: '1 7 24 25 41 42'
     * }
     */
    public getCommandAnswer(commandData: ICommandData): ICommandAnswer {
        return null;
    }
}

export = Pick_starting_regions;