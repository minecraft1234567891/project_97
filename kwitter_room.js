var firebaseConfig = {
      apiKey: "AIzaSyDRdc-tJVxE7fF19h3AYc0O7iUg7IISeNg",
      authDomain: "kwitter1-dc5b9.firebaseapp.com",
      databaseURL: "https://kwitter1-dc5b9-default-rtdb.firebaseio.com",
      projectId: "kwitter1-dc5b9",
      storageBucket: "kwitter1-dc5b9.appspot.com",
      messagingSenderId: "26536081726",
      appId: "1:26536081726:web:d2268202cf5eb9f1b3946f"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name+'!';
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
           //End code
      });});}
getData();
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
}
function redirect(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}