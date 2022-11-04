const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyBfTrAMGIcKNdSCZfFd7uL81mSgejQQw9k",
    authDomain: "login-ld.firebaseapp.com",
    projectId: "login-ld",
    storageBucket: "login-ld.appspot.com",
    messagingSenderId: "348874871955",
    appId: "1:348874871955:web:55b91e99ed5df5ae956966"
  
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();



auth. onAuthStateChanged( (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;

    // ...
    } else {
        if (   !( document.URL.includes("index.html") || document.URL.includes("signIn.html") ) ) {

            location.assign('index.html')

            }
//             if 
//                 (document.URL.indexOf("signIn") > -1) {
// console.log('signin page')
//                 }
            
    }
    });
  