import elementReady from 'element-ready';

export default async function () {
  
    await elementReady('div.style-scope ytd-watch-next-secondary-results-renderer');
    $('div.style-scope ytd-watch-next-secondary-results-renderer').hide();
}
