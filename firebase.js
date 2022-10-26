

const firebase =  require('firebase')
var config = {
        apiKey: "AIzaSyA9Aif3Hdkvbt1U7iK2iYMdYZMAg7w-D8Q",
        authDomain: "assetmanagementapp-15dec.firebaseapp.com",
        databaseURL: "https://assetmanagementapp-15dec-default-rtdb.firebaseio.com",
        projectId: "assetmanagementapp-15dec",
        storageBucket: "assetmanagementapp-15dec.appspot.com",
        messagingSenderId: "246587992523",
        appId: "1:246587992523:web:50e9e021c1112cdbad2e4e",
        measurementId: "G-BFSB2VWD1X"
       
} 

export default firebase.initializeApp(config);
