import domLoaded from 'dom-loaded';
import elementReady from 'element-ready';

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

async function onVideoChange(cb) {
    await elementReady('#player-theater-container');
    observeElement('#player-theater-container', cb, {attributes: true, subtree: true});
}

function onDomReady() {
    enableFeature(features.hideLikes);
    enableFeature(features.hideComments);
    enableFeature(features.expandDescription);
    enableFeature(features.collapseSidebar);
    onVideoChange(() => {
        enableFeature(features.hideLikes);
        enableFeature(features.hideComments);
        enableFeature(features.expandDescription);
    });
}

init();
