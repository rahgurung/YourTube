import elementReady from 'element-ready';

export default async function () {
    await elementReady('paper-button#more');
    await elementReady('paper-button#less');
    $('paper-button#more').trigger('click');
    $('paper-button#less').hide();
}
