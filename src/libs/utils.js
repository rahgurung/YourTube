import elementReady from 'element-ready';
import domLoaded from 'dom-loaded';
import OptionsSync from 'webext-options-sync';
import select from 'select-dom';

let options;
const optionsPromise = new OptionsSync().getAll();

/**
 * Enable toggling each feature via options.
 * Prevent fn's errors from blocking the remaining tasks.
 * https://github.com/sindresorhus/refined-github/issues/678
 */
export const enableFeature = async ({fn, id: _featureId = fn.name}) => {
    if (!options) {
        options = await optionsPromise;
    }

    const {logging = false} = options;
    const log = logging ? console.log : () => { };

    const featureId = _featureId.replace(/_/g, '-');
    if (/^$|^anonymous$/.test(featureId)) {
        console.warn('This feature is nameless', fn);
    } else if (options[featureId] === false) {
        $('html').removeClass(featureId);
        log('↩️', 'Skipping', featureId);
        return;
    }

    try {
        $('html').addClass(featureId);
        await fn();
        log('✅', featureId);
    } catch (error) {
        console.log('❌', featureId);
        console.error(error);
    }
};

/**
 * Automatically stops checking for an element to appear once the DOM is ready.
 */
export const safeElementReady = selector => {
    const waiting = elementReady(selector);

    // Don't check ad-infinitum
    domLoaded.then(() => requestAnimationFrame(() => waiting.cancel()));

    // If cancelled, return null like a regular select() would
    return waiting.catch(() => null);
};

/**
 * Observe changes in an element
 */
export const observeElement = (el, listener, options = {childList: true}) => {
	if (typeof el === 'string') {
		el = select(el);
	}

	if (!el) {
		return;
	}

	// Run first
	listener([]);

	// Run on updates
	const observer = new MutationObserver(listener);
	observer.observe(el, options);
	return observer;
};
