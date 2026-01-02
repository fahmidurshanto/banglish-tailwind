// Banglish Tailwind Framework - Main Entry Point
// This is the main entry point for the package

const { BanglishGenerator } = require('./lib/core/generator');
const { BanglishBuildSystem } = require('./lib/core/build-system');
const { BanglishConfig } = require('./lib/core/types');

module.exports = {
    BanglishGenerator,
    BanglishBuildSystem,
    BanglishConfig
};