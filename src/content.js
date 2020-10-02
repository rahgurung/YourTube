import domLoaded from 'dom-loaded';

import {
    enableFeature,
    safeElementReady
} from './libs/utils';

import {autoInitFeatures, features} from './features';

async function init() {
    await safeElementReady('body');

    for (const feature of autoInitFeatures) {
        enableFeature(Object.assign({}, feature, {fn: feature.fn || (() => { })}));
    }

    await domLoaded;
    onDomReady();
}

function onDomReady() {
    enableFeature(features.hideLikes);
}

init();
