import elementReady from 'element-ready';

export default async function () {
    await elementReady('yt-formatted-string.style-scope.ytd-toggle-button-renderer.style-text');
    await elementReady('ytd-sentiment-bar-renderer.style-scope.ytd-video-primary-info-renderer');
    $('yt-formatted-string.style-scope.ytd-toggle-button-renderer.style-text').hide();
    $('ytd-sentiment-bar-renderer.style-scope.ytd-video-primary-info-renderer').hide();
}
