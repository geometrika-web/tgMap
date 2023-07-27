import { API_URL, APP_URL, STORAGE_URL } from './config.js';
import { getJSON, sendJSON, sendData, deleteOne } from './helpers.js';

export const state = {
    fetchOne: {},
    fetchAll: {
        list: [],
        type: ''
    }
};

moment.locale(localStorage.lang);

export const loadOne = async function (pathname, id) {
    try {
        const data = await getJSON(`${API_URL}/${pathname}/${id}`);

        // slice jer je pathname množina, a Api daje jedninu (npr. "events", a API daje "event")
        let result = data.data[pathname.slice(0, -1)];
        state.fetchOne = {
            id: result._id,
            nameHr: result.nameHr,
            nameEn: result.nameEn,
            slug: result.slug,
            date: moment(result.date).subtract(2, 'hours').format('LLLL'), // srijeda, 26. travnja 2023 12:30
            address: result.address,
            descriptionHr: result.descriptionHr,
            descriptionEn: result.descriptionEn,
            coordinates: result.location.coordinates,
            imageCover: `${STORAGE_URL}/${result.imageCover}`,
            images: result.images.map((img) => `${STORAGE_URL}/${img}`)
        };
    } catch (error) {
        throw error;
    }
};

export const loadAll = async function (type) {
    try {
        state.fetchAll.type = type;
        const data = await getJSON(`${API_URL}/${type}`);
        state.fetchAll.list = data.data[type].map((el) => {
            return {
                id: el._id,
                nameHr: el.nameHr,
                nameEn: el.nameEn,
                slug: el.slug,
                date: moment(el.date).subtract(2, 'hours').format('LLLL'), // srijeda, 26. travnja 2023 12:30
                address: el.address,
                descriptionHr: el.descriptionHr,
                descriptionEn: el.descriptionEn,
                coordinates: el.location.coordinates,
                imageCover: `${STORAGE_URL}/${el.imageCover}`,
                images: el.images.map((img) => `${STORAGE_URL}/${img}`)
            };
        });
    } catch (error) {
        throw error;
    }
};

export const uploadEvent = async function (newEvent) {
    try {
        /* console.log(newEvent.images);
        const coordinates = newEvent.coordinates
            .split(',')
            .map((coordinate) => +coordinate)
            .reverse();
        console.log(coordinates);
        const event = {
            name: newEvent.name,
            date: `${newEvent.date}T${newEvent.time}`,
            address: newEvent.address,
            description: newEvent.description,
            location: {
                coordinates: coordinates
            },
            imageCover: newEvent.imageCover,
            images: newEvent.images
        };
        const formData = new FormData();
        Object.keys(event).forEach((key) => {
            if (key === 'location') {
                formData.append(key, JSON.stringify(event[key]));
            } else {
                formData.append(key, event[key]);
            }
        });
        console.log(formData);
        const data = await sendJSON(`${API_URL}/events`, formData); */

        const formData = new FormData();
        newEvent.forEach((arr) => {
            console.log(arr);
            // Za koordinate upisane u formu u formatu "43.7191761238794, 17.225182792091076" potrebno je za GeoJSON format smjestiti ih u propertie location s propertiom coordinates u kojem su koordinate spremljene u array u obliku [17.225182792091076, 43.7191761238794], pa zbog toga ide split().reverse()
            if (arr[0] === 'coordinates') {
                formData.append(
                    'location',
                    `{"coordinates":[${arr[1].split(',').reverse()}]}`
                );
            } else {
                formData.append(arr[0], arr[1]);
            }
        });
        // const data = await sendData(`${API_URL}/events`, formData);
        return data;
        /* const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/v1/events',
            data: event
        }); */
    } catch (error) {
        throw error;
    }
};

export const login = async function (loginData) {
    try {
        const data = await sendJSON(`${API_URL}/users/login`, loginData);
        if (data.status === 'success') return data;
    } catch (error) {
        throw error;
    }
};

export const logout = async function () {
    try {
        const data = await getJSON(`${API_URL}/users/logout`);
        if (data.status === 'success') {
            localStorage.logged = false;

            location.reload(true);
        }
    } catch (error) {
        throw error;
    }
};

export const deleteEvent = async function (id) {
    try {
        const res = await deleteOne(`${API_URL}/events/${id}`);
    } catch (error) {
        throw error;
    }
};
