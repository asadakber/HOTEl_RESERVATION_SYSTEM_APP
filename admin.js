 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBpTFak7FMVnuFy5WfSPTn7rZEyUzwwkd0",
    authDomain: "hotal-app.firebaseapp.com",
    databaseURL: "https://hotal-app.firebaseio.com",
    projectId: "hotal-app",
    storageBucket: "hotal-app.appspot.com",
    messagingSenderId: "199471355133",
    appId: "1:199471355133:web:1834f86a3462357e525a94"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().collection("contact").onSnapshot((querySnapshot) => {
      document.getElementById('contactm').innerHTML = "";
      querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          document.getElementById('contactm').innerHTML+=`
            <tr>
                <td>${doc.data().name}</td>
                <td>${doc.data().msg}</td>
            </tr>
          `;
      })
  })

  // Fetch Resercation room 1

  firebase.firestore().collection("room1").onSnapshot((querySnapshot) => {
    document.getElementById('room1').innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        document.getElementById('room1').innerHTML+=`
          <tr>
              <td>${doc.id}</td>
              <td>${doc.data().idclient}</td>
              <td>${doc.data().day}</td>
              <td>${doc.data().price}.00</td>
              <td>
                <button class="btn btn-danger" onclick="deletec1(1,'${doc.id}')">Delete</button>
              </td>
          </tr>
        `;
    })
})

 // Fetch Resercation room 2

 firebase.firestore().collection("room2").onSnapshot((querySnapshot) => {
    document.getElementById('room2').innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        document.getElementById('room2').innerHTML+=`
          <tr>
              <td>${doc.id}</td>
              <td>${doc.data().idclient}</td>
              <td>${doc.data().day}</td>
              <td>${doc.data().price}.00</td>
              <td>
                <button class="btn btn-danger" onclick="deletec1(2,'${doc.id}')">Delete</button>
              </td>
          </tr>
        `;
    })
})

// Fetch Resercation room 3

firebase.firestore().collection("room3").onSnapshot((querySnapshot) => {
    document.getElementById('room3').innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        document.getElementById('room3').innerHTML+=`
          <tr>
              <td>${doc.id}</td>
              <td>${doc.data().idclient}</td>
              <td>${doc.data().day}</td>
              <td>${doc.data().price}.00</td>
              <td>
                <button class="btn btn-danger" onclick="deletec1(3,'${doc.id}')">Delete</button>
              </td>
          </tr>
        `;
    })
})

// Fetch Resercation room 4

firebase.firestore().collection("room4").onSnapshot((querySnapshot) => {
    document.getElementById('room4').innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        document.getElementById('room4').innerHTML+=`
          <tr>
              <td>${doc.id}</td>
              <td>${doc.data().idclient}</td>
              <td>${doc.data().day}</td>
              <td>${doc.data().price}.00</td>
              <td>
                <button class="btn btn-danger" onclick="deletec1(4,'${doc.id}')">Delete</button>
              </td>
          </tr>
        `;
    })
})

function deletec1(room,id) {
    console.log(room,id)
    firebase.firestore().collection(`room${room}`).doc(id).delete().then(function() {
        Swal.fire({
            icon: 'success',
            title: `Reservation Delete`
        })
    }).catch((error) => {
        console.log('Error: ', error) 
    })
}

firebase.firestore().collection("clients").onSnapshot((querySnapshot) => {
    document.getElementById('clients').innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        document.getElementById('clients').innerHTML+=`
          <tr>
              <td>${doc.id}</td>
              <td>${doc.data().name}</td>
              <td>${doc.data().lastname}</td>
              <td>${doc.data().email}.00</td>
          </tr>
        `;
    })
})