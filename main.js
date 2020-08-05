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


  // reservation room 1
  document.getElementById('formroom1').addEventListener('submit', (e) => {
      e.preventDefault();
      var name = document.getElementById('room1Name');
      var lastname = document.getElementById('room1LastName');
      var email = document.getElementById('room1Email');
      var day = document.getElementById('room1day');
      var price = document.getElementById('room1Price');
      document.getElementById('btnroom1').style.visibility = 'hidden';

      firebase.firestore().collection('clients').add({
          name: name.value,
          lastname: lastname.value,
          email: email.value
      })
      .then((key) => {
          firebase.firestore().collection('clients').doc(key.id).update({id: key.id})
          .then(() => {
              firebase.firestore().collection('room1').add({
                day: day.value,
                price: price.value,
                idclient: key.id
              })
              .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: `Reservation ID: ${res.id}`
                })
                  name.value = '';
                  lastname.value = '';
                  email.value = '';
                  day.value = '';
                  document.getElementById('btnroom1').style.visibility = 'visible';
                  $('#ModalRoom1').modal('hide')
              })
          })
      })
  })

    // reservation room 2
    document.getElementById('formroom2').addEventListener('submit', (e) => {
        e.preventDefault();
        var name = document.getElementById('room2Name');
        var lastname = document.getElementById('room2LastName');
        var email = document.getElementById('room2Email');
        var day = document.getElementById('room2day');
        var price = document.getElementById('room2Price');
        document.getElementById('btnroom2').style.visibility = 'hidden';
  
        firebase.firestore().collection('clients').add({
            name: name.value,
            lastname: lastname.value,
            email: email.value
        })
        .then((key) => {
            firebase.firestore().collection('clients').doc(key.id).update({id: key.id})
            .then(() => {
                firebase.firestore().collection('room2').add({
                  day: day.value,
                  price: price.value,
                  idclient: key.id
                })
                .then((res) => {
                    Swal.fire({
                        icon: 'success',
                        title: `Reservation ID: ${res.id}`
                    })
                    name.value = '';
                    lastname.value = '';
                    email.value = '';
                    day.value = '';
                    document.getElementById('btnroom2').style.visibility = 'visible';
                    $('#ModalRoom2').modal('hide')
                })
            })
        })
    })

     // reservation room 3
     document.getElementById('formroom3').addEventListener('submit', (e) => {
        e.preventDefault();
        var name = document.getElementById('room3Name');
        var lastname = document.getElementById('room3LastName');
        var email = document.getElementById('room3Email');
        var day = document.getElementById('room3day');
        var price = document.getElementById('room3Price');
        document.getElementById('btnroom3').style.visibility = 'hidden';
  
        firebase.firestore().collection('clients').add({
            name: name.value,
            lastname: lastname.value,
            email: email.value
        })
        .then((key) => {
            firebase.firestore().collection('clients').doc(key.id).update({id: key.id})
            .then(() => {
                firebase.firestore().collection('room3').add({
                  day: day.value,
                  price: price.value,
                  idclient: key.id
                })
                .then((res) => {
                    Swal.fire({
                        icon: 'success',
                        title: `Reservation ID: ${res.id}`
                    })
                    name.value = '';
                    lastname.value = '';
                    email.value = '';
                    day.value = '';
                    document.getElementById('btnroom3').style.visibility = 'visible';
                    $('#ModalRoom3').modal('hide')
                })
            })
        })
    })

    // reservation room 4
    document.getElementById('formroom4').addEventListener('submit', (e) => {
        e.preventDefault();
        var name = document.getElementById('room4Name');
        var lastname = document.getElementById('room4LastName');
        var email = document.getElementById('room4Email');
        var day = document.getElementById('room4day');
        var price = document.getElementById('room4Price');
        document.getElementById('btnroom4').style.visibility = 'hidden';
  
        firebase.firestore().collection('clients').add({
            name: name.value,
            lastname: lastname.value,
            email: email.value
        })
        .then((key) => {
            firebase.firestore().collection('clients').doc(key.id).update({id: key.id})
            .then(() => {
                firebase.firestore().collection('room4').add({
                  day: day.value,
                  price: price.value,
                  idclient: key.id
                })
                .then((res) => {
                    Swal.fire({
                        icon: 'success',
                        title: `Reservation ID: ${res.id}`
                    })
                    name.value = '';
                    lastname.value = '';
                    email.value = '';
                    day.value = '';
                    document.getElementById('btnroom4').style.visibility = 'visible';
                    $('#ModalRoom4').modal('hide')
                })
            })
        })
    })

    //ADMIN LOGIN

    document.getElementById('formadmin').addEventListener('submit', (e) => {
        e.preventDefault();
        var user = document.getElementById('adminuser');
        var pass = document.getElementById('adminpass');
        if(user.value == "admin" && pass.value == 'admin123') {
            window.location.href = 'admin.html'
        }
    })

    // CONTACT 
    document.getElementById('formcontact').addEventListener('submit', (e) => {
        e.preventDefault();
        var user = document.getElementById('contactName');
        var msg = document.getElementById('contactMessage');
        firebase.firestore().collection('contact').add({
            name: user.value,
            msg: msg.value
        })
        .then(function(docRef) {
            Swal.fire({
                icon: 'success',
                title: `Message Sent`
            })
            $(function () {
                $('#ModalContact').modal('toggle')
            });
            user.value = '';
            msg.value = '';
        })
        .catch(function(error) {
            console.error("Error :", error)
        })
    })

    // CHECK RESERVE
    document.getElementById('formcheck').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('checkr').innerHTML = '';
        var id = document.getElementById('checkid');
        var roomc = document.getElementById('roomcheck');
        firebase.firestore().collection(`room${roomc.value}`).doc(id.value).get()
        .then(function(doc) {
            if(doc.exists) {
                firebase.firestore().collection('clients').doc(doc.data().idclient).get()
                .then((doc2) => {
                    console.log('Document Data: ', doc.data());
                    document.getElementById('checkr').innerHTML+=`
                        <hr>
                        <h6>Reservation ID: ${doc.id}</h6>
                        <h6>Name: ${doc2.data().name}</h6>
                        <h6>Last Name: ${doc2.data().lastname}</h6>
                        <h6>E-mail: ${doc2.data().email}</h6>
                        <h6>Reservation Day: ${doc.data().day}</h6>
                        <h6>Price: ${doc.data().price}</h6>
                    `;
                })
            } else {
                console.log('Error')
            }
        }).catch(function(error) {
            console.log('Error: ', error)
        })
    })

    // CANCEL RESERVE
    document.getElementById('formcancel').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('cancelr').innerHTML = '';
        var id = document.getElementById('cancelid');
        var room = document.getElementById('roomcancel');
        console.log(id,room)
        firebase.firestore().collection(`room${room.value}`).doc(id.value).delete()
        .then(function() {
            Swal.fire({
                icon: 'success',
                title: `Reservation Cancelled`
            })
            id.value = "";
            room.value = "";
        }).catch((error) => {
            console.log('Error: ', error);
        })
    })



