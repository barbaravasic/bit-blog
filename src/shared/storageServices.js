class StorageServices {
    saveData = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    }

    getData = (key) => {
        return JSON.parse(localStorage.getItem(key));
    }
}

export const storageServices = new StorageServices();