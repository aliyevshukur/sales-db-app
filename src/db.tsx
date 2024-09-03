import React from 'react'

const CARTITEMS_DATA = [
    { id: "1", name: "Brokoli", price: "2$" },
    { id: "2", name: "Donut", price: "4$" },
    { id: "3", name: "Biscuit", price: "1$" },
];

const SHOPITEMS_DATA = [
    { id: "1", name: "Brokoli", price: "2$" },
    { id: "2", name: "Donut", price: "4$" },
    { id: "3", name: "Biscuit", price: "1$" },
    { id: "4", name: "Watermelon", price: "5$" },
    { id: "5", name: "Milk", price: "2$" },
    { id: "6", name: "Bread", price: "2$" },
];

export interface itemType {
    id: string,
    name: string,
    price: string
}

const request = indexedDB.open("appDatabase", 2);
let db: IDBDatabase;

export function initDB(setStoreItems: React.Dispatch<React.SetStateAction<itemType[]>>) {


    request.onsuccess = function () {
        db = request.result;
        console.log("success")
        getData(db, setStoreItems);
    }

    request.onerror = function () {
        let error = request.error;
        console.log("An error occurred with IndexedDB: " + JSON.stringify(error?.message));
    };

    request.onupgradeneeded = function (event: any) {
        // deleteStore(db, "shopItemsStore");
        db = request.result;
        const shopItemsStore = db.createObjectStore("shopItemsStore", { keyPath: "id" });

        shopItemsStore.createIndex("idIndex", "id", { unique: true });
        shopItemsStore.createIndex("nameIndex", "name", { unique: false });

        let transaction = event.target.transaction;
        transaction.oncomplete = function () {
            addData(db, SHOPITEMS_DATA);
        }

    };
}


export function addData(db: IDBDatabase, data: itemType[]): void {
    console.log("first2")

    let transaction = db.transaction("shopItemsStore", "readwrite");
    let shopItemsStore = transaction.objectStore("shopItemsStore");

    data.forEach((item) => { shopItemsStore.add(item) })

    transaction.oncomplete = function () { console.log('Data added!') }
    transaction.onerror = function (event: any) {
        console.log(`error adding data: ${event}`);
    }
}

export function getData(db: IDBDatabase, setStoreItems: React.Dispatch<React.SetStateAction<itemType[]>>): void {
    let transaction = db.transaction('shopItemsStore', 'readonly');
    let objectStore = transaction.objectStore('shopItemsStore');
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

function deleteStore(db: IDBDatabase, storeName: string): void {
    db.deleteObjectStore(storeName);
}