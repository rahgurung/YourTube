import elementReady from 'element-ready';

export default async function () {
    await elementReady('div#secondary.style-scope.ytd-watch-flexy');
    $('div#secondary.style-scope.ytd-watch-flexy').hide();
}
