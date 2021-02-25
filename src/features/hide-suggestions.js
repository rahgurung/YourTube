import elementReady from 'element-ready';

export default async function () {
    // Let 'loader' be ready
    await elementReady('ytd-continuation-item-renderer.style-scope.ytd-item-section-renderer');
    // Let video recommendations be ready
    await elementReady('ytd-compact-video-renderer.style-scope.ytd-item-section-renderer');
    // Let related chip bar be ready
    await elementReady('yt-related-chip-cloud-renderer.style-scope.ytd-watch-next-secondary-results-renderer');

    // We don't need to wait for all of them because that will make it break in pages where it is
    // not ready
    // We will only wait for elementReady on common elements which is there in all videos like
    // simple video recommendations

    // Hide them
    $('ytd-continuation-item-renderer.style-scope.ytd-item-section-renderer').hide();
    $('ytd-compact-video-renderer.style-scope.ytd-item-section-renderer').hide();
    $('ytd-compact-movie-renderer.style-scope.ytd-item-section-renderer').hide();
    $('yt-related-chip-cloud-renderer.style-scope.ytd-watch-next-secondary-results-renderer').hide();
}
