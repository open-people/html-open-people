const userLang = navigator.language || navigator.userLanguage;

if (userLang.startsWith('ru')) {
    if (window.location.pathname !== '/ru/') {
        window.location.href = '/ru/';
    }
} else {
    if (window.location.pathname !== '/en/') {
        window.location.href = '/en/';
    }
}
