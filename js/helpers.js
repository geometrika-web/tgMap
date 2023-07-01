import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(
                new Error(`Request took too long! Timeout after ${s} second`)
            );
        }, s * 1000);
    });
};

// Refaktoring funkcija getJSON i sendJSON
/* export const AJAX = async function (url, uploadData = undefined) {
    try {
        const fetchPro = uploadData
            ? fetch(url, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(uploadData)
              })
            : fetch(url);
        const res = await Promise.race([fetchPro, timeout(10)]);
        const data = await res.json();

        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (error) {
        // proslijeđivanje errora iz jedne async funkcije (getJSON) drugoj funkciji (loadRecipe) kako bi ga mogli rješavati (handle) u loadRecipe
        throw error;
    }
}; */

export const getJSON = async function (url) {
    try {
        const fetchPro = fetch(url, {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (error) {
        // proslijeđivanje errora iz jedne async funkcije (getJSON) drugoj funkciji (loadRecipe) kako bi ga mogli rješavati (handle) u loadRecipe
        // Error se događa u ovoj helper funkciji, ali želimo ga proslijediti u model kako bi ga tamo riješili
        // Nakon trew errora, promise koje vraća getJSON (ako postoji pogreška) je odbijeno, a inače bi bilo uspješno
        throw error;
    }
};

export const sendJSON = async function (url, uploadData) {
    try {
        /* console.log(uploadData);
        const res = await axios({
            method: 'PATCH',
            url,
            uploadData
        }); */
        const fetchPro = fetch(url, {
            method: 'POST',
            // uputa browseru da dopusti zapisivanje cookieja
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uploadData)
        });

        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (error) {
        console.log(error);
        // proslijeđivanje errora iz jedne async funkcije (getJSON) drugoj funkciji (loadRecipe) kako bi ga mogli rješavati (handle) u loadRecipe
        throw error;
    }
};

export const sendData = async function (url, uploadData) {
    try {
        /* console.log(uploadData);
        const res = await axios({
            method: 'PATCH',
            url,
            uploadData
        }); */
        const fetchPro = fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: uploadData
        });

        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        const data = await res.json();

        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (error) {
        // proslijeđivanje errora iz jedne async funkcije (getJSON) drugoj funkciji (loadRecipe) kako bi ga mogli rješavati (handle) u loadRecipe
        throw error;
    }
};

export const deleteOne = async function (url) {
    try {
        const fetchPro = fetch(url, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        // const data = await res.json();
        if (!res.ok) throw new Error(`${res.message} (${res.status})`);
    } catch (error) {
        // proslijeđivanje errora iz jedne async funkcije (getJSON) drugoj funkciji (loadRecipe) kako bi ga mogli rješavati (handle) u loadRecipe
        // Error se događa u ovoj helper funkciji, ali želimo ga proslijediti u model kako bi ga tamo riješili
        // Nakon trew errora, promise koje vraća getJSON (ako postoji pogreška) je odbijeno, a inače bi bilo uspješno
        throw error;
    }
};
