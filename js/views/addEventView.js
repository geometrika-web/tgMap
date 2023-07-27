import ModalView from './modalView.js';

// import icons from 'url:../../img/icons.svg';

class AddEventView extends ModalView {
    _parentElement = document.querySelector('.upload');
    _window = document.querySelector('.add-event-window');
    _overlay = document.querySelector('.overlay');
    _btnOpenParentElement = document.getElementById('sidebar-wrapper');
    _btnOpenClass = '.add__btn';
    _btnClose = document.querySelector('.btn--close-modal');
    _datePicker = document.querySelector('#date');
    _message = 'Event successfuly uploaded!';

    constructor() {
        super();
        this.addHandlerShowWindow();
        this.addHandlerHideWindow();
        this._preventPastDatesSelection();
    }

    _preventPastDatesSelection() {
        let now = new Date();
        let dateNow = now.toISOString().substring(0, 10);
        this._datePicker.setAttribute('min', dateNow);
    }

    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            // Umjesto dohvaćanja vrijednosti forme jednu po jednu koristi se browser API koji omogućuje dohvaćanje svih podataka forme odjednom
            // this je parentElement jer se nalazi unutar eventListenera koji se poziva na parentElementu
            // daje array sa svim vrijednostima forme
            const formData = new FormData(this);
            formData.set(
                'date',
                `${formData.get('date')}T${formData.get('time')}`
            );
            const formDataArray = [...formData];
            /* const data = Object.fromEntries(formDataArray);

            data.date = `${data.date}T${data.time}`;
            delete data.time;
            console.log(data);
            const dataArray = Object.keys(data).map((key) => [key, data[key]]);
            console.log(dataArray); */
            handler(formDataArray);
        });
    }
}

// Create object for export so we don't need to export whole class and make controller.js code complicated
export default new AddEventView();
