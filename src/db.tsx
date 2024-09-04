import React from 'react'

const CARTITEMS_DATA = [];

const SHOPITEMS_DATA = [
    { id: "1", name: "Brokoli", price: "2" },
    { id: "2", name: "Donut", price: "4" },
    { id: "3", name: "Biscuit", price: "1" },
    { id: "4", name: "Watermelon", price: "5" },
    { id: "5", name: "Milk", price: "2" },
    { id: "6", name: "Bread", price: "2" },
    { id: "7", name: "Brokoli", price: "2" },
    { id: "8", name: "Donut", price: "4" },
    { id: "9", name: "Biscuit", price: "1" },
    { id: "10", name: "Watermelon", price: "5" },
    { id: "11", name: "Milk", price: "2" },
    { id: "12", name: "Bread", price: "2" },
];

export interface itemType {
    id: string,
    name: string,
    price: string
}

export type dbStatusType = 'failed' | 'open' | 'pending'


// indexedDB.deleteDatabase("appDatabase");


export function initDB(setStoreItems: React.Dispatch<React.SetStateAction<itemType[]>>, setCartItems: React.Dispatch<React.SetStateAction<itemType[]>>, setDBStatus: React.Dispatch<React.SetStateAction<dbStatusType>>) {
    const request = indexedDB.open("appDatabase", 3);
    let db: IDBDatabase;

    request.onupgradeneeded = function (event: any) {

        // if (db) {
        //     deleteStore(db, "shopItemsStore");
        // }

        db = request.result;
        const shopItemsStore = db.createObjectStore("shopItemsStore", { keyPath: "id" });
        const cartItemsStore = db.createObjectStore("cartItemsStore", { keyPath: "id" });

        shopItemsStore.createIndex("idIndex", "id", { unique: true });
        shopItemsStore.createIndex("nameIndex", "name", { unique: false });

        let transaction = event.target.transaction;
        transaction.oncomplete = function () {
            addData(db, SHOPITEMS_DATA);
        }

    };

    request.onsuccess = function () {
        db = request.result;
        console.log("successfully opened database")
        getData(db, setStoreItems, "shopItemsStore");
        getData(db, setCartItems, "cartItemsStore");
        setDBStatus('open');
    }

    request.onerror = function () {
        let error = request.error;
        console.log("An error occurred with IndexedDB: " + JSON.stringify(error?.message));
        setDBStatus('failed');
    };


}


export function addData(db: IDBDatabase, data: itemType[]): void {
    let transaction = db.transaction("shopItemsStore", "readwrite");
    let shopItemsStore = transaction.objectStore("shopItemsStore");

    data.forEach((item) => { shopItemsStore.add(item) })

    transaction.oncomplete = function () { console.log('Data added!') }
    transaction.onerror = function (event: any) {
        console.log(`error adding data: ${event}`);
    }
}

export function addSingleItem(item: itemType, storeName: string, setCartItems: React.Dispatch<React.SetStateAction<itemType[]>>): void {
    const request = indexedDB.open("appDatabase", 3);
    let db: IDBDatabase;

    request.onupgradeneeded = function () {
        db = request.result;
    }
    request.onsuccess = function () {
        db = request.result;
        let transaction = db.transaction(storeName, "readwrite");
        let store = transaction.objectStore(storeName);
        const addRequest = store.add(item);
        addRequest.onsuccess = function () {
            getData(db, setCartItems, "cartItemsStore");
            console.log(`Item id:${item.id} added!`)
        }
        addRequest.onerror = function (event: any) {
            console.log(`error adding item: ${addRequest.error}`);
        }
        request.onerror = function () {
            console.log(`Failed to add item id:${item.id}`);
        }
    }
}

export function getData(db: IDBDatabase, setStoreItems: React.Dispatch<React.SetStateAction<itemType[]>>, storeName: string): void {
    let transaction = db.transaction(storeName, 'readonly');
    let objectStore = transaction.objectStore(storeName);
    let req = objectStore.getAll();
    let finalData: any = [];

    req.onsuccess = function (event: any) {
        let data = event.target.result;
        console.log("data: " + JSON.stringify(data))
        data ? setStoreItems(data) : console.log("data not found")
    }

    req.onerror = function (event: any) {
        console.log('error getting user data ' + event.target.errorCode);
    }
}

export function deleteStore(storeName: string): void {
    const request = indexedDB.open("appDatabase", 3);
    let db: IDBDatabase;

    request.onupgradeneeded = function () {
        db = request.result

    }

    request.onsuccess = function () {
        db = request.result;
        db.deleteObjectStore(storeName);
        console.log(`Deleted store: ${storeName}`);
    }

    request.onerror = function () {
        console.log(`Failed to delete store: ${storeName}`);
    }
}

export function clearStore(storeName: string, setCartItems: React.Dispatch<React.SetStateAction<itemType[]>>): void {
    const request = indexedDB.open("appDatabase", 3);
    let db: IDBDatabase;

    request.onupgradeneeded = function () {
        db = request.result
    }

    request.onsuccess = function () {
        db = request.result;
        let transaction = db.transaction(storeName, "readwrite");
        const clearedObjectStore = transaction.objectStore(storeName);
        const clearRequest = clearedObjectStore.clear();
        clearRequest.onsuccess = function () {
            getData(db, setCartItems, "cartItemsStore");
            console.log(`Cleared store: ${storeName}`);
        }
    }

    request.onerror = function () {
        console.log(`Failed to clear store: ${storeName}`);
    }
}
