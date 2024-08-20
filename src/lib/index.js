// place files you want to import through the `$lib` alias in this folder.
import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'
const defaultLocale = 'en'

register('en', () => import('./en.json'));
register('ua', () => import('./ua.json'));
// en, en-US and pt are not available yet

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale,
});
// starts loading and 'en'