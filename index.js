// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

firebase.initializeApp(firebaseConfig);

firebase.firestore().collection("ToDo").doc("pS2qR6kPi2YQW7ybtYaf").get().then((snapshot) => {
console.log(snapshot.data())

});

firebase.firestore().collection("ToDo").doc("pS2qR6kPi2YQW7ybtYaf").onSnapshot((snapshot) => {
    var ul = document.getElementById("myUL");
    ul.innerHTML = "";
    for(var i =0; i < snapshot.data().Tasks.length;i++){
      var li = document.createElement("li");
      var inputValue = snapshot.data().Tasks[i].Title;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      document.getElementById("myUL").appendChild(li);
  
      var BUTTON = document.createElement("BUTTON");
      var txt = document.createTextNode("\u00D7");
  
      BUTTON.className = "close";
      BUTTON.onclick = close;
      BUTTON.appendChild(txt);
      BUTTON.id = i;
      li.appendChild(BUTTON);
  
    }
  });
  
  function addTodo(){
    var task ={
      Title: document.getElementById("myInput").value,
      description: "",
    }
    firebase.firestore().collection("ToDo").doc("pS2qR6kPi2YQW7ybtYaf").get().then((documentSnapshot) =>{
      var temp = documentSnapshot.data().Tasks;
      temp.push(task);
      firebase.firestore().collection("ToDo").doc("pS2qR6kPi2YQW7ybtYaf").update({Tasks:temp})
    })
  
  }

  function close(){
    console.log(this.id)
  
    firebase.firestore().collection("ToDo").doc("pS2qR6kPi2YQW7ybtYaf").get().then((documentSnapshot) =>{
      var temp = documentSnapshot.data().Tasks;
      temp.splice(this.id,1);
      firebase.firestore().collection("ToDo").doc("pS2qR6kPi2YQW7ybtYaf").update({Tasks:temp})
    })
  
  
  }
  