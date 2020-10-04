import groupBy from 'lodash.groupby';
import sortBy from 'lodash.sortby';

export const features = {
    /* GENERAL */
    collapseSidebar: {
        id: 'feature-collapse-sidebar',
        category: 'general',
        label: 'Keeps the sidebar collapsed by default',
        fn: require('./collapse-sidebar').default
    },

    /* VIDEO */
    hideLikes: {
        id: 'feature-hide-likes',
        category: 'video',
        label: 'Hide the number of likes',
        fn: require('./hide-likes').default
    },
    hideComments: {
        id: 'feature-hide-comments',
        category: 'video',
        label: 'Hide the comments',
        fn: require('./hide-comments').default
    },
    expandDescription: {
        id: 'feature-expand-description',
        category: 'video',
        label: 'Expand the description always',
        fn: require('./expand-description').default
    },
    hideAutoplay: {
        id: 'feature-hide-autoplay',
        category: 'video',
        label: 'Disable the autoplay and hides it',
        fn: require('./hide-autoplay').default
    },
    hideSuggestions: {
        id: 'feature-hide-suggestions',
        category: 'video',
        label: 'Hide the suggested videos',
        fn: require('./hide-suggestions').default
    }
};

export const featuresArray = sortBy(Object.values(features), ['category', 'label']);

export const groupedFeatures = groupBy(featuresArray, 'category');

export const autoInitFeatures = featuresArray.filter(feature => feature.runOnInit);

const _featuresDefaultValues = {};
for (const feature of featuresArray) {
    _featuresDefaultValues[feature.id] =
        typeof feature.enabledByDefault === 'boolean' ? feature.enabledByDefault : true;
}

export const featuresDefaultValues = _featuresDefaultValues;
