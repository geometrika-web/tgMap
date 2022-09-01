const languagesMenu = function () {
    //$("#dropdown-menu").animate({width: 'toggle'}, 300)
    if (document.getElementById('languages-menu').style.display == 'block') {
        document.getElementById('languages-menu').style.display = 'none';
        document.getElementById('languages-menu').style.visibility = 'false';
        document.getElementById('languages-menu').style.opacity = 0;
    } else {
        document.getElementById('languages-menu').style.display = 'block';
        document.getElementById('languages-menu').style.visibility = 'visible';
        document.getElementById('languages-menu').style.opacity = 1;
    }
};
const jeziciClose = function () {
    document.getElementById('languages-menu').style.display = 'none';
    document.getElementById('languages-menu').style.visibility = 'false';
    document.getElementById('languages-menu').style.opacity = 0;
};

const languagesMenuBtn = document.getElementById('languagesMenuBtn');
languagesMenuBtn.addEventListener('click', languagesMenu);
document.addEventListener('keydown', function (e) {
    const key = e.key;
    if (key === 'Escape') {
        jeziciClose();
    }
});

const enCheck = document.getElementById('EnCheck');
const hrCheck = document.getElementById('HrCheck');
const en = document.getElementById('En');
const hr = document.getElementById('Hr');

if (localStorage.lang === 'Hr') {
    hrCheck.checked = true;
    enCheck.checked = false;
} else {
    hrCheck.checked = false;
    enCheck.checked = true;
}
