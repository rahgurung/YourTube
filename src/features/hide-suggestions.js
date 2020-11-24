import elementReady from 'element-ready';

export default async function () {
    await elementReady('ytd-compact-video-renderer.style-scope.ytd-watch-next-secondary-results-renderer');
    await elementReady('ytd-compact-radio-renderer.style-scope.ytd-watch-next-secondary-results-renderer');
    await elementReady('div#continuations.style-scope.ytd-watch-next-secondary-results-renderer');

    $('ytd-compact-video-renderer.style-scope.ytd-watch-next-secondary-results-renderer').hide();
    $('ytd-compact-radio-renderer.style-scope.ytd-watch-next-secondary-results-renderer').hide();
    $('div#continuations.style-scope.ytd-watch-next-secondary-results-renderer').hide();
}
