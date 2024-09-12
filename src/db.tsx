import React from 'react'

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
    {
        id: 10,
        name: "Wine - Guy Sage Touraine",
        price: "$7.24"
    },
    {
        id: 11,
        name: "Lime Cordial - Roses",
        price: "$8.16"
    },
    {
        id: 12,
        name: "Eggs - Extra Large",
        price: "$2.59"
    },
    {
        id: 13,
        name: "Cookies - Assorted",
        price: "$2.71"
    },
    {
        id: 14,
        name: "Beef - Salted",
        price: "$5.45"
    },
    {
        id: 15,
        name: "Lobster - Live",
        price: "$7.20"
    },
    {
        id: 16,
        name: "Coffee - Dark Roast",
        price: "$1.28"
    },
    {
        id: 17,
        name: "Mortadella",
        price: "$7.77"
    },
    {
        id: 18,
        name: "Crab - Soft Shell",
        price: "$5.87"
    },
    {
        id: 19,
        name: "Chicken - Thigh, Bone In",
        price: "$7.06"
    },
    {
        id: 20,
        name: "Sauce - Sesame Thai Dressing",
        price: "$7.30"
    },
    {
        id: 21,
        name: "Cocktail Napkin Blue",
        price: "$9.43"
    },
    {
        id: 22,
        name: "Grapes - Green",
        price: "$9.20"
    },
    {
        id: 23,
        name: "Juice - Apple 284ml",
        price: "$9.97"
    },
    {
        id: 24,
        name: "Lentils - Green Le Puy",
        price: "$5.06"
    },
    {
        id: 25,
        name: "Canada Dry",
        price: "$1.24"
    },
    {
        id: 26,
        name: "Yukon Jack",
        price: "$6.23"
    },
    {
        id: 27,
        name: "Yeast Dry - Fermipan",
        price: "$1.06"
    },
    {
        id: 28,
        name: "Trout - Hot Smkd, Dbl Fillet",
        price: "$7.81"
    },
    {
        id: 29,
        name: "Tart - Pecan Butter Squares",
        price: "$6.42"
    },
    {
        id: 30,
        name: "Soup - Campbells, Cream Of",
        price: "$8.61"
    },
    {
        id: 31,
        name: "Pomegranates",
        price: "$1.72"
    },
    {
        id: 32,
        name: "Appetizer - Sausage Rolls",
        price: "$8.51"
    },
    {
        id: 33,
        name: "Napkin - Beverage 1 Ply",
        price: "$9.37"
    },
    {
        id: 34,
        name: "Crab - Dungeness, Whole, live",
        price: "$7.38"
    },
    {
        id: 35,
        name: "Nectarines",
        price: "$4.68"
    },
    {
        id: 36,
        name: "Crab - Blue, Frozen",
        price: "$3.96"
    },
    {
        id: 37,
        name: "Beef - Tender Tips",
        price: "$7.81"
    },
    {
        id: 38,
        name: "Ecolab - Ster Bac",
        price: "$3.15"
    },
    {
        id: 39,
        name: "Oil - Margarine",
        price: "$2.64"
    },
    {
        id: 40,
        name: "Container - Foam Dixie 12 Oz",
        price: "$4.35"
    },
    {
        id: 41,
        name: "Clams - Littleneck, Whole",
        price: "$4.28"
    },
    {
        id: 42,
        name: "Table Cloth 62x114 Colour",
        price: "$6.85"
    },
    {
        id: 43,
        name: "Mushroom - Oyster, Fresh",
        price: "$8.38"
    },
    {
        id: 44,
        name: "Glove - Cutting",
        price: "$2.81"
    },
    {
        id: 45,
        name: "Lemonade - Pineapple Passion",
        price: "$2.24"
    },
    {
        id: 46,
        name: "Cake - Cheese Cake 9 Inch",
        price: "$7.27"
    },
    {
        id: 47,
        name: "Wine - Maipo Valle Cabernet",
        price: "$8.07"
    },
    {
        id: 48,
        name: "Waffle Stix",
        price: "$5.36"
    },
    {
        id: 49,
        name: "Cookie - Oatmeal",
        price: "$6.64"
    },
    {
        id: 50,
        name: "Glaze - Apricot",
        price: "$8.46"
    }
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
