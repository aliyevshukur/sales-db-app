import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List';

function App() {

  const [userData, setUserData] = useState<userDataType>({ id: '', name: '', age: 0, email: '' });

  type userDataType = {
    id: string,
    name: string,
    age: number,
    email: string
  }

  const USER_DATA = [
    { id: "1", name: "Bill", age: 35, email: "bill@company.com" },
    { id: "2", name: "Donna", age: 32, email: "donna@home.org" },
  ];



  useEffect(() => {
    const request = indexedDB.open("myDatabase", 1);
    let db: any;

    request.onupgradeneeded = function (event: any) {
      db = request.result;
      let objectStore = db.createObjectStore("myObjectStore", { keyPath: "id" });

      objectStore.createIndex("idIndex", "id", { unique: true });
      objectStore.createIndex("nameIndex", "name", { unique: false });
    };

    request.onsuccess = function () {
      db = request.result;
      addData(USER_DATA);
      getData();
    }
    request.onerror = function (event) {
      console.error("An error occurred with IndexedDB");
      console.error(event);
    };

    function addData(data: userDataType[]): void {
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

      let req = objectStore.get('1');

      req.onsuccess = function (event: any) {
        let data = event.target.result;

        if (data) {
          setUserData(data);
        } else {
          console.log("data not found")
        }
      }

      req.onerror = function (event: any) {
        console.log('error getting user data ' + event.target.errorCode);
      }
    }

  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <List userData={userData} />
      </header>
    </div>
  );
}

export default App;
