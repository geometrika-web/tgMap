import ModalView from './modalView.js';

// import icons from 'url:../../img/icons.svg';

class Share extends ModalView {
    _parentElement = document.querySelector('.share-btn');
    _window = document.querySelector('.share-window');
    _overlay = document.querySelector('.overlay');
    _btnOpenParentElement = document.getElementById('sidebar-wrapper');
    _btnOpenClass = '.open-share';
    _btnClose = document.querySelector('.btn--close');

    constructor() {
        super();
        this._testNavigatorShare();
    }

    addHandlerShare() {
        this._parentElement.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href);
            this.showAlert('success');
        });
    }
}

// Create object for export so we don't need to export whole class and make controller.js code complicated
export default new Share();
