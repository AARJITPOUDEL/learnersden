//Logout
const logOut = () =>{
firebase.auth().signOut().then(function() {
  console.log('Signed out')
  location.assign('index.html')
}, function(error) {
   console.log('Error')
});
}









// firebase.auth ().onAuthStateChanged(auth, (user) => {
//   if (user) {
//   // User is signed in, see docs for a list of available properties
//   // https://firebase.google.com/docs/reference/js/firebase.User
//   const uid = user.uid;
//   console.log(user.uid)
//   // ...
//   } else {
//   // User is signed out
//   // ...
//   }
//   });




// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password)
  // firebase code
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
         location.assign('signin.html');
    
          console.log("You are signed up");
          window.alert(console.log)
          // ...
      })
      .catch((error) => {
      
document.write(error.message)
        // ..
      });
}
//signin
const signIn = ()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    location.assign("home.html")
   
    // ...
  })
  .catch((error) => {
   document.write(error.code);
   document.write(error.message)
  });
}

