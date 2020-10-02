import elementReady from 'element-ready';

export default async function () {
    await elementReady('ytd-comments#comments');
    $('ytd-comments#comments').hide();
}
