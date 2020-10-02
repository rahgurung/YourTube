import OptionsSync from 'webext-options-sync';

import {featuresDefaultValues} from './features';

const optionsSync = new OptionsSync();

// Define defaults
optionsSync.define({
    defaults: Object.assign({}, featuresDefaultValues, {
        logging: false
    }),
    migrations: [
        // Integrated utility that drops any properties that don't appear in the defaults
        OptionsSync.migrations.removeUnused
    ]
});

// Make sure that all features have an option value
optionsSync.getAll().then(options => {
    const newOptions = Object.assign({}, featuresDefaultValues, options);
    optionsSync.setAll(newOptions);
});
