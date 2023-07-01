import View from './View.js';

class AllEventsView extends View {
    _parentElement = document.getElementById('assocsAll');
    _window = document.getElementById('assocsAll');
    _parentBtn = document.getElementById('btn-assoc');
    _errorMessage = 'Nema događaja u najavi!';
    _message;

    addHandlerRender(handler) {
        ['load', 'hashchange'].forEach((el) => {
            window.addEventListener(el, handler);
        });
    }

    addHandlerParentBtn(handler) {
        this._parentBtn.addEventListener('click', handler);
    }

    addHandlerSelectEvent(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.list-group-item');
            if (!btn) return;
            const id = btn.dataset.id;
            const coordinates = btn.dataset.coord.split(',');
            handler(id, coordinates);
        });
    }

    /* addHandlerAddEventBtn(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.add__btn');
            if (!btn) return;
            handler();
        });
    } */

    addHandlerDeleteEvent(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('#delete');
            if (!btn) return;
            const id = btn.dataset.id;
            handler(id);
        });
    }

    _generateMarkup() {
        const addNewBtn = `<button class="btn add__btn"><h3 class="m-0 bold">&#43</h3></span></button>`;
        const markup = this._data.map(this._generateMarkupListItem).join('');
        if (localStorage.isLoggedIn === 'true') {
            return [addNewBtn, markup].join('');
        }
        return markup;
    }
    _generateMarkupListItem(result) {
        return `
            <button data-id="${result.id}" data-coord="${
            result.coordinates
        }" class="list-group-item list-group-item-action no-outline mt-4 pl-5 landmarkList-height scale-animation-right display-flex text-font"><img src="${
            result.imageCover
        }" class="landmarkList-img ml-4 center-y"><div class="margin-auto ml-3 mr-3 w-75"><div class="menu-btn text-c3">${
            result.address
        }</div><div class="text-font">${
            result[`name${localStorage.lang}`]
        }</div><div class="menu-btn text-c3">${result.date}</div></div>${
            localStorage.isLoggedIn == 'true'
                ? `<div><img id="delete" title="Izbriši događaj" data-id="${result.id}" class="kategorije-thumb center-y mr-4" src="./assets/icon/delete2.svg"></div>`
                : ''
        }</button>
            `;
    }
}

export default new AllEventsView();
