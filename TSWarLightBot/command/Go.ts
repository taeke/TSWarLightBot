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
import ICommand = require('./ICommand');
import ISubCommandMethod = require('./ISubCommandMethod');
import ICommandAnswer = require('./../ICommandAnswer');
import ICommandData = require('./../ICommandData');
import _ = require('underscore');

/**
 * Handles go command from the game engine. Request for the bot to return his place armies moves  and request for the bot 
 * to return his attack and/or transfer moves.
 */
class Go implements ICommand {
    constructor(private subCommandMethodList: ISubCommandMethod[]) {
    } 


    /**
     * Gets the answer from the bot for the go command.
     * @param data {ICommandData} - Information about the command.
     * @returns {ICommandData} - The command answer.
     * Example: 
     * getCommandAnswer({ 
     *     command: CommandEnum.go,
     *     subCommand: SubCommandEnum.place_armies,
     *     data: ['2000']
     * });
     */
    public getCommandAnswer(commandData: ICommandData): ICommandAnswer {
        var subCommandMethod: ISubCommandMethod = _.find(this.subCommandMethodList, (subCommandMethod: ISubCommandMethod) => {
            return subCommandMethod.command === commandData.subCommand;
        });

        return subCommandMethod.method(commandData);
    }

    public Place_armies(commandData: ICommandData): ICommandAnswer {
        return null;
    }
}

export = Go;