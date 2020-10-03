import elementReady from 'element-ready';

export default async function () {
    await elementReady('ytd-comments#comments');
    await elementReady('ytd-video-secondary-info-renderer');
    $('ytd-comments#comments').hide();
    $('ytd-video-secondary-info-renderer').css("border-bottom", 0);
}