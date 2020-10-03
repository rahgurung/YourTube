import elementReady from 'element-ready';

export default async function () {
    await elementReady('ytd-comments#comments');
    await elementReady('ytd-video-secondary-info-renderer');
    // var descriptionSection = document.querySelector('.ytd-video-secondary-info-renderer');
    // console.log(descriptionSection);
    $('ytd-comments#comments').hide();
    $('ytd-video-secondary-info-renderer').style.borderBottom = 0;
   
}