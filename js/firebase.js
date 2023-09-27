let firebaseConfig = {
    // Enter your firebase credentials
  apiKey: "AIzaSyDUZJs3y75aAQvtItBey04oGH2zPMSOxbk",
  authDomain: "blog-8be7d.firebaseapp.com",
  projectId: "blog-8be7d",
  storageBucket: "blog-8be7d.appspot.com",
  messagingSenderId: "680658060421",
  appId: "1:680658060421:web:4074ab13aed4a4c8f1d5ec"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
   auth.signOut();
   location.reload();
}

