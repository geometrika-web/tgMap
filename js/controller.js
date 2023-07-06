import * as model from './model.js';
import eventView from './views/eventView.js';
import allEventsView from './views/allEventsView.js';
import mapMarkersView from './views/mapMarkersView.js';
import addEventView from './views/addEventView.js';
import loginView from './views/loginView.js';
import shareView from './views/shareView.js';

const routes = {
    events: {
        one: eventView,
        all: allEventsView
    }
};

const getHash = function () {
    const [pathname, id] = window.location.hash.slice(1).split('/');
    return [pathname, id];
};

const checkId = function () {
    if (window.location.hash.slice(1).split('/').length === 1) {
        return false;
    }
    return true;
};

const getView = function () {
    const [pathname, id] = getHash();
    return id ? routes[pathname].one : routes[pathname].all;
};

const controlHashChange = async function (event) {
    try {
        event.preventDefault();
        // * 1) Provjera postoji li kategorija koja se nalazi u hashu i treba li ju prikazati
        // Jedna async funkcija poziva drugu async funkciju
        // Funkcija loadEvent ne vraća ništa nego samo mijenja "state", zbog toga vrijednost ne spremamo u varijablu
        const [pathname, id] = getHash();
        if (!pathname || pathname != 'events' || pathname == '') {
            mapMarkersView.clearLayerSource();
            return;
        }
        // * 2) Učitavanje podataka
        getView().renderSpinner();
        if (id) {
            getView().toggleSidebarOnSelect();
            // TODO: Dodano zbog učitavanja markera na karti prilikom loada s hashom, provjerit je li dobar način
            await model.loadAll(pathname);
            await model.loadOne(pathname, id);
            getView().render(model.state.fetchOne);
        } else {
            await model.loadAll(pathname);
            getView().render(model.state.fetchAll.list);
        }

        addMapMarkers(event);

        /* id ? await model.loadOne(pathname, id) : await model.loadAll(pathname);
        // await model.loadOne(pathname, id);
        // * 2) Rendering event
        getView().render(model.state.fetchOne); */
    } catch (error) {
        // getView().renderError();
        console.log(error);
    }
};

const controlSelectEvent = function (id, coordinates) {
    mapMarkersView.toggleSidebarOnSelect();
    mapMarkersView.changeZIndexOnSelect(id);
    mapMarkersView.zoomTo(coordinates);
};

const controlMap = function () {
    mapMarkersView.addLayer();
    mapMarkersView.addMapSelect();
};

const controlCloseBtn = function () {
    window.location.hash = getHash()[0];
    mapMarkersView.deselectMapFeatures();
};

// TODO: Premjestiti u mapMarkersView
const addMapMarkers = function (event) {
    // Provjera je li došlo do promijene pathnamea, ako nije nema potrebe za ponovnim dohvaćanjem featuresa
    // if (getHash()[0] === event.oldURL.split('#')[1]) return;
    if (mapMarkersView.getLayerFeatures().length > 0) return;
    mapMarkersView.updateLayerSource(model.state.fetchAll.list);
};

const controlAddEvent = async function (newEvent) {
    try {
        // TODO: dodati spinner za upload
        addEventView.renderSpinner();
        const data = await model.uploadEvent(newEvent);
        if (data.status === 'success') {
            addEventView.showAlert('success');
            window.setTimeout(() => {
                location.reload(true);
            }, 1500);
        }
    } catch (error) {
        addEventView.renderError(error.message);
    }
};

/* const controlAddEventBtn = function () {
    addEventView.addHandlerShowWindow();
}; */

const controlLogin = async function (loginData) {
    try {
        const data = await model.login(loginData);
        if (data.status === 'success') {
            localStorage.logged = true;
            // loginView.hideWindow();
            loginView.showAlert('success', 'Prijava uspješna!');
            window.setTimeout(() => {
                location.reload(true);
            }, 1500);
        }
    } catch (error) {
        console.log(error);
        loginView.showAlert('error', error.message);
    }
};
const controlLogout = async function () {
    try {
        await model.logout();
    } catch (error) {
        console.log(error);
    }
};
const controlDeleteEvent = async function (id) {
    try {
        const answer = confirm('Jeste li sigurni?');
        if (answer) {
            await model.deleteEvent(id);
        }
    } catch (error) {
        console.log(error);
    }
};

const controlShareBtn = async function () {
    try {
        // TODO: Riješiti nazi, opis i link
        await navigator.share({
            title: 'TomislavGuides',
            text: 'Learn web development on MDN!',
            url: 'https://developer.mozilla.org'
        });
    } catch (error) {
        shareView.addHandlerShare();
        // navigator.clipboard.writeText(window.location.href);
        // shareView.showAlert('success');
    }
};
// DOM manipulacija (čekanje na klik ili slično) treba biti u viewu
// Zato se radi Publisher-Subscriber pattern
// window.addEventListener('hashchange', controlEvents);
const init = function () {
    // eventView.addHandlerRender(controlHashChange);
    allEventsView.addHandlerRender(controlHashChange);
    // TODO: Mislim da ne triba
    // allEventsView.addHandlerParentBtn(controlHashChange);
    allEventsView.addHandlerSelectEvent(controlSelectEvent);
    mapMarkersView.addHandlerOnload(controlMap);
    eventView.addHandlerCloseEvent(controlCloseBtn);
    addEventView.addHandlerUpload(controlAddEvent);
    // allEventsView.addHandlerAddEventBtn(controlAddEventBtn);
    loginView.addHandlerLogin(controlLogin);
    loginView.addHandlerLogout(controlLogout);
    allEventsView.addHandlerDeleteEvent(controlDeleteEvent);
    // mapMarkersView.addHandlerRender(controlMapMarkers);
    eventView.addHandlerShareBtn(controlShareBtn);
};
init();
