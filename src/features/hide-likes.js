import elementReady from 'element-ready';

export default async function () {
    await elementReady('yt-formatted-string.style-scope.ytd-toggle-button-renderer.style-text');
    $('yt-formatted-string.style-scope.ytd-toggle-button-renderer.style-text').hide();
}
