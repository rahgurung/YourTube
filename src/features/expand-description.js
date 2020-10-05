import elementReady from 'element-ready';

export default async function () {
    await elementReady('yt-formatted-string.more-button.style-scope.ytd-video-secondary-info-renderer');
    await elementReady('paper-button#less.style-scope.ytd-expander');
    let isCollapsed = $('ytd-expander.style-scope.ytd-video-secondary-info-renderer').attr('collapsed');

    if (typeof isCollapsed !== typeof undefined && isCollapsed !== false) {
        $('yt-formatted-string.more-button.style-scope.ytd-video-secondary-info-renderer').trigger('click');
        $('paper-button#less.style-scope.ytd-expander').hide();
    }
}
