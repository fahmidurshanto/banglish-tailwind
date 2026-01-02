const fs = require('fs');
const path = require('path');
const { BanglishBuildSystem } = require('./lib/core/build-system');

// Load configuration
const config = require('./banglish.config');

// Initialize build system
const buildSystem = new BanglishBuildSystem(config);

// Run the build
buildSystem.build();
