import elementReady from 'element-ready';
import { escapeSelector } from 'jquery';

export default async function () {
    await elementReady('paper-button#more');
    await elementReady('paper-button#less');
    $('paper-button#more').trigger('click');
    $('paper-button#less').hide();
}
