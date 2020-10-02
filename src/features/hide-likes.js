import elementReady from 'element-ready';

export default async function () {
    await elementReady('yt-formatted-string.style-scope.ytd-toggle-button-renderer.style-text');
    $('yt-formatted-string.style-scope.ytd-toggle-button-renderer.style-text').hide();

    await elementReady('paper-tooltip.style-scope.ytd-sentiment-bar-renderer');
    $('paper-tooltip.style-scope.ytd-sentiment-bar-renderer').hide();
}
