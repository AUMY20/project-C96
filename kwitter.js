user_name = localStorage.getItem("user");
document.getElementById("user_name").innerHTML = user_name;
function logout()
{
    window.location = "index.html";
}

chatroom = document.getElementById("name_of_chatrooom");
localStorage.setItem("chatroom",chatroom);

const firebaseConfig = {
    apiKey: "AIzaSyBrclBTNmjJc0o-ZRY2KPU0wihQ3JpcC1M",
    authDomain: "kwitter-project-d5a5d.firebaseapp.com",
    databaseURL: "https://kwitter-project-d5a5d-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-d5a5d",
    storageBucket: "kwitter-project-d5a5d.appspot.com",
    messagingSenderId: "479373779288",
    appId: "1:479373779288:web:8671c89a4688edeaab052d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    function join()
    {
      room_name = document.getElementById("name_of_chatroom").value ;
          firebase.database().ref("/").child(room_name).update({purpose:"addind room_name"});
          localStorage.setItem("room name",room_name);
          window.location = "kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class ='room_name' id="+Room_names+" onclick='redirectroom(this.id)'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectroom(room)
{
localStorage.setItem("room",room);
window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user");
  localStorage.removeItem("room name");
  window.location = "index.html";
}