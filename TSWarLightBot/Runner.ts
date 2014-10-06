﻿/**
 * Warlight AI Game Bot
 *
 * Oktober 2014
 *
 * Based on Niko van Meurs javascript bot from http://theaigames.com/competitions/warlight-ai-challenge/getting-started
 *
 * @authors Marcel van der Kamp and Taeke van der Veen
 * @License MIT License (http://opensource.org/Licenses/MIT)
 */
import Bot = require('./Bot');
import readline = require('readline');

var readLineOptions: readline.ReadLineOptions = {
    input: process.stdin,
    output: process.stdout
};

var io: readline.ReadLine = readline.createInterface(readLineOptions);

var bot = new Bot(io);
bot.run();