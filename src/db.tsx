import { toast } from "react-toastify";
import Speaker1 from "./Images/speaker-1.png";
import Speaker2 from "./Images/speaker-2.png";
import Speaker3 from "./Images/speaker-3.png";
import Speaker4 from "./Images/speaker-4.png";
import Speaker5 from "./Images/speaker-5.png";
import Speaker6 from "./Images/speaker-6.png";
import Speaker7 from "./Images/speaker-7.png";
import Speaker8 from "./Images/speaker-8.png";
import Speaker9 from "./Images/speaker-9.png";

const SHOPITEMS_DATA = [
  {
    id: "1",
    name: "EchoSlate",
    price: "$299",
    img: Speaker1,
  },
  {
    id: "2",
    name: "SoundNest",
    price: "$199",
    img: Speaker2,
  },
  {
    id: "3",
    name: "PulseWave",
    price: "$249",
    img: Speaker3,
  },
  {
    id: "4",
    name: "SonicForm",
    price: "$279",
    img: Speaker4,
  },
  {
    id: "5",
    name: "AeroSound",
    price: "$329",
    img: Speaker5,
  },
  {
    id: "6",
    name: "VibeCraft",
    price: "$399",
    img: Speaker6,
  },
  {
    id: "7",
    name: "NuWave",
    price: "$249",
    img: Speaker7,
  },
  {
    id: "8",
    name: "ClarityCube",
    price: "$349",
    img: Speaker8,
  },
  {
    id: "0",
    name: "SilhouetteAudio",
    price: "$279",
    img: Speaker9,
  },
];

const version = 1;

export interface itemType {
  id: string;
  name: string;
  price: string;
  img: string;
}

export interface purchaseType {
  id: string;
  name: string;
  price: string;
  date: Date;
}

export interface recieptType {
  purchasedItems: itemType[];
  date: Date;
  totalPrice: number;
}

export type dbStatusType = "failed" | "open" | "pending";

export function initDB(): Promise<string> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("appDatabase", version);
    let db: IDBDatabase;

    request.onupgradeneeded = function (event: any) {
      db = request.result;
      const shopItemsStore = db.createObjectStore("shopItemsStore", {
        keyPath: "id",
        autoIncrement: true,
      });
      const cartItemsStore = db.createObjectStore("cartItemsStore", {
        keyPath: "id",
        autoIncrement: true,
      });
      const recieptsStore = db.createObjectStore("recieptsStore", {
        keyPath: "id",
        autoIncrement: true,
      });
    };

    request.onsuccess = function () {
      db = request.result;
      const transaction = db.transaction("shopItemsStore", "readwrite");
      let shopItemsStore = transaction.objectStore("shopItemsStore");

      SHOPITEMS_DATA.forEach((item) => {
        shopItemsStore.add(item);
      });
      console.log("successfully opened database");
      resolve("open");
    };

    request.onerror = function () {
      let error = request.error;
      console.log(
        "An error occurred with IndexedDB: " + JSON.stringify(error?.message),
      );
      resolve("failed");
    };
  });
}
export function addData(
  db: IDBDatabase,
  storeName: string,
  data: itemType[],
): void {
  let shopItemsStore = db
    .transaction(storeName, "readwrite")
    .objectStore(storeName);
  data.forEach((item) => {
    shopItemsStore.add(item);
  });
}

export function addSingleItem(
  item: itemType | recieptType,
  storeName: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("appDatabase", version);
    let db: IDBDatabase;

    request.onsuccess = function () {
      db = request.result;
      let transaction = db.transaction(storeName, "readwrite");
      let objectStore = transaction.objectStore(storeName);
      const txRequest = objectStore.add(item);
      txRequest.onsuccess = function () {
        console.log(`Item added!`);
        resolve();
      };
      txRequest.onerror = function (error) {
        reject(`Error to get store data: ${txRequest.error}`);
      };
    };

    request.onerror = function () {
      console.log(`Failed to add item}`);
    };
  });
}

export function getData(storeName: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("appDatabase", version);
    let db: IDBDatabase;
    let data: itemType[];

    request.onsuccess = function (event: any) {
      db = request.result;
      let transaction = db.transaction(storeName, "readonly");
      let objectStore = transaction.objectStore(storeName);
      let txRequest = objectStore.getAll();

      txRequest.onsuccess = function () {
        data = txRequest.result;
        resolve(data);
      };

      txRequest.onerror = function (error) {
        reject(`Error to get store data: ${error}`);
      };
    };

    request.onerror = function (event: any) {
      reject(`Failed to get data`);
    };
  });
}

export function getSingleProduct(
  storeName: string,
  productId: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("appDatabase", version);
    let db: IDBDatabase;
    let data: itemType[];

    request.onsuccess = function () {
      db = request.result;
      let transaction = db.transaction(storeName, "readonly");
      let objectStore = transaction.objectStore(storeName);
      let txRequest = objectStore.get(productId);

      txRequest.onsuccess = function () {
        data = txRequest.result;
        resolve(data);
      };

      txRequest.onerror = function (error) {
        reject(`Error to get product ${error}`);
      };
    };

    request.onerror = function () {
      reject("Failed to get store data");
    };
  });
}

export function deleteStore(storeName: string): void {
  const request = indexedDB.open("appDatabase", version);
  let db: IDBDatabase;

  request.onupgradeneeded = function () {
    db = request.result;
  };

  request.onsuccess = function () {
    db = request.result;
    db.deleteObjectStore(storeName);
    console.log(`Deleted store: ${storeName}`);
  };

  request.onerror = function () {
    console.log(`Failed to delete store: ${storeName}`);
  };
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
      };
      txRequest.onerror = function () {
        reject(`Failed to clear store: ${storeName}`);
      };
    };

    request.onerror = function () {
      reject(`Failed to connect database"`);
    };
  });
}

export function checkoutItems(cartItems: itemType[], totalPrice: number) {
  if (cartItems.length === 0) return "Cart is empty";

  const date = Date.now();
  const reciept = {
    purchasedItems: cartItems,
    date: new Date(date),
    totalPrice: totalPrice,
  };
  addSingleItem(reciept, "recieptsStore");
  clearStore("cartItemsStore").catch(() => {
    return "Failed to clear cart";
  });
  return null;
}

export function handleOnPurchase(product: itemType, setCartItems: any) {
  addSingleItem(product, "cartItemsStore")
    .then(() => {
      updateDB("cartItemsStore", setCartItems);
      toast.success(`Added ${product.name} to cart`, { icon: false });
    })
    .catch((error) => {
      if (error.includes("Key already exists")) {
        toast.info(`${product.name} is already in the cart`, {
          toastId: error,
          icon: false,
        });
        return;
      }

      console.error(error);
      toast.error(`Failed to add ${product.name} to cart`, { icon: false });
    });
}

export function updateDB(
  storeName: string,
  setState: React.Dispatch<React.SetStateAction<itemType[]>>,
) {
  getData(storeName)
    .then((data) => {
      setState(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
