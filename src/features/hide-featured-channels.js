import elementReady from 'element-ready';

export default async function () {
    await elementReady('div#secondary.style-scope.ytd-two-column-browse-results-renderer');
    $('div#secondary.style-scope.style-scope.ytd-two-column-browse-results-renderer').hide();
}
