import elementReady from 'element-ready';

export default async function () {
    // Disable the autoplay
    await elementReady('yt-icon-button#guide-button.style-scope.ytd-masthead');
    if ($('paper-toggle-button#toggle.style-scope.ytd-compact-autoplay-renderer').attr('aria-pressed') === 'true') {
        $('paper-toggle-button#toggle.style-scope.ytd-compact-autoplay-renderer').trigger('click');
    }

    // Hide it
    $('ytd-compact-autoplay-renderer.style-scope.ytd-watch-next-secondary-results-renderer').hide();
}
