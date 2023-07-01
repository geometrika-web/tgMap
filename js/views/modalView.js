import View from './View.js';

// import icons from 'url:../../img/icons.svg';

export default class ModalView extends View {
    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }

    hideWindow() {
        this._overlay.classList.add('hidden');
        this._window.classList.add('hidden');
    }

    _testNavigatorShare() {
        if (!navigator.canShare) {
            this.addHandlerShowWindow();
            this.addHandlerHideWindow();
        }
    }

    addHandlerShowWindow() {
        if (this._btnOpen) {
            this._btnOpen.addEventListener(
                'click',
                this.toggleWindow.bind(this)
            );
        }
        if (this._btnOpenParentElement) {
            this._btnOpenParentElement.addEventListener('click', (e) => {
                document.querySelector('.share-link').value =
                    window.location.href;
                const btn = e.target.closest(this._btnOpenClass);
                if (!btn) return;
                this.toggleWindow();
            });
        }
        // Ne može ovako jer se this odnosi na krivi objekt, tj. na btn na koji se poziva eventListener, a ne na _overlay ili _window varijablu klase
        /* this._overlay.classList.toggle('hidden');
      this._window.classList.toggle('hidden'); */
    }

    addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click', this.hideWindow.bind(this));
        document.addEventListener('keydown', (e) => {
            const key = e.key;
            if (key === 'Escape') {
                this.hideWindow();
            }
        });
    }

    hideAlert() {
        const el = document.querySelector('.alert');
        if (el) el.parentElement.removeChild(el);
    }

    // type is 'success' or 'error'
    showAlert(type, msg, time = 3) {
        this.hideAlert();
        // const markup = `<div class="alert alert--${type}">${msg}</div>`;
        let types = type;
        let markup;
        if (types == 'success') {
            markup =
                '<div class="alert success-overlay "> <div class="image-center circle-loader load-complete"><div class="checkmark draw"></div></div></div>';
        } else {
            markup = `<div class="alert ${type}-alert alert--${type}">${msg}</div>`;
        }
        this._window.insertAdjacentHTML('beforeend', markup);
        this._window.classList.add('login-window-alert');
        /* window.setTimeout(this.hideAlert, time * 1500);
        window.setTimeout(() => {
            this._window.classList.remove('login-window-alert');
        }, time * 1500); */
        /* window.setTimeout(() => {
            this.hideWindow();
        }, time * 500); */
    }
}
// Create object for export so we don't need to export whole class and make controller.js code complicated
// export default new ModalView();
