const SHOPITEMS_DATA = [
    {
        id: 1,
        name: "Gelatine Leaves - Envelopes",
        price: "$9.05"
    },
    {
        id: 2,
        name: "Beef - Striploin",
        price: "$1.04"
    },
    {
        id: 3,
        name: "Wine - Magnotta - Belpaese",
        price: "$6.61"
    },
    {
        id: 4,
        name: "Tray - Foam, Square 4 - S",
        price: "$9.24"
    },
    {
        id: 5,
        name: "Bread - Rolls, Rye",
        price: "$5.25"
    },
    {
        id: 6,
        name: "Kirsch - Schloss",
        price: "$2.69"
    },
    {
        id: 7,
        name: "Wine - White, Pelee Island",
        price: "$2.10"
    },
    {
        id: 8,
        name: "Trout - Rainbow, Frozen",
        price: "$8.73"
    },
    {
        id: 9,
        name: "Appetizer - Escargot Puff",
        price: "$3.32"
    },
];

const version = 1;

export interface itemType {
    id: number,
    name: string,
    price: string
}

export interface purchaseType {
    id: string,
    name: string,
    price: string
    date: Date
}

export interface recieptType {
    purchasedItems: itemType[],
    date: Date,
    totalPrice: number
}

export type dbStatusType = 'failed' | 'open' | 'pending'


export function initDB(): Promise<string> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("appDatabase", version);
        let db: IDBDatabase;

        request.onupgradeneeded = function (event: any) {
            db = request.result;
            const shopItemsStore = db.createObjectStore("shopItemsStore", { keyPath: "id" });
            const cartItemsStore = db.createObjectStore("cartItemsStore", { keyPath: "id" });
            const recieptsStore = db.createObjectStore("recieptsStore", { autoIncrement: true });

            shopItemsStore.createIndex('id', 'id', { unique: false });
            cartItemsStore.createIndex('id', 'id', { unique: false });
            recieptsStore.createIndex('id', 'id', { unique: false });
        };

        request.onsuccess = function () {
            db = request.result;
            const transaction = db.transaction("shopItemsStore", "readwrite")
            let shopItemsStore = transaction.objectStore("shopItemsStore");

            SHOPITEMS_DATA.forEach((item) => {
                shopItemsStore.add(item)
            })
            console.log("successfully opened database");
            resolve('open');
        }

        request.onerror = function () {
            let error = request.error;
            console.log("An error occurred with IndexedDB: " + JSON.stringify(error?.message));
            resolve('failed');
        };
    });
}
export function addData(db: IDBDatabase, storeName: string, data: itemType[]): void {
    let shopItemsStore = db.transaction(storeName, "readwrite").objectStore(storeName);
    data.forEach((item) => { shopItemsStore.add(item) })
}

export function addSingleItem(item: itemType | recieptType, storeName: string,): Promise<void> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("appDatabase", version);
        let db: IDBDatabase;

        request.onsuccess = function () {
            db = request.result;
            let transaction = db.transaction(storeName, "readwrite");
            let objectStore = transaction.objectStore(storeName);
            const txRequest = objectStore.add(item);
            txRequest.onsuccess = function () {
                console.log(`Item added!`)
                resolve()
            }
            txRequest.onerror = function (error) {
                reject(`Error to get store data: ${txRequest.error}`)
            }
        }

        request.onerror = function () {
            console.log(`Failed to add item}`);
        }
    })

}

export function getData(storeName: string): Promise<any> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('appDatabase', version);
        let db: IDBDatabase;
        let data: itemType[];

        request.onsuccess = function (event: any) {
            db = request.result;
            let transaction = db.transaction(storeName, 'readonly');
            let objectStore = transaction.objectStore(storeName);
            let txRequest = objectStore.getAll();

            txRequest.onsuccess = function () {
                data = txRequest.result;
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
    const request = indexedDB.open("appDatabase", version);
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

export function clearStore(storeName: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("appDatabase", version);
        let db: IDBDatabase;

        request.onsuccess = function () {
            db = request.result;
            let transaction = db.transaction(storeName, "readwrite");
            const objectStore = transaction.objectStore(storeName);
            const txRequest = objectStore.clear();
            txRequest.onsuccess = function () {
                console.log(`Cleared store: ${storeName}`);
                resolve();
            }
            txRequest.onerror = function () {
                reject(`Failed to clear store: ${storeName}`)
            }
        }

        request.onerror = function () {
            reject(`Failed to connect database"`);
        }
    })

}
