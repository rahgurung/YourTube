import elementReady from 'element-ready';

export default async function () {
    await elementReady('yt-icon-button#guide-button.style-scope.ytd-masthead');
    if ($('yt-icon-button#guide-button.style-scope.ytd-masthead button').attr('aria-pressed') === 'true') {
        $('yt-icon-button#guide-button.style-scope.ytd-masthead').trigger('click');
    }
}
