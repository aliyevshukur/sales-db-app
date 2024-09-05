import React from 'react'

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
    { id: "13", name: "Brokoli", price: "2" },
    { id: "14", name: "Donut", price: "4" },
    { id: "15", name: "Biscuit", price: "1" },
    { id: "16", name: "Watermelon", price: "5" },
    { id: "17", name: "Milk", price: "2" },
    { id: "18", name: "Bread", price: "2" },
    { id: "19", name: "Brokoli", price: "2" },
    { id: "20", name: "Donut", price: "4" },
    { id: "21", name: "Biscuit", price: "1" },
    { id: "22", name: "Watermelon", price: "5" },
    { id: "23", name: "Milk", price: "2" },
    { id: "24", name: "Bread", price: "2" },
];

const PURCHASEDITEMS_DATA = [
    { id: "1", name: "Brokoli", price: "2" },
    { id: "2", name: "Donut", price: "4" },
    { id: "3", name: "Biscuit", price: "1" },
    { id: "4", name: "Watermelon", price: "5" },

];


export interface itemType {
    id: string,
    name: string,
    price: string
}

export interface purchaseType {
    id: string,
    name: string,
    price: string
    date: Date
}

export type dbStatusType = 'failed' | 'open' | 'pending'

interface Props {
    setDBStatus: React.Dispatch<React.SetStateAction<dbStatusType>>,
}

indexedDB.deleteDatabase("appDatabase");

const request = indexedDB.open("appDatabase", 3);
let db: IDBDatabase;

export function initDB({ setDBStatus }: Props) {

    request.onupgradeneeded = function (event: any) {

        db = request.result;
        const shopItemsStore = db.createObjectStore("shopItemsStore", { keyPath: "id" });
        const cartItemsStore = db.createObjectStore("cartItemsStore", { keyPath: "id" });
        const purchasedItemsStore = db.createObjectStore("purchasedItemsStore", { keyPath: "id" });

        let transaction = event.target.transaction;
        transaction.oncomplete = function () {
            addData(db, "shopItemsStore", SHOPITEMS_DATA);
            addData(db, "purchasedItemsStore", PURCHASEDITEMS_DATA);
        }

    };

    request.onsuccess = function () {
        db = request.result;
        console.log("successfully opened database")
        // getData(db, setStoreItems, "shopItemsStore");
        // getData(db, setCartItems, "cartItemsStore");
        // getData(db, setPurchasedItems, "purchasedItemsStore");
        setDBStatus('open');
    }

    request.onerror = function () {
        let error = request.error;
        console.log("An error occurred with IndexedDB: " + JSON.stringify(error?.message));
        setDBStatus('failed');
    };


}

export function addData(db: IDBDatabase, storeName: string, data: itemType[]): void {
    let transaction = db.transaction(storeName, "readwrite");
    let shopItemsStore = transaction.objectStore(storeName);

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
            // getData(db, setCartItems, "cartItemsStore");
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

export function getData(storeName: string): Promise<itemType[]> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('appDatabase', 3);
        let data: itemType[];

        request.onsuccess = function (event: any) {
            db = request.result;
            let transaction = db.transaction(storeName, 'readonly');
            let objectStore = transaction.objectStore(storeName);
            let txRequest = objectStore.getAll();

            txRequest.onsuccess = function () {
                data = txRequest.result;
                console.log("data: " + JSON.stringify(data))
                resolve(data);

            }

            txRequest.onerror = function (error) {
                reject(`Error to get store data: ${error}`)
            }
        }

        request.onerror = function (event: any) {
            reject(`Failed to get data`)
        }

    })

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
            // getData(db, setCartItems, "cartItemsStore");
            console.log(`Cleared store: ${storeName}`);
        }
    }

    request.onerror = function () {
        console.log(`Failed to clear store: ${storeName}`);
    }
}
