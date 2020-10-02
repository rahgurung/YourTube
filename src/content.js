import domLoaded from 'dom-loaded';

import {
    enableFeature,
    observeEl,
    safeElementReady
} from './libs/utils';

import { autoInitFeatures, features } from './features';

async function init() {
    await safeElementReady('body');

    for (const feature of autoInitFeatures) {
        enableFeature(Object.assign({}, feature, { fn: feature.fn || (() => { }) }));
    }

    await domLoaded;
    onDomReady();
}

function onMenuReady(cb) {
    observeEl('#menu-container', cb, { attributes: true });
}

function onDomReady() {
    onMenuReady(() => {
        console.log('now')
        enableFeature(features.hideLikes);
    })
}

init();
