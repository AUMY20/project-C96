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

  user_name = localStorage.getItem("user");
  room_name = localStorage.getItem("room");
  msg = document.getElementById("message").value;

  function send()
  {
        msg = document.getElementById("message").value;
        firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0      
        });
        document.getElementById("message").innerHTML = "";
  }