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

import ICommandResult = require('ICommandResult');
import CommandEnum = require('./CommandEnum');

interface ICommandNameMethod {
    command: CommandEnum;
    method: (data: string[]) => ICommandResult;
}

export = ICommandNameMethod;