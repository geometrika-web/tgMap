export default class View {
    _data;
    render(data) {
        /* if (!data || (Array.isArray(data) && data.length === 0)) {
            return this.renderError();
        } */
        // this._data postaje data koji se proslijedi metodi render()
        // Spremamo podatke u this._data kako bismo mogli koristiti te podatke po cijeloj klasi
        // Metoda render prima podatke u kontroleru iz model.state.event objekta koji je dobiven loadEvent metodom iz modela
        this._data = data;
        // Nakon toga podatci se proslijeđuju metodi generateMarkup() koja vraća HTML kod s podatcima iz this._data
        const markup = this._generateMarkup();
        assoc();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();

        const newDOM = document
            .createRange()
            .createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(
            this._parentElement.querySelectorAll('*')
        );

        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];
            // console.log(curEl, newEl.isEqualNode(curEl));

            // Updates changed TEXT
            if (
                !newEl.isEqualNode(curEl) &&
                newEl.firstChild?.nodeValue.trim() !== ''
            ) {
                // console.log('💥', newEl.firstChild.nodeValue.trim());
                curEl.textContent = newEl.textContent;
            }

            // Updates changed ATTRIBUES
            if (!newEl.isEqualNode(curEl))
                Array.from(newEl.attributes).forEach((attr) =>
                    curEl.setAttribute(attr.name, attr.value)
                );
        });
    }

    renderSpinner() {
        const markup = `
        <div id="sidebar-preloader" class="indeterminate"></div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(message = this._errorMessage) {
        const markup = `
        <div class="error">
            <span>${message}</span>
        </div>
        `;
        assoc();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._message) {
        const markup = `
        <div class="message">
            <p>${message}</p>
        </div>
        `;
        business();
        businessAll.style.display = 'none';
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    toggleSidebarOnSelect() {
        if (window.innerWidth < 575.99) {
            // if ((document.getElementById('menu-toggle').classList = 'change')) {
            document.getElementById('menu-toggle').classList.toggle('change');
            document.querySelector('#wrapper').classList.toggle('toggled');
            document.querySelector('#logo').classList.toggle('logo-toggle');
            document.querySelector('#logo').classList.toggle('logo-color');
            // }
        } else {
            if (document.getElementById('menu-toggle').classList != 'change') {
                document
                    .getElementById('menu-toggle')
                    .classList.toggle('change');
                document.querySelector('#wrapper').classList.toggle('toggled');
                document.querySelector('#logo').classList.toggle('logo-toggle');
                document.querySelector('#logo').classList.toggle('logo-color');
            }
        }
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }
}
