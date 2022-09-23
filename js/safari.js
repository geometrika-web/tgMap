var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
    document.getElementById(
        'homeScreen'
    ).innerHTML = `<div id="homeScreen-img"></div>`;
}
