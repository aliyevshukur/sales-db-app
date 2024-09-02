import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './Cart';

function App() {

  const [cartItems, setCartItems] = useState<cartItems>({ id: '', name: '', price: '' });

  type cartItems = {
    id: string,
    name: string,
    price: string
  }

  const CARTITEMS_DATA = [
    { id: "1", name: "Brokoli", price: "12$" },
    { id: "2", name: "Donut", price: "42$" },
  ];



  useEffect(() => {

    const request = indexedDB.open("cartItemsDatabase", 1);
    let db: any;

    request.onupgradeneeded = function (event: any) {
      db = request.result;
      let objectStore = db.createObjectStore("myObjectStore", { keyPath: "id" });

      objectStore.createIndex("idIndex", "id", { unique: true });
      objectStore.createIndex("nameIndex", "name", { unique: false });
    };

    request.onsuccess = function () {
      db = request.result;
      addData(CARTITEMS_DATA);
      getData();
    }

    request.onerror = function (event) {
      console.error("An error occurred with IndexedDB");
      console.error(event);
    };

    function addData(data: cartItems[]): void {
      let transaction = db.transaction("myObjectStore", "readwrite");
      let objectStore = transaction.objectStore("myObjectStore");

      data.forEach((item) => { objectStore.add(item) })

      transaction.oncomplete = function () { console.log('Data added!') }
      transaction.onerror = function (event: any) {
        console.log(`error adding data: ${event}`);
      }
    }

    function getData(): void {
      let transaction = db.transaction('myObjectStore', 'readonly');
      let objectStore = transaction.objectStore('myObjectStore');

      let req = objectStore.getAll();

      req.onsuccess = function (event: any) {
        let data = event.target.result;

        if (data) {
          setCartItems(data);
        } else {
          console.log("data not found")
        }
      }

      req.onerror = function (event: any) {
        console.log('error getting user data ' + event.target.errorCode);
      }
    }

  }, []);

  console.log("cart items" + JSON.stringify(cartItems));

  return (
    <div className="App">
      <header className="App-header">
        {/* <Cart cartItems={cartItems} /> */}
      </header>
    </div>
  );
}

export default App;
