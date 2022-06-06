//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDoq1MqVgWLCQjyQuyfU7NAux1XBwYnD_o",
    authDomain: "kwitter-55abf.firebaseapp.com",
    databaseURL: "https://kwitter-55abf-default-rtdb.firebaseio.com",
    projectId: "kwitter-55abf",
    storageBucket: "kwitter-55abf.appspot.com",
    messagingSenderId: "159060692023",
    appId: "1:159060692023:web:dc7858d7bc5f4097c903b2"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
