import domLoaded from 'dom-loaded';

import {
    enableFeature,
    safeElementReady,
    observeElement
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

function onVideoChange(cb) {
    observeElement('#meta.style-scope.ytd-watch-flexy', cb, {attributes: true, subtree: true});
}

function onDomReady() {
    
    onVideoChange(() => {
        enableFeature(features.hideLikes);
        enableFeature(features.hideComments);
        enableFeature(features.expandDescription);    
    })
}

init();
