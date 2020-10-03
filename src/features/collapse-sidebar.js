import elementReady from 'element-ready';

export default async function () {
    await elementReady('yt-icon-button#guide-button.style-scope.ytd-masthead');
    $('yt-icon-button#guide-button.style-scope.ytd-masthead').trigger('click');
}
