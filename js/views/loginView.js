import ModalView from './modalView.js';

// import icons from 'url:../../img/icons.svg';

class Login extends ModalView {
    _parentElement = document.querySelector('.login');
    _window = document.querySelector('.login-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.getElementById('login-btn');
    _btnLogout = document.getElementById('logout-btn');
    _btnClose = document.querySelector('.btn--close-login');
    _message = 'Prijava uspješna!';

    constructor() {
        super();
        this.addHandlerShowWindow();
        this.addHandlerHideWindow();
        this.isLoggedIn();
    }

    isLoggedIn() {
        if (localStorage.isLoggedIn === 'true') {
            this._btnOpen.classList.toggle('hidden');
            this._btnLogout.classList.toggle('hidden');
        }
    }

    addHandlerLogin(handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault();

            // Umjesto dohvaćanja vrijednosti forme jednu po jednu koristi se browser API koji omogućuje dohvaćanje svih podataka forme odjednom
            // this je parentElement jer se nalazi unutar eventListenera koji se poziva na parentElementu
            // daje array sa svim vrijednostima forme

            const dataArray = [...new FormData(this)];
            const data = Object.fromEntries(dataArray);
            handler(data);
        });
    }

    addHandlerLogout(handler) {
        this._btnLogout.addEventListener('click', handler);
    }
}

// Create object for export so we don't need to export whole class and make controller.js code complicated
export default new Login();
