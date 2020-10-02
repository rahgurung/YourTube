import groupBy from 'lodash.groupby';
import sortBy from 'lodash.sortby';

export const features = {
    /* VIDEO */
    hideLikes: {
        id: 'feature-hide-likes',
        category: 'video',
        label: 'Hide the number of likes',
        fn: require('./hide-likes').default,
        hidden: true
    },
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
