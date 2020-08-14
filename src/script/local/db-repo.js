import {openDB} from 'idb';

const idbPromised = openDB('fav_team', 1, {
    upgrade(db) {
        db.createObjectStore('fav_team', {
            keyPath: 'id'
        });
    }
})

export function dbGetAllFavTeam() {
    return new Promise((resolve, reject) => {
        idbPromised.then(db => {
            const transaction = db.transaction("fav_team", `readonly`);
            return transaction.objectStore("fav_team").getAll();
        }).then(data => {
            if (data !== undefined) {
                resolve(data)
            } else {
                reject(new Error("Favorite not Found"))
            }
        })
    })
}

export function dbInsertFavorite(team) {
    return new Promise((resolve, reject) => {
        idbPromised.then(db => {
            const transaction = db.transaction("fav_team", `readwrite`);
            transaction.objectStore("fav_team").add(team);
            return transaction;
        }).then(transaction => {
            if (transaction.complete) {
                resolve(true)
            } else {
                reject(new Error(transaction.onerror))
            }
        })
    })
}

export function dbDeleteFavorite(teamId) {
    return new Promise((resolve, reject) => {
        idbPromised.then(db => {
            const transaction = db.transaction("fav_team", `readwrite`);
            transaction.objectStore("fav_team").delete(teamId);
            return transaction;
        }).then(transaction => {
            if (transaction.complete) {
                resolve(true)
            } else {
                reject(new Error(transaction.onerror))
            }
        })
    })
}

export function dbIsFavorite (teamId) {
    return new Promise((resolve) => {
        idbPromised.then(db => {
            const transaction = db.transaction("fav_team", `readonly`);
            transaction.objectStore("fav_team").get(teamId);
            return transaction;
        }).then(transaction => {
            if (transaction.complete) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })
}