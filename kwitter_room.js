var firebaseConfig = {
      apiKey: "AIzaSyBRqkTbqQQJOxW1YfXaHJLtvi5PrXZBee8",
      authDomain: "kwitter-website-ce368.firebaseapp.com",
      databaseURL: "https://kwitter-website-ce368-default-rtdb.firebaseio.com",
      projectId: "kwitter-website-ce368",
      storageBucket: "kwitter-website-ce368.appspot.com",
      messagingSenderId: "52066710190",
      appId: "1:52066710190:web:e401a1137d0f3a48c2733f",
      measurementId: "G-PKPPJ2KWW7"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
