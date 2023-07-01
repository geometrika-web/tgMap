import View from './View.js';

class EventView extends View {
    _parentElement = document.getElementById('assocsAll');
    _window = document.getElementById('assocsAll');
    _parentBtn = document.getElementById('btn-assoc');
    _errorMessage = 'Događaj s ovim ID brojem ne postoji!';
    _message;

    // TODO: Provjeriti gdje smjestiti funkciju addHandlerRender() --> treba za svaki view, a funkcionira kad se pozove samo kroz jedan (možda je pozvati iz View.js)
    addHandlerRender(handler) {
        ['load', 'hashchange'].forEach((el) => {
            window.addEventListener(el, handler);
        });
    }

    addHandlerCloseEvent(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.landmark-close-btn');
            if (!btn) return;
            handler();
        });
    }

    addHandlerShareBtn(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.open-share');
            if (!btn) return;
            handler();
        });
    }

    _renderCarousel(imgs) {
        let carouselHtml = `<div id="carousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">`;
        imgs.forEach((img, index) => {
            if (index < 1) {
                carouselHtml += `<li data-target="#carousel" data-slide-to="${
                    index + 1
                }" class="active"></li>`;
            } else {
                carouselHtml += `<li data-target="#carousel" data-slide-to="${
                    index + 1
                }"></li>`;
            }
        });
        carouselHtml += `</ol>
      <div class="carousel-inner">`;
        imgs.forEach((img, index) => {
            if (index < 1) {
                carouselHtml += `<div class="carousel-item active">
          <img class="d-block w-100" src="${img}">
        </div>`;
            } else {
                carouselHtml += `<div class="carousel-item">
          <img class="d-block w-100" src="${img}">
        </div>`;
            }
        });
        carouselHtml += `</div>
      <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>`;
        return carouselHtml;
    }

    _generateMarkup() {
        return `
        <div class="ml-4 mr-4">
                        <img
                            class="landmark-close-btn mt-4 mr-1"
                            src="assets/icon/close.svg"
                            alt=""
                        />
                        <div class="row w-100 p-1 pt-4 m-0">
                <div class="col-9 p-0">
                    <div
                        id="event"
                        class="mr-1 landmark-title text-left d-block"
                    >${this._data[`name${localStorage.lang}`]}</div>
                    <div
                    id="landmark-date"
                        class="landmark-info  text-left"
                    ><img class="info-icon  mr-1" src="./assets/icon/calendar.svg"> ${
                        this._data.date
                    }</div>
                    <div
                        id="landmark-address"
                        class="landmark-info text-left mb-4"
                    ><img class="info-icon mr-1" src="./assets/icon/mapPin.svg"> ${
                        this._data.address
                    } | <a id="googleMapsHref" target="_blank" href="https://www.google.com/maps/dir//${this._data.coordinates.reverse()}/@${
            this._data.coordinates
        },14z" class="translate">  ${
            dict[localStorage.lang]['navigation']
        } &#10132;</a></div></div>
        <div class="col-3 p-0 pt-2 pl-2"><button title="Podijeli" class="open-share bookBtn text-uppercase"><img class="p-1 p-2" src="assets/icon/share-2.svg"></button></div>
        </div>
                    ${this._renderCarousel(this._data.images)}
                    <div
                        id="landmark-about"
                        class="pt-4 mb-2 text-justify d-block text-font"
                    >${this._data[`description${localStorage.lang}`]}</div>
                    <div id="google-maps">
                        <a id="googleMapsHref" target="_blank" href="https://www.google.com/maps/dir//${
                            this._data.coordinates
                        }/@${this._data.coordinates},14z" class="translate">
                            <img src="/assets/icon/googleMaps.svg" alt="" />
                            ${dict[localStorage.lang]['navigation']} &#10132;</a
                        >
                    </div>
                    <div id="nodelist" class="p-4">
                        <em class="text-center"></em>
                    </div>       
                    </div>         
        `;
    }
}

// Nema konstruktor funkcije jer se ništa ne proslijeđuje u klasu
export default new EventView();
